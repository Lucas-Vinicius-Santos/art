import './styles.scss';

interface ButtonProps {
  label: String;
}

export function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}
