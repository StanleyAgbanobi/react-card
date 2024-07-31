import './App.css';
import Tweet from './Tweet';


function App() {
  const [users, setUsers] = useState([
    { name='John', desc='Today with Elon musk', likes='19M' }
    { name='Mark', desc='Protest in Nigeria 2024', likes='20k'}
    { name='Maro', desc='Tech in 2025', likes='100k'}
  ]);
  
  return (
    <div className='app'>

    <h1>Hello React</h1>
    {users.map(user => (
    <Tweet name={user.name} desc={user.desc} likes={user.likes} />
    ))}

    </div>
  )
  
}


export default App;
