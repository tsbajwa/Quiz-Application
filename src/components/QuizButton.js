import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
export default class QuizButton extends React.Component {
  renderButtons = () => {
    const showPrevBtn = this.props.currentQuestionIndex === 0 ? false : true;
    const showNextBtn =
      this.props.currentQuestionIndex > this.props.lastAnsweredQuestionIndex ? false : true;
    const quizFinished =
      this.props.lastAnsweredQuestionIndex + 1 === this.props.quizLength ? true : false;

    if (quizFinished) {
      return (
        <div>
          <Link to="/results">See Results</Link>
        </div>
      );
    } else {
      return (
        <div>
          {showPrevBtn ? (
            <Button text="Previous" onClick={this.props.handlePreviousButtonClick} />
          ) : null}

          {showNextBtn ? <Button text="Next" onClick={this.props.handleNextButtonClick} /> : null}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

// export default function QuizButton(props) {
//   //TODO: Change 'Next' to 'Finish' when done and change onClick Method
//   const showPrevBtn = props.currentQuestionIndex === 0 ? false : true;
//   const showNextBtn = props.currentQuestionIndex > props.lastAnsweredQuestionIndex ? false : true;
//   const quizFinished = props.lastAnsweredQuestionIndex + 1 === props.quizLength ? true: false;
//   return (

//     {quizFinished ? <p>See Results</p> :}

//     // <div>
//     //   {showPrevBtn ? <Button text="Previous" onClick={props.handlePreviousButtonClick} /> : null}

//     //   {showNextBtn ? <Button text="Next" onClick={props.handleNextButtonClick} /> : null}
//     // </div>
//   );
// }
// //if last answeredq === quizlength
// //Link to see results
