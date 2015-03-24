var React = require('react'),
  mui = require('material-ui'),
  DatePicker = mui.DatePicker;

var ValidationMixin = require('react-validation-mixin');
var Joi = require('joi');

var RegisterBirthday = React.createClass({
  mixins: [ValidationMixin],
  validatorTypes: {
    birthday: Joi.string().required()
  },
  getInitialState: function() {
    return {
      birthday: ""
    }
  },
  getErrorText: function(key) {
    var errorMessages = this.getValidationMessages(key);
    var textMessage = '';

    for (var i = errorMessages.length - 1; i >= 0; i--) {
      textMessage += errorMessages[i] + ' ';
    };

    return textMessage;
  },
  _handleInputChange: function(e, d) {
    var birthdayElement = this.refs.birthday;
    var currentState = this.state;
    currentState.birthday = birthdayElement.props.formatDate(d);

    this.setState(currentState);

    this.validate('birthday', this.doValidate);
  },
  doValidate: function() {
    var validateOk = true;

    for (var index in this.validatorTypes) {
      if (this.validatorTypes.hasOwnProperty(index)) {
        if (!this.state.errors.hasOwnProperty(index) || (this.state.errors.hasOwnProperty(index) && !this.isValid(index))) {
          validateOk = false;
          break;
        };
      };
    }

    this.props.markStep(this.props.step, validateOk);
  },
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Choose Birthday</label>

        <div className="fs-anim-lower">
          <DatePicker
            hintText="Birthday"
            ref="birthday"
            name="birthday"
            errorText={this.getErrorText('birthday')}
            onChange={this._handleInputChange} />
        </div>
      </li>
    );
  }
});

module.exports = RegisterBirthday;