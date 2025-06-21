@echo off
REM Borrar carpetas si existen
rmdir /s /q assets\fonts
rmdir /s /q app
rmdir /s /q components
rmdir /s /q constants

REM Crear carpetas necesarias
mkdir hooks
mkdir components
mkdir .vscode

REM Copiar carpetas y archivos desde el proyecto base
xcopy /E /I /Y "%~dp0..\\app" app
xcopy /E /I /Y "%~dp0..\\.vscode\settings.json" .vscode\
xcopy /E /I /Y "%~dp0..\\assets\fonts" assets\fonts
xcopy /E /I /Y "%~dp0..\\hooks\theme" hooks\theme

REM Copiar todas las subcarpetas de components desde el proyecto base
call "%~dp0copy-component.bat" --all