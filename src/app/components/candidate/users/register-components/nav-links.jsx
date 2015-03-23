var React = require('react');

var NavLinks = React.createClass({
  handleOnClick: function(nextStep) {
    this.props.requestChange(nextStep);
  },

  render: function() {
    var currentStep = this.props.currentStep;

    return (
      <ul className="fs-links">
        {this.props.data.map(function(link, index) {
          return (
            <li key={index + 1} className={"fs-link-control" + (index + 1 == currentStep ? ' fs-link-current' : '')} onClick={this.handleOnClick.bind(this, index + 1)}>{link.text}</li>
          );
        }, this)}
      </ul>
    );
  }
});

module.exports = NavLinks;