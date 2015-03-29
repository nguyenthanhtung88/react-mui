var React = require('react'),
  mui = require('material-ui'),
  RegisterAccount = require('./register-components/account.jsx'),
  RegisterName = require('./register-components/name.jsx'),
  RegisterBirthday = require('./register-components/birthday.jsx'),
  RegisterGender = require('./register-components/gender.jsx'),
  AcademicHistory = require('./register-components/academic-history.jsx'),
  SkillsLanguage = require('./register-components/skills-language.jsx'),
  LogicalIT = require('./register-components/logical-it.jsx'),
  SkillsIT = require('./register-components/skills-it.jsx'),
  WorkExperience = require('./register-components/work-experience.jsx'),
  Other = require('./register-components/other.jsx'),
  NavLinks = require('./register-components/nav-links.jsx'),
  ProgressBar = require('./register-components/progress-bar.jsx')
  RaisedButton = mui.RaisedButton;

var controlLinks = [
  {text: 'Name'},
  {text: 'Birthday'},
  {text: 'Gender'},
  {text: 'Academic History'},
  {text: 'Skills (Language)'},
  {text: 'Logical and IT'},
  {text: 'Skills (IT)'},
  {text: 'Work Experience'},
  {text: 'Other'}
]

var CandidateRegister = React.createClass({
  getDefaultProps: function() {
    return {
      percentStepMap: [0, 10, 20, 30, 50, 60, 70, 80, 90, 100]
    }
  },
  getInitialState: function() {
    return {
      currentStep: 1,
      lastStep: 1,
      maxStep: 9,
      progressStep: 1,
      textButton: 'next',
      hideButton: true,
      stepMarked: [],
      currentPercent: 0,
      formData: {}
    }
  },
  componentDidMount: function() {
    document.addEventListener('keydown', this._handleKeyDown);
  },
  componentWillUnmount: function() {
    document.removeEventListener('keydown', this._handleKeyDown);
  },
  updateFormData: function(data) {
    var currentFormData = this.state.formData;

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        currentFormData[key] = data[key];
      };
    }

    this.setState({formData: currentFormData});
  },
  _handleKeyDown: function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 13 && this.checkStep(this.state.currentStep) && (e.target.parentElement.getAttribute('role') != "combobox")) {
      e.preventDefault();
      this._handleTouchTap();
    };
  },
  _handleTouchTap: function() {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? 0 : this.state.currentStep + 1;
    var progressStep = (nextStep > this.state.progressStep) ? nextStep : this.state.progressStep;

    if (!nextStep) {
      this.setState({currentPercent: 100});
      alert('Done ...');
      return false;
    };

    this.setState({
      currentStep: nextStep,
      progressStep: progressStep,
      lastStep: this.state.currentStep,
      currentPercent: this.props.percentStepMap[progressStep - 1],
      textButton: nextStep == this.state.maxStep ? 'Submit' : 'next'
    });

  },
  _getStepClassname: function(numStep) {
    return "fs-step" + (this.state.currentStep == numStep ? ' fs-current fs-show' : this.state.lastStep == numStep ? ' fs-hide' : '');
  },
  checkStep: function(step) {
    return true;
    return (this.state.stepMarked.hasOwnProperty(step) && this.state.stepMarked[step]);
  },
  handleNavStepChange: function(nextStep) {
    if (nextStep != this.state.currentStep && this.checkStep(nextStep) && this.checkStep(this.state.currentStep)) {
      this.setState({
        currentStep: nextStep,
        lastStep: this.state.currentStep,
        textButton: nextStep == this.state.maxStep ? 'Submit' : 'next'
      });
    };
  },
  markStep: function(step, markedFlag) {
    var marked = typeof(markedFlag) == 'undefined' ? false : true;
    var stepMarked = this.state.stepMarked;

    stepMarked[step] = markedFlag;

    this.setState({stepMarked: stepMarked});
  },
  render: function() {
    return (
        <div className={"fs-form-wrap" + (this.checkStep(this.state.currentStep) ? ' fs-enable-bg' : ' fs-disable-bg')}>
          <div className="fs-form fs-form-full">
              <ol className={"fs-fields" + (this.state.lastStep < this.state.currentStep ? ' fs-display-next' : ' fs-display-prev')}>
                <RegisterName stepClassname={this._getStepClassname(1)} markStep={this.markStep} step={1} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <RegisterBirthday stepClassname={this._getStepClassname(2)} markStep={this.markStep} step={2} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <RegisterGender stepClassname={this._getStepClassname(3)} markStep={this.markStep} step={3} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <AcademicHistory stepClassname={this._getStepClassname(4)} markStep={this.markStep} step={4} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <SkillsLanguage stepClassname={this._getStepClassname(5)} markStep={this.markStep} step={5} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <LogicalIT stepClassname={this._getStepClassname(6)} markStep={this.markStep} step={6} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <SkillsIT stepClassname={this._getStepClassname(7)} markStep={this.markStep} step={7} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <WorkExperience stepClassname={this._getStepClassname(8)} markStep={this.markStep} step={8} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
                <Other stepClassname={this._getStepClassname(9)} markStep={this.markStep} step={9} gotoNextStep={this._handleTouchTap} checkStep={this.checkStep} updateFormData={this.updateFormData} />
              </ol>
          </div>

          <div className="fs-controls">
            <ProgressBar percent={this.state.currentPercent} />
            <NavLinks data={controlLinks} currentStep={this.state.currentStep} progressStep={this.state.progressStep} requestChange={this.handleNavStepChange} />
          </div>
        </div>
    );
  }
});

module.exports = CandidateRegister;