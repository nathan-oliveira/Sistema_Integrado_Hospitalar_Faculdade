import React from 'react'
import { mascaraData } from 'Helpers'

import Input from 'Components/Template/Form/Input'
import Grid from 'Components/Template/Form/Grid'
import Row from 'Components/Template/Form/Row'

const Form = ({ data }) => {
  if (data) return (
    <div className="form animeLeft">
      <Row>
        <Grid cols="6">
          <Input
            label="Nome"
            type="text"
            name="nome"
            max="255"
            value={data.nome}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="E-mail"
            type="text"
            name="email"
            max="255"
            value={data.email}
            disabled={true}
          />
        </Grid>
      </Row>

      <Row>
        <Grid cols="3">
          <Input
            label="CPF"
            type="text"
            name="cpf"
            max="255"
            value={data.cpf}
            disabled={true}
          />
        </Grid>
        <Grid cols="3">
          <Input
            label="RG"
            type="text"
            name="rg"
            max="255"
            value={data.rg}
            disabled={true}
          />
        </Grid>
        <Grid cols="3">
          <Input
            label="Nascimento"
            type="text"
            name="dataNasc"
            max="255"
            value={mascaraData(data.dataNasc)}
            disabled={true}
          />
        </Grid>
        <Grid cols="3">
          <Input
            label="Sexo"
            type="text"
            name="sexo"
            max="255"
            value={data.sexo}
            disabled={true}
          />
        </Grid>
      </Row>

      <Row>
        <Grid cols="6">
          <Input
            label="Logradouro"
            type="text"
            name="logradouro"
            max="255"
            value={data.id_endereco?.logradouro}
            disabled={true}
          />
        </Grid>
        <Grid cols="3">
          <Input
            label="Número"
            type="text"
            name="numero"
            max="255"
            value={data.id_endereco?.numero}
            disabled={true}
          />
        </Grid>
        <Grid cols="3">
          <Input
            label="CEP"
            type="text"
            name="cep"
            max="255"
            value={data.id_endereco?.cep}
            disabled={true}
          />
        </Grid>
      </Row>

      <Row>
        <Grid cols="4">
          <Input
            label="Cidade"
            type="text"
            name="cidade "
            max="255"
            value={data.id_endereco?.cidade}
            disabled={true}
          />
        </Grid>
        <Grid cols="4">
          <Input
            label="Bairro"
            type="text"
            name="bairro"
            max="255"
            value={data.id_endereco?.bairro}
            disabled={true}
          />
        </Grid>
        <Grid cols="4">
          <Input
            label="Estado"
            type="text"
            name="estado"
            max="255"
            value={data.id_endereco?.estado}
            disabled={true}
          />
        </Grid>
      </Row>

      <Row>
        <Grid cols="4">
          <Input
            label="Telefone"
            type="text"
            name="telefone"
            max="255"
            value={data.id_telefone?.descricao}
            disabled={true}
          />
        </Grid>
        <Grid cols="4">
          <Input
            label="Estado Civel"
            type="text"
            name="estadocivel"
            max="255"
            value={data.id_estadocivil?.descricao}
            disabled={true}
          />
        </Grid>
        <Grid cols="4">
          <Input
            label="SUS"
            type="text"
            name="sus"
            max="255"
            value={data.id_sus?.descricao}
            disabled={true}
          />
        </Grid>
      </Row>
    </div>
  )
  else
    return null;
}

export default Form;
