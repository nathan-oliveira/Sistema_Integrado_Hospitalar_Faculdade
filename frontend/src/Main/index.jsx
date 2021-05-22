import React from 'react'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { verifyToken } from 'Store/user/userPost'
import Router from './Router'

import Header from 'Components/Template/Header'
import Main from 'Components/Template/Main'
import Sidebar from 'Components/Template/Sidenav'
import Footer from 'Components/Template/Footer'
import If from 'Components/Template/Operator/If'

const App = () => {
  const dispatch = useDispatch();
  const { error, data } = useSelector(state => state.user)

  React.useEffect(() => {
    dispatch(verifyToken())
  }, [dispatch])

  return (
    <React.Fragment>
      <BrowserRouter>
        <If test={!error && data?.token}>
          <Header />
        </If>

        <Main>
          <Router />
        </Main>

        <If test={!error && data?.token}>
          <Sidebar />
          <Footer />
        </If>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
