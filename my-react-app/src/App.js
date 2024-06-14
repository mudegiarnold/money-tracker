import './App.css';
import {useState} from "react";

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction() {
    const url = 'process.env.REACT_APP_API_URL';
    console.log(url);
    /*fetch(url)*/
  }
  return (
    <main>
      <h1>$500<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div class="basic">
          <input type="text" 
                 value={name} 
                 onChange={ev => setName(ev.target.value)}
                 placeholder="+400 new Hisense Tv"/>
        <input value={datetime}
                 onChange={ev => setDatetime(ev.target.value)}
                 type="datetime-local"/>
        </div>
        <div class="description">
        <input type="text" 
                 value={description} 
                 onChange={ev => setDescription(ev.target.value)} 
                 placeholder="description"/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
      <div className="transaction">
          <div className="left">
            <div className="name">New Hisense Tv</div>
            <div className="description">It was time for a new Television</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-01-12 13:30</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">It was time for a new Television</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2024-01-12 13:30</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for a Television</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2024-01-12 13:30</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
