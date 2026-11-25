import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi'

function Header({ onProfileClick, onHomeClick }) {
  return (
    <header className="header">
      <span className="header__logo" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
        Instapiece
      </span>
      
      <nav className="header__actions" aria-label="Navegação principal">
        <button className="icon-button" type="button" aria-label="Início" onClick={onHomeClick}>
          <FiHome />
        </button>
        <button className="icon-button" type="button" aria-label="Pesquisar">
          <FiSearch />
        </button>
        <button className="icon-button" type="button" aria-label="Criar publicação">
          <FiPlusSquare />
        </button>
        <button className="icon-button" type="button" aria-label="Atividades">
          <FiHeart />
        </button>
        <button className="icon-button" type="button" aria-label="Perfil" onClick={onProfileClick}>
          <FiUser />
        </button>
      </nav>
    </header>
  )
}

export default Header;