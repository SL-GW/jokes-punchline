import "./App.css";
import Joke from "./Joke";

function App() {
  return (
    <div className="App">
      <Joke setup="What do you call a deer with no eyes?" punchline="No idea" />
      <Joke
        setup="What do you call a deer with no eyes and no legs?"
        punchline="Still no idea"
      />
      <Joke
        setup="What do you call a dinosaur with no eyes?"
        punchline="Do you think he saw us?"
      />
      <Joke
        setup="How do you hide an elephant in a cherry tree?"
        punchline="Paint its nails red"
      />
    </div>
  );
}

export default App;
