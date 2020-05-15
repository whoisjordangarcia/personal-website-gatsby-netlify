import React from 'react'

import manTechnologistBackground from '../../images/man-technologist-icon.png'

import styles from './TechnologistIcon.module.css'

const TechnologistIcon: React.FC = () => (
  <span
    style={{ backgroundImage: `url(${manTechnologistBackground})` }}
    className={styles.technologist}
  ></span>
)

export default TechnologistIcon
