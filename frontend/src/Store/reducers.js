import { combineReducers } from '@reduxjs/toolkit'

import user from './user/user'
import userPost from './user/userPost'
import validarToken from './user/validarToken'
import menu from './menu/menuToggle'

const rootReducer = combineReducers({
  user,
  userPost,
  validarToken,
  menu
})

export default rootReducer;