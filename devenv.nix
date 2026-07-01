{ pkgs, lib, config, ... }:

{
  packages = with pkgs; [ git hugo ];

  languages.go = {
    enable = true;
  };
}
