import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetch from 'Hooks/useFetch'
import { GET_USERS } from 'Services/api'

import Head from 'Components/Helper/Head'
import Breadcrumb from 'Components/Template/Breadcrumb'

import Error from 'Components/Helper/Error'
import Loading from 'Components/Helper/Loading'
import Table from 'Components/Template/Table'
import Pagination from 'Components/Template/Table/Pagination'
import Search from 'Components/Template/Table/Search'
import If from 'Components/Template/Operator/If'

const Home = () => {
  const { data: dataUser } = useSelector(state => state.user)
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')
  const [dataTable, setDataTable] = React.useState([])
  const { token } = useSelector(state => state.user.data)
  const { data, loading, error, request} = useFetch()
  const navigate = useNavigate();

  React.useEffect(() => {
    const { url, options } = GET_USERS(token)
    request(url, options)
  }, [])

  async function getUserProfile(id) {
    navigate(`/user/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) return (
    <section>
      <Head title="Home" />
      <Breadcrumb title="Dashboard" path="Painel de Controle" />

      <div className="animeLeft">
        <If test={(dataUser.nivel === 1) || (dataUser.id_nivel === 1)}>
          <Search setQuery={setSearch} />
          <Table
            dataTable={dataTable}
            loading={loading}
            deletePost={() => console.log("")}
            getPost={getUserProfile}
            head={{ id: 'Código', nome: 'Nome', cpf: "CPF", rg: "RG", email: "E-mail" }}
          />
          <Pagination
            data={data}
            setPage={setPage}
            page={page}
            search={search}
            setDataTable={setDataTable}
          />
        </If>
      </div>
    </section>
  )
  else
    return null;
}

export default Home;