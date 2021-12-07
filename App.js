
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
function App() {
  return (
    <>
      <Navbar title="Hello"/>
      <div className="container my-3">
        <Textarea heading="Enter your text here"/>
      </div>
    </>
  );
}

export default App;
