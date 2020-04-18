import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import FourOhFour from '../components/FourOhFour/FourOhFour'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FourOhFour />
  </Layout>
)

export default NotFoundPage
