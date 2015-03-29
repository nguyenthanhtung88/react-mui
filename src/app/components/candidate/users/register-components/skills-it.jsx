var React = require('react'),
    mui = require('material-ui'),
    Select = require('react-select'),
    ReactWidgets = require('react-widgets'),
    Combobox = ReactWidgets.Combobox,
    TextField = mui.TextField,
    DropDownMenu = mui.DropDownMenu,
    Slider = mui.Slider,
    ButtonNext = require('./button-next.jsx');

var SkillsIT = React.createClass({
    getDefaultProps: function() {
        return {
            sample: {id: null, name: "", score: null}
        };
    },
    getInitialState: function() {
        return {
            its: [
                this.props.sample
            ]
        };
    },
    componentDidMount: function() {
        this.props.markStep(this.props.step, true);
    },
    _handleAddMoreClick: function(e) {
        var currentITList = this.state.its;

        currentITList.push(this.props.sample);
        this.setState({its: currentITList});
    },
    _handleRemoveClick: function(index) {
        var currentITList = this.state.its;
        currentITList.splice(index, 1);

        this.setState({its: currentITList});
    },
    _handleOnChange: function(value) {
        var currentIts = this.state.its;

        currentIts[0].label = (typeof value === 'object') ? value.label : null;
        currentIts[0].name = (typeof value === 'object') ? value.name : value;

        this.setState({its: currentIts});
    },
    _handleDropDownChange: function(e, selectedIndex, menuItem) {
        var currentIts = this.state.its;

        currentIts[0].score = menuItem.payload;

        this.setState({its: currentIts});
    },
    _handleTouchTap: function() {
        this.props.updateFormData({its: this.state.its});
        this.props.gotoNextStep();
    },
    render: function() {
        var skillITs = [
            {label: 1, value: "Java"},
            {label: 2, value: "PHP"},
            {label: 3, value: "Ruby"},
            {label: 4, value: "CakePHP"},
            {label: 5, value: "Yii"},
            {label: 6, value: "Laravel"},
            {label: 7, value: ".NET Framework"},
            {label: 8, value: "AngularJS"},
            {label: 9, value: "OpenGL"},
            {label: 10, value: "Cocos2d"}
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
                <label className="fs-field-label fs-anim-upper">Skills (IT)</label>

                <div className="fs-anim-lower">
                    <div className="fs-company-history">
                        <div className="fs-half-block">
                            <Combobox
                                valueField='label' textField='value'
                                data={skillITs}
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

module.exports = SkillsIT;