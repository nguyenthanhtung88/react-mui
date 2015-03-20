var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var AcademicHistory = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Academic Histories</label>
        <br/>
        <TextField
          hintText="" />
      </li>
    );
  }
});

module.exports = AcademicHistory;