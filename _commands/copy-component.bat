@echo off
REM Uso: copy-component.bat [--all | <nombre-carpeta>"

REM Lista de carpetas elegibles
set eligible=buttons containers forms texts toast accordion carrousel error modals spinner tabs
set containers=accordion carrousel error modals spinner tabs

REM Validar que se pase el nombre de la carpeta o --all como argumento
IF "%1"=="" (
  echo Debes indicar el nombre de la carpeta de componente a copiar o usar --all como argumento.
  echo.
  echo Carpetas elegibles:
  for %%c in (%eligible%) do (
    echo   - %%c
  )
  echo.
  echo Ejemplo: copy-component.bat buttons
  echo Ejemplo: copy-component.bat --all
  exit /b 1
)

REM Guardar argumento en variable
set arg=%1

REM Si el argumento es --all, copiar todas las carpetas elegibles
IF "%arg%"=="--all" (
  setlocal EnableDelayedExpansion
  for %%c in (%eligible%) do (
    set folder=components
    for %%d in (%containers%) do (
      if /I "%%c"=="%%d" set folder=components\containers
    )
    xcopy /E /I /Y "%~dp0..\!folder!\%%c" components\%%c
    echo Carpeta '%%c' copiada a components\%%c
  )
  endlocal
  exit /b 0
)

REM Validar que la carpeta indicada sea elegible
set found=0
for %%c in (%eligible%) do (
  if /I "%arg%"=="%%c" set found=1
)
if "%found%"=="0" (
  echo Carpeta '%arg%' no es elegible. Usa uno de los siguientes nombres:
  for %%c in (%eligible%) do (
    echo   - %%c
  )
  exit /b 1
)

REM Determinar si la carpeta está dentro de containers
set folder=components
for %%d in (%containers%) do (
  if /I "%arg%"=="%%d" set folder=components\containers
)

REM Copiar la carpeta indicada
xcopy /E /I /Y "%~dp0..\%folder%\%arg%" components\%arg%
echo Carpeta '%arg%' copiada a components\%arg%