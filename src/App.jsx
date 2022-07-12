import './App.css';
import SideBar from './Components/SideBar/SideBar' ;
import Result from './Components/Result/Result';


function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <SideBar/>
      </div>
      <div className='resultSection'>
        <Result/>
      </div>
    </div>
  );
}

export default App;
