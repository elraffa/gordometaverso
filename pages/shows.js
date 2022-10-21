import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

export default function Shows() {
  return (
    <div>
      <p>
        Esta es una lista de shows que hago maniana
      </p>
    </div>
  );
}

Shows.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};
