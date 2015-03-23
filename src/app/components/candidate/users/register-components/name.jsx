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
        <label className="fs-field-label fs-anim-upper">Name</label>

        <div className="fs-anim-lower">
          <TextField
            hintText="First Name" /><br/>
          <TextField
            hintText="Middle Name" /><br/>
          <TextField
            hintText="Last Name" />
        </div>
      </li>
    );
  }
});

module.exports = RegisterName;