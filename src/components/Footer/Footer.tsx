import React from 'react'

import styles from './Footer.module.css'

interface IFooter {
  title: string
  url: string
}

interface IProps {
  items: IFooter[]
}

const renderItems = (items: IFooter[]) =>
  items.map(item => (
    <li className={styles.listItem}>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {item.title}
      </a>
    </li>
  ))

const Footer: React.FC<IProps> = ({items}) => (
  <footer className={styles.footer}>
    <ul className={styles.list}>{renderItems(items)}</ul>
  </footer>
)

export default Footer
