import '../styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="header__topbar">Gordometaverso</div>
      <div className="header bg-cover bg-top bg-no-repeat bg-hero-pattern">
        <nav className="header__navbar">
          <Link href='/#title'><a className='header__links'>Sobre Mi</a></Link>
          <Link href='/shows#title'><a className="header__links">Shows</a></Link>
          <Link href='/eventos'><a className="header__links" href="">Eventos</a></Link>
          <Link href='/videos'><a className="header__links" href="">Videos</a></Link>
          <Link href='/contacto'><a className="header__links" href="">Contacto</a></Link>
        </nav>
      </div>
    </>

  );
}
