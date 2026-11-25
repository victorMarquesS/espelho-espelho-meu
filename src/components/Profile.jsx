import { FiSettings, FiGrid, FiUserPlus } from 'react-icons/fi';




const fotoGrade1 = "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop"; 
const fotoGrade2 = "https://media.craiyon.com/2025-09-20/NxJpb-zRTzapwm-R71Z8hQ.webp"; 
const fotoGrade3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHl-O6ncG62kosrlySIVdQjh4S1rAdj-j1IEjTR4NNiD1A4GZHVBYMYF0T&s=10"; 
const fotoGrade4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLNBadg2AS_99rh2EED4Vi3DFluYNUZjfT-4PmjIQvbmXbiJRMEYFq-k&s=10"; 
const fotoGrade5 = "https://i.pinimg.com/736x/47/cb/be/47cbbee4df2bc1fccc63c3b0f9af46aa.jpg";
const fotoGrade6 = "https://i.scdn.co/image/ab67616d0000b2738c5b943cb9cfbc924e4bf9cc";

const fotoDestaqueMapas = "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=150&auto=format&fit=crop";
const fotoDestaqueTangerinas = "https://geekdama.com.br/wp-content/uploads/2023/10/one-piece-nami-tangerina-mikan-postcover.jpg";
const fotoDestaqueTesouros = "https://criticalhits.com.br/wp-content/uploads/2019/02/nami-1064456-1280x0.jpg";

// ====================================================


function Profile() {
  const fotosPerfil = [fotoGrade1, fotoGrade2, fotoGrade3, fotoGrade4, fotoGrade5, fotoGrade6];

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="profile-avatar-container">
          <img 
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Nami" 
            alt="Foto de perfil da Nami" 
            className="profile-avatar" 
          />
        </div>
        
        <div className="profile-info">
          <div className="profile-username-row">
            <h2>nami_navegante</h2>
            <button className="btn-profile-action">Editar Perfil</button>
            <button className="btn-profile-action btn-icon"><FiSettings size={20} /></button>
          </div>
          
          <ul className="profile-stats">
            <li><strong>6</strong> publicações</li>
            <li><strong>1.2k</strong> seguidores</li>
            <li><strong>150</strong> seguindo</li>
          </ul>
          
          <div className="profile-bio">
            <strong>Nami</strong>
            <p>Navegadora dos Chapéus de Palha. 🌊</p>
            <p>Amo mapas, tangerinas e dinheiro. 💰🍊</p>
          </div>
        </div>
      </header>

      <div className="profile-highlights">
        <div className="highlight-item">
          <div className="highlight-ring">
            <img src={fotoDestaqueMapas} alt="Mapas" />
          </div>
          <span>Mapas</span>
        </div>
        <div className="highlight-item">
          <div className="highlight-ring">
            <img src={fotoDestaqueTangerinas} alt="Tangerinas" />
          </div>
          <span>Tangerinas</span>
        </div>
        <div className="highlight-item">
          <div className="highlight-ring">
            <img src={fotoDestaqueTesouros} alt="Tesouros" />
          </div>
          <span>Tesouros</span>
        </div>
      </div>

      <div className="profile-tabs">
        <button className="profile-tab active"><FiGrid size={16} /> PUBLICAÇÕES</button>
        <button className="profile-tab"><FiUserPlus size={16} /> MARCADOS</button>
      </div>

      <div className="profile-grid">
        {fotosPerfil.map((foto, index) => (
          <div key={index} className="profile-grid-item">
            <img src={foto} alt={`Publicação ${index + 1}`} />
            <div className="overlay">
              <span>❤️ {Math.floor(Math.random() * 1000)}</span>
              <span>💬 {Math.floor(Math.random() * 50)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;