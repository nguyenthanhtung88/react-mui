var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var AcademicHistory = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Academic Histories</label>

        <div className="fs-anim-lower">
          <TextField
            hintText="" />
        </div>
      </li>
    );
  }
});

module.exports = AcademicHistory;