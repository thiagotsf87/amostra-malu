@echo off
chcp 65001 >nul
powershell -ExecutionPolicy Bypass -File "%~dp0GERAR-QRCODE-FEIRA.ps1"
pause

