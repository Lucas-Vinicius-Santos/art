import obra1 from '../../../assets/obra1.jpg';
import obra2 from '../../../assets/obra2.jpg';
import obra3 from '../../../assets/obra3.jpg';

import mainObra from '../../../assets/main-obra.jpg';

import './styles.scss';
import { Button } from '../../../components/Button';

export function Hero() {
  return (
    <div className="container hero-container">
      <div className="infos">
        <h1>
          Descubra novos artistas <br /> e suas obras
        </h1>
        <p>Uma nova geração de jovens artistas surgem</p>
        <Button label="explorar" />

        <div className="cards">
          <div className="card">
            <h1>+2 mil</h1>
            <span>Artistas</span>
          </div>
          <div className="card">
            <h1>+2 mil</h1>
            <span>Artistas</span>
          </div>
          <div className="card">
            <h1>+2 mil</h1>
            <span>Artistas</span>
          </div>
        </div>

        <div className="artists">
          <div className="obra">
            <img src={obra1} alt="" />
          </div>
          <div className="obra">
            <img src={obra2} alt="" />
          </div>
          <div className="obra">
            <img src={obra3} alt="" />
          </div>
        </div>
      </div>

      <div className="collections">
        <img src={mainObra} alt="" />

        <div className="more-collections">
          <h2>Confira as ultimas coleções</h2>
          <Button label="ver mais" />
        </div>
      </div>
    </div>
  );
}
