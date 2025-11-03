# 🔬 Amostra Científica

Aplicação web interativa para visualização de dados científicos em mapas do Brasil e Estados Unidos.

## 🎯 Sobre o Projeto

Projeto desenvolvido para Feira de Ciências, apresentando mapas interativos onde os usuários podem:
- 🗺️ Explorar mapas do Brasil e EUA
- 🔍 Buscar estados/estados específicos
- 📊 Visualizar dados científicos detalhados
- 🎨 Interface moderna e responsiva
- 📱 Totalmente otimizado para mobile (pinch-to-zoom)

## ✨ Funcionalidades

- **Mapas Interativos SVG**: Clique nos estados para ver detalhes
- **Busca Inteligente**: Encontre estados rapidamente
- **Zoom com Pinch**: Suporte completo para gestos mobile
- **Modal Responsivo**: Visualização de dados em qualquer dispositivo
- **Efeitos Visuais**: Estados destacados com brilho e pulsação
- **Breadcrumbs**: Navegação fácil entre mapas

## 🚀 Como Usar

### Online (GitHub Pages)
Acesse diretamente: `https://thiagotsf87.github.io/amostra-malu/`

### Localmente
```bash
# Clone o repositório
git clone https://github.com/thiagotsf87/amostra-malu.git

# Entre na pasta
cd amostra-malu

# Inicie um servidor HTTP
python -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

## 📱 Acesso via QR Code

Para feiras e apresentações, gere um QR Code apontando para:
```
https://thiagotsf87.github.io/amostra-malu/
```

Use serviços como:
- https://www.qr-code-generator.com/
- https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=SUA_URL

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS
- **JavaScript**: Interatividade e manipulação de SVG
- **SVG**: Mapas vetoriais escaláveis

## 📂 Estrutura do Projeto

```
amostra-cientifica/
├── index.html          # Página inicial
├── brasil.html         # Mapa do Brasil
├── usa.html            # Mapa dos EUA
├── css/
│   └── styles.css      # Estilos globais
├── js/
│   ├── app.js          # Lógica principal
│   ├── data-br.js      # Dados do Brasil
│   └── data-us.js      # Dados dos EUA
└── assets/
    ├── br-map.svg      # Mapa vetorial do Brasil
    └── usa-map.svg     # Mapa vetorial dos EUA
```

## 🎨 Capturas de Tela

*[Adicione prints da aplicação aqui]*

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👥 Autores

- **Projeto**: Feira de Ciências
- **Desenvolvido por**: Malu & Thiago

## 🙏 Agradecimentos

Agradecimentos especiais a todos que contribuíram para este projeto educacional!

---

⭐ Se este projeto foi útil, considere dar uma estrela!
