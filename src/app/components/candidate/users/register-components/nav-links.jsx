var React = require('react');

var NavLinks = React.createClass({
  render: function() {
    var fsLinks = this.props.data.map(function(link) {
      return (
        <li key={link.key} className="fs-link-control">{link.text}</li>
      );
    });

    return (
      <ul className="fs-links">
        {fsLinks}
      </ul>
    );
  }
});

module.exports = NavLinks;