@echo off
set INPUT=%~1
set OUTPUT=%~2

:: Создать папку если не существует
if not exist "..\..\min\css" mkdir "..\..\min\css"

:: Скопировать CSS-файл из OUTPUT в min
copy /Y "%OUTPUT%" "..\..\min\css\style.min.css"

:: Минимизировать с помощью clean-css-cli
cleancss -o "..\..\min\css\style.min.css" "..\..\min\css\style.min.css"

echo ✓ SASS compiled and minified to build/min/css/style.min.css
