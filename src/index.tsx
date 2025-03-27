import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import ContainerView from './pages/ContainerView.tsx'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router';
import {RoutesConfig} from './_configurations/RoutesConfig.ts';
import Store from '@/_configurations/ReduxStoreConfig.ts';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/style.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/home' />}
                    />
                    <Route path='/' element={<ContainerView />}>
                        {RoutesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                Component={route.component}
                            />
                        ))}
                    </Route>
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
