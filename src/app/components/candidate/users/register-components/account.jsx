var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var RegisterAccount = React.createClass({
  render: function() {
    return (
      <li className={this.props.stepClassname}>
        <label className="fs-field-title fs-anim-upper">Account</label>

        <div className="fs-anim-lower">
          <TextField
            hintText="Email"
            name="email" />
          <br/>
          <TextField
            hintText="Password" />
        </div>
      </li>
    );
  }
});

module.exports = RegisterAccount;