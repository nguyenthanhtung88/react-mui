var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu,
  ButtonNext = require('./button-next.jsx');

var SkillsLanguage = React.createClass({
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
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
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Skills (Language)</label>

        <div className="fs-anim-lower">
          <DropDownMenu
            name="skills[language][ids][]"
            menuItems={skillLanguages} /><br/>
          <TextField
            name="skills[language][scores][]"
            hintText="Score" /><br/>

          <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this.props.gotoNextStep} />
        </div>
      </li>
    );
  }
});

module.exports = SkillsLanguage;