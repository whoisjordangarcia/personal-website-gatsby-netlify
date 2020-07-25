import React from 'react'

import { FooterWrapper, List, ListItem, Link } from './Footer.style'

interface Footer {
  title: string
  url: string
}

interface Props {
  items: Footer[]
  onClick: (title: string) => void
}

const Footer: React.FC<Props> = ({ items, onClick }) => {
  const handleOnClick = (title: string): void => {
    onClick(title)
  }

  return (
    <FooterWrapper>
      <List>
        {items.map((item) => (
          <ListItem key={item.title}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(): void => handleOnClick(item.title)}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </FooterWrapper>
  )
}

export default Footer
