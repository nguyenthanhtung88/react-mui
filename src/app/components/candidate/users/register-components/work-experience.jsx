var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu,
  DatePicker = mui.DatePicker;

var WorkExperience = React.createClass({
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  render: function() {
    var companyItems = [
      {payload: "0", text: "Choose Company"},
      {payload: "1", text: "Framgia"},
      {payload: "2", text: "Zboncak-Tillman"},
      {payload: "3", text: "O'Hara Ltd"},
      {payload: "4", text: "Ankunding LLC"},
      {payload: "5", text: "Abernathy PLC"},
      {payload: "6", text: "Padberg-Bechtelar"},
      {payload: "7", text: "Kemmer Inc"},
      {payload: "8", text: "Lehner-Ritchie"},
      {payload: "9", text: "Altenwerth-Hansen"},
      {payload: "10", text: "Torp Group"}
    ];
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Work Experience</label>

        <div className="fs-anim-lower">
          <DropDownMenu
            name="companies[ids][]"
            menuItems={companyItems} />
          <DatePicker
            name="skills[started_at][]"
            hintText="Started Date" />
          <DatePicker
            name="skills[finished_at][]"
            hintText="Finished Date" />
        </div>
      </li>
    );
  }
});

module.exports = WorkExperience;