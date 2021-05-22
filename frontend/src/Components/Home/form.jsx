import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { GET_ALLUSERS } from 'Services/api'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'

import FormProfile from 'Components/Profile/Form'
import FormDoctors from 'Components/Doctors/Form'
import FormVaccines from 'Components/Vaccines/Form'
import FormPhysics from 'Components/Physics/Form'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'

const Form = () => {
  const { id } = useParams();
  const { token } = useSelector(state => state.user.data)
  const { data: dataProfile, loading: loadProfile, error: errorProfile, request} = useFetch()

  React.useEffect(() => {
    if (id) {
      const { url, options } = GET_ALLUSERS(id, token)
      request(url, options)
    }
  }, [])

  if (loadProfile) return <Loading />
  if (errorProfile) return <Error error="Favor informar o suporte!" />
  if (dataProfile)
    return (
      <section>
        <Head title="Usuário" />
        <Breadcrumb title="Usuário" path="Informações de Usuário" />

        <h4 className="bottom10 animeLeft">Dados:</h4>
        <FormProfile data={dataProfile[0]} />

        <h4 className="bottom10 animeLeft">Histórico Médico:</h4>
        <FormDoctors data={dataProfile[0].id_historicomedico} />

        <h4 className="bottom10 animeLeft">Histórico de Vacina:</h4>
        <FormVaccines data={dataProfile[0].id_historicovacina} />

        <h4 className="bottom10 animeLeft">Condição Física:</h4>
        <FormPhysics data={dataProfile[0].id_condicoesfisicas} />
      </section>
    )
  else
    return null
}

export default Form;