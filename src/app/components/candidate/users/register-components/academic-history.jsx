var React = require('react'),
  mui = require('material-ui'),
  Select = require('react-select'),
  DropDownMenu = mui.DropDownMenu,
  ButtonNext = require('./button-next.jsx');

var AcademicHistory = React.createClass({
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  _handleOnChange: function(value) {

  },
  render: function() {
    var highschoolOptions = [
      { value: '1', label: 'Highschool One' },
      { value: '2', label: 'Highschool Two' },
      { value: '3', label: 'Highschool Three' },
      { value: '4', label: 'Highschool Four' }
    ];

    var bachelorOptions = [
      { value: '1', label: 'Bachelor One' },
      { value: '2', label: 'Bachelor Two' },
      { value: '3', label: 'Bachelor Three' },
      { value: '4', label: 'Bachelor Four' },
    ];

    var masterOptions = [
      { value: '1', label: 'Master One' },
      { value: '2', label: 'Master Two' },
      { value: '3', label: 'Master Three' },
      { value: '4', label: 'Master Four' },
    ];

    var doctorItems = [
      { payload: '0', text: 'None' },
      { payload: '1', text: 'Doctor One' },
      { payload: '2', text: 'Doctor Two' },
      { payload: '3', text: 'Doctor Three' },
      { payload: '4', text: 'Doctor Four' },
    ];

    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Academic Histories</label>

        <div className="fs-anim-lower">
          <div className="fs-field-input">Highschool Name</div>
          <Select
            name="m_highschool_id"
            value=""
            options={highschoolOptions}
            onChange={this._handleOnChange} /><br/>

          <div className="fs-field-input">Bachelor Name</div>
          <Select
            name="m_bachelor_id"
            value=""
            options={bachelorOptions}
            onChange={this._handleOnChange} /><br/>

          <div className="fs-field-input">Master Course Name</div>
          <Select
            name="m_master_id"
            value=""
            options={masterOptions}
            onChange={this._handleOnChange} /><br/>

          <div className="fs-field-input">Doctor Course Name</div>
          <DropDownMenu
            name="m_doctor_id"
            menuItems={doctorItems} /><br/>

          <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this.props.gotoNextStep} />
        </div>
      </li>
    );
  }
});

module.exports = AcademicHistory;