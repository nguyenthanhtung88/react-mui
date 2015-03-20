var React = require('react'),
  mui = require('material-ui'),
  DatePicker = mui.DatePicker;

var RegisterBirthday = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Choose Birthday</label>
        <br/>
        <DatePicker
          hintText="Birthday" />
      </li>
    );
  }
});

module.exports = RegisterBirthday;