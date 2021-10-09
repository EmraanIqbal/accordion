import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import data from "./components/Data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </>
  );
}

export default App;
