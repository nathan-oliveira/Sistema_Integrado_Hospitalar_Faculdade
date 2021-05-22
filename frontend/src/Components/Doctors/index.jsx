import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { GET_DOCTORS } from 'Services/api'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'
import FormDoctors from './Form'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'

const Doctors = () => {
  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const { url, options } = GET_DOCTORS(token)
    request(url, options)
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <section>
      <Head title="Histórico Médico" />
      <Breadcrumb title="Histórico Médico" path="Informações de Médicas" />
      <FormDoctors data={data} />
    </section>
  )
}

export default Doctors;
