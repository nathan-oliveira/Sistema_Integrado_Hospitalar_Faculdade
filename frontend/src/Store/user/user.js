import createAsyncSlice from 'Store/helper/createAsyncSlice'
import { POST_LOGIN } from 'Services/api'

const slice = createAsyncSlice({
  name: 'user',
  initialState: {
    data: {
      token: localStorage.getItem('token') || null,
      nome: localStorage.getItem('nome') || "",
      nivel: 0
    }
  },
  reducers: {
    setDataUser(state, action) {
      state.data.nome = action.payload.nome
      state.data.nivel = action.payload.id_nivel;
    }
  },
  fetchConfig: (dataForm) => POST_LOGIN(dataForm)
})

export const fetchLogin = slice.asyncAction;
export const { resetState: resetUserState, setDataUser } = slice.actions;

export default slice.reducer;