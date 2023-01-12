import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>test root</div>} />
    </Routes>
  );
};

export default AppRoutes;
