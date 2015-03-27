var React = require('react');

var ButtonSkip = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'Skip this question',
            disabled: true
        }
    },
    render: function() {
        return (
            <button className={"fs-skip-btn" + (!this.props.disabled ? ' fs-btn-show' : ' fs-btn-hide')} onTouchTap={this.props.onTouchTap} >
                <span className="fs-skip-text">{this.props.text}</span>
            </button>
        );
    }
});

module.exports = ButtonSkip;