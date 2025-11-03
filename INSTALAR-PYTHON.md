# 🐍 Como Instalar Python no Windows

## 🎯 Por que Python?

Python é perfeito para testar aplicações web porque:
- ✅ Instalação super rápida (2-3 minutos)
- ✅ Servidor HTTP embutido (sem precisar instalar nada mais)
- ✅ Comando simples: `python -m http.server 8000`
- ✅ Usado por milhões de desenvolvedores

---

## 🚀 MÉTODO 1: Microsoft Store (MAIS FÁCIL)

### Passo 1: Abrir o PowerShell
- Pressione `Win + X`
- Selecione "Windows PowerShell" ou "Terminal"

### Passo 2: Tentar rodar Python
```powershell
python
```

### Passo 3: Microsoft Store Abre Automaticamente
- Uma janela da **Microsoft Store** vai abrir
- Mostrando o **Python 3.x**

### Passo 4: Instalar
- Clique no botão **"Obter"** ou **"Get"**
- Aguarde a instalação (1-3 minutos)
- Pronto! ✅

### Passo 5: Testar
Feche e abra o PowerShell novamente:
```powershell
python --version
```

Deve mostrar algo como:
```
Python 3.12.0
```

---

## 🚀 MÉTODO 2: Site Oficial (Download Manual)

### Passo 1: Baixar
1. Acesse: [python.org/downloads](https://www.python.org/downloads/)
2. Clique no botão amarelo **"Download Python 3.x.x"**
3. O download começa automaticamente

### Passo 2: Instalar
1. Execute o arquivo baixado (ex: `python-3.12.0-amd64.exe`)
2. ⚠️ **IMPORTANTE**: Marque a opção:
   ```
   ☑️ Add Python to PATH
   ```
3. Clique em **"Install Now"**
4. Aguarde a instalação

### Passo 3: Verificar
Abra um **novo** PowerShell:
```powershell
python --version
```

---

## ✅ Depois de Instalar Python

### 1️⃣ Navegar até a pasta do projeto
```powershell
cd "C:\Automação\Malu 2\amostra-cientifica"
```

### 2️⃣ Iniciar o servidor
```powershell
python -m http.server 8000
```

### 3️⃣ Abrir no navegador
Acesse: **http://localhost:8000**

### 4️⃣ Parar o servidor
Pressione `Ctrl + C` no terminal

---

## 🎯 Ou Use o Script Pronto!

Depois de instalar Python, apenas:

**Clique duas vezes em:**
```
INICIAR-SERVIDOR.bat
```

---

## 🐛 Solução de Problemas

### ❌ "Python não foi encontrado" (mesmo depois de instalar)

**Solução 1: Reiniciar o Terminal**
- Feche o PowerShell
- Abra novamente
- Tente de novo

**Solução 2: Verificar PATH**
1. Abra "Variáveis de Ambiente":
   - `Win + Pause` → "Configurações avançadas do sistema"
   - "Variáveis de Ambiente"
2. Em "Variáveis do sistema", procure "Path"
3. Verifique se há entradas como:
   ```
   C:\Users\SeuUsuario\AppData\Local\Programs\Python\Python312
   C:\Users\SeuUsuario\AppData\Local\Programs\Python\Python312\Scripts
   ```

**Solução 3: Reinstalar marcando "Add to PATH"**
- Desinstale Python (Painel de Controle)
- Reinstale marcando a opção "Add Python to PATH"

### ❌ "A porta 8000 está em uso"

**Solução**: Use outra porta:
```powershell
python -m http.server 8001
```
Depois acesse: `http://localhost:8001`

### ❌ Python instalado mas comando não funciona

**Solução**: Tente com `py`:
```powershell
py -m http.server 8000
```

---

## 📊 Comparação de Métodos

| Método | Velocidade | Facilidade | Recomendado |
|--------|-----------|------------|-------------|
| Microsoft Store | ⚡⚡⚡ Rápido | 😊😊😊 Muito fácil | ✅ Sim |
| Site Oficial | ⚡⚡ Médio | 😊😊 Fácil | ✅ Sim |
| VS Code Live Server | ⚡⚡⚡ Instantâneo | 😊😊 Fácil | ✅ Alternativa |

---

## 🎓 Comandos Úteis do Python

```powershell
# Ver versão
python --version

# Iniciar servidor na porta 8000
python -m http.server 8000

# Iniciar servidor em outra porta
python -m http.server 3000

# Ver ajuda
python --help
```

---

## ✅ Checklist Pós-Instalação

- [ ] Python instalado
- [ ] Comando `python --version` funciona
- [ ] Navegou até a pasta do projeto
- [ ] Executou `python -m http.server 8000`
- [ ] Acessou `http://localhost:8000` no navegador
- [ ] Mapas apareceram e estão funcionando

---

## 🎉 Pronto!

Agora você pode:
- ✅ Testar qualquer projeto web localmente
- ✅ Usar Python para automação
- ✅ Aprender programação Python (se quiser!)

---

**Dúvidas? Veja o arquivo `COMO-TESTAR.md` para mais opções!**

