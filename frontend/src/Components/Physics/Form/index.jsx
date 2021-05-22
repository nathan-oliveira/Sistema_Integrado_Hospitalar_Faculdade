import React from 'react'

import Input from 'Components/Template/Form/Input'
import Grid from 'Components/Template/Form/Grid'
import Row from 'Components/Template/Form/Row'

const Form = ({ data }) => {
  if (data) return (
    <div className="form animeLeft">
      <Row>
        <Grid cols="6">
          <Input
            label="Peso"
            type="text"
            name="peso"
            max="255"
            value={data.peso}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Altura"
            type="text"
            name="altura"
            max="255"
            value={data.altura}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="6">
          <Input
            label="Tipo Sanguíneo"
            type="text"
            name="tipo_sanguineo"
            max="255"
            value={data.tipo_sanguineo}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Uso de médicamentos"
            type="text"
            name="uso_medicamentos"
            max="255"
            value={data.uso_medicamentos}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="6">
          <Input
            label="Consume cigarro"
            type="text"
            name="consume_cigarro"
            max="255"
            value={(data.consume_cigarro === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Consume alcool"
            type="text"
            name="consume_alcool"
            max="255"
            value={(data.consume_alcool === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="12">
          <Input
            label="Prática exercícios físicos"
            type="text"
            name="pratica_exercicios"
            max="255"
            value={(data.pratica_exercicios === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
      </Row>
    </div>
  )
  else
    return null
}

export default Form
