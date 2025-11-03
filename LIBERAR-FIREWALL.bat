@echo off
chcp 65001 >nul
echo ╔════════════════════════════════════════════════════════╗
echo ║   Liberar Porta 8000 no Firewall para Teste Mobile    ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo Este script vai criar uma regra no Windows Firewall para
echo permitir conexões na porta 8000 (servidor HTTP local).
echo.
echo ATENÇÃO: Você precisa executar como ADMINISTRADOR!
echo.
pause

echo.
echo Criando regra no firewall...
netsh advfirewall firewall add rule name="Python HTTP Server - Porta 8000" dir=in action=allow protocol=TCP localport=8000

if %errorlevel% == 0 (
    echo.
    echo ╔════════════════════════════════════════════════════════╗
    echo ║  ✓ SUCESSO!                                            ║
    echo ║                                                        ║
    echo ║  Regra de firewall criada com sucesso!                ║
    echo ║                                                        ║
    echo ║  Agora você pode acessar no celular:                  ║
    echo ║  http://192.168.68.106:8000                            ║
    echo ║                                                        ║
    echo ╚════════════════════════════════════════════════════════╝
) else (
    echo.
    echo ╔════════════════════════════════════════════════════════╗
    echo ║  ✗ ERRO!                                               ║
    echo ║                                                        ║
    echo ║  Execute este arquivo como ADMINISTRADOR:             ║
    echo ║  Botão direito → "Executar como administrador"        ║
    echo ║                                                        ║
    echo ╚════════════════════════════════════════════════════════╝
)

echo.
pause

