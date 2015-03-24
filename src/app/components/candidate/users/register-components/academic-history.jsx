var React = require('react'),
  mui = require('material-ui'),
  DropDownMenu = mui.DropDownMenu;

var AcademicHistory = React.createClass({
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  render: function() {
    var highschoolItems = [
      { payload: '0', text: 'None' },
      { payload: '1', text: 'Highschool 1' },
      { payload: '2', text: 'Highschool 2' },
      { payload: '3', text: 'Highschool 3' },
      { payload: '4', text: 'Highschool 4' },
    ];

    var bachelorItems = [
      { payload: '0', text: 'None' },
      { payload: '1', text: 'Bachelor 1' },
      { payload: '2', text: 'Bachelor 2' },
      { payload: '3', text: 'Bachelor 3' },
      { payload: '4', text: 'Bachelor 4' },
    ];

    var masterItems = [
      { payload: '0', text: 'None' },
      { payload: '1', text: 'Master 1' },
      { payload: '2', text: 'Master 2' },
      { payload: '3', text: 'Master 3' },
      { payload: '4', text: 'Master 4' },
    ];

    var doctorItems = [
      { payload: '0', text: 'None' },
      { payload: '1', text: 'Doctor 1' },
      { payload: '2', text: 'Doctor 2' },
      { payload: '3', text: 'Doctor 3' },
      { payload: '4', text: 'Doctor 4' },
    ];

    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Academic Histories</label>

        <div className="fs-anim-lower">
          <div className="fs-field-input">Highschool Name</div>
          <DropDownMenu
            name="m_highschool_id"
            menuItems={highschoolItems} /><br/>

          <div className="fs-field-input">Bachelor Name</div>
          <DropDownMenu
            name="m_bachelor_id"
            menuItems={bachelorItems} /><br/>

          <div className="fs-field-input">Master Course Name</div>
          <DropDownMenu
            name="m_master_id"
            menuItems={masterItems} /><br/>

          <div className="fs-field-input">Doctor Course Name</div>
          <DropDownMenu
            name="m_doctor_id"
            menuItems={doctorItems} /><br/>
        </div>
      </li>
    );
  }
});

module.exports = AcademicHistory;