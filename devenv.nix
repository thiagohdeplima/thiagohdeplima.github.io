{ pkgs, lib, config, ... }:

{
  packages = with pkgs; [ hugo ];

  languages.go = {
    enable = true;
  };
}