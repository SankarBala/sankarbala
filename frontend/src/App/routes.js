import React from 'react';

import AdminLayout from './layouts/admin/AdminLayout';
import DefaultLayout from './layouts/frontend/DefaultLayout';

const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, layout: AdminLayout },
];

export default routes;
