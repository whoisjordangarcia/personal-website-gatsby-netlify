import React from 'react'

import Layout from 'components/Layout'
import SeoData from 'components/SeoData/SeoData'
import FourOhFour from 'components/FourOhFour/FourOhFour'

const NotFoundPage = () => (
  <Layout>
    <SeoData title="404: Not found" />
    <FourOhFour />
  </Layout>
)

export default NotFoundPage
