@echo off
set INPUT=%~1
set OUTPUT=%~2

:: Создать папку если не существует
if not exist "..\..\build\min" mkdir "..\..\build\min"


:: Скопировать HTML-файл из OUTPUT в min
copy /Y "%OUTPUT%" "..\..\build\min\index.html"

:: 🔧 Заменить маркеры и в основном файле (build/full)
powershell -Command "(Get-Content -Path '%OUTPUT%' -Raw) -replace '@style', 'style.css' -replace '@app', 'app.js' | Set-Content -Path '%OUTPUT%'"

:: Заменить маркеры в HTML (build/min)
powershell -Command "(Get-Content -Path '..\..\build\min\index.html' -Raw) -replace '@style', 'style.min.css' -replace '@app', 'app.min.js' | Set-Content -Path '..\..\build\min\index.html'"

:: Минимизировать
html-minifier-terser "..\..\build\min\index.html" --collapse-whitespace --remove-comments --minify-js true --minify-css true --output "..\..\build\min\index.html"


echo ✓ HTML compiled and minified from %OUTPUT%
