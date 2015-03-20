var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  RadioButtonGroup = mui.RadioButtonGroup,
  RadioButton = mui.RadioButton;

var RegisterGender = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Choose Gender</label>
        <br/>

        <RadioButtonGroup
          defaultSelected="0">
          <RadioButton
            value="0"
            label="Male" />
          <RadioButton
            value="1"
            label="Female" />
        </RadioButtonGroup>
      </li>
    );
  }
});

module.exports = RegisterGender;