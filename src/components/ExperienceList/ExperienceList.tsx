import React from 'react'

import styles from './ExperienceList.module.css'

interface IExperience {
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

interface IProps {
  experiences: IExperience[]
}

const renderItems = (experiences: IExperience[]) =>
  experiences.map(item => (
    <div className={styles.experience}>
      {item.logo ? (
        <img alt={item.logo.alt} src={item.logo.image} className={styles.logo} />
      ) : (
        <div className={styles.logo}></div>
      )}
      <div className={styles.company}>
        <h3 className={styles.companyName}>{item.companyName}</h3>
        {item.roles.map(role => (
          <p className={styles.role}>
            {role.title}
            <span>{role.duration}</span>
          </p>
        ))}
      </div>
    </div>
  ))

const ExperienceList: React.FC<IProps> = ({experiences}) => <div>{renderItems(experiences)}</div>

export default ExperienceList
