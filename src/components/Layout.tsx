import React from 'react'

import Footer from './Footer/Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const onFooterClick = (title: string): void => {
    window.dataLayer.push({
      event: 'click',
      link: title,
    })
  }

  return (
    <>
      <main>{children}</main>
      <Footer
        items={[
          { title: 'Github', url: 'https://github.com/arickho' },
          {
            title: 'Linkedin',
            url: 'https://www.linkedin.com/in/arickhogarcia/',
          },
          { title: 'Email', url: 'mailto:arickho@gmail.com' },
          { title: 'Twitter', url: 'https://twitter.com/whoismrgarcia' },
          {
            title: 'Instagram',
            url: 'https://www.instagram.com/whoisjordangarcia/',
          },
        ]}
        onClick={onFooterClick}
      />
    </>
  )
}

export default Layout
