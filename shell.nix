{pkgs ? import <nixpkgs> {}}: let
  packages = with pkgs; [
    nodejs_24
  ];
in
  with pkgs;
    mkShell {
      name = "angular-basics-practice";
      buildInputs = packages;

      DIRENV_LOG_FORMAT = "";
    }
