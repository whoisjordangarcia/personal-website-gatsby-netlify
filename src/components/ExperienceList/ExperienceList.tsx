import React from 'react'

import styles from './ExperienceList.module.css'

interface Experience {
  companyName: string
  roles: {
    title: string
    duration: string
  }[]
  logo?: {
    image: string
    alt: string
  }
}

interface Props {
  experiences: Experience[]
}

const renderItems = (experiences: Experience[]): React.ReactNode =>
  experiences.map((item) => (
    <div key={item.companyName} className={styles.experience}>
      {item.logo ? (
        <img
          loading="lazy"
          alt={item.logo.alt}
          src={item.logo.image}
          className={styles.logo}
        />
      ) : (
        <div className={styles.logo}></div>
      )}
      <div className={styles.company}>
        <h3 className={styles.companyName}>{item.companyName}</h3>
        {item.roles.map((role) => (
          <p key={role.title} className={styles.role}>
            {role.title}
            <span>{role.duration}</span>
          </p>
        ))}
      </div>
    </div>
  ))

const ExperienceList: React.FC<Props> = ({ experiences }) => (
  <div>{renderItems(experiences)}</div>
)

export default ExperienceList
