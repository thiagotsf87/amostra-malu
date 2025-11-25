// Sistema de Avaliação com Estrelas e EmailJS
// Configuração EmailJS
const EMAILJS_CONFIG = {
  enabled: true,                           // EmailJS ativado
  serviceId: 'service_j8wpa6v',           // Service ID do EmailJS
  templateId: 'template_hu7lpjq',         // Template ID do EmailJS
  publicKey: 'tLVN-tSgeM946AyrA'          // Public Key do EmailJS
};

// Carrega EmailJS SDK
if (EMAILJS_CONFIG.enabled) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    if (window.emailjs) {
      window.emailjs.init(EMAILJS_CONFIG.publicKey);
    }
  };
  document.head.appendChild(script);
}

// Sistema de Estrelas
const StarRating = {
  container: null,
  selectedRating: 0,
  hoverRating: 0,

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.render();
    this.bindEvents();
  },

  render() {
    this.container.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('button');
      star.type = 'button';
      star.className = 'star-btn';
      star.setAttribute('data-rating', i);
      star.setAttribute('aria-label', `${i} estrela${i > 1 ? 's' : ''}`);
      star.innerHTML = '⭐';
      this.container.appendChild(star);
    }
    this.updateStars();
  },

  bindEvents() {
    const stars = this.container.querySelectorAll('.star-btn');
    
    stars.forEach(star => {
      star.addEventListener('click', (e) => {
        this.selectedRating = parseInt(e.target.closest('.star-btn').dataset.rating);
        this.updateStars();
      });

      star.addEventListener('mouseenter', (e) => {
        this.hoverRating = parseInt(e.target.closest('.star-btn').dataset.rating);
        this.updateStars();
      });
    });

    this.container.addEventListener('mouseleave', () => {
      this.hoverRating = 0;
      this.updateStars();
    });
  },

  updateStars() {
    const stars = this.container.querySelectorAll('.star-btn');
    const rating = this.hoverRating || this.selectedRating;

    stars.forEach((star, index) => {
      const starValue = index + 1;
      if (starValue <= rating) {
        star.classList.add('active');
        star.style.opacity = '1';
        star.style.transform = 'scale(1.1)';
      } else {
        star.classList.remove('active');
        star.style.opacity = '0.3';
        star.style.transform = 'scale(1)';
      }
    });
  },

  getRating() {
    return this.selectedRating;
  },

  reset() {
    this.selectedRating = 0;
    this.hoverRating = 0;
    this.updateStars();
  }
};

// Gerenciamento de Avaliações
const RatingsManager = {
  storageKey: 'amostra-ratings',

  saveToLocal(rating, comment) {
    const ratings = this.getAllFromLocal();
    const newRating = {
      id: Date.now(),
      rating: rating,
      comment: comment || '',
      date: new Date().toISOString(),
      timestamp: Date.now()
    };
    ratings.push(newRating);
    localStorage.setItem(this.storageKey, JSON.stringify(ratings));
    return newRating;
  },

  getAllFromLocal() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  },

  clearLocal() {
    localStorage.removeItem(this.storageKey);
  },

  async sendEmail(rating, comment) {
    if (!EMAILJS_CONFIG.enabled || !window.emailjs) {
      console.warn('EmailJS não configurado');
      return false;
    }

    try {
      const templateParams = {
        rating: rating,
        comment: comment || '(sem comentário)',
        date: new Date().toLocaleString('pt-BR'),
        timestamp: Date.now()
      };

      await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );
      return true;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return false;
    }
  },

  async submitRating(rating, comment) {
    // Salva localmente
    const savedRating = this.saveToLocal(rating, comment);

    // Tenta enviar por email
    if (EMAILJS_CONFIG.enabled) {
      const emailSent = await this.sendEmail(rating, comment);
      return { success: true, savedRating, emailSent };
    }

    return { success: true, savedRating, emailSent: false };
  },

  getStats() {
    const ratings = this.getAllFromLocal();
    if (ratings.length === 0) {
      return { total: 0, average: 0, distribution: {} };
    }

    const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
    const average = (sum / ratings.length).toFixed(1);
    
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    ratings.forEach(r => {
      distribution[r.rating]++;
    });

    return {
      total: ratings.length,
      average: parseFloat(average),
      distribution
    };
  }
};

// Inicialização do formulário
function initRatingForm() {
  const form = document.getElementById('rating-form');
  if (!form) return;

  const commentField = document.getElementById('rating-comment');
  const submitBtn = document.getElementById('rating-submit');
  const messageDiv = document.getElementById('rating-message');

  StarRating.init('star-rating');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const rating = StarRating.getRating();
    if (rating === 0) {
      showMessage('Por favor, selecione uma nota de 1 a 5 estrelas.', 'error');
      return;
    }

    const comment = commentField.value.trim();
    
    // Desabilita botão durante envio
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const result = await RatingsManager.submitRating(rating, comment);
      
      if (result.success) {
        showMessage(
          result.emailSent 
            ? '✅ Avaliação enviada com sucesso! Obrigado pelo feedback.'
            : '✅ Avaliação salva! (Email não configurado - apenas armazenamento local)',
          'success'
        );
        
        // Limpa formulário
        form.reset();
        StarRating.reset();
      } else {
        showMessage('Erro ao salvar avaliação. Tente novamente.', 'error');
      }
    } catch (error) {
      console.error('Erro:', error);
      showMessage('Erro ao processar avaliação. Tente novamente.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Avaliação';
    }
  });

  function showMessage(text, type) {
    if (!messageDiv) return;
    messageDiv.textContent = text;
    messageDiv.className = `rating-message ${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
      messageDiv.style.opacity = '0';
      setTimeout(() => {
        messageDiv.style.display = 'none';
        messageDiv.style.opacity = '1';
      }, 300);
    }, 3000);
  }
}

// Exporta funções para uso global
window.RatingsManager = RatingsManager;
window.StarRating = StarRating;

// Inicializa quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRatingForm);
} else {
  initRatingForm();
}

