import { useState } from "react";
import { QuizData } from "../data/Quizapp";
import QuizResult from "./QuizResult";

function Quiz () {

    const [CurrentQuestion, setCurrentQuestion] = useState(0)
    const [Score, setScore] = useState(0)
    const [SelectedOption, setSelectedOption] = useState(0)
    const [ShowResult, setShowResult] = useState(false)

    const changeQuestion = () => {
        if(CurrentQuestion < QuizData.length - 1){
            setCurrentQuestion(CurrentQuestion + 1)
            setSelectedOption(0)
        }
        else{
            setShowResult(true)
        }
        updateScore();
    }

    const updateScore = () => {
        if(setScore === QuizData[CurrentQuestion].answer){
          setCurrentQuestion(CurrentQuestion + 1)
        }
        
    }
  
  
    return (
        <>
          <p className="heading-txt">Quiz App</p>
          <div className="container">
            {ShowResult ? (
              <QuizResult Score={Score} TotalScore={QuizData.length} />
            ) : (
              <>
                <div className="question">
                  <span>{CurrentQuestion + 1}. </span>
                  <span id="question-txt">{QuizData[CurrentQuestion].question}</span>
                </div>
                <div className="option-container">
                  {QuizData[CurrentQuestion].options.map((x, i) => (
                    <button
                      className={`option-btn ${SelectedOption === i + 1 ? "checked" : ""}`}
                      key={i}
                      onClick={() => setSelectedOption(i + 1)}
                    >
                      {x}
                    </button>
                  ))}
                </div>
                <input
                  type="button" 
                  value="Next"
                  id="next-button"
                  onClick={changeQuestion}
                />
              </>
            )}
          </div>
        </>
      );
      
}

export default Quiz;