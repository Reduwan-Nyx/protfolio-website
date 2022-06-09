import './App.css';
import About from './Components/About/About';
import Contract from './Components/Contract/Contract';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contract></Contract>
    </div>
  );
}

export default App;
