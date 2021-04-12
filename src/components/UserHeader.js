import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
  const { user } = props;

  if (!user) return "Loading...";

  return <h3>{user.name}</h3>;
};

const mapStateToProps = (state, props) => {
  return { user: state.users.find((u) => u.id === props.userId) };
};

export default connect(mapStateToProps)(UserHeader);
