# 🎯 Como Usar Live Server no VS Code

## 📋 Pré-requisitos
- Visual Studio Code instalado

## 🚀 Instalação do Live Server

### 1️⃣ Abrir VS Code
- Abra o Visual Studio Code

### 2️⃣ Abrir Extensions (Extensões)
- Pressione `Ctrl + Shift + X`
- Ou clique no ícone de quadrados no menu lateral esquerdo

### 3️⃣ Instalar Live Server
- Na barra de busca, digite: **`Live Server`**
- Procure pela extensão de **Ritwick Dey** (tem mais de 40 milhões de downloads)
- Clique em **"Install"** (Instalar)

![Live Server Extension](https://github.com/ritwickdey/vscode-live-server/raw/master/images/Screenshot/vscode-live-server-animated-demo.gif)

### 4️⃣ Abrir a Pasta do Projeto
- `File > Open Folder` (ou `Ctrl + K, Ctrl + O`)
- Navegue até: `C:\Automação\Malu 2\amostra-cientifica`
- Clique em **"Selecionar pasta"**

### 5️⃣ Iniciar o Live Server

**Método 1: Botão "Go Live"**
- Veja no canto inferior direito da tela
- Clique no botão **"Go Live"**

**Método 2: Pelo arquivo**
- Clique com botão direito no arquivo `index.html`
- Selecione **"Open with Live Server"**

**Método 3: Atalho**
- Pressione `Alt + L, Alt + O`

### 6️⃣ Pronto! 🎉
- O navegador abre automaticamente
- URL será algo como: `http://127.0.0.1:5500`
- Os mapas devem aparecer perfeitamente!

---

## ⚡ Vantagens do Live Server

✅ **Auto-reload**: Qualquer mudança no código atualiza automaticamente  
✅ **Sem configuração**: Funciona na hora  
✅ **Múltiplos navegadores**: Abre em qualquer navegador  
✅ **Fácil de usar**: Um clique e pronto  

---

## 🔧 Configurações Opcionais

Para customizar o Live Server:

1. Pressione `Ctrl + ,` (abre Settings)
2. Busque por "Live Server"
3. Ajuste:
   - Porta padrão
   - Navegador padrão
   - Auto-abrir navegador

---

## 🐛 Solução de Problemas

### Problema: "Go Live" não aparece
**Solução**: 
- Certifique-se de que a extensão está instalada
- Reinicie o VS Code
- Abra uma pasta (não apenas um arquivo)

### Problema: Porta 5500 em uso
**Solução**:
- O Live Server tentará usar a próxima porta disponível (5501, 5502, etc.)
- Ou configure outra porta nas configurações

### Problema: Página não carrega
**Solução**:
- Verifique se você abriu a **pasta** do projeto, não só o arquivo
- Estrutura correta:
  ```
  amostra-cientifica/
  ├── index.html
  ├── brasil.html
  ├── assets/
  ├── css/
  └── js/
  ```

---

## 📱 Testar em Dispositivos Móveis

Com Live Server ativo:

1. Veja o IP local no terminal do VS Code
2. No celular (mesma rede Wi-Fi), acesse:
   ```
   http://SEU-IP-LOCAL:5500
   ```
   Exemplo: `http://192.168.1.100:5500`

---

## 🎯 Comandos Úteis

| Ação | Atalho |
|------|--------|
| Iniciar Live Server | `Alt + L, Alt + O` |
| Parar Live Server | `Alt + L, Alt + C` |
| Abrir Settings | `Ctrl + ,` |
| Abrir Extensions | `Ctrl + Shift + X` |

---

## ✅ Checklist

- [ ] VS Code instalado
- [ ] Extensão Live Server instalada
- [ ] Pasta do projeto aberta no VS Code
- [ ] Clicou em "Go Live"
- [ ] Navegador abriu automaticamente
- [ ] Mapa apareceu e está funcionando

---

**Tudo funcionando? Aproveite o sistema! 🎉**

