import { FC } from 'react';
import {
  Routes as RouterRoutes,
  Route,
} from 'react-router-dom';

// Components
import { MainPage } from '../';

// Constants
import { Routes } from '../../constants';

export const App: FC = () => (
  <RouterRoutes>
    <Route
      path={Routes.MAIN_PAGE}
      element={<MainPage />}
    />
  </RouterRoutes>
);
