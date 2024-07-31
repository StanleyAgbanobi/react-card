import './App.css';
import Tweet from './Tweet';

function App() {
  return (
    <div className='app'>
    <h1>Hello React</h1>
    <Tweet name='John' desc='Today with Elon' likes='19M' />
    <Tweet name='Mark' desc='Protest in Nigeria' likes='20k' />
    <Tweet name='Maro' desc='Tech in 2025' likes='100k' />
    </div>
  );
}

export default App;
