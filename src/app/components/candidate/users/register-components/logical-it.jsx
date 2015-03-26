var React = require('react'),
    mui = require('material-ui'),
    Slider = mui.Slider,
    ButtonNext = require('./button-next.jsx');

var LogicalIT = React.createClass({
    componentDidMount: function() {
        this.props.markStep(this.props.step, true);
    },
    getInitialState: function() {
        return {
            logicalPoint: 50,
            itPoint: 50
        };
    },
    _handleChangeLogicalPoint: function(e, value) {
        var newLogicalPoint = value < 0 ? 0 : Math.round(value * 100);
        this.setState({logicalPoint: newLogicalPoint});
        this.props.markStep(this.props.step, (newLogicalPoint && this.state.itPoint));
    },
    _handleChangeITPoint: function(e, value) {
        var newITPoint = value < 0 ? 0 : Math.round(value * 100);
        this.setState({itPoint:  newITPoint});
        this.props.markStep(this.props.step, (newITPoint && this.state.logicalPoint));
    },
    render: function() {
        return (
            <li className={this.props.stepClassname}>
            <label className="fs-field-label fs-anim-upper">Logical and IT</label>

            <div className="fs-anim-lower">
                <div className="fs-slider-area">
                    <div className="fs-field-label-register-name">Logical *</div>
                    <Slider
                        name="logical"
                        defaultValue={0.5}
                        onChange={this._handleChangeLogicalPoint} />
                    <div className="fs-field-slider-value">{this.state.logicalPoint}</div>
                </div>

                <div className="fs-slider-area">
                    <div className="fs-field-label-register-name">IT Subject *</div>
                    <Slider
                        name="it_subject"
                        defaultValue={0.5}
                        onChange={this._handleChangeITPoint} />
                    <div className="fs-field-slider-value">{this.state.itPoint}</div>
                </div>

                <ButtonNext disabled={!this.props.checkStep(this.props.step)} onTouchTap={this.props.gotoNextStep} />
            </div>
          </li>
        );
    }
});

module.exports = LogicalIT;