import React from 'react'
import styles from './InfoSection.module.css'

interface Props {
  title?: string
  children: React.ReactNode
}

const InfoSection: React.FC<Props> = ({ title, children }) => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </section>
)

export default InfoSection
