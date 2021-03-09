import React from 'react'

import * as styles from './FourOhFour.module.css'

const FourOhFour: React.FC<{}> = () => (
  <div className={styles.wrapper}>
    <h2>PAGE NOT FOUND 🙁</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <a href="/">Redirect back to home.</a>
  </div>
)

export default FourOhFour
