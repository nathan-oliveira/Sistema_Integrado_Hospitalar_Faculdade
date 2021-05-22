import createAsyncSlice from 'Store/helper/createAsyncSlice'
import { POST_USER } from 'Services/api'
import { fetchLogin, resetUserState, setDataUser } from './user'
import { validarToken, fetchErrorToken } from './validarToken'

const slice = createAsyncSlice({
  name: 'userPost',
  fetchConfig: (formData) => POST_USER(formData),
});

export const userPost = slice.asyncAction;

export const userLogin = (dataForm) => async (dispatch) => {
  const { payload } = await dispatch(fetchLogin(dataForm))

  if (payload.token) {
    localStorage.setItem('token', payload.token)
    localStorage.setItem('nome', payload.nome)
  }
}

export const userLogout = () => async (dispatch) => {
  dispatch(resetUserState({
    token: null,
    nome: "",
    nivel: 0
  }))

  localStorage.clear();
}

export const verifyToken = () => async (dispatch, getState) => {
  const { user } = getState()

  if (user?.data?.token) {
    const { type, payload } = await dispatch(validarToken(user.data.token))

    if (type === fetchErrorToken.type) {
      await dispatch(userLogout())
    } else {
      await dispatch(setDataUser(payload))
    }
  }
}

export default slice.reducer;
