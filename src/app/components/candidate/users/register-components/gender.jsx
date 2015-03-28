var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  RadioButtonGroup = mui.RadioButtonGroup,
  RadioButton = mui.RadioButton;

var RegisterGender = React.createClass({
  getInitialState: function() {
    return {
      gender: ''
    };
  },
  _handleTouchTap: function(genderValue) {
    this.setState({gender: genderValue});

    this.props.markStep(this.props.step, true);

    this.props.updateFormData({gender: genderValue});
    this.props.gotoNextStep();
  },
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <div className="fs-field-label fs-anim-upper">
          Are you male or female?
        </div>

        <div className="fs-anim-lower fs-gender-wrap">
          <div className={"fs-gender" + (this.state.gender === 0 ? ' fs-gender-selected' : '')} onTouchTap={this._handleTouchTap.bind(this, 0)}>
            I am male<br/>
            <img src="images/man.png" />
          </div>
          <div className={"fs-gender" + (this.state.gender === 1 ? ' fs-gender-selected' : '')} onTouchTap={this._handleTouchTap.bind(this, 1)}>
            I am female<br/>
            <img src="images/woman.png" />
          </div>
        </div>
      </li>
    );
  }
});

module.exports = RegisterGender;