# 📱 Como Testar a Aplicação em Dispositivo Móvel Real

## ✅ Pré-requisitos

1. ✅ Servidor rodando no computador (porta 8000)
2. ✅ Celular/tablet conectado na **MESMA REDE Wi-Fi** que o computador
3. ✅ IP do computador: **192.168.68.106**

---

## 🚀 Passo a Passo

### 1. **Verificar se o servidor está rodando**

No computador, você deve ter uma janela do PowerShell aberta com:
```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

Se não estiver rodando, execute:
```powershell
cd "C:\QAx\Malu 2 - Copia\amostra-cientifica"
python -m http.server 8000
```

---

### 2. **Abrir no dispositivo móvel**

**No seu celular/tablet, abra o navegador (Chrome, Safari, Firefox) e acesse:**

```
http://192.168.68.106:8000
```

**Ou acesse diretamente as páginas:**
- Brasil: `http://192.168.68.106:8000/brasil.html`
- EUA: `http://192.168.68.106:8000/usa.html`

---

### 3. **Se NÃO funcionar (Connection Refused)**

#### Opção A: Desabilitar Firewall temporariamente

**Windows Firewall pode estar bloqueando. Teste:**

1. Abra o **Windows Defender Firewall**
2. Clique em **"Desativar o Windows Defender Firewall"** (apenas para testar)
3. Tente acessar novamente do celular
4. **IMPORTANTE:** Reative o firewall depois!

#### Opção B: Adicionar regra no Firewall (RECOMENDADO)

Execute no PowerShell como **Administrador**:

```powershell
New-NetFirewallRule -DisplayName "Python HTTP Server" -Direction Inbound -LocalPort 8000 -Protocol TCP -Action Allow
```

Depois teste novamente no celular.

---

## 🧪 O que Testar no Mobile

### ✅ **Funcionalidades Mobile:**

1. **Touch/Gestos:**
   - ✅ Toque nos estados para abrir modal
   - ✅ Pinch-to-zoom (dois dedos para zoom)
   - ✅ Arraste o mapa após zoom

2. **Interface Responsiva:**
   - ✅ Botões de zoom visíveis e grandes
   - ✅ Campo de busca ocupa toda a largura
   - ✅ Mapa se ajusta à tela
   - ✅ Scroll funciona em todas as direções

3. **Performance:**
   - ✅ Animações suaves
   - ✅ Brilho ao buscar estados
   - ✅ Transições fluidas

---

## 🔧 Troubleshooting

### Problema: "Site não pode ser acessado"

**Causa:** Celular e computador não estão na mesma rede Wi-Fi.

**Solução:**
1. Verifique se o celular está conectado no **mesmo Wi-Fi** que o computador
2. Não use dados móveis - use Wi-Fi
3. Não use VPN no celular

---

### Problema: "Connection Refused" ou timeout

**Causa:** Firewall bloqueando a porta 8000.

**Solução:**
1. Execute o comando da "Opção B" acima (regra de firewall)
2. Ou desative o firewall temporariamente para testar

---

### Problema: IP diferente

Se o IP `192.168.68.106` não funcionar, obtenha o IP atual:

```powershell
ipconfig | findstr /i "IPv4"
```

Use o IP que começa com `192.168.` ou `10.`

---

## 📊 Exemplos de URLs para Mobile

| Página | URL |
|--------|-----|
| **Home** | http://192.168.68.106:8000 |
| **Brasil** | http://192.168.68.106:8000/brasil.html |
| **EUA** | http://192.168.68.106:8000/usa.html |

---

## 🎯 Teste Específico Mobile

### Testar Pinch-to-Zoom:
1. Acesse o mapa do Brasil no celular
2. Use **dois dedos** para dar zoom (pinch)
3. Arraste o mapa com **um dedo**
4. Teste buscar "são" no campo de busca
5. Toque em São Paulo para abrir o modal

### Testar Responsividade:
1. Gire o celular (portrait ↔ landscape)
2. Verifique se o layout se adapta
3. Botões devem ficar empilhados em portrait
4. Mapa deve preencher a tela

---

## ✅ Checklist de Funcionalidades Mobile

- [ ] Site carrega no celular
- [ ] Mapa aparece colorido e com siglas
- [ ] Pinch-to-zoom funciona
- [ ] Arrastar o mapa funciona
- [ ] Buscar estado funciona
- [ ] Tocar em estado abre modal
- [ ] Botões de zoom funcionam
- [ ] Layout responsivo (portrait/landscape)
- [ ] Scroll suave em todas as direções
- [ ] Efeito de brilho ao buscar estado

---

## 🔒 Segurança

**IMPORTANTE:** O servidor está acessível apenas na sua rede local (Wi-Fi de casa/escritório).

- ✅ Seguro para testes
- ✅ Não acessível pela internet
- ✅ Apenas dispositivos na mesma rede

---

**Data:** 2025-11-03  
**IP Local:** 192.168.68.106  
**Porta:** 8000

