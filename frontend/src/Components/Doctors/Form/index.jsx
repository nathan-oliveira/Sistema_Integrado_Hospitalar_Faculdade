import React from 'react'

import Input from 'Components/Template/Form/Input'
import Grid from 'Components/Template/Form/Grid'
import Row from 'Components/Template/Form/Row'

const Form = ({ data }) => {
  if (data) return (
    <div className="form animeLeft">
      <Row>
        <Grid cols="12">
          <Input
            label="Fraturas"
            type="text"
            name="fraturamentos"
            max="255"
            value={data.fraturamentos}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="12">
          <Input
            label="Acidentes"
            type="text"
            name="acidentes"
            max="255"
            value={data.acidentes}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="12">
          <Input
            label="Cirurgias"
            type="text"
            name="cirurgias"
            max="255"
            value={data.cirurgias}
            disabled={true}
          />
        </Grid>
      </Row>
      <Row>
        <Grid cols="12">
          <Input
            label="Doenças Cronicas"
            type="text"
            name="doencas_cronicas"
            max="255"
            value={data.doencas_cronicas}
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
