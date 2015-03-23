var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var SkillsIT = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Skills (IT)</label>

        <div className="fs-anim-lower">
          <TextField
            hintText="" />
        </div>
      </li>
    );
  }
});

module.exports = SkillsIT;