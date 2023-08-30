function QuizResult (props) {
    return (
       <div className="show-score">
       You Score: {props.Score},
       Total Score: {props.TotalScore}
    </div>
    )
}

export default QuizResult;