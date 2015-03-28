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

    currentOthers[0].id = (typeof value === 'object') ? value.id : null;
    currentOthers[0].name = (typeof value === 'object') ? value.name : value;

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
      {id: "1", name: "Vim"},
      {id: "2", name: "Eclipse"},
      {id: "3", name: "WordPress"},
      {id: "4", name: "Tomcat"},
      {id: "5", name: "WEBrick"},
      {id: "6", name: "Zope"},
      {id: "7", name: "Chef"},
      {id: "8", name: "IIS6.0 / IIS7.0 / IIS7.5"},
      {id: "9", name: "Movable Type"},
      {id: "10", name: "memcached"}
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
                valueField='id' textField='name'
                data={skillOthers}
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

module.exports = Other;