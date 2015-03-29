var React = require('react'),
    mui = require('material-ui'),
    TextField = mui.TextField,
    DropDownMenu = mui.DropDownMenu,
    ButtonNext = require('./button-next.jsx');

var SkillsLanguage = React.createClass({
    getInitialState: function() {
        return {
            currentStep: 1,
            maxStep: 1,
            languages: [],
            skillLanguages: [
                {label: 153, value: "English"},
                {label: 2, value: "Chinese Cantonese"},
                {label: 3, value: "Chinese Shanghainese"},
                {label: 127, value: "Japanese"},
                {label: 5, value: "Vietvaluese"},
                {label: 6, value: "Korean"},
                {label: 7, value: "Persian"},
                {label: 8, value: "Burmese"},
                {label: 9, value: "Nepali"},
                {label: 10, value: "Kurdish"}
            ]
        }
    },
    componentDidMount: function() {
        this.props.markStep(this.props.step, true);
    },
    _handleTouchTap: function(e) {
        var nextStep = (this.state.currentStep + 1) > this.state.maxStep ? this.state.maxStep : this.state.currentStep + 1;

        if (this.state.currentStep == this.state.maxStep) {
            this.props.updateFormData({languages: this.state.languages});
            this.props.gotoNextStep();
        };

        this.setState({
            currentStep: nextStep
        });
    },
    _getStepClassname: function(numStep) {
        return "fs-academic-history-block" + (this.state.currentStep == numStep ? ' fs-academic-show' : '');
    },
    _findLanguageObject: function(textLanguage) {
        for (var i = 0; i < this.state.skillLanguages.length; i++) {
            if (this.state.skillLanguages[i].value == textLanguage) {
                return this.state.skillLanguages[i];
            }
        };

        return null;
    },
    _handleDropDownChange: function(ref, e, selectedIndex, menuItem) {
        var objectLanguage = this._findLanguageObject(ref);
        objectLanguage.score = menuItem.payload;

        var currentLanguages = this.state.languages;

        var index = (ref == 'English') ? 0 : 1;

        currentLanguages[index] = objectLanguage;

        this.setState({languages: currentLanguages});
    },
    render: function() {
        var languageLevels = [
            {payload: 0, text: "Cannot"},
            {payload: 10, text: "Basic conversation"},
            {payload: 30, text: "Everyday conversation"},
            {payload: 50, text: "Business Conversation"},
            {payload: 80, text: "Fluent"},
            {payload: 100, text: "Native"}
        ];

        return (
            <li className={this.props.stepClassname}>
                <div className={this._getStepClassname(1)}>
                    <div className="fs-field-label fs-anim-upper">
                        How do you speak English and Japanese?<br/>
                        <span className="font-size-small">This is required</span>
                    </div>

                    <div className="fs-anim-lower">
                        <div className="fs-field-label-register-name">English</div>
                        <DropDownMenu
                            menuItems={languageLevels}
                            className="mui-drop-down-menu-sm"
                            onChange={this._handleDropDownChange.bind(this, 'English')} /><br/>

                        <div className="fs-field-label-register-name">Japanese</div>
                        <DropDownMenu
                            menuItems={languageLevels}
                            className="mui-drop-down-menu-sm"
                            onChange={this._handleDropDownChange.bind(this, 'Japanese')} />

                        <ButtonNext disabled={false} onTouchTap={this._handleTouchTap} />
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = SkillsLanguage;