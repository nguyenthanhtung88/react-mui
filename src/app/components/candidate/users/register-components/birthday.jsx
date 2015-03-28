var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu,
  ButtonNext = require('./button-next.jsx');

var ValidationMixin = require('react-validation-mixin');
var Joi = require('joi');

var RegisterBirthday = React.createClass({
  mixins: [ValidationMixin],
  validatorTypes: {
    birthday_year: Joi.required(),
    birthday_month: Joi.required(),
    birthday_day: Joi.required()
  },
  getInitialState: function() {
    return {
      birthday_year: "",
      birthday_month: "",
      birthday_day: ""
    }
  },
  _getYearLists: function() {
    var currentYear = new Date().getFullYear(),
      minYear = currentYear - 40,
      maxYear = currentYear - 18;

    var yearLists = [{payload: "", text: ""}];
    for (var i = maxYear; i >= minYear; i--) {
      yearLists.push({payload: i, text: i});
    };

    return yearLists;
  },
  _getMonthLists: function() {
    return [
      {payload: '', text: ''},
      {payload: '1', text: 'January'},
      {payload: '2', text: 'February'},
      {payload: '3', text: 'March'},
      {payload: '4', text: 'April'},
      {payload: '5', text: 'May'},
      {payload: '6', text: 'June'},
      {payload: '7', text: 'July'},
      {payload: '8', text: 'August'},
      {payload: '9', text: 'September'},
      {payload: '10', text: 'October'},
      {payload: '11', text: 'November'},
      {payload: '12', text: 'December'}
    ];
  },
  _getDayLists: function() {
    var dayLists = [{payload: '', text: ''}];
    for (var i = 1; i <= 31; i++) {
      dayLists.push({payload: i, text: i});
    };

    return dayLists;
  },
  getErrorText: function(key) {
    var errorMessages = this.getValidationMessages(key);
    var textMessage = '';

    for (var i = errorMessages.length - 1; i >= 0; i--) {
      textMessage += errorMessages[i] + ' ';
    };

    return textMessage;
  },
  _handleTouchTap: function() {
    var transferFormData = {
      birthday: this.state.birthday_year + "-" + this.state.birthday_month + "-" + this.state.birthday_day
    };

    this.props.updateFormData(transferFormData);

    this.props.gotoNextStep();
  },
  _handleInputYearChange: function(e, selectedIndex, menuItem) {
    this.setState({birthday_year: menuItem.payload});
    this.validate('birthday_year', this.doValidate);
  },
  _handleInputMonthChange: function(e, selectedIndex, menuItem) {
    this.setState({birthday_month: menuItem.payload});
    this.validate('birthday_month', this.doValidate);
  },
  _handleInputDayChange: function(e, selectedIndex, menuItem) {
    this.setState({birthday_day: menuItem.payload});
    this.validate('birthday_day', this.doValidate);
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

    if (validateOk) {
      validateOk = this.checkValidDate(this.state.birthday_year, this.state.birthday_month, this.state.birthday_day);
    };

    this.props.markStep(this.props.step, validateOk);
  },
  checkValidDate: function(year, month, day) {
    var tmpDate = new Date(year, --month, day);
    return month === tmpDate.getMonth();
  },
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <div className="fs-field-label fs-anim-upper">
          When is your birthday?<br/>
          <span className="font-size-small">* requirement</span>
        </div>

        <div className="fs-anim-lower">
          <div className="fs-field-label-register-name">Year *</div>
          <DropDownMenu
            name="birthday_year"
            menuItems={this._getYearLists()}
            onChange={this._handleInputYearChange} /><br/>

          <div className="fs-field-label-register-name">Month *</div>
          <DropDownMenu
            name="birthday_month"
            menuItems={this._getMonthLists()}
            onChange={this._handleInputMonthChange} /><br/>

          <div className="fs-field-label-register-name">Day *</div>
          <DropDownMenu
            name="birthday_day"
            menuItems={this._getDayLists()}
            onChange={this._handleInputDayChange} /><br/>

          <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this._handleTouchTap} />
        </div>
      </li>
    );
  }
});

module.exports = RegisterBirthday;