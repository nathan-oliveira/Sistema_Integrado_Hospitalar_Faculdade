import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from 'Components/Helper/ProtectedRoute'

import Home from 'Components/Home'
import User from 'Components/User'
import Profile from 'Components/Profile'
import Doctors from 'Components/Doctors'
import Vaccines from 'Components/Vaccines'
import Physics from 'Components/Physics'
import ChangePassword from 'Components/ChangePassword'
import NotFound from 'Components/Helper/NotFound'
import Users from 'Components/Home/form'

const Router = () => {
  return (
    <Routes>
      <ProtectedRoute path="/" element={<Home />} />
      <Route path="/login" element={<User />} />
      <ProtectedRoute path="/profile" element={<Profile />} />
      <ProtectedRoute path="/alterar-senha" element={<ChangePassword />} />
      <ProtectedRoute path="/doctors" element={<Doctors />} />
      <ProtectedRoute path="/vaccines" element={<Vaccines />} />
      <ProtectedRoute path="/physics" element={<Physics />} />
      <ProtectedRoute path="/user/:id" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
