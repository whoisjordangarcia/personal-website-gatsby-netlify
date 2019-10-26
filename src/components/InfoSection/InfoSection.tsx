import React from 'react'

import styles from './InfoSection.module.css'

interface IProps {
  title: string
  children: React.ReactNode
}

const InfoSection: React.FC<IProps> = ({title, children}) => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </section>
)

export default InfoSection
