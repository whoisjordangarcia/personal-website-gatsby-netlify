import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FourOhFour from '../components/FourOhFour/FourOhFour'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FourOhFour />
  </Layout>
)

export default NotFoundPage
