var React = require('react'),
  mui = require('material-ui'),
  Select = require('react-select'),
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
      bachelor_name: "",
      master_name: "",
      doctor_name: ""
    }
  },
  _handleInputChange: function(ref, step, e) {
    var currentState = this.state;
    currentState[ref + '_name'] = e.target.value;

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

    if (nextStep == this.state.maxStep && this.state.done) {
      this.props.gotoNextStep();
    };

    this.setState({
      currentStep: nextStep
    });
  },
  _handleSkipButton: function(e) {
    if (this.state.done) {
      this.props.gotoNextStep();
    };
  },
  checkStep: function(step) {
    return (this.state.marked.hasOwnProperty(step) && this.state.marked[step]);
  },
  _getStepClassname: function(numStep) {
    return "fs-academic-history-block" + (this.state.currentStep == numStep ? ' fs-academic-show' : '');
  },
  render: function() {
    var highschoolOptions = [
      { value: '1', label: 'Highschool One' },
      { value: '2', label: 'Highschool Two' },
      { value: '3', label: 'Highschool Three' },
      { value: '4', label: 'Highschool Four' }
    ];

    var bachelorOptions = [
      { value: '1', label: 'Bachelor One' },
      { value: '2', label: 'Bachelor Two' },
      { value: '3', label: 'Bachelor Three' },
      { value: '4', label: 'Bachelor Four' },
    ];

    var masterOptions = [
      { value: '1', label: 'Master One' },
      { value: '2', label: 'Master Two' },
      { value: '3', label: 'Master Three' },
      { value: '4', label: 'Master Four' },
    ];

    var doctorItems = [
      { payload: '0', text: 'None' },
      { payload: '1', text: 'Doctor One' },
      { payload: '2', text: 'Doctor Two' },
      { payload: '3', text: 'Doctor Three' },
      { payload: '4', text: 'Doctor Four' },
    ];

    return (
      <li className={this.props.stepClassname}>
        <div className={this._getStepClassname(1)}>
          <div className="fs-field-label fs-anim-upper">
            What highschool did you graduate?<br/>
            <span className="font-size-small">This is required</span>
          </div>

          <div className="fs-anim-lower">
            <TextField
              name="highschool_name"
              hintText="Your highschool name"
              ref="highschool_name"
              onChange={this._handleInputChange.bind(this, 'highschool', 1)} /><br/>

            <input ref="highschool_id" name="m_highschool_id" value="" type="hidden" />

            <ButtonNext disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
          </div>
        </div>

        <div className={this._getStepClassname(2)}>
          <div className="fs-field-label fs-anim-upper">
            What university did you graduate?<br/>
            <span className="font-size-small">This is required</span>
          </div>

          <div className="fs-anim-lower">
            <TextField
              name="bachelor_name"
              hintText="Your university name"
              ref="bachelor_name"
              onChange={this._handleInputChange.bind(this, 'bachelor', 2)} /><br/>

            <input ref="bachelor_id" name="m_bachelor_id" value="" type="hidden" />

            <ButtonNext disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
          </div>
        </div>

        <div className={this._getStepClassname(3)}>
          <div className="fs-field-label fs-anim-upper">
            What master course did you graduate?
          </div>

          <div className="fs-anim-lower">
            <TextField
              name="master_name"
              hintText="Your course name"
              ref="bachelor_name"
              onChange={this._handleInputChange.bind(this, 'master', 3)} />

            <input ref="master_id" name="m_master_id" value="" type="hidden" /><br/>

            <ButtonSkip disabled={false} onTouchTap={this._handleSkipButton} />
            <ButtonNext disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
          </div>
        </div>

        <div className={this._getStepClassname(4)}>
          <div className="fs-field-label fs-anim-upper">
            What doctor course did you graduate?
          </div>

          <div className="fs-anim-lower">
            <TextField
              name="doctor_name"
              hintText="Your course name"
              ref="doctor_name"
              onChange={this._handleInputChange.bind(this, 'doctor', 4)} />

            <input ref="doctor_id" name="m_doctor_id" value="" type="hidden" /><br/>

            <ButtonSkip disabled={false} onTouchTap={this._handleSkipButton} />
            <ButtonNext disabled={!this.checkStep(this.state.currentStep)} onTouchTap={this._handleTouchTap} />
          </div>
        </div>
      </li>
    );
  }
});

module.exports = AcademicHistory;