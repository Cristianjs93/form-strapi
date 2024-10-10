import Strapi from './icons/Strapi';
import '../styles/logo.css';

export default function Logo() {
  return (
    <section className='logo-container'>
      <Strapi />
      <h1 className='logo-title'>Get started</h1>
    </section>
  );
}
