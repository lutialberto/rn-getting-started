@echo off
REM Copiar archivos de entorno desde la ruta base pasada como primer argumento
copy ..\.env .\
copy ..\.env.test .\
copy ..\.env.production .\
