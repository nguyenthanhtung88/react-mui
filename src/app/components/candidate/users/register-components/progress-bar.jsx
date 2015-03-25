var React = require('react');

var ProgressBar = React.createClass({
    render: function() {
        return (
            <div className="wrapper" data-anim="base wrapper">
                <div className="circle" data-anim="base right"></div>
            </div>
        );
    }
});

module.exports = ProgressBar;