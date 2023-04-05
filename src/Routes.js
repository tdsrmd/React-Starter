import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Root from 'layouts/Root'
import Home from 'pages/Home'

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/anasayfa" replace />} />
      <Route path="anasayfa" element={<Home />} />
    </Route>
  </Routes>
)

export default AllRoutes
