import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
function App() {
  return (
    <div className="container">
      <div>
        <h1>Bitto Aggarwal</h1><br />
        <p>Software Developer,Educator at Geekster</p>
        <a href="/">LinkedIn </a>
        <a href="/"> Github</a>
      </div><br /><hr />
      <Experiences /><hr />
      <Skills /><hr />
      <Hobbies />


    </div>
  );
}

export default App;
