var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var WorkExperience = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Work Experience</label>
        <br/>
        <TextField
          hintText="" />
      </li>
    );
  }
});

module.exports = WorkExperience;