var React = require('react');

var NavLinks = React.createClass({
  handleOnClick: function(nextStep) {
    this.props.requestChange(nextStep);
  },
  getNavLinkClasses: function(index) {
    var className = "fs-link-control"
      + (index == this.props.currentStep ? ' fs-link-current' : (index > this.props.progressStep ? ' fs-link-hide' : ''));

    return className;
  },
  render: function() {
    return (
      <ul className="fs-links">
        {this.props.data.map(function(link, index) {
          return (
            <li key={index + 1} className={this.getNavLinkClasses(index + 1)} onClick={this.handleOnClick.bind(this, index + 1)}>{link.text}</li>
          );
        }, this)}
      </ul>
    );
  }
});

module.exports = NavLinks;