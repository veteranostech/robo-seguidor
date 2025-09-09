function mostrarMensagem() {
// Cria o fundo escurecido
const overlay = document.createElement('div');
overlay.id = 'modal-overlay';
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.background = 'rgba(0,0,0,0.6)';
overlay.style.display = 'flex';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.zIndex = 9999;

// Cria o modal
const modal = document.createElement('div');
modal.id = 'modal-mensagem';
modal.style.background = '#fff';
modal.style.padding = '32px';
modal.style.borderRadius = '12px';
modal.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)';
modal.style.maxWidth = '400px';
modal.style.textAlign = 'center';
modal.style.animation = 'fadeIn 0.5s';

  // Conteúdo do modal
  modal.innerHTML = `
    <h2>Robô Seguidor</h2>
    <p>Nosso robô utiliza sensores infravermelhos para detectar e seguir linhas no chão.<br>
    Acesse a seção <strong>'Projeto'</strong> para mais detalhes!<br>
    <span style="color: #e67e22;">EM CONSTRUÇÃO</span></p>
    <img src="img/robo.jpeg" alt="Robô Seguidor" style="width:100%;border-radius:8px;margin:16px 0;">
    <button id="fechar-modal" style="padding:8px 16px;border:none;background:#007bff;color:#fff;border-radius:4px;cursor:pointer;">Fechar</button>
  `;

  // Adiciona ao DOM
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Fecha o modal
  document.getElementById('fechar-modal').onclick = () => {
    document.body.removeChild(overlay);
  };
}

// Adicione esta animação ao seu style.css:
/*
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95);}
  to { opacity: 1; transform: scale(1);}
}
*/
//  alert("Nosso robô utiliza sensores infravermelhos para detectar e seguir linhas no chão. Acesse a seção 'Projeto' para mais detalhes! EM CONSTRUÇÃO");