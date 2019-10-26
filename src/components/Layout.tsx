import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Footer from './Footer/Footer'

interface IProps {
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <Footer
        items={[
          {title: 'Github', url: 'https://github.com/arickho'},
          {title: 'Linkedin', url: 'https://www.linkedin.com/in/arickhogarcia/'},
          {title: 'Email', url: 'mailto:arickho@gmail.com'},
          {title: 'Twitter', url: 'https://twitter.com/whoismrgarcia'},
          {title: 'Instagram', url: 'https://www.instagram.com/whoisjordangarcia/'}
        ]}
      />
    </>
  )
}

export default Layout
