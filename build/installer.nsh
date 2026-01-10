!macro customUnInstall
  SetOutPath "$TEMP"
  RMDir /r /REBOOTOK "$INSTDIR"
!macroend
