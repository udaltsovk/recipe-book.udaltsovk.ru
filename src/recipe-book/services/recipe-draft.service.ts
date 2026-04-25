import { APP_ID, inject, Injectable } from "@angular/core";
import { RecipeFormModel } from "../pages/recipe-form/recipe-form.model";
import { Recipe } from "../models/recipe";
import { STORAGE_TOKEN } from "../tokens/storage.token";

export type RecipeDraft = {
  id: string | "new";
  model: RecipeFormModel;
  timestamp: number;
};

@Injectable({ providedIn: "root" })
export class RecipeDraftService {
  private readonly storage = inject(STORAGE_TOKEN);
  private readonly APP_ID = inject(APP_ID);
  private readonly DRAFT_KEY = `${this.APP_ID}::draft`;

  saveDraft(id: Recipe["id"] | "new", model: RecipeFormModel): void {
    const draft: RecipeDraft = {
      id,
      model,
      timestamp: Date.now(),
    };
    this.storage.setItem(this.DRAFT_KEY, JSON.stringify(draft));
  }

  getDraft(id: string | "new"): RecipeDraft | null {
    const saved = this.storage.getItem(this.DRAFT_KEY);
    if (!saved) {
      return null;
    }

    try {
      const draft: RecipeDraft = JSON.parse(saved);
      return draft.id === id ? draft : null;
    } catch {
      this.clearDraft();
      return null;
    }
  }

  clearDraft(): void {
    this.storage.removeItem(this.DRAFT_KEY);
  }
}
