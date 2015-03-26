var React = require('react'),
  mui = require('material-ui'),
  Select = require('react-select'),
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
  render: function() {
    var skillITOptions = [
      {value: "1", label: "Java"},
      {value: "2", label: "PHP"},
      {value: "3", label: "Ruby"},
      {value: "4", label: "CakePHP"},
      {value: "5", label: "Yii"},
      {value: "6", label: "Laravel"},
      {value: "7", label: ".NET Framework"},
      {value: "8", label: "AngularJS"},
      {value: "9", label: "OpenGL"},
      {value: "10", label: "Cocos2d"}
    ];

    var itLists = this.state.its.map(function(it, index) {
      var deleteBtn = this.state.its.length > 1 ?
        <RaisedButton label="Remove" primary={true} onTouchTap={this._handleRemoveClick.bind(this, index)} /> :
        <div>&nbsp;</div>;

      return (
        <div key={index} className="fs-company-history">
          <Select
            name="skills[it][ids][]"
            options={skillITOptions}
            placeholder="Select IT Skill..." />

          <div className="fs-slider-area">
            <div className="fs-field-label-score">Score</div>
            <Slider
                name="skills[id][score][]"
                defaultValue={0.5} />
            <div className="fs-field-slider-value"></div>
          </div>

          {deleteBtn}
        </div>
      );
    }.bind(this));

    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-label fs-anim-upper">Skills (IT)</label>

        <div className="fs-anim-lower">
          {itLists}

          <RaisedButton label="Add more" secondary={true} onTouchTap={this._handleAddMoreClick} />

          <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this.props.gotoNextStep} />
        </div>
      </li>
    );
  }
});

module.exports = SkillsIT;