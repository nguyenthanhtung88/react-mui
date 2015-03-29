var React = require('react'),
    mui = require('material-ui'),
    Select = require('react-select'),
    ReactWidgets = require('react-widgets'),
    Combobox = ReactWidgets.Combobox,
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
        var currentCompanies = this.state.companies;

        currentCompanies[0].started_at = this._formatDate(value);

        this.setState({companies: currentCompanies});
    },
    _handleChangeFinishedDate: function(e, value) {
        var currentCompanies = this.state.companies;

        currentCompanies[0].finished_at = this._formatDate(value);

        this.setState({companies: currentCompanies});
    },
    _handleRemoveClick: function(index) {
        var currentCompanyList = this.state.companies;
        currentCompanyList.splice(index, 1);

        this.setState({companies: currentCompanyList});
    },
    _handleOnChange: function(value) {
        var currentCompanies = this.state.companies;

        currentCompanies[0].id = (typeof value === 'object') ? value.label : null;
        currentCompanies[0].name = (typeof value === 'object') ? value.value : value;

        this.setState({companies: currentCompanies});
    },
    _formatDate: function(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        return year + "-" + month + "-" + day;
    },
    _handleTouchTap: function() {
        this.props.updateFormData({work_experiences: this.state.companies});
        this.props.gotoNextStep();
    },
    render: function() {
        var companyOptions = [
            {label: 1, value: "Framgia"},
            {label: 2, value: "Zboncak-Tillman"},
            {label: 3, value: "O'Hara Ltd"},
            {label: 4, value: "Ankunding LLC"},
            {label: 5, value: "Abernathy PLC"},
            {label: 6, value: "Padberg-Bechtelar"},
            {label: 7, value: "Kemmer Inc"},
            {label: 8, value: "Lehner-Ritchie"},
            {label: 9, value: "Altenwerth-Hansen"},
            {label: 10, value: "Torp Group"}
        ];

        return (
            <li className={this.props.stepClassname}>
                <label className="fs-field-label fs-anim-upper">What companies did you work for?</label>

                <div className="fs-anim-lower">
                    <div className="fs-company-history">
                        <Combobox
                            valueField='label' textField='value'
                            data={companyOptions}
                            filter="contains"
                            placeholder="Select Company..."
                            onChange={this._handleOnChange} />

                        <div className="fs-field-label-register-name">Started Date</div>
                        <DatePicker
                            formatDate={this._formatDate}
                            mode="landscape"
                            onChange={this._handleChangeStartedDate} /><br/>

                        <div className="fs-field-label-register-name">Finished Date</div>
                        <DatePicker
                            formatDate={this._formatDate}
                            mode="landscape"
                            onChange={this._handleChangeFinishedDate} /><br/>

                    </div>

                    <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this._handleTouchTap} />
                </div>
            </li>
        );
    }
});

module.exports = WorkExperience;