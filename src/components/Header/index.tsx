import { Button } from '../Button';
import './styles.scss';

export function Header() {
  return (
    <header id="header" className="container">
      <h1>Art.</h1>
      <input type="search" placeholder="Buscar" />
      <Button label="entrar" />
    </header>
  );
}
