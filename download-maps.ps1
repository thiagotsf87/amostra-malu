# Script para baixar mapas SVG reais do Brasil e EUA
Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Download de Mapas SVG Realistas                      ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Mudar para o diretório do script
Set-Location $PSScriptRoot

# Criar pasta assets se não existir
if (-not (Test-Path "assets")) {
    New-Item -ItemType Directory -Path "assets" | Out-Null
}

Write-Host "[1/2] Baixando mapa do Brasil..." -ForegroundColor Yellow

try {
    # URL do mapa do Brasil (Wikimedia Commons)
    $brazilUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Brazil_Political_Map.svg"
    $brazilOutput = "assets\brazil-downloaded.svg"
    
    Invoke-WebRequest -Uri $brazilUrl -OutFile $brazilOutput -UseBasicParsing
    Write-Host "✓ Mapa do Brasil baixado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "✗ Erro ao baixar mapa do Brasil" -ForegroundColor Red
    Write-Host "Baixe manualmente de: https://commons.wikimedia.org/wiki/File:Brazil_Political_Map.svg" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "[2/2] Baixando mapa dos EUA..." -ForegroundColor Yellow

try {
    # URL do mapa dos EUA (Wikimedia Commons)
    $usaUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Blank_US_Map_%28states_only%29.svg"
    $usaOutput = "assets\usa-downloaded.svg"
    
    Invoke-WebRequest -Uri $usaUrl -OutFile $usaOutput -UseBasicParsing
    Write-Host "✓ Mapa dos EUA baixado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "✗ Erro ao baixar mapa dos EUA" -ForegroundColor Red
    Write-Host "Baixe manualmente de: https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  Downloads concluídos!                                 ║" -ForegroundColor Green
Write-Host "║                                                        ║" -ForegroundColor Green
Write-Host "║  Próximo passo:                                        ║" -ForegroundColor Green
Write-Host "║  Execute: .\process-maps.ps1                           ║" -ForegroundColor Green
Write-Host "║                                                        ║" -ForegroundColor Green
Write-Host "║  Para adicionar IDs e cores aos estados               ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Green

Read-Host "`nPressione Enter para sair"

