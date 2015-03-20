var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var RegisterAccount = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-title">Account</label>
        <br/>

        <TextField
          hintText="Email"
          name="email" />
        <br/>
        <TextField
          hintText="Password" />
      </li>
    );
  }
});

module.exports = RegisterAccount;