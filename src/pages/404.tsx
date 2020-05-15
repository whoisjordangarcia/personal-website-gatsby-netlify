import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo/Seo'
import FourOhFour from 'components/FourOhFour/FourOhFour'

const NotFoundPage = (): React.ReactNode => (
  <Layout>
    <Seo title="404: Not found" />
    <FourOhFour />
  </Layout>
)

export default NotFoundPage
