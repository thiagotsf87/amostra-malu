# 📧 Como Configurar EmailJS para Receber Avaliações

## Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"** (canto superior direito)
3. Crie uma conta gratuita (pode usar email, Google, etc)
4. Confirme seu email se necessário

### 2. Criar um Serviço de Email

1. Após login, vá em **"Email Services"** no menu lateral
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado - mais simples)
   - **Outlook**
   - **Yahoo**
   - Ou outro que você use
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** que aparece (ex: `service_abc123`)

### 3. Criar um Template de Email

1. Vá em **"Email Templates"** no menu lateral
2. Clique em **"Create New Template"**
3. Use este template:

**Subject (Assunto):**
```
Nova Avaliação - Amostra Cultural
```

**Content (Corpo do Email):**
```
Nova avaliação recebida!

Nota: {{rating}} estrelas

Comentário:
{{comment}}

Data: {{date}}
Timestamp: {{timestamp}}

---
Enviado automaticamente pelo sistema de avaliações
```

4. Clique em **"Save"**
5. **Anote o Template ID** que aparece (ex: `template_xyz789`)

### 4. Obter Public Key

1. Vá em **"Account"** → **"General"**
2. Procure por **"Public Key"**
3. **Copie a chave** (ex: `abcdefghijklmnop`)

### 5. Configurar no Código

1. Abra o arquivo: `js/ratings.js`
2. Encontre estas linhas no início do arquivo:

```javascript
const EMAILJS_CONFIG = {
  enabled: false,  // Mude para true após configurar
  serviceId: '',   // Seu Service ID do EmailJS
  templateId: '',  // Seu Template ID do EmailJS
  publicKey: ''     // Sua Public Key do EmailJS
};
```

3. Substitua pelos valores que você copiou:

```javascript
const EMAILJS_CONFIG = {
  enabled: true,                    // ✅ Mude para true
  serviceId: 'service_abc123',     // ✅ Cole seu Service ID
  templateId: 'template_xyz789',    // ✅ Cole seu Template ID
  publicKey: 'abcdefghijklmnop'     // ✅ Cole sua Public Key
};
```

4. Salve o arquivo

### 6. Testar

1. Abra `index.html` no navegador
2. Faça uma avaliação de teste
3. Verifique se você recebeu o email

## Limites do Plano Gratuito

- **200 emails por mês** (suficiente para uma feira)
- Sem necessidade de cartão de crédito
- Funciona perfeitamente para o uso proposto

## Se Não Configurar EmailJS

O sistema funciona normalmente usando apenas **LocalStorage**:
- Avaliações ficam salvas no navegador
- Você pode ver na página `admin-ratings.html`
- Você pode exportar para JSON quando quiser
- Para feira pequena, pode usar um único tablet/celular

## Dúvidas?

- Documentação oficial: https://www.emailjs.com/docs/
- Suporte: https://www.emailjs.com/support/

