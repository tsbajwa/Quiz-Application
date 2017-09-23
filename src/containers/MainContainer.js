import React from "react";
import { connect } from "react-redux";
import { firebaseAuth } from "../config/constant";
import { fetchingUserSuccess, removeFetchingUser, authUser } from "../redux/actions";
import { NavBarContainer } from "../containers";
class MainContainer extends React.Component {
  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        const userData = user.providerData[0];
        const { displayName, uid } = userData;
        this.props.fetchingUserSuccess(displayName, uid);
        this.props.authUser();
      } else {
        this.props.removeFetchingUser();
      }
    });
  }

  render() {
    return this.props.isFetching === true ? (
      <div>Loading</div>
    ) : (
      <div>
        <NavBarContainer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.user.isFetching,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchingUserSuccess: (displayName, uid) => dispatch(fetchingUserSuccess(displayName, uid)),
    removeFetchingUser: () => dispatch(removeFetchingUser()),
    authUser: () => dispatch(authUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
