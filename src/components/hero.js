import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <StaticImage
        className={styles.title}
        alt="logo"
        src="../../static/images/logo.jpg"
        width={'100px'}
        height={'100px'}
      />{' '}
      {content && (
        <>
          <div className={styles.content}>{renderRichText(content)}</div>
          <button className="btn">Reservar</button>
        </>
      )}
    </div>
  </div>
)

export default Hero
