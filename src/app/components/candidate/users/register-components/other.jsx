var React = require('react'),
    mui = require('material-ui'),
    ReactWidgets = require('react-widgets'),
    Combobox = ReactWidgets.Combobox,
    DropDownMenu = mui.DropDownMenu,
    ButtonNext = require('./button-next.jsx');

var Other = React.createClass({
    componentDidMount: function() {
        this.props.markStep(this.props.step, true);
    },
    getDefaultProps: function() {
        return {
            sample: {id: null, name: "", score: null}
        };
    },
    getInitialState: function() {
        return {
            others: [
                this.props.sample
            ]
        };
    },
    _handleOnChange: function(value) {
        var currentOthers = this.state.others;

        currentOthers[0].label = (typeof value === 'object') ? value.label : null;
        currentOthers[0].name = (typeof value === 'object') ? value.value : value;

        this.setState({others: currentOthers});
    },
    _handleDropDownChange: function(e, selectedIndex, menuItem) {
        var currentOthers = this.state.others;

        currentOthers[0].score = menuItem.payload;

        this.setState({others: currentOthers});
    },
    _handleTouchTap: function() {
        this.props.updateFormData({others: this.state.others});
        this.props.gotoNextStep();
    },
    render: function() {
        var skillOthers = [
            {label: 1, value: "Vim"},
            {label: 2, value: "Eclipse"},
            {label: 3, value: "WordPress"},
            {label: 4, value: "Tomcat"},
            {label: 5, value: "WEBrick"},
            {label: 6, value: "Zope"},
            {label: 7, value: "Chef"},
            {label: 8, value: "IIS6.0 / IIS7.0 / IIS7.5"},
            {label: 9, value: "Movable Type"},
            {label: 10, value: "memcached"}
        ];

        var itLevels = [
            {payload: 0, text: "No experience"},
            {payload: 10, text: "Less than 6 months"},
            {payload: 30, text: "More than 6 months"},
            {payload: 50, text: "More than 1 year"},
            {payload: 70, text: "More than 1.5 years"},
            {payload: 90, text: "More than 2 years"}
        ];

        return (
            <li className={this.props.stepClassname}>
                <label className="fs-field-label fs-anim-upper">Other</label>

                <div className="fs-anim-lower">
                    <div className="fs-company-history">
                        <div className="fs-half-block">
                            <Combobox
                                valueField='label' textField='value'
                                data={skillOthers}
                                filter="contains"
                                placeholder="Select IT Skill..."
                                onChange={this._handleOnChange} />
                        </div>

                        <DropDownMenu
                            menuItems={itLevels}
                            className="mui-drop-down-menu-halfblock"
                            onChange={this._handleDropDownChange} />
                    </div>

                    <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this._handleTouchTap} />
                </div>
            </li>
        );
    }
});

module.exports = Other;