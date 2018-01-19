import 'bootstrap';
import './main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import { withAsync } from './common/async-component';

import Routes from './routes';
import RootStore from './root/root-store';

import Navigation from './layout/navigation';

const Container = (
    <>
        <Navigation />
        <Provider store={RootStore}>
            <main className="col-12 col-md-12">
                <Switch>
                    {

                        Routes.map((route, index) => (
                            <Route
                                exact={true}
                                path={route.to}
                                component={withAsync(route.path)}
                                key={index}
                            />
                        ))
                    }
                    <Redirect to="/" />
                </Switch>
            </main>
        </Provider>
    </>
);

const App = () => {
    return (
        <Router history={createHistory()}>
            <div>
                {Container}
            </div>
        </Router>
    );
};

render(
    <App />,
    document.getElementById('container')
);
