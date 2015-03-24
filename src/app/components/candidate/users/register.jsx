var React = require('react'),
  mui = require('material-ui'),
  RegisterAccount = require('./register-components/account.jsx'),
  RegisterName = require('./register-components/name.jsx'),
  RegisterBirthday = require('./register-components/birthday.jsx'),
  RegisterGender = require('./register-components/gender.jsx'),
  AcademicHistory = require('./register-components/academic-history.jsx'),
  SkillsLanguage = require('./register-components/skills-language.jsx'),
  SkillsIT = require('./register-components/skills-it.jsx'),
  WorkExperience = require('./register-components/work-experience.jsx'),
  Other = require('./register-components/other.jsx'),
  NavLinks = require('./register-components/nav-links.jsx'),
  RaisedButton = mui.RaisedButton;

var controlLinks = [
  {text: 'Name'},
  {text: 'Birthday'},
  {text: 'Gender'},
  {text: 'Academic History'},
  {text: 'Skills (Language)'},
  {text: 'Skills (IT)'},
  {text: 'Work Experience'},
  {text: 'Other'}
]

var CandidateRegister = React.createClass({

  getInitialState: function() {
    return {
      currentStep: 1,
      lastStep: 1,
      maxStep: 8,
      progressStep: 1,
      textButton: 'Next',
      hideButton: true,
      stepMarked: []
    }
  },

  _handleTouchTap: function() {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? 0 : this.state.currentStep + 1;

    if (!nextStep) {
      alert('Done ...');
      return false;
    };

    this.setState({
      currentStep: nextStep,
      progressStep: (nextStep > this.state.progressStep) ? nextStep : this.state.progressStep,
      lastStep: this.state.currentStep,
      textButton: nextStep == this.state.maxStep ? 'Submit' : 'Next'
    });

  },

  _getStepClassname: function(numStep) {
    return "fs-step" + (this.state.currentStep == numStep ? ' fs-current fs-show' : this.state.lastStep == numStep ? ' fs-hide' : '');
  },

  checkStep: function(step) {
    return (this.state.stepMarked.hasOwnProperty(step) && this.state.stepMarked[step]);
  },

  handleNavStepChange: function(nextStep) {
    if (nextStep != this.state.currentStep && this.checkStep(nextStep) && this.checkStep(this.state.currentStep)) {
      this.setState({
        currentStep: nextStep,
        lastStep: this.state.currentStep,
        textButton: nextStep == this.state.maxStep ? 'Submit' : 'Next'
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
                <RegisterName stepClassname={this._getStepClassname(1)} markStep={this.markStep} step={1} />
                <RegisterBirthday stepClassname={this._getStepClassname(2)} markStep={this.markStep} step={2} />
                <RegisterGender stepClassname={this._getStepClassname(3)} markStep={this.markStep} step={3} />
                <AcademicHistory stepClassname={this._getStepClassname(4)} markStep={this.markStep} step={4} />
                <SkillsLanguage stepClassname={this._getStepClassname(5)} markStep={this.markStep} step={5} />
                <SkillsIT stepClassname={this._getStepClassname(6)} markStep={this.markStep} step={6} />
                <WorkExperience stepClassname={this._getStepClassname(7)} markStep={this.markStep} step={7} />
                <Other stepClassname={this._getStepClassname(8)} markStep={this.markStep} step={8} />
              </ol>
          </div>

          <div >
            <button className={"fs-continue-btn" + (this.checkStep(this.state.currentStep) ? ' fs-btn-show' : ' fs-btn-hide')} onTouchTap={this._handleTouchTap} >
              {this.state.textButton}
            </button>
          </div>

          <div className="fs-controls">
            <NavLinks data={controlLinks} currentStep={this.state.currentStep} progressStep={this.state.progressStep} requestChange={this.handleNavStepChange} />
          </div>
        </div>
    );
  }
});

module.exports = CandidateRegister;