var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var testStyle = {
  color: 'white'
};

var RegisterName = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Name</label>
        <br/>
        <TextField
          hintText="First Name" /><br/>
        <TextField
          hintText="Middle Name" /><br/>
        <TextField
          hintText="Last Name" />
      </li>
    );
  }
});

module.exports = RegisterName;