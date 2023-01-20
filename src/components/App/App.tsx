import React, {lazy, Suspense} from 'react';

import {Route, Routes} from 'react-router';

import Layout from '../common/Layout';

import '../../assets/styles/styles.scss';

const MainPageLazy = lazy(() => import('../pages/MainPage/MainPage'));

const PhotosPageLazy = lazy(() => import('../pages/PhotosPage/PhotosPage'));
const WeatherPageLazy = lazy(() => import('../pages/WeatherPage/WeatherPage'));

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Layout/>}
                >
                    <Route
                        index
                        element={
                            <Suspense>
                                <MainPageLazy/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="Photos"
                        element={
                            <Suspense>
                                <PhotosPageLazy/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="Weather"
                        element={
                            <Suspense>
                                <WeatherPageLazy/>
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
