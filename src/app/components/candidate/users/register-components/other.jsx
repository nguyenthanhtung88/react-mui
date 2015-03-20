var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var Other = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label">Other</label>
        <br/>
        <TextField
          hintText="" />
      </li>
    );
  }
});

module.exports = Other;