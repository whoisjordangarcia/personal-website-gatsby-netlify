import React from 'react'

import styles from './Footer.module.css'

interface Footer {
  title: string
  url: string
}

interface Props {
  items: Footer[]
  onClick: (title: string) => void
}

const renderItems = (
  items: Footer[],
  onClick: (title: string) => void
): React.ReactNode => {
  const handleOnClick = (title: string): void => {
    onClick(title)
  }

  return items.map((item) => (
    <li key={item.title} className={styles.listItem}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        onClick={(): void => handleOnClick(item.title)}
      >
        {item.title}
      </a>
    </li>
  ))
}

const Footer: React.FC<Props> = ({ items, onClick }) => (
  <footer className={styles.footer}>
    <ul className={styles.list}>{renderItems(items, onClick)}</ul>
  </footer>
)

export default Footer
