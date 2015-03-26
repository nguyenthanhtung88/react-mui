var React = require('react'),
  mui = require('material-ui'),
  Select = require('react-select'),
  TextField = mui.TextField,
  RaisedButton = mui.RaisedButton,
  DropDownMenu = mui.DropDownMenu,
  DatePicker = mui.DatePicker,
  ButtonNext = require('./button-next.jsx');

var WorkExperience = React.createClass({
  getDefaultProps: function() {
    return {
      sample: {id: null, name: "", started_at: null, finished_at: null}
    };
  },
  getInitialState: function() {
    return {
      companies: [
        this.props.sample
      ]
    };
  },
  componentDidMount: function() {
    this.props.markStep(this.props.step, true);
  },
  _handleAddMoreClick: function(e) {
    var currentCompanyList = this.state.companies;

    currentCompanyList.push(this.props.sample);
    this.setState({companies: currentCompanyList});
  },
  _handleChangeStartedDate: function(e, value) {
    console.log(value);
  },
  _handleRemoveClick: function(index) {
    var currentCompanyList = this.state.companies;
    currentCompanyList.splice(index, 1);

    this.setState({companies: currentCompanyList});
  },
  render: function() {
    var companyOptions = [
      {value: "1", label: "Framgia"},
      {value: "2", label: "Zboncak-Tillman"},
      {value: "3", label: "O'Hara Ltd"},
      {value: "4", label: "Ankunding LLC"},
      {value: "5", label: "Abernathy PLC"},
      {value: "6", label: "Padberg-Bechtelar"},
      {value: "7", label: "Kemmer Inc"},
      {value: "8", label: "Lehner-Ritchie"},
      {value: "9", label: "Altenwerth-Hansen"},
      {value: "10", label: "Torp Group"}
    ];

    var companyList = this.state.companies.map(function(company, index) {
      var deleteBtn = this.state.companies.length > 1 ?
        <RaisedButton label="Remove" primary={true} onTouchTap={this._handleRemoveClick.bind(this, index)} /> :
        <div>&nbsp;</div>;

      return (
        <div key={index} className="fs-company-history">
          <Select
            name="companies[ids][]"
            value={company.id}
            options={companyOptions}
            placeholder="Select Company..." />

          <div className="fs-field-label-register-name">Started Date</div>
          <DatePicker
            name="companies[started_at][]"
            onChange={this._handleChangeStartedDate} /><br/>

          <div className="fs-field-label-register-name">Finished Date</div>
          <DatePicker
            name="companies[finished_at][]" /><br/>

          {deleteBtn}
        </div>
      );
    }.bind(this));

    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">What companies did you work for?</label>

        <div className="fs-anim-lower">
          {companyList}

          <RaisedButton label="Add more" secondary={true} onTouchTap={this._handleAddMoreClick} />

          <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this.props.gotoNextStep} />
        </div>
      </li>
    );
  }
});

module.exports = WorkExperience;