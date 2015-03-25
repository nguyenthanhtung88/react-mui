var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var ValidationMixin = require('react-validation-mixin');
var Joi = require('joi');

var RegisterName = React.createClass({
  mixins: [ValidationMixin],
  validatorTypes: {
    first_name: Joi.string().max(64).required(),
    last_name: Joi.string().max(64).required()
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

    var currentErrors = this.state.hasOwnProperty('errors') ? this.state.errors : {};

    if (this.state.name_kana.length && !this.isKana(this.state.name_kana)) {
      validateOk = false;

      currentErrors['name_kana'] = ["'name_kana' is not valid"];
    } else {
      currentErrors['name_kana'] = [];
    }

    this.setState({errors: currentErrors});

    this.props.markStep(this.props.step, validateOk);
  },
  isKana: function(text) {
    return !!text.toString().match(/^[\u3040-\u3096|\u30A1-\u30FA|\uFF66-\uFF9D|\u31F0-\u31FF]+$/);
  },
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <div className="fs-field-label fs-anim-upper">
          {"What\'s your name?"}<br/>
          <span className="font-size-small">* requirement</span>
        </div>

        <div className="fs-anim-lower">
          <div className="fs-field-label-register-name">First Name *</div>
          <TextField
            name="first_name"
            errorText={this.getErrorText('first_name')}
            onChange={this._handleInputChange} /><br/>

          <div className="fs-field-label-register-name">Middle Name</div>
          <TextField
            name="middle_name"
            onChange={this._handleInputChange} /><br/>

          <div className="fs-field-label-register-name">Last Name *</div>
          <TextField
            name="last_name"
            errorText={this.getErrorText('last_name')}
            onChange={this._handleInputChange} /><br/>

          <div className="fs-field-label-register-name">Kana Name</div>
          <TextField
            name="name_kana"
            errorText={this.getErrorText('name_kana')}
            onChange={this._handleInputChange} />
        </div>
      </li>
    );
  }
});

module.exports = RegisterName;