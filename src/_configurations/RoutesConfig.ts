import HomePage from '../pages/HomePage.tsx';
import AboutPage from '../pages/AboutPage.tsx';
import ContactPage from '../pages/ContactPage.tsx';
import React from 'react';

type RouteConfig = {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export const RoutesConfig = <RouteConfig[]>[
    {
        path: '/home',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/contact',
        component: ContactPage
    }
];