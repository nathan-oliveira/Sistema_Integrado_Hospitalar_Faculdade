import React from 'react'
import styles from './Form.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import useForm from 'Hooks/useForm'

import { userLogin } from 'Store/user/userPost'

import Input from 'Components/Template/Form/Input'
import Button from 'Components/Template/Form/Button'
import Grid from 'Components/Template/Form/Grid'
import Row from 'Components/Template/Form/Row'
import If from 'Components/Template/Operator/If'

const Form = ({ setError }) => {
  const cpf = useForm('cpf');
  const password = useForm();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.user)

  React.useEffect(() => {
    setError(error)
  }, [error])

  async function handleSubmit(event) {
    event.preventDefault();

    if (cpf.validate() && password.validate()) {
      await dispatch(userLogin({ cpf: cpf.value, password: password.value }))
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form">
      <Row>
        <Grid cols="12">
          <Input
            label="CPF"
            type="text"
            name="cpf"
            max="14"
            {...cpf}
          />
        </Grid>
      </Row>

      <Row>
        <Grid cols="12">
          <Input
            label="Senha"
            type="password"
            name="password"
            max="20"
            {...password}
          />
        </Grid>
      </Row>

      <Row classRow="row_reverse">
        <If test={!loading}>
          <Button>Entrar</Button>
        </If>
        <If test={loading}>
          <Button disabled>Entrando...</Button>
        </If>
      </Row>
    </form>
  )
}

export default Form;