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

    currentIts[0].id = (typeof value === 'object') ? value.id : null;
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
      {id: 1, name: "Java"},
      {id: 2, name: "PHP"},
      {id: 3, name: "Ruby"},
      {id: 4, name: "CakePHP"},
      {id: 5, name: "Yii"},
      {id: 6, name: "Laravel"},
      {id: 7, name: ".NET Framework"},
      {id: 8, name: "AngularJS"},
      {id: 9, name: "OpenGL"},
      {id: 10, name: "Cocos2d"}
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
                valueField='id' textField='name'
                data={skillITs}
                filter="contains"
                placeholder="Select IT Skill..."
                onChange={this._handleOnChange} />
            </div>
            
            <DropDownMenu
              menuItems={itLevels}
              onChange={this._handleDropDownChange} />
          </div>

          <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this._handleTouchTap} />
        </div>
      </li>
    );
  }
});

module.exports = SkillsIT;