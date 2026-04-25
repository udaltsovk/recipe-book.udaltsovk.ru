{pkgs ? import <nixpkgs> {}}: let
  packages = with pkgs; [
    nodejs_24
  ];

  nativePackages = with pkgs; [
    playwright-driver.browsers
  ];
in
  with pkgs;
    mkShell {
      name = "recipe-book.udaltsovk.ru";
      buildInputs = packages;
      nativeBuildInputs = nativePackages;

      DIRENV_LOG_FORMAT = "";

      shellHook = ''
        export PLAYWRIGHT_BROWSERS_PATH=${pkgs.playwright-driver.browsers}
        export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true
        export PLAYWRIGHT_HOST_PLATFORM_OVERRIDE="ubuntu-24.04"
      '';
    }
