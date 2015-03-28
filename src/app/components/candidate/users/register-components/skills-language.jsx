var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu,
  ButtonNext = require('./button-next.jsx');

var SkillsLanguage = React.createClass({
  getInitialState: function() {
    return {
      currentStep: 1,
      maxStep: 1,
      languages: [],
      skillLanguages: [
        {id: 1, name: "English"},
        {id: 2, name: "Chinese Cantonese"},
        {id: 3, name: "Chinese Shanghainese"},
        {id: 4, name: "Japanese"},
        {id: 5, name: "Vietnamese"},
        {id: 6, name: "Korean"},
        {id: 7, name: "Persian"},
        {id: 8, name: "Burmese"},
        {id: 9, name: "Nepali"},
        {id: 10, name: "Kurdish"}
      ]
    }
  },
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  _handleTouchTap: function(e) {
    var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? this.state.maxStep : this.state.currentStep + 1;

    if (this.state.currentStep == this.state.maxStep) {
      this.props.updateFormData({languages: this.state.languages});
      this.props.gotoNextStep();
    };

    this.setState({
      currentStep: nextStep
    });
  },
  _getStepClassname: function(numStep) {
    return "fs-academic-history-block" + (this.state.currentStep == numStep ? ' fs-academic-show' : '');
  },
  _findLanguageObject: function(textLanguage) {
    for (var i = 0; i < this.state.skillLanguages.length; i++) {
      if (this.state.skillLanguages[i].name == textLanguage) {
        return this.state.skillLanguages[i];
      }
    };

    return null;
  },
  _handleDropDownChange: function(ref, e, selectedIndex, menuItem) {
    var objectLanguage = this._findLanguageObject(ref);
    objectLanguage.score = menuItem.payload;

    var currentLanguages = this.state.languages;

    var index = (ref == 'English') ? 0 : 1;

    currentLanguages[index] = objectLanguage;

    this.setState({languages: currentLanguages});
  },
  render: function() {
    var skillLevels = [
      {payload: 0, text: "Cannot"},
      {payload: 10, text: "Basic conversation"},
      {payload: 30, text: "Everyday conversation"},
      {payload: 50, text: "Business Conversation"},
      {payload: 80, text: "Fluent"},
      {payload: 100, text: "Native"}
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
            <DropDownMenu
              menuItems={skillLevels}
              onChange={this._handleDropDownChange.bind(this, 'English')} /><br/>

            <div className="fs-field-label-register-name">Japanese</div>
            <DropDownMenu
              menuItems={skillLevels}
              onChange={this._handleDropDownChange.bind(this, 'Japanese')} />

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