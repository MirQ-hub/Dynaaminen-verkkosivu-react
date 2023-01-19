import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <form onSubmit={laske}>
   <h3>Valuuttalaskuri</h3>
   <div>
   <label>Eurot</label>
   <input value={eurot} onChange={e => setEurot(e.target.
value)} type='number'/>
   </div>
   <div>
   <label>Punnat</label>
   <output>{punnat}</output>
   </div>
   <button>Laske</button>
 </form>
  )
}

export default App;
