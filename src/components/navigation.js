import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <StaticImage
        className={styles.logo}
        alt="logo"
        src="../../static/images/logo.jpg"
      />
      <span className={styles.navigationItem}>Tangara</span>
    </Link>
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
  </nav>
)

export default Navigation
