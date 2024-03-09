import React from 'react'

import Footer from './Footer/Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer
        items={[
          { title: 'Github', url: 'https://github.com/whoisjordangarcia' },
          {
            title: 'Linkedin',
            url: 'https://www.linkedin.com/in/arickhogarcia/',
          },
          {
            title: 'Instagram',
            url: 'https://www.instagram.com/whoisjordangarcia/',
          },
        ]}
      />
    </>
  )
}

export default Layout
