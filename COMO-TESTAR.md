# 🚀 Como Testar o Sistema de Amostras Científicas

## ⚠️ Problema Comum

Se você abrir o `index.html` diretamente clicando duas vezes no arquivo, os mapas **NÃO vão aparecer** por causa de restrições de segurança do navegador (CORS).

## ✅ Soluções para Exibir os Mapas

### Opção 1: Python (Mais Simples) 🐍

Se você tem Python instalado:

1. Abra o **PowerShell** ou **Prompt de Comando**
2. Navegue até a pasta do projeto:
```bash
cd "C:\Automação\Malu 2\amostra-cientifica"
```

3. Execute um dos comandos:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

4. Abra o navegador e acesse:
```
http://localhost:8000
```

### Opção 2: Node.js (Se você tem instalado) 📦

1. Abra o PowerShell na pasta do projeto
2. Instale o servidor (uma vez apenas):
```bash
npm install -g http-server
```

3. Execute:
```bash
http-server
```

4. Abra o navegador em:
```
http://localhost:8080
```

### Opção 3: Visual Studio Code (Live Server) 💻

1. Abra o projeto no VS Code
2. Instale a extensão **"Live Server"** por Ritwick Dey
3. Clique com botão direito no `index.html`
4. Selecione **"Open with Live Server"**

### Opção 4: PHP (Se você tem instalado) 🐘

```bash
cd "C:\Automação\Malu 2\amostra-cientifica"
php -S localhost:8000
```

Acesse: `http://localhost:8000`

---

## 🔍 Como Verificar se Está Funcionando

Quando estiver rodando corretamente, você deve ver:

### Página Inicial (index.html)
- ✅ Bandeira do Brasil
- ✅ Fundo escuro com gradiente
- ✅ Botão com hover effect

### Página do Mapa (brasil.html)
- ✅ Mapa interativo do Brasil
- ✅ Estados clicáveis com cores por região
- ✅ Sistema de busca
- ✅ Ao clicar em um estado, aparecem os dados em modal

---

## 🐛 Solução de Problemas

### Problema: "Mapa não disponível"
**Causa**: Navegador bloqueou o carregamento do SVG

**Solução**: Use um servidor HTTP (opções acima)

### Problema: Estados não clicam
**Causa**: JavaScript não carregou ou SVG não tem IDs corretos

**Solução**: 
1. Abra o Console do navegador (F12)
2. Veja se há erros
3. Verifique se os arquivos JS estão carregando

### Problema: Mapa aparece mas está "feio"
**Causa**: CSS não carregou corretamente

**Solução**:
1. Limpe o cache (Ctrl + Shift + Del)
2. Recarregue a página (Ctrl + F5)

---

## 📊 O Que Você Deve Ver

### 1. Página Inicial
```
┌─────────────────────────────────────────┐
│  Sistema de Amostras Científicas        │
│  Visualização de dados do Brasil        │
├─────────────────────────────────────────┤
│            ┌──────────┐                 │
│            │ 🇧🇷 Brasil│                 │
│            │   Clique  │                 │
│            └──────────┘                 │
└─────────────────────────────────────────┘
```

### 2. Página do Mapa
```
┌─────────────────────────────────────────────────────┐
│ ← Voltar                                            │
│ Brasil - Amostras por Estado                        │
├──────────────────────────┬──────────────────────────┤
│                          │ Selecione um estado      │
│   [MAPA DO BRASIL]       │                          │
│   Estados clicáveis      │ Clique em um estado      │
│   em formato geométrico  │ do mapa...               │
│                          │                          │
└──────────────────────────┴──────────────────────────┘
```

### 3. Ao Clicar em um Estado
```
┌──────────────────────────┬──────────────────────────┐
│                          │ São Paulo                │
│   [MAPA COM SP]          │                          │
│   [SELECIONADO]          │ Total: 1523              │
│                          │ Analisadas: 1401         │
│                          │ Pendentes: 122           │
│                          │ Atualização: 01/11/2025  │
└──────────────────────────┴──────────────────────────┘
```

---

## 💡 Dica Importante

**SEMPRE use um servidor HTTP local para testar!**

O arquivo `file:///` não funciona corretamente com:
- ✗ Fetch/AJAX
- ✗ SVG loading
- ✗ Alguns recursos CSS/JS modernos

Com servidor HTTP:
- ✓ Tudo funciona perfeitamente
- ✓ Carregamento rápido
- ✓ Sem erros CORS

---

## 🎯 Comando Recomendado (Mais Fácil!)

### **Opção A: Clique Duplo (MAIS SIMPLES)** 

Clique duas vezes em um desses arquivos:
- `INICIAR-SERVIDOR.bat` (para Prompt de Comando)
- `INICIAR-SERVIDOR.ps1` (para PowerShell)

### **Opção B: PowerShell Manual**

```powershell
# 1. Abra o PowerShell
# 2. Entre na pasta:
cd "C:\Automação\Malu 2\amostra-cientifica"

# 3. Execute:
python -m http.server 8000

# 4. Abra no navegador:
# http://localhost:8000
```

⚠️ **IMPORTANTE**: No PowerShell, use `;` (ponto e vírgula) em vez de `&&`:
```powershell
# ✗ ERRADO (não funciona no PowerShell):
cd pasta && comando

# ✓ CORRETO:
cd pasta ; comando
```

**Pronto!** Os mapas devem aparecer perfeitamente! 🎉

---

## 📞 Ainda com Problemas?

Se após usar um servidor HTTP os mapas ainda não aparecerem:

1. Abra o **Console do navegador** (F12)
2. Veja se há erros em vermelho
3. Verifique a aba **Network** para ver se os arquivos estão carregando
4. Certifique-se de que todos os arquivos estão na estrutura correta:
   ```
   amostra-cientifica/
   ├── assets/
   │   ├── br-map.svg
   │   ├── br-flag.svg
   │   └── Flag_of_Brazil.svg
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── app.js
   │   └── data-br.js
   ├── index.html
   └── brasil.html
   ```

---

**Boa sorte! 🚀**

