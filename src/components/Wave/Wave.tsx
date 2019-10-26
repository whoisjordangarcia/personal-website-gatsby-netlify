import React from 'react'

import waveBackground from '../../images/wave-icon.png'

import styles from './Wave.module.css'

const Wave: React.FC = () => <span style={{backgroundImage: `url(${waveBackground})`}} className={styles.wave}></span>

export default Wave
