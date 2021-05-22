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
            label="Covid19"
            type="text"
            name="covid"
            max="255"
            value={(data.covid === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Febre Amarela"
            type="text"
            name="febreamarela"
            max="255"
            value={(data.febreamarela === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="6">
          <Input
            label="Sarampo"
            type="text"
            name="sarampo"
            max="255"
            value={(data.sarampo === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Caxumba"
            type="text"
            name="caxumba"
            max="255"
            value={(data.caxumba === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="6">
          <Input
            label="Catapora"
            type="text"
            name="catapora"
            max="255"
            value={(data.catapora === "1") ? "Sim" : "Não"}
            disabled={true}
          />
        </Grid>
        <Grid cols="6">
          <Input
            label="Rubeula"
            type="text"
            name="rubeula"
            max="255"
            value={(data.rubeula === "1") ? "Sim" : "Não"}
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
