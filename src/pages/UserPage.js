import {Component} from "react";
import {connect} from "react-redux";

// @connect(({user}) => ({user}))
class UserPage extends Component {
  render() {
    console.log("user", this.props.user); //sy-log
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}
export default connect(({user})=>({user}))(UserPage);
