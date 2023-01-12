import { Route, Routes } from 'react-router-dom';
import { LogicController } from '../components';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/:mapsCollectionId/:poiCollectionId" element={<LogicController />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
