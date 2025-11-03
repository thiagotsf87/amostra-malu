# Script PowerShell para iniciar o servidor
Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Sistema de Amostras Científicas                      ║" -ForegroundColor Cyan
Write-Host "║   Iniciando servidor local...                          ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Mudar para o diretório do script
Set-Location $PSScriptRoot

Write-Host "[1/3] Verificando Python..." -ForegroundColor Yellow

try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python encontrado: $pythonVersion" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "[2/3] Iniciando servidor HTTP na porta 8000..." -ForegroundColor Yellow
    Write-Host ""
    
    Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║  SERVIDOR ATIVO!                                       ║" -ForegroundColor Green
    Write-Host "║                                                        ║" -ForegroundColor Green
    Write-Host "║  Abra seu navegador em:                                ║" -ForegroundColor Green
    Write-Host "║  ► http://localhost:8000                               ║" -ForegroundColor White -BackgroundColor DarkGreen
    Write-Host "║                                                        ║" -ForegroundColor Green
    Write-Host "║  Pressione Ctrl+C para parar o servidor               ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    
    # Iniciar o servidor
    python -m http.server 8000
    
} catch {
    Write-Host "✗ Python não encontrado!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor, instale Python ou use uma das outras opções:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Visual Studio Code com extensão Live Server" -ForegroundColor White
    Write-Host "2. Node.js: npm install -g http-server" -ForegroundColor White
    Write-Host "3. Leia o arquivo COMO-TESTAR.md para mais opções" -ForegroundColor White
    Write-Host ""
    
    Read-Host "Pressione Enter para sair"
}

