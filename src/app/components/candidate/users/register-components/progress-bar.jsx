var React = require('react');

var ProgressBar = React.createClass({
    render: function() {
        return (
            <div className={"loader progress-" + this.props.percent}>
                <div className="loader-bg">
                    <div className="text">{this.props.percent}%</div>
                </div>
                <div className="spiner-holder-one animate-0-25-a">
                    <div className="spiner-holder-two animate-0-25-b">
                        <div className="loader-spiner"></div>
                    </div>
                </div>
                <div className="spiner-holder-one animate-25-50-a">
                    <div className="spiner-holder-two animate-25-50-b">
                        <div className="loader-spiner"></div>
                    </div>
                </div>
                <div className="spiner-holder-one animate-50-75-a">
                    <div className="spiner-holder-two animate-50-75-b">
                        <div className="loader-spiner"></div>
                    </div>
                </div>
                <div className="spiner-holder-one animate-75-100-a">
                    <div className="spiner-holder-two animate-75-100-b">
                        <div className="loader-spiner"></div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = ProgressBar;