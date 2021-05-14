import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard/index';
import Catalog from '../pages/Catalog';

export default function AppRoutes (){
    return(
        <Layout>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/catalog" component={Catalog} />
            </Switch>
        </Layout>
    );
}