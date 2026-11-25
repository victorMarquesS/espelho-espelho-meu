import itemNav from '../components/itemNav'

export default function NavDesktop() {
  return (
    <nav className="desktop-nav" aria-label="Navegação móvel">
      <ItemNav texto="Início" />
      <ItemNav texto ="Pesquisar" />
      <ItemNav />
      <ItemNav />

      <button type="button" aria-label="Início">Início</button>
      <button type="button" aria-label="Pesquisar">Pesquisar</button>
      <button type="button" aria-label="Criar publicação">Criar</button>
      <button type="button" aria-label="Perfil">Perfil</button>
    </nav>
  );
}

function Bloco() {
  return <div></div>;
}

function Linha() {
  return <div></div>;
}