var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  Redirect = Router.Redirect,
  DefaultRoute = Router.DefaultRoute;

// Define all of React Components
var Master = require('./components/candidate/layouts/default.jsx');

var CandidateDashboard = require('./components/candidate/index/dashboard.jsx');
var CandidateRegister = require('./components/candidate/users/register.jsx');

/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
*
* Routes are used to declare your view hierarchy.
*
* Say you go to http://material-ui.com/#/components/paper
* The react router will search for a route named 'paper' and will recursively render its
* handler and its parent handler like so: Paper > Components > Master
*/

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <DefaultRoute handler={CandidateDashboard} />

    <Route name="dashboard" handler={CandidateDashboard} />
    <Route name="register" handler={CandidateRegister} />
  </Route>
);

module.exports = AppRoutes;