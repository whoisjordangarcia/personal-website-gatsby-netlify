import React from 'react'

import styles from './Footer.module.css'

interface IFooter {
  title: string
  url: string
}

interface IProps {
  items: IFooter[]
  onClick: (title: string) => void
}

const renderItems = (items: IFooter[], onClick: (title: string) => void) => {
  const handleOnClick = (title: string) => {
    onClick(title)
  }

  return items.map(item => (
    <li className={styles.listItem}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        onClick={() => handleOnClick(item.title)}
      >
        {item.title}
      </a>
    </li>
  ))
}

const Footer: React.FC<IProps> = ({items, onClick}) => (
  <footer className={styles.footer}>
    <ul className={styles.list}>{renderItems(items, onClick)}</ul>
  </footer>
)

export default Footer
