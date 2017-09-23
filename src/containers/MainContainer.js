import React from "react";
import { connect } from "react-redux";
import { firebaseAuth } from "../config/constant";
import { fetchingUserSuccess } from "../redux/actions";
import { NavBarContainer } from "../containers";
class MainContainer extends React.Component {
  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        const userData = user.providerData[0];
        const { displayName, uid } = userData;
        this.props.fetchingUserSuccess(displayName, uid);
      } else {
        //isFetching Starts as true
        //run function to change isFetching to false
      }
    });
  }

  render() {
    return <NavBarContainer />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingUserSuccess: (displayName, uid) => dispatch(fetchingUserSuccess(displayName, uid)),
  };
};
export default connect(null, mapDispatchToProps)(MainContainer);
