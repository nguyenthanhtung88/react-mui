/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

var CandidateDashboard = React.createClass({

    mixins: [Router.Navigation, Router.State],

    render: function() {

        return (
            <div>
                <h1>Welcome to Awesome Candidate</h1>

                <RaisedButton label="Sign Up" primary={true} onTouchTap={this._handleTouchTap} />
            </div>
        );
    },

    _handleTouchTap: function() {
        this.transitionTo('signup');
    }

});

module.exports = CandidateDashboard;