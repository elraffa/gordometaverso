import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/Home.module.scss';
import Image from 'next/image';

export default function Eventos() {
  return (

    <div>
      <div className="main">
        <h1 className='main__title' id="title">Eventos</h1>
        <div className='main__text'>
    
        </div>
      </div>
    </div>
  );
}

Eventos.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};
