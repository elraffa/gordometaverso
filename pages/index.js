import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/Home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="home">
      <h1 className='home__title'>Sobre Mi</h1>
      <p className='home__text'>
        Gordometaverso es uno de los comediantes gordos con mayor crecimiento este último tiempo. Después de más de 9 años de carrera, nunca logró
        afianzarse como una figura de referencia en el stand up local.<br />
        Lleva 9 temporadas consecutivas en Plaza Serrano donde varias veces algunos espectadores quisieron golpearlo varias veces.<br />
        Como actor jamás quedo en ningún casting. Su fuerte es la falta de registro y la carencia de autocrítica, que hicieron que hoy, esté pasando un mal momento económico.<br />
        Sus debilidades? por donde arrancar, sobrepeso, asma, estrías, dos dientes torcido y le crece mucho pelo entre las cejas.<br />
        Como comediante no pregunta bien los barrios, poca creatividad para los chistes, poca improvisación, no sabe hacer voces, mala fonética, poca empatía con el público. Actualmente está presentando su nuevo show criptocomedia.
      </p>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};
