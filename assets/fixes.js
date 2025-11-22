// Pequenas correções e melhorias de UX/A11y aplicadas após o app principal carregar
(function(){
  function enhanceSteppers(){
    document.querySelectorAll('.stepper').forEach(step => {
      const parts = step.querySelectorAll('button, input');
      const minus = parts[0];
      const input = parts[1];
      const plus  = parts[2];
      if (minus && minus.textContent.trim() !== '-') minus.textContent = '-';
      if (minus) { minus.setAttribute('aria-label','Diminuir quantidade'); minus.type='button'; }
      if (plus)  { plus.setAttribute('aria-label','Aumentar quantidade'); plus.type='button'; }
      if (input) { input.setAttribute('aria-label','Quantidade'); input.setAttribute('inputmode','numeric'); }
    });
  }

  // Envolve o render para aplicar melhorias após cada re-render
  if (typeof window.renderMenu === 'function'){
    const _render = window.renderMenu;
    window.renderMenu = function(...args){
      _render.apply(this,args);
      enhanceSteppers();
    };
  }

  // Primeira aplicação (após render inicial do app.js)
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', enhanceSteppers);
  } else {
    enhanceSteppers();
  }

  // Substitui buildMessage por versão com textos corrigidos
  window.buildMessage = function({ quarto, hora, nome, obs }){
    const linhas = [];
    linhas.push('Olá! / Hello!');
    linhas.push('Gostaria de fazer um pedido de serviço de quarto. / I would like to place a room service order.');
    if (quarto) linhas.push(`Quarto/Apto • Room: ${quarto}`);
    if (nome)   linhas.push(`Hóspede • Guest: ${nome}`);
    if (hora)   linhas.push(`Entrega • Delivery: ${hora}`);
    const qty = window.__qty || new Map();
    const sel = (window.itens || []).filter(i => (qty.get(i.namePt)||0) > 0);
    if (sel.length){
      linhas.push('Itens / Items:');
      sel.forEach(i=>{ const q=qty.get(i.namePt)||0; linhas.push(`• ${q}x ${i.namePt} (${i.nameEn}) – ${i.price != null ? (i.price).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) : ''}`); });
      const total = sel.reduce((acc,i)=>acc+(qty.get(i.namePt)||0)*(i.price||0),0);
      linhas.push(`Total estimado • Estimated total: ${total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`);
    }
    if (obs) linhas.push(`Observações / Notes: ${obs}`);
    linhas.push('Obrigado! / Thank you!');
    return linhas.join('\n');
  };

  // Recria o botão de limpeza para substituir o handler antigo (com textos corrompidos)
  function rebindHousekeeping(){
    const oldBtn = document.querySelector('#btnLimpeza');
    if(!oldBtn) return;
    const btn = oldBtn.cloneNode(true);
    oldBtn.replaceWith(btn);
    btn.addEventListener('click', ()=>{
      const quarto = (document.querySelector('#quarto')||{}).value?.trim() || '';
      const nome   = (document.querySelector('#nome')||{}).value?.trim() || '';
      const msg = [
        'Olá! Poderiam, por favor, enviar a camareira ao meu quarto? / Hello! Could you please send housekeeping to my room?',
        quarto?`Quarto/Apto • Room: ${quarto}`:'',
        nome?`Hóspede • Guest: ${nome}`:'',
        'Solicitação: troca de toalhas e reposição de amenities. / Request: towel change and amenities refill.',
        'Obrigado! / Thank you!'
      ].filter(Boolean).join('\n');
      if (typeof window.openWhatsApp === 'function') window.openWhatsApp(msg);
    });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', rebindHousekeeping);
  } else {
    rebindHousekeeping();
  }
})();

