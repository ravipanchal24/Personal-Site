import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Tech from './components/Tech';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Tech />
      <Projects />
    </div>
  );
}

export default App;
