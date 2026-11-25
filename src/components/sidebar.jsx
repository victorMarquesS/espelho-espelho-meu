import { useState } from 'react';
import suggestions from '../data/sugestao.json';

function SuggestionItem({ sugestao }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="sidebar__suggestion-item">
      <img src={sugestao.avatar} alt={sugestao.user} className="sidebar__avatar" />
      <div className="sidebar__suggestion-info">
        <strong>{sugestao.user}</strong>
        <span>{sugestao.subtitle}</span>
      </div>
      <button 
        className={`sidebar__follow-btn ${isFollowing ? 'following' : ''}`}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? 'Seguindo' : 'Seguir'}
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Nami" alt="Nami" className="sidebar__avatar" />
        <div className="sidebar__user-info">
          <strong>nami_navegante</strong>
          <span>Nami</span>
        </div>
        <button className="sidebar__action">Mudar</button>
      </div>

      <div className="sidebar__header">
        <span>Sugestões para você</span>
        <button className="sidebar__see-all">Ver tudo</button>
      </div>

      <div className="sidebar__suggestions">
        {suggestions.map((sugestao) => (
          <SuggestionItem key={sugestao.id} sugestao={sugestao} />
        ))}
      </div>

      <footer className="sidebar__footer">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
        <br /><br />
        © 2024 DEN DEN FEED
      </footer>
    </aside>
  );
}

export default Sidebar;