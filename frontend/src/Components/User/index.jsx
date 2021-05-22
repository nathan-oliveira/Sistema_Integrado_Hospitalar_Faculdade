import React from 'react'
import styles from './User.module.scss'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Head from 'Components/Helper/Head'
import Form from './Form'
import If from 'Components/Template/Operator/If'

import BannerLogin from 'Assets/img/banner.jpg'

const User = () => {
  const [error, setError] = React.useState(null);
  const { data } = useSelector(state => state.user)

  if (data === null || data?.token === null)
    return (
      <section className={`${styles.content} animeLeft`}>
        <Head title="Autenticação" />
        <div className={styles.logo__banner}>
          <img src={BannerLogin} alt="Banner de Login" width="700px" />
        </div>
        <div className={styles.card}>
          <div className={styles.card__header}>
            <h1 className={styles.card__header__title}>Entre com sua conta</h1>
          </div>

          <div className={styles.card__main}>
            <If test={error}>
              {error && <p className={styles.card__main__error}>{error}</p>}
            </If>
            <Form setError={setError} />
          </div>
        </div>
      </section>
    )
  else
    return <Navigate to="/" />
}

export default User;