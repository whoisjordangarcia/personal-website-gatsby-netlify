import React from 'react'

import styles from './SkillList.module.css'

interface Skill {
  heading: string
  items: string[]
}

interface Props {
  skills: Skill[]
}

const renderItems = (skills: Skill[]): React.ReactNode =>
  skills.map((skill) => (
    <div key={skill.heading} className={styles.skill}>
      <h3>{skill.heading}</h3>
      <ul className={styles.list}>
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  ))

const SkillList: React.FC<Props> = ({ skills }) => (
  <div className={styles.wrapper}>{renderItems(skills)}</div>
)

export default SkillList
