var React = require('react'),
  mui = require('material-ui'),
  DatePicker = mui.DatePicker;

var RegisterBirthday = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Choose Birthday</label>

        <div className="fs-anim-lower">
          <DatePicker
            hintText="Birthday" />
        </div>
      </li>
    );
  }
});

module.exports = RegisterBirthday;