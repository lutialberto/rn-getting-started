@echo off
REM Copiar archivos de entorno desde la ruta base pasada como primer argumento
copy ..\.env .\
copy ..\.env.test .\
copy ..\.env.production .\

REM Crear archivo .env.local si no existe
if not exist .env.local type nul > .env.local

REM Agregar reglas para archivos de entorno locales al .gitignore si no existen
findstr /C:"# local env files" .gitignore >nul 2>&1 || echo # local env files>>.gitignore
findstr /C:".env*.local" .gitignore >nul 2>&1 || echo .env*.local>>.gitignore