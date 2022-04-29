import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../leads/Dashboard';

// const PrivateRoute = ({ auth, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) => {
// 			<h2>Loading</h2>;
// 			if (auth.isLoading) {
// 				return <h2>Loading ...</h2>;
// 			} else if (!auth.isAuthenticated) {
// 				return <Navigate to="/login" />;
// 			} else {
// 				return <Component {...props} />;
// 			}
// 		}}
// 	/>
// );
// function PrivateRoute({ children, auth, ...rest }) {
// 	<Route
// 		// {...rest}
// 		render={() => {
// 			// 		<h2>Loading</h2>;
// 			// 		if (auth.isLoading) {
// 			// 			return <h2>Loading ...</h2>;
// 			// 		} else if (!auth.isAuthenticated) {
// 			// 			return <Navigate to="/login" />;
// 			// 		} else {
// 			// 			return <Component {...props} />;
// 			// 		}
//
// 		}}
// 	/>;
// }

const PrivateRoute = ({ user, children, auth, ...rest }) => {
	// if (!user) {
	// 	return <Navigate to="/login" replace />;
	// }

	if (auth.isLoading) {
		return <h2>Loading ...</h2>;
	} else if (!auth.isAuthenticated) {
		return <Navigate to="/login" />;
	} else {
		return <Component {...props} />;
	}
};
const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
