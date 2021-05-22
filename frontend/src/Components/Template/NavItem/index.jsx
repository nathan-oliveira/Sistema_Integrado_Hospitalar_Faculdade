import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './NavItem.module.scss'

import If from 'Components/Template/Operator/If'

import { ReactComponent as Home } from 'Assets/svg/home.svg'
import { ReactComponent as Users } from 'Assets/svg/users.svg'
import { ReactComponent as PlusCircle } from 'Assets/svg/plus-circle.svg'
import { ReactComponent as FilePlus } from 'Assets/svg/file-plus.svg'
import { ReactComponent as FileMinus } from 'Assets/svg/file-minus.svg'

const NavItem = ({ mobile, changeMenuMobile }) => {
  const { menu } = useSelector(state => state.menu)
  const { data } = useSelector(state => state.user)

  function setMobile() {
    if (mobile) {
      changeMenuMobile()
    }
  }

  return (
    <ul className={!mobile ? styles.navbar__item : styles.navbar__item__mobile}>
      <If test={data}>
        <Link to="/" onClick={setMobile} className="animeTop">
          <Home />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Dashboard</span>
        </Link>

        <Link to="/profile" onClick={setMobile} className="animeTop">
          <Users />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Meus dados</span>
        </Link>

        <Link to="/doctors" onClick={setMobile} className="animeTop">
          <FilePlus />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Histórico Médico</span>
        </Link>

        <Link to="/vaccines" onClick={setMobile} className="animeTop">
          <FileMinus />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Histórico de Vacina</span>
        </Link>

        <Link to="/physics" onClick={setMobile} className="animeTop">
          <Users />
          <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Condição Física</span>
        </Link>

        <If test={(data.nivel === 1) || (data.id_nivel === 1)}>
          <Link to="/importdata" onClick={setMobile} className="animeTop">
            <PlusCircle />
            <span className={(!menu && !mobile) ? 'offscreen' : 'onscreen'}>Importação IHC</span>
          </Link>
        </If>
      </If>
    </ul>
  )
}

export default NavItem