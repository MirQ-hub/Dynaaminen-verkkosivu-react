    
    import './App.css';
    import { useState } from 'react';
    import Extra from './Extra';

      
      function App() {

    const [weight, setWeight] = useState(0);
    const [gender, setGender] = useState("male");
    const [time, setTime] = useState(1);
    const [bottle, setBottle] = useState(1)
    const [result, setResult] = useState("");

    function calculatePromil(e){
      e.preventDefault();
    const litres = bottle*0.33;
    const grams = litres*8*4.5; 
    const burning = weight/10;
    const left = grams-(burning*time);
    let result = 0;
   

      if(gender === 'male'){
      result=(left/(weight*0.7))
      }
      else{ 
        result=(left/(weight*0.6))
        }
        if(result<0){
        return setResult(result=0)
      }
      else{
         setResult(result.toFixed(2))
      }
    }
        
        return (
          <>
          <form onSubmit={calculatePromil}>
            <h2>ALCOMETER</h2>
            <div>
              <label>Weight</label>
              <input type="number" name="weight" step="1" value={weight} 
              onChange={e=>setWeight(e.target.value)}></input>
            </div>
            <div>
            <label>Drinks</label>
            <select type="number" name="bottle" value={bottle}onChange={e=>setBottle(e.target.value)}><Extra/></select>
            </div>
            <div>
            <label>Time</label>
            <select type="number" name="time" value={time}onChange=
            {e=>setTime(e.target.value)}><Extra/></select>
            </div>
            <div>
            <label>Gender</label>
            <input type="radio" name="gender" value="male" defaultChecked onChange={e=>setGender(e.target.value)}/>
            <label>Male</label>
            <input type="radio" name="gender" value="female" 
              onChange={e=>setGender(e.target.value)}/><label>Female</label>
            </div>
            <div>
            <output>{result} </output>  
            </div>
            <button>Calculate</button>
          
          </form>
          </>

          
        );
      }

      export default App;
