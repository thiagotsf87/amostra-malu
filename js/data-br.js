// Dados do Brasil — chave = sigla da UF
// Campos: name (nome), intro (texto livre), taxa, faixa, renda, extra (opcional)
window.brazilData = {
  "AC": { name: "Acre", intro: "Dados não fornecidos.", extra: "" },

  "AL": { name: "Alagoas", intro: "Alagoas — 85,8%; 15 anos ou mais; R$ 1.110/mês.", taxa: "85,8%", faixa: "15 anos ou mais", renda: "R$ 1.110/mês" },
  "AP": { name: "Amapá", intro: "Amapá — 94,2%; 15 anos ou mais; R$ 1.520/mês.", taxa: "94,2%", faixa: "15 anos ou mais", renda: "R$ 1.520/mês" },
  "AM": { name: "Amazonas", intro: "Amazonas — 94,9%; 15 anos ou mais; R$ 1.172/mês.", taxa: "94,9%", faixa: "15 anos ou mais", renda: "R$ 1.172/mês" },
  "BA": { name: "Bahia", intro: "Bahia — 89,8%; 15 anos ou mais; R$ 1.139/mês.", taxa: "89,8%", faixa: "15 anos ou mais", renda: "R$ 1.139/mês" },
  "CE": { name: "Ceará", intro: "Ceará — 88,5%; 15 anos ou mais; R$ 1.166/mês.", taxa: "88,5%", faixa: "15 anos ou mais", renda: "R$ 1.166/mês" },
  "DF": { name: "Distrito Federal", intro: "Distrito Federal — 98,3%; 15 anos ou mais; R$ 3.357/mês.", taxa: "98,3%", faixa: "15 anos ou mais", renda: "R$ 3.357/mês" },
  "ES": { name: "Espírito Santo", intro: "Espírito Santo — 95,6%; 15 anos ou mais; R$ 1.915/mês.", taxa: "95,6%", faixa: "15 anos ou mais", renda: "R$ 1.915/mês" },
  "GO": { name: "Goiás", intro: "Goiás — 96,0%; 15 anos ou mais; R$ 2.017/mês.", taxa: "96,0%", faixa: "15 anos ou mais", renda: "R$ 2.017/mês" },
  "MA": { name: "Maranhão", intro: "Maranhão — 86,7%; 15 anos ou mais; R$ 945/mês.", taxa: "86,7%", faixa: "15 anos ou mais", renda: "R$ 945/mês" },
  "MT": { name: "Mato Grosso", intro: "Mato Grosso — 95,5%; 15 anos ou mais; R$ 1.991/mês.", taxa: "95,5%", faixa: "15 anos ou mais", renda: "R$ 1.991/mês" },
  "MS": { name: "Mato Grosso do Sul", intro: "Mato Grosso do Sul — 96,1%; 15 anos ou mais; R$ 2.030/mês.", taxa: "96,1%", faixa: "15 anos ou mais", renda: "R$ 2.030/mês" },
  "MG": { name: "Minas Gerais", intro: "Minas Gerais — 95,4%; 15 anos ou mais; R$ 1.918/mês.", taxa: "95,4%", faixa: "15 anos ou mais", renda: "R$ 1.918/mês" },
  "PA": { name: "Pará", intro: "Pará — 93,1%; 15 anos ou mais; R$ 1.282/mês.", taxa: "93,1%", faixa: "15 anos ou mais", renda: "R$ 1.282/mês" },
  "PB": { name: "Paraíba", intro: "Paraíba — 86,8%; 15 anos ou mais; R$ 1.320/mês.", taxa: "86,8%", faixa: "15 anos ou mais", renda: "R$ 1.320/mês" },
  "PR": { name: "Paraná", intro: "Paraná — 96,6%; 15 anos ou mais; R$ 2.115/mês.", taxa: "96,6%", faixa: "15 anos ou mais", renda: "R$ 2.115/mês" },
  "PE": { name: "Pernambuco", intro: "Pernambuco — 89,9%; 15 anos ou mais; R$ 1.113/mês.", taxa: "89,9%", faixa: "15 anos ou mais", renda: "R$ 1.113/mês" },
  "PI": { name: "Piauí", intro: "Piauí — 86,7%; 15 anos ou mais; R$ 1.342/mês.", taxa: "86,7%", faixa: "15 anos ou mais", renda: "R$ 1.342/mês" },
  "RJ": { name: "Rio de Janeiro", intro: "Rio de Janeiro — 98,0%; 15 anos ou mais; R$ 2.367/mês.", taxa: "98,0%", faixa: "15 anos ou mais", renda: "R$ 2.367/mês" },
  "RN": { name: "Rio Grande do Norte", intro: "Rio Grande do Norte — 89,1%; 15 anos ou mais; R$ 1.373/mês.", taxa: "89,1%", faixa: "15 anos ou mais", renda: "R$ 1.373/mês" },
  "RS": { name: "Rio Grande do Sul", intro: "Rio Grande do Sul — 97,3%; 15 anos ou mais; R$ 2.304/mês.", taxa: "97,3%", faixa: "15 anos ou mais", renda: "R$ 2.304/mês" },
  "RO": { name: "Rondônia", intro: "Rondônia — 94,9%; 15 anos ou mais; R$ 1.527/mês.", taxa: "94,9%", faixa: "15 anos ou mais", renda: "R$ 1.527/mês" },
  "RR": { name: "Roraima", intro: "Roraima — 95,8%; 15 anos ou mais; R$ 1.425/mês.", taxa: "95,8%", faixa: "15 anos ou mais", renda: "R$ 1.425/mês" },
  "SC": { name: "Santa Catarina", intro: "Santa Catarina — 98,0%; 15 anos ou mais; R$ 2.269/mês.", taxa: "98,0%", faixa: "15 anos ou mais", renda: "R$ 2.269/mês" },
  "SP": { name: "São Paulo", intro: "São Paulo — 97,7%; 15 anos ou mais; R$ 2.492/mês.", taxa: "97,7%", faixa: "15 anos ou mais", renda: "R$ 2.492/mês" },
  "SE": { name: "Sergipe", intro: "Sergipe — 88,8%; 15 anos ou mais; R$ 1.218/mês.", taxa: "88,8%", faixa: "15 anos ou mais", renda: "R$ 1.218/mês" },
  "TO": { name: "Tocantins", intro: "Tocantins — 92,2%; 15 anos ou mais; R$ 1.581/mês.", taxa: "92,2%", faixa: "15 anos ou mais", renda: "R$ 1.581/mês" }
};

// Alias para compatibilidade
window.BR_STATES = window.brazilData;
