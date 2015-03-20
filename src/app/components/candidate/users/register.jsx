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
  {key: 'step-1', text: 'Account'},
  {key: 'step-2', text: 'Name'},
  {key: 'step-3', text: 'Birthday'},
  {key: 'step-4', text: 'Gender'},
  {key: 'step-5', text: 'Academic History'},
  {key: 'step-6', text: 'Skills (Language)'},
  {key: 'step-7', text: 'Skills (IT)'},
  {key: 'step-8', text: 'Work Experience'},
  {key: 'step-9', text: 'Other'}
]

var CandidateRegister = React.createClass({

  getInitialState: function() {
    return {
      currentStep: 1,
      maxStep: 9,
      textButton: 'Next'
    }
  },

  _handleTouchTap: function() {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? 1 : this.state.currentStep + 1;

    var stepList = this._getStepOrderMapping();

    this.setState({
      currentStep: nextStep,
      textButton: nextStep == this.state.maxStep ? 'Submit' : 'Next'
    });

  },

  _getStepClassname: function(numStep) {
    return "fs-step" + (this.state.currentStep == numStep ? ' fs-current' : ' fs-hide');
  },

  _getStepOrderMapping: function() {
    return [
      this.refs.registerAccount,
      this.refs.registerName,
      this.refs.registerBirthday,
      this.refs.registerGender
    ];
  },

  render: function() {
    return (
        <div className="fs-form-wrap">
          <div className="fs-form fs-form-full">
              <ol className="fs-fields">
                <RegisterAccount ref="registerAccount" stepClassname={this._getStepClassname(1)} />
                <RegisterName ref="registerName" stepClassname={this._getStepClassname(2)} />
                <RegisterBirthday ref="registerBirthday" stepClassname={this._getStepClassname(3)} />
                <RegisterGender ref="registerGender" stepClassname={this._getStepClassname(4)} />
                <AcademicHistory ref="academicHistory" stepClassname={this._getStepClassname(5)} />
                <SkillsLanguage ref="skillsLanguage" stepClassname={this._getStepClassname(6)} />
                <SkillsIT ref="skillsIT" stepClassname={this._getStepClassname(7)} />
                <WorkExperience ref="workExperience" stepClassname={this._getStepClassname(8)} />
                <Other ref="other" stepClassname={this._getStepClassname(9)} />
              </ol>
          </div>

          <div className="fs-continue-btn">
            <RaisedButton label={this.state.textButton} secondary={true} onTouchTap={this._handleTouchTap} />
          </div>

          <div className="fs-controls">
            <NavLinks data={controlLinks} />
          </div>
        </div>
    );
  }
});

module.exports = CandidateRegister;