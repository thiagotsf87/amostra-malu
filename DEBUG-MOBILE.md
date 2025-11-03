# 🔍 Debug - Botões de Zoom no Celular

## 📱 Teste Passo a Passo

### 1. **Limpar COMPLETAMENTE o Cache**

No celular (Chrome Android):
1. Menu (⋮) → Configurações
2. Privacidade e segurança → Limpar dados de navegação
3. Intervalo: **Todo o período**
4. Marque: **Imagens e arquivos em cache** e **Cookies**
5. Clique em **Limpar dados**

---

### 2. **Fechar e Reabrir o Chrome Completamente**

1. Botão de apps recentes
2. Feche TODAS as abas do Chrome
3. Feche o app Chrome
4. Reabra o Chrome

---

### 3. **Acessar em Aba Anônima**

1. Menu (⋮) → Nova guia anônima
2. Digite: `192.168.68.106:8000/brasil.html`
3. Teste os botões

**Por que anônima?** Cache zero garantido!

---

### 4. **Inspecionar no Chrome Remote Debug (AVANÇADO)**

No computador:
1. Chrome → `chrome://inspect`
2. Conecte celular via USB
3. Ative "Depuração USB" no celular
4. Inspecione a página
5. Verifique no console se há erros

---

## 🧪 Teste de Toque Manual

### Teste 1: Área de Toque
1. Toque **BEM NO CENTRO** do botão 🔍+
2. **Segure** por 1 segundo
3. Deve aparecer um leve brilho ciano
4. Se aparecer = botão está recebendo toque ✅

### Teste 2: Verificar Sobreposição
1. Tente tocar nas **BORDAS** do botão
2. Tente tocar no **ESPAÇO** entre os botões
3. Se só funciona no centro = tem algo sobrepondo

### Teste 3: Verificar JavaScript
No console do Chrome (se conseguir abrir):
```javascript
// Testar se o botão existe
document.getElementById('zoom-in-br')

// Testar z-index do botão
getComputedStyle(document.getElementById('zoom-in-br')).zIndex

// Testar se está visível
document.getElementById('zoom-in-br').offsetHeight

// Forçar clique via console
document.getElementById('zoom-in-br').click()
```

---

## 🔧 Correções Aplicadas

### Aumentado Drasticamente o Tamanho

**Celular (< 480px):**
- Padding: **16px 20px** (era 6px 8px)
- Min-width: **80px** (era 50px)
- Min-height: **52px** (era inexistente)
- Font-size: **1.2rem** (era 0.85rem)
- Z-index: **152** (era 102)

**Tablet (< 768px):**
- Padding: **12px 14px**
- Min-height: **48px**
- Z-index: **102**

### Removido Delays
- `touch-action: manipulation` 
- Meta tag `user-scalable=no`
- Tap-highlight visível

### Position e Pointer-Events
- `position: relative`
- `pointer-events: auto !important`
- `cursor: pointer !important`

---

## 🚨 Se AINDA Não Funcionar

### Opção 1: Teste em Outro Navegador
- Instale **Firefox** ou **Samsung Internet** no celular
- Teste lá para ver se é problema do Chrome

### Opção 2: Desabilite "Lite Mode" / "Data Saver"
- Chrome → Configurações → Lite mode → Desativar

### Opção 3: Teste com Touch Simulator
No computador:
1. F12 → Toggle device toolbar
2. Escolha um dispositivo pequeno (iPhone SE, Galaxy Fold)
3. Teste os botões

### Opção 4: Verificar se há Overlay Transparente
```javascript
// No console, rode:
document.elementsFromPoint(X, Y)
// Substitua X,Y pelas coordenadas do botão
```

---

## 📊 Especificações dos Botões

| Tela | Largura | Altura | Padding | Z-Index |
|-------|---------|--------|---------|---------|
| Desktop | Auto | Auto | 10px 20px | 101 |
| Tablet | ≥70px | ≥48px | 12px 14px | 102 |
| Celular | ≥80px | ≥52px | 16px 20px | **152** |

---

## ✅ O Que Deve Acontecer

**Ao tocar no botão:**
1. Feedback visual (brilho ciano)
2. Mapa aumenta/diminui imediatamente
3. Sem delay perceptível
4. Botão continua visível e clicável

---

**Teste AGORA no celular após limpar cache!** 📱

Se ainda não funcionar, me avise e vou investigar outras causas possíveis.

