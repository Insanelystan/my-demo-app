import React from "react";

function Welcome(props) {
  console.log(props);
  let name = (props.match && props.match.params.name) || props.name;
  // let name = "Jack";
  // console.log(props.match.params);
  return <div className="Welcome">Welcome, {name}</div>;
}
export default Welcome;
