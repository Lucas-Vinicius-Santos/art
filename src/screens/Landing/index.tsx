import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Artists } from './Artists';
import { Hero } from './Hero';

export function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Artists />
      <Footer />
    </>
  );
}
