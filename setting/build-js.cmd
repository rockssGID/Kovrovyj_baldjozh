@echo off
set INPUT=%~1
set OUTPUT=%~2

:: Создать папку если не существует
if not exist "..\..\build\min\js" mkdir "..\..\build\min\js"

:: Скопировать JS-файл в папку min
copy /Y "%OUTPUT%" "..\..\build\min\js\app.min.js"

:: Минимизировать JS с помощью terser
terser "..\..\build\min\js\app.min.js" -c -m -o "..\..\build\min\js\app.min.js"

echo ✓ JS copied and minified to min/js/app.min.js
