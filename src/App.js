import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Tech />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
