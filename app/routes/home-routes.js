import React from 'react';
import HomeView from '../views/home';
import AdminView from '../views/admin';

import remoteCompService from '../services/remoteComp';

const routes = [
    {
        path: 'home',
        component: HomeView
    },
    {
        path: 'admin',
        component: AdminView,
        childRoutes: [
            {
                path: ':componentName',
                getComponent: ({params: {componentName}}, callBack) => {
                    remoteCompService.loadComponent(componentName).then(RemoteComponent =>
                        callBack(null, RemoteComponent)
                    );
                }
            }
        ]
    }
];

export default routes;
