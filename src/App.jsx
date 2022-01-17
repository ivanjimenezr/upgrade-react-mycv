
import { useState } from 'react';
import  Hero  from './components/Hero/Hero';
import  About  from './components/About/About';
import  Education  from './components/Education/Education';
import  Experience  from './components/Experience/Experience';
import  More  from './components/More/More';
import  {CV}  from './CV/CV';
import './App.css';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    
    <div className="App">
      
      <Hero hero={hero} />
      <About hero={hero}/>
      <div className='title'><h2>
      <button className="custom-btn btn-4" onClick={() => setShowEducation(true)}>
              Education
      </button>
      <button className="custom-btn btn-4" onClick={() => setShowEducation(false)} >
        Experience
      </button>
      </h2>
      </div>
      
      
        {showEducation ? <Education education={education} /> : <Experience experience={experience} />}
      
      
      <More languages={languages}  habilities={habilities}  volunteer={volunteer}/>
      
    </div>
  );
}

export default App;
