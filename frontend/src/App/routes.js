import React from 'react';

import AdminLayout from './layouts/admin/AdminLayout';
import DefaultLayout from './layouts/frontend/DefaultLayout';

const Login = React.lazy(() => import('./pages/common/Login'));
const Register = React.lazy(() => import('./pages/common/Register'));
const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const Page404 = React.lazy(() => import('./pages/common/404'));

const routes = [
    { path: '/',          auth: false,  role: 'user', exact: true,  name: 'Home', component: DefaultLayout },
    { path: '/login/',    auth: false, role: 'user', exact: true,  name: 'Login', component: Login },
    { path: '/register/', auth: false, role: 'user', exact: true,  name: 'Register', component: Register },
    { path: '/admin/',    auth: true,  role: 'user', exact: false, name: 'Dashboard', component: Dashboard, layout: AdminLayout },
    { path: '/*/',         auth: false,  role: 'user', exact: true,  name: '404', component: Page404 },
];

export default routes;
