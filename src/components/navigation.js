import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu'

const Navigation = () => {
  const [isResponsive, setIsResponsive] = React.useState(false)

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <StaticImage
          className={styles.logo}
          width={'100px'}
          height={'50px'}
          alt="logo"
          src="../../static/images/logo.jpg"
        />
        <span className={styles.navigationItem}>Tangara</span>
      </Link>
      <AiOutlineMenu
        onClick={() => setIsResponsive(!isResponsive)}
        className={styles.burgerIcon}
      >
        MENU
      </AiOutlineMenu>
      {isResponsive ? (
        <ul className={styles.navigationResponsive}>
          <li className={styles.navigationItem}>
            <Link to="/" activeClassName="active">
              Inicio
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/" activeClassName="active">
              Reservar
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/" activeClassName="active">
              Inicio
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/" activeClassName="active">
              Reservar
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navigation
