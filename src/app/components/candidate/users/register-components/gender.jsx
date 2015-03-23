var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  RadioButtonGroup = mui.RadioButtonGroup,
  RadioButton = mui.RadioButton;

var RegisterGender = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Choose Gender</label>

        <div className="fs-anim-lower">
          <RadioButtonGroup
            name="gender"
            defaultSelected="0">
            <RadioButton
              value="0"
              label="Male"
              defaultChecked={true} />
            <RadioButton
              value="1"
              label="Female" />
          </RadioButtonGroup>
        </div>
      </li>
    );
  }
});

module.exports = RegisterGender;