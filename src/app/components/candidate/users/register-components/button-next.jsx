var React = require('react');

var ButtonNext = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'NEXT',
            disabled: true
        }
    },
    render: function() {
        var className = "fs-continue-btn" + (!this.props.disabled ? ' fs-btn-show' : ' fs-btn-hide');
        if (typeof(this.props.skipable) != "undefined") {
            className += " fs-continue-btn-skipable";
        }
        return (
            <button className={className} onTouchTap={this.props.onTouchTap} >
                <span className="fs-next">{this.props.text}</span>
                <br/>
                <span className="fs-enter">Press enter-key</span>
            </button>
        );
    }
});

module.exports = ButtonNext;