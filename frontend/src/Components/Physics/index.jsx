import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { GET_PHYSICS } from 'Services/api'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'
import PhysicsForm from './Form'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'

const Physics = () => {
  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const { url, options } = GET_PHYSICS(token)
    request(url, options)
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <section>
      <Head title="Condição Física" />
      <Breadcrumb title="Condição Física" path="Informações de Físicas" />
      <PhysicsForm data={data} />
    </section>
  )
}

export default Physics;
