import Form from './components/Form';
import Logo from './components/Logo';
import './styles/app.css';

export default function App() {
  return (
    <div className='mask'>
      <main className='form-container'>
        <Logo />
        <Form />
      </main>
    </div>
  );
}
