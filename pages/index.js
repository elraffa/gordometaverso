import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/Home.module.scss';
import ArrowTop from '../components/ArrowTop';

export default function Home() {
  return (
    <div>
      <div className="main">
        <h1 className='main__title' id="title">Sobre el Gordometaverso</h1>
        <div className='main__text'>
          <p className='main__par'>
            Gordometaverso es uno de los comediantes gordos con mayor crecimiento este último tiempo. Después de más de 9 años de carrera, nunca logró afianzarse como una figura de referencia en el stand up local.</p>
          <p className='main__par'>
            Lleva 9 temporadas consecutivas en Plaza Serrano donde varias veces algunos espectadores quisieron golpearlo con palos, flota-flotas y otros objetos contundentes.</p>
          <p className='main__par'>
            Como actor jamás quedo en ningún casting. Su fuerte es la falta de registro y la carencia de autocrítica y es por eso es que hoy está pasando un mal momento económico.</p>
          <p className='main__par'>
            ¿Sus debilidades? Por donde arrancar... sobrepeso, asma, estrías, dos dientes torcidos, le crece mucho pelo entre las cejas...</p>
          <p className='main__par'>
            Como comediante no pregunta bien los barrios, tiene poca creatividad para los chistes, poca improvisación, no sabe hacer voces, mala fonética, poca empatía con el público. Actualmente está presentando su nuevo show Criptocomedia.
          </p>
          <ArrowTop />
        </div>
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
