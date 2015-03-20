var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var SkillsIT = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Skills (IT)</label>
        <br/>
        <TextField
          hintText="" />
      </li>
    );
  }
});

module.exports = SkillsIT;