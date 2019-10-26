import React from 'react'

import styles from './SkillList.module.css'

interface ISkill {
  heading: string
  items: string[]
}

interface IProps {
  skills: ISkill[]
}

const renderItems = (skills: ISkill[]) =>
  skills.map(skill => (
    <ul className={styles.list}>
      <li>
        <h3>{skill.heading}</h3>
      </li>
      {skill.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  ))

const SkillList: React.FC<IProps> = ({skills}) => <div className={styles.wrapper}>{renderItems(skills)}</div>

export default SkillList
