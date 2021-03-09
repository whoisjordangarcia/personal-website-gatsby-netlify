import React from 'react'

import * as styles from './Footer.module.css'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

interface Footer {
  title: string
  url: string
}

interface FooterProps {
  items: Footer[]
}

const Footer: React.FC<FooterProps> = ({ items }) => (
  <footer className={styles.footer}>
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title} className={styles.listItem}>
          <OutboundLink
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {item.title}
          </OutboundLink>
        </li>
      ))}
    </ul>
  </footer>
)

export default Footer
