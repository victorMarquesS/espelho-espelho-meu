import { useState } from 'react';
import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi';
import Header from './components/Header';
import Stories from './components/stories'; 
import Sidebar from './components/sidebar'; 
import Post from './components/Post';
import Profile from './components/profile'; 
import posts from './data/posts.json';
import './App.css';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('feed');

  return (
    <div className="app">
      <Header onProfileClick={() => setTelaAtiva('perfil')} onHomeClick={() => setTelaAtiva('feed')} />
      
      <div className="main-container">
        {telaAtiva === 'feed' ? (
          <>
            <main className="feed" aria-label="Feed de publicações">
              <Stories /> 
              {posts.map((post) => <Post key={post.id} post={post} />)}
            </main>
            <Sidebar />
          </>
        ) : (
          <main className="feed" aria-label="Perfil do usuário" style={{ maxWidth: '935px' }}>
            <Profile />
          </main>
        )}
      </div>

      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button type="button" aria-label="Início" onClick={() => setTelaAtiva('feed')}><FiHome /></button>
        <button type="button" aria-label="Pesquisar"><FiSearch /></button>
        <button type="button" aria-label="Criar publicação"><FiPlusSquare /></button>
        <button type="button" aria-label="Atividades"><FiHeart /></button>
        <button type="button" aria-label="Perfil" onClick={() => setTelaAtiva('perfil')}><FiUser /></button>
      </nav>
    </div>
  )
}

export default App;