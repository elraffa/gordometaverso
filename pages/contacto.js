import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/Home.module.scss';
import Image from 'next/image';

export default function Contacto() {
  return (

    <div>
      <div className="main">
        <h1 className='main__title' id="title">Contacto</h1>
        <div className='main__text'>
    
        </div>
      </div>
    </div>
  );
}

Contacto.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};
