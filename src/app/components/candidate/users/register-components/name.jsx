var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var ValidationMixin = require('react-validation-mixin');
var Joi = require('joi');

var RegisterName = React.createClass({
  mixins: [ValidationMixin],
  validatorTypes: {
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    name_kana: Joi.string().required()
  },
  getInitialState: function() {
    return {
      first_name: "",
      middle_name: "",
      last_name: "",
      name_kana: ""
    };
  },
  getErrorText: function(key) {
    var errorMessages = this.getValidationMessages(key);
    var textMessage = '';

    for (var i = errorMessages.length - 1; i >= 0; i--) {
      textMessage += errorMessages[i] + ' ';
    };

    return textMessage;
  },
  _handleInputChange: function(e) {
    var currentState = this.state;
    currentState[e.target.name] = e.target.value;

    this.setState(currentState);

    this.validate(e.target.name, this.doValidate);
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
        <label className="fs-field-label fs-anim-upper">{"What\'s your name?"}</label>

        <div className="fs-anim-lower">
          <TextField
            hintText="First Name *"
            name="first_name"
            errorText={this.getErrorText('first_name')}
            onChange={this._handleInputChange} /><br/>
          <TextField
            hintText="Middle Name"
            name="middle_name"
            onChange={this._handleInputChange} /><br/>
          <TextField
            hintText="Last Name *"
            name="last_name"
            errorText={this.getErrorText('last_name')}
            onChange={this._handleInputChange} /><br/>
          <TextField
            hintText="Name Kana *"
            name="name_kana"
            errorText={this.getErrorText('name_kana')}
            onChange={this._handleInputChange} />
        </div>
      </li>
    );
  }
});

module.exports = RegisterName;