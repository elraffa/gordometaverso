import '../styles/Header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";


export default function Header() {
  const isActive = useState(false)
  const router = useRouter();

  return (
    <>
      <div className="header__topbar">Gordometaverso</div>
      <div className="header bg-cover bg-top bg-no-repeat bg-hero-pattern">
        <nav className="header__navbar">
          <Link href='/#title'><a className={router.pathname == "/" ? 'header__links--active' : 'header__links'}>Sobre Mi</a></Link>
          <Link href='/shows#title'><a className={router.pathname == "/shows" ? 'header__links--active' : 'header__links'}>Shows</a></Link>
          <Link href='/eventos'><a className={router.pathname == "/eventos" ? 'header__links--active' : 'header__links'} href="">Eventos</a></Link>
          <Link href='/videos'><a className={router.pathname == "/videos" ? 'header__links--active' : 'header__links'}>Videos</a></Link>
          <Link href='/contacto'><a className={router.pathname == "/contacto" ? 'header__links--active' : 'header__links'}>Contacto</a></Link>
        </nav>
      </div>
    </>

  );
}
