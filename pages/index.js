import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad
        eveniet hic eaque maiores consequatur, explicabo doloremque? Aperiam
        repellendus iste tempore, at commodi culpa ducimus a sed nihil sequi ex!
      </p>
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
