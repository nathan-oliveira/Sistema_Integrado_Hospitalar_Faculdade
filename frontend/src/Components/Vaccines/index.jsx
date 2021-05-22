import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { GET_VACCINES } from 'Services/api'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'
import FormVaccines from './Form'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'

const Vaccines = () => {
  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const { url, options } = GET_VACCINES(token)
    request(url, options)
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <section>
      <Head title="Histórico de Vacina" />
      <Breadcrumb title="Histórico de Vacina" path="Informações de Vacinas" />
      <FormVaccines data={data} />
    </section>
  )
}

export default Vaccines;
