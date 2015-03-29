var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppCanvas = mui.AppCanvas;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var Link = Router.Link;

var Master = React.createClass({

    mixins: [Router.State],

    render: function() {

        return (
            <AppCanvas predefinedLayout={1}>

                <Toolbar>
                    <ToolbarGroup float="left">
                        <div className="logo">
                            <Link to="root"><img src="./images/logo_framgia.png" /></Link>
                        </div>
                    </ToolbarGroup>
                </Toolbar>

                <RouteHandler />

            </AppCanvas>
        );
    },

});

module.exports = Master;