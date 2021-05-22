import React from 'react'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'
import FormPassword from './Form'

const ChangePassword = () => {
  return (
    <section>
      <Head title="Password" />
      <Breadcrumb title="Senha" path="Alterar Senha" />

      <FormPassword />
    </section>
  )
}

export default ChangePassword;