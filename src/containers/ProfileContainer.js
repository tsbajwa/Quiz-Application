import React from "react";
import { Profile } from "../components";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions";
import { fetchAnswerCount } from "../helpers/api";
import { arrangeObjectKeysbyValue } from "../helpers/quiz";
class ProfileContainer extends React.Component {
  state = {
    orderedWrongAnswerCount: [],
  };
  componentDidMount() {
    if (Object.keys(this.props.questions).length === 2) {
      this.props.getQuestions();
    }
    fetchAnswerCount(this.props.uid).then(value => {
      if (value === null) {
        return;
      }
      const orderedWrongAnswerCount = arrangeObjectKeysbyValue(value);
      this.setState({
        orderedWrongAnswerCount,
      });
    });
  }

  render() {
    return (
      <Profile
        questions={this.props.questions}
        orderedWrongAnswerCount={this.state.orderedWrongAnswerCount}
        name={this.props.name}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.name,
    questions: state.questions,
    uid: state.user.authedId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => dispatch(getQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
