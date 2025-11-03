# ============================================
# GERADOR DE QR CODE PARA FEIRA DE CIENCIAS
# ============================================

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   QR CODE - FEIRA DE CIENCIAS" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# URL do projeto no GitHub Pages
$url = "https://thiagotsf87.github.io/amostra-malu/"

Write-Host "URL da Aplicacao:" -ForegroundColor Yellow
Write-Host $url -ForegroundColor White
Write-Host ""

# Gera URLs para QR Code em diferentes tamanhos
$qr_pequeno = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=$url"
$qr_medio = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=$url"
$qr_grande = "https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=$url"

Write-Host "QR Codes Disponiveis:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Pequeno (300x300) - Para teste" -ForegroundColor White
Write-Host "2. Medio (500x500) - Para impressao normal" -ForegroundColor White
Write-Host "3. Grande (1000x1000) - Para banner/cartaz" -ForegroundColor White
Write-Host ""

$opcao = Read-Host "Escolha o tamanho (1, 2 ou 3)"

switch ($opcao) {
    "1" { 
        Write-Host "Abrindo QR Code PEQUENO..." -ForegroundColor Green
        Start-Process $qr_pequeno
    }
    "2" { 
        Write-Host "Abrindo QR Code MEDIO..." -ForegroundColor Green
        Start-Process $qr_medio
    }
    "3" { 
        Write-Host "Abrindo QR Code GRANDE..." -ForegroundColor Green
        Start-Process $qr_grande
    }
    default { 
        Write-Host "Abrindo QR Code MEDIO (padrao)..." -ForegroundColor Green
        Start-Process $qr_medio
    }
}

Write-Host ""
Write-Host "INSTRUCOES:" -ForegroundColor Yellow
Write-Host "1. Clique com botao direito na imagem" -ForegroundColor White
Write-Host "2. Escolha 'Salvar imagem como...'" -ForegroundColor White
Write-Host "3. Salve em alta qualidade" -ForegroundColor White
Write-Host "4. Imprima em tamanho minimo 5x5cm" -ForegroundColor White
Write-Host ""
Write-Host "IMPORTANTE:" -ForegroundColor Red
Write-Host "- Teste o QR Code antes de imprimir!" -ForegroundColor White
Write-Host "- Use papel de qualidade para impressao" -ForegroundColor White
Write-Host "- Mantenha boa iluminacao no local" -ForegroundColor White
Write-Host ""
Write-Host "Deseja abrir o site tambem? (S/N): " -ForegroundColor Cyan -NoNewline
$abrir = Read-Host

if ($abrir -eq "S" -or $abrir -eq "s") {
    Write-Host "Abrindo site..." -ForegroundColor Green
    Start-Process $url
}

Write-Host ""
Write-Host "QR Code gerado com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "Pressione Enter para sair..."
Read-Host

