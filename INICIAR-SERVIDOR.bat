@echo off
chcp 65001 >nul
echo ╔════════════════════════════════════════════════════════╗
echo ║   Sistema de Amostras Científicas                      ║
echo ║   Iniciando servidor local...                          ║
echo ╚════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo [1/3] Verificando Python...
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ Python encontrado!
    echo.
    echo [2/3] Iniciando servidor HTTP na porta 8000...
    echo.
    echo ╔════════════════════════════════════════════════════════╗
    echo ║  SERVIDOR ATIVO!                                       ║
    echo ║                                                        ║
    echo ║  Abra seu navegador em:                                ║
    echo ║  ► http://localhost:8000                               ║
    echo ║                                                        ║
    echo ║  Pressione Ctrl+C para parar o servidor               ║
    echo ╚════════════════════════════════════════════════════════╝
    echo.
    python -m http.server 8000
) else (
    echo ✗ Python não encontrado!
    echo.
    echo Por favor, instale Python ou use uma das outras opções:
    echo.
    echo 1. Visual Studio Code com extensão Live Server
    echo 2. Node.js: npm install -g http-server
    echo 3. Leia o arquivo COMO-TESTAR.md para mais opções
    echo.
    pause
)

