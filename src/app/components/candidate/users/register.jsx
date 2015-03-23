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
  NavLinks = require('./register-components/nav-links.jsx')
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
      textButton: 'Next'
    }
  },

  _handleTouchTap: function() {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? 1 : this.state.currentStep + 1;

    this.setState({
      currentStep: nextStep,
      lastStep: this.state.currentStep,
      textButton: nextStep == this.state.maxStep ? 'Submit' : 'Next'
    });

  },

  _getStepClassname: function(numStep) {
    return "fs-step" + (this.state.currentStep == numStep ? ' fs-current fs-show' : this.state.lastStep == numStep ? ' fs-hide' : '');
  },

  handleNavStepChange: function(nextStep) {
    if (nextStep != this.state.currentStep) {
      this.setState({
        currentStep: nextStep,
        lastStep: this.state.currentStep,
        textButton: nextStep == this.state.maxStep ? 'Submit' : 'Next'
      });
    };
  },

  render: function() {
    return (
        <div className="fs-form-wrap">
          <div className="fs-form fs-form-full">
              <ol className={"fs-fields" + (this.state.lastStep < this.state.currentStep ? ' fs-display-next' : ' fs-display-prev')}>
                <RegisterName stepClassname={this._getStepClassname(1)} />
                <RegisterBirthday stepClassname={this._getStepClassname(2)} />
                <RegisterGender stepClassname={this._getStepClassname(3)} />
                <AcademicHistory stepClassname={this._getStepClassname(4)} />
                <SkillsLanguage stepClassname={this._getStepClassname(5)} />
                <SkillsIT stepClassname={this._getStepClassname(6)} />
                <WorkExperience stepClassname={this._getStepClassname(7)} />
                <Other stepClassname={this._getStepClassname(8)} />
              </ol>
          </div>

          <div className="fs-continue-btn">
            <RaisedButton label={this.state.textButton} secondary={true} onTouchTap={this._handleTouchTap} />
          </div>

          <div className="fs-controls">
            <NavLinks data={controlLinks} currentStep={this.state.currentStep} requestChange={this.handleNavStepChange} />
          </div>
        </div>
    );
  }
});

module.exports = CandidateRegister;