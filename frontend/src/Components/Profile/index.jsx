import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { GET_PROFILE } from 'Services/api'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'
import FormProfile from './Form'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'

const Profile = () => {
  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const { url, options } = GET_PROFILE(token)
    request(url, options)
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <section>
      <Head title="Profile" />
      <Breadcrumb title="Meus dados" path="Informações de Usuário" />
      <FormProfile data={data} />
    </section>
  )
}

export default Profile;