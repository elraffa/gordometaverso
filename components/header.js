import '../styles/Header.module.scss';
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from "next/router";
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import homeHero from '../public/img/home-hero.png'
import showsHero from '../public/img/shows-hero.png'
import eventsHero from '../public/img/events-hero.png'
import videosHero from '../public/img/videos-hero.png'
import contactoHero from '../public/img/contacto-hero.png'

let imageSrc = homeHero;

export default function Header() {

  const isActive = useState(false)
  const router = useRouter();

  console.log(router.pathname)

  const changeImage = (e) => {
    e.preventDefault;
    switch(router.pathname) {
      case "/":
        imageSrc = homeHero;
        break;
      case "/shows":
        imageSrc = showsHero;
        break;
      case "/eventos": 
        imageSrc = eventsHero;
        break;
      case "/videos": 
        imageSrc = videosHero;
        break;
      case "/contacto": 
      imageSrc = contactoHero;
      break;
    }
  }

  return (
    <>
      <div className="header__topbar">
        <Link href='/'>
          <a className="header__sitetitle">
            Gordometaverso
          </a>
        </Link>
        <ul className="header__social">
          <li className='header__item'><a href='https://instagram.com/beer'><FaInstagram /></a></li>
          <li className='header__item'><a href='https://instagram.com/beer'><FaTiktok /></a></li>
        </ul>
      </div>
      <div className="header">
        <div className="header__hero-wrapper">
          <div className="header__image-wrapper">
            <Image
              priority
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
              alt="hero image example"
            />
          </div>
          <nav className="header__navbar">
            <Link href='/#title'><a onClick={changeImage} className={router.pathname == "/" ? 'header__links--active' : 'header__links'}>Sobre Mi</a></Link>
            <Link href='/shows#title'><a onClick={changeImage} className={router.pathname == "/shows" ? 'header__links--active' : 'header__links'}>Shows</a></Link>
            <Link href='/eventos'><a onClick={changeImage} className={router.pathname == "/eventos" ? 'header__links--active' : 'header__links'} href="">Eventos</a></Link>
            <Link href='/videos'><a onClick={changeImage} className={router.pathname == "/videos" ? 'header__links--active' : 'header__links'}>Videos</a></Link>
            <Link href='/contacto'><a onClick={changeImage} className={router.pathname == "/contacto" ? 'header__links--active' : 'header__links'}>Contacto</a></Link>
          </nav>
        </div>
      </div>
    </>

  );
}
