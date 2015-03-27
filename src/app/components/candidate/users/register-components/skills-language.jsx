var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu,
  ButtonNext = require('./button-next.jsx');

var SkillsLanguage = React.createClass({
  getInitialState: function() {
    return {
      currentStep: 1,
      maxStep: 1
    }
  },
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  _handleTouchTap: function(e) {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? this.state.maxStep : this.state.currentStep + 1;

    if (this.state.currentStep == this.state.maxStep) {
      this.props.gotoNextStep();
    };

    this.setState({
      currentStep: nextStep
    });
  },
  _getStepClassname: function(numStep) {
    return "fs-academic-history-block" + (this.state.currentStep == numStep ? ' fs-academic-show' : '');
  },
  render: function() {
    var skillLanguages = [
      {payload: "0", text: "Choose Language"},
      {payload: "1", text: "English"},
      {payload: "2", text: "Chinese Cantonese"},
      {payload: "3", text: "Chinese Shanghainese"},
      {payload: "4", text: "Japanese"},
      {payload: "5", text: "Vietnamese"},
      {payload: "6", text: "Korean"},
      {payload: "7", text: "Persian"},
      {payload: "8", text: "Burmese"},
      {payload: "9", text: "Nepali"},
      {payload: "10", text: "Kurdish"}
    ];

    var skillLevels = [
      {payload: "0", text: "Cannot"},
      {payload: "10", text: "Basic conversation"},
      {payload: "30", text: "Everyday conversation"},
      {payload: "50", text: "Business Conversation"},
      {payload: "80", text: "Fluent"},
      {payload: "100", text: "Native"}
    ];

    return (
      <li className={this.props.stepClassname}>
        <div className={this._getStepClassname(1)}>
          <div className="fs-field-label fs-anim-upper">
            How do you speak English and Japanese?<br/>
            <span className="font-size-small">This is required</span>
          </div>

          <div className="fs-anim-lower">
            <div className="fs-field-label-register-name">English</div>
            <input ref="language_id" name="skills[language][ids][]" value="1" type="hidden" />

            <DropDownMenu
              menuItems={skillLevels} /><br/>

            <div className="fs-field-label-register-name">Japanese</div>
            <input ref="language_id" name="skills[language][ids][]" value="2" type="hidden" />

            <DropDownMenu
              menuItems={skillLevels} />

            <ButtonNext disabled={false} onTouchTap={this._handleTouchTap} />
          </div>
        </div>

        <div className={this._getStepClassname(2)}>
          <div className="fs-field-label fs-anim-upper">
            How do you speak other language?<br/>
            <span className="font-size-small">Please select language and level</span>
          </div>

          <div className="fs-anim-lower">
            <TextField
              hintText="Language type"
              name="language" />

            <DropDownMenu
              menuItems={skillLevels} />

            <ButtonNext disabled={false} onTouchTap={this._handleTouchTap} />
          </div>
        </div>
      </li>
    );
  }
});

module.exports = SkillsLanguage;