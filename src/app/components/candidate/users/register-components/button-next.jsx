var React = require('react');

var ButtonNext = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'next',
            disabled: true
        }
    },
    render: function() {
        return (
            <button className={"fs-continue-btn" + (!this.props.disabled ? ' fs-btn-show' : ' fs-btn-hide')} onTouchTap={this.props.onTouchTap} >
                <span className="fs-next">{this.props.text}</span>
                <br/>
                <span className="fs-enter">Click enter-key</span>
            </button>
        );
    }
});

module.exports = ButtonNext;