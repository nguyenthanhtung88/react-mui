var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  DropDownMenu = mui.DropDownMenu;

var Other = React.createClass({
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  render: function() {
    var skillOthers = [
      {payload: "0", text: "Choose Other(IT)"},
      {payload: "1", text: "Logical"},
      {payload: "2", text: "IT Subject"},
      {payload: "3", text: "WordPress"},
      {payload: "4", text: "Tomcat"},
      {payload: "5", text: "WEBrick"},
      {payload: "6", text: "Zope"},
      {payload: "7", text: "Chef"},
      {payload: "8", text: "IIS6.0 / IIS7.0 / IIS7.5"},
      {payload: "9", text: "Movable Type"},
      {payload: "10", text: "memcached"}
    ];
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Other</label>

        <div className="fs-anim-lower">
          <DropDownMenu
            name="skills[other][ids][]"
            menuItems={skillOthers} /><br/>
          <TextField
            name="skills[other][scores][]"
            hintText="Score" />
        </div>
      </li>
    );
  }
});

module.exports = Other;