var React = require('react'),
  mui = require('material-ui'),
  Select = require('react-select'),
  ReactWidgets = require('react-widgets'),
  Combobox = ReactWidgets.Combobox,
  DropDownMenu = mui.DropDownMenu,
  TextField = mui.TextField,
  ButtonNext = require('./button-next.jsx'),
  ButtonSkip = require('./button-skip.jsx');

var ValidationMixin = require('react-validation-mixin');
var Joi = require('joi');

var AcademicHistory = React.createClass({
  mixins: [ValidationMixin],
  validatorTypes: {
    highschool_name: Joi.string().required(),
    bachelor_name: Joi.string().required()
  },
  getInitialState: function() {
    return {
      currentStep: 1,
      maxStep: 4,
      done: false,
      marked: [null, false, false, true, true],
      highschool_name: "",
      m_highschool_id: null,
      bachelor_name: "",
      m_bachelor_id: null,
      master_name: "",
      m_master_id: null,
      doctor_name: "",
      m_doctor_id: null
    }
  },
  _handleInputChange: function(ref, step, value) {
    var currentState = this.state;
    currentState[ref + '_name'] = (typeof value === 'object') ? value.name : value;
    currentState['m_' + ref + '_id'] = (typeof value === 'object') ? value.id : null;

    this.setState(currentState);

    this.validate(ref + '_name', this.doValidate.bind(this, ref + '_name'));
  },
  doValidate: function(key) {
    var validateOk = true;

    for (var index in this.validatorTypes) {
      if (this.validatorTypes.hasOwnProperty(index)) {
        if (!this.state.errors.hasOwnProperty(index) || (this.state.errors.hasOwnProperty(index) && !this.isValid(index))) {
          validateOk = false;
          break;
        };
      };
    }

    this.markStep(this.state.currentStep, this.isValid(key));
    this.setState({done: validateOk});
    this.props.markStep(this.props.step, this.isValid(key));
  },
  markStep: function(step, markedFlag) {
    var marked = typeof(markedFlag) == 'undefined' ? false : true;
    var stepMarked = this.state.marked;

    stepMarked[step] = markedFlag;

    this.setState({marked: stepMarked});
  },
  _handleTouchTap: function(e) {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? this.state.maxStep : this.state.currentStep + 1;

    this.props.markStep(this.props.step, this.state.marked[nextStep]);

    if (this.state.currentStep == 3 && !this.state.master_name.length) {
      return false;
    };

    if (this.state.currentStep == this.state.maxStep && this.state.done) {
      this.props.updateFormData(this._prepareTransferFormData());
      this.props.gotoNextStep();
    };

    this.setState({
      currentStep: nextStep
    });
  },
  _handleSkipButton: function(e) {
    if (this.state.done) {
      this.props.updateFormData(this._prepareTransferFormData());
      this.props.gotoNextStep();
    };
  },
  _prepareTransferFormData: function() {
    return {
      highschool: {
        id: this.state.m_highschool_id,
        name: this.state.highschool_name
      },
      bachelor: {
        id: this.state.m_bachelor_id,
        name: this.state.bachelor_name
      },
      master: {
        id: this.state.m_master_id,
        name: this.state.master_name
      },
      doctor: {
        id: this.state.m_doctor_id,
        name: this.state.doctor_name
      }
    }
  },
  checkStep: function(step) {
    return (this.state.marked.hasOwnProperty(step) && this.state.marked[step]);
  },
  _getStepClassname: function(numStep) {
    return "fs-academic-history-block" + (this.state.currentStep == numStep ? ' fs-academic-show' : '');
  },
  render: function() {
    var highschoolOptions = [
      { id: 1, name: 'Highschool One' },
      { id: 2, name: 'Highschool Two' },
      { id: 3, name: 'Highschool Three' },
      { id: 4, name: 'Highschool Four' }
    ];

    var bachelorOptions = [
      { id: 1, name: 'Bachelor One' },
      { id: 2, name: 'Bachelor Two' },
      { id: 3, name: 'Bachelor Three' },
      { id: 4, name: 'Bachelor Four' },
    ];

    var masterOptions = [
      { id: 1, name: 'Master One' },
      { id: 2, name: 'Master Two' },
      { id: 3, name: 'Master Three' },
      { id: 4, name: 'Master Four' },
    ];

    var doctorOptions = [
      { id: 1, name: 'Doctor One' },
      { id: 2, name: 'Doctor Two' },
      { id: 3, name: 'Doctor Three' },
      { id: 4, name: 'Doctor Four' },
    ];

    return (
      <li className={this.props.stepClassname}>
        <div className={this._getStepClassname(1)}>
          <div className="fs-field-label fs-anim-upper">
            What highschool did you graduate?<br/>
            <span className="font-size-small">This is required</span>
          </div>

          <div className="fs-anim-lower">
            <div className="fs-company-history">
              <Combobox
                valueField='id' textField='name'
                data={highschoolOptions}
                filter="contains"
                placeholder="Your highschool name"
                ref="highschool_name"
                onChange={this._handleInputChange.bind(this, 'highschool', 1)} />
            </div>

            <ButtonNext disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
          </div>
        </div>

        <div className={this._getStepClassname(2)}>
          <div className="fs-field-label fs-anim-upper">
            What university did you graduate?<br/>
            <span className="font-size-small">This is required</span>
          </div>

          <div className="fs-anim-lower">
            <div className="fs-company-history">
              <Combobox
                valueField='id' textField='name'
                data={bachelorOptions}
                filter="contains"
                placeholder="Your university name"
                ref="bachelor_name"
                onChange={this._handleInputChange.bind(this, 'bachelor', 2)} />
            </div>

            <ButtonNext disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
          </div>
        </div>

        <div className={this._getStepClassname(3)}>
          <div className="fs-field-label fs-anim-upper">
            What master course did you graduate?
          </div>

          <div className="fs-anim-lower">
            <div className="fs-company-history">
              <Combobox
                valueField='id' textField='name'
                data={masterOptions}
                filter="contains"
                placeholder="Your master course name"
                ref="master_name"
                onChange={this._handleInputChange.bind(this, 'master', 3)} />
            </div>
            <ButtonNext skipable="skipable" disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
            <ButtonSkip disabled={false} onTouchTap={this._handleSkipButton} />
          </div>
        </div>

        <div className={this._getStepClassname(4)}>
          <div className="fs-field-label fs-anim-upper">
            What doctor course did you graduate?
          </div>

          <div className="fs-anim-lower">
            <div className="fs-company-history">
              <Combobox
                valueField='id' textField='name'
                data={doctorOptions}
                filter="contains"
                placeholder="Your doctor course name"
                ref="doctor_name"
                onChange={this._handleInputChange.bind(this, 'doctor', 4)} />
              </div>

            <ButtonNext skipable="skipable" disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
            <ButtonSkip disabled={false} onTouchTap={this._handleSkipButton} />
          </div>
        </div>
      </li>
    );
  }
});

module.exports = AcademicHistory;