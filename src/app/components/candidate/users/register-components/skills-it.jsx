var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu;

var SkillsIT = React.createClass({
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  render: function() {
    var skillITs = [
      {payload: "0", text: "Choose IT Skill"},
      {payload: "1", text: "Java"},
      {payload: "2", text: "PHP"},
      {payload: "3", text: "Ruby"},
      {payload: "4", text: "CakePHP"},
      {payload: "5", text: "Yii"},
      {payload: "6", text: "Laravel"},
      {payload: "7", text: ".NET Framework"},
      {payload: "8", text: "AngularJS"},
      {payload: "9", text: "OpenGL"},
      {payload: "10", text: "Cocos2d"}
    ];
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Skills (IT)</label>

        <div className="fs-anim-lower">
          <DropDownMenu
            name="skills[it][ids][]"
            menuItems={skillITs} /><br/>
          <TextField
            name="skills[it][scores][]"
            hintText="Score" />
        </div>
      </li>
    );
  }
});

module.exports = SkillsIT;