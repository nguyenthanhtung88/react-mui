var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var SkillsLanguage = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Skills (Language)</label>

        <div className="fs-anim-lower">
          <TextField
            hintText="" />
        </div>
      </li>
    );
  }
});

module.exports = SkillsLanguage;