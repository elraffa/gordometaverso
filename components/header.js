import '../styles/Header.module.scss';

export default function Header() {
  return (
    <>
      <div className="header__topbar">Gordometaverso</div>
      <div className="header flex min-h-screen items-center justify-center text-white flex-col bg-cover bg-top bg-no-repeat bg-hero-pattern">
        <nav className="header__navbar">
          <a href="">Sobre Mi</a>
          <a href="">Shows</a>
          <a href="">Eventos</a>
          <a href="">Videos</a>
          <a href="">Contacto</a>
        </nav>
      </div>
    </>

  );
}
