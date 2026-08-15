@echo off
title AltilloJVG - Actualizador de Aulas
echo ==============================================================
echo   AltilloJVG: Actualizando aulas y cursadas desde la web oficial
echo ==============================================================
echo.
python "%~dp0scripts\auto_update_aulas.py"
echo.
echo ==============================================================
echo   Proceso finalizado. Presiona cualquier tecla para salir.
echo ==============================================================
pause >nul
