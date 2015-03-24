var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  TextField = mui.TextField;

var ValidationMixin = require('react-validation-mixin');
var Joi = require('joi');

var CandidateSignup = React.createClass({

  mixins: [Router.Navigation, Router.State, ValidationMixin, React.addons.LinkedStateMixin],
  validatorTypes: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required()
  },
  getInitialState: function() {
    return {
      email: null,
      password: null,
      confirm_password: null,
      errorText: {}
    }
  },
  getErrorText: function(key) {
    if (typeof this.state.errorText[key] != 'undefined') {
      return this.state.errorText[key];
    };

    return '';
  },
  doValidate: function() {
    // Validate email
    this.setState({
      email: this.refs.email.getValue()
    });

    this.handleValidation('email');

    // console.log(this.state);

    // console.log(this.state.email);
    console.log(this.getValidationMessages('email'));
  },
  render: function() {
    return (
      <div className="fs-form-wrap">
        <div className="fs-form fs-sign-up">
          <p>Registration</p>

          <TextField
            hintText="Email *"
            name="email"
            ref="email"
            errorText={this.getErrorText('email')}
            onBlur={this.doValidate}
            onChange={this._handleInputChange} /><br/>

          <TextField
            hintText="Password *"
            name="password" /><br/>

          <TextField
            hintText="Confirm Password *"
            name="confirm_password" /><br/>

          <RaisedButton label="Sign Up" primary={true} onTouchTap={this.doValidate} />
        </div>
      </div>
    );
  }
});

module.exports = CandidateSignup;