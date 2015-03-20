var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var SkillsLanguage = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Skills (Language)</label>
        <br/>
        <TextField
          hintText="" />
      </li>
    );
  }
});

module.exports = SkillsLanguage;