import React from 'react'
import useForm from 'Hooks/useForm'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { PATCH_PASSWORD } from 'Services/api'

import Input from 'Components/Template/Form/Input'
import Grid from 'Components/Template/Form/Grid'
import Row from 'Components/Template/Form/Row'
import RowButton from 'Components/Template/Form/RowButton'
import Button from 'Components/Template/Form/Button'

import Error from 'Components/Helper/Error'
import If from 'Components/Template/Operator/If'
// PATCH_PASSWORD
const FormPassword = () => {
  const password = useForm('password')
  const { token } = useSelector(state => state.user.data)
  const { loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PATCH_PASSWORD(token, { password: password.value })
      const { response } = await request(url, options)

      if (response.ok) {
        alert('Senha atualizado com sucesso!');
      } else {
        alert('Ops!!! não foi possivel atualizar!');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form animeLeft">
      <Row>
        <Grid cols="12">
          <Input
            label="Nova Senha"
            type="password"
            name="password"
            max="20"
            {...password}
          />
        </Grid>
      </Row>
      <RowButton>
        <If test={loading}>
          <Button disabled>Atualizando...</Button>
        </If>
        <If test={!loading}>
          <Button>Atualizar</Button>
        </If>
      </RowButton>
    </form>
  )
}

export default FormPassword;