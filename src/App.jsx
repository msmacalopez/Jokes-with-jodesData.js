import Joke from "./Joke.jsx";
import jokesData from "./jokeData.js";

function App() {
  // const jokeElements = [];
  const jokeElements = jokesData.map((joke, index) => {
    return <Joke key={index} setup={joke.setup} punchline={joke.punchline} />;
  });

  return <>{jokeElements}</>;
}

export default App;
