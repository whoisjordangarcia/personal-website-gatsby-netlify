import React from 'react'

import Wave from '../Wave/Wave'
import MovingBlob from '../MovingBlob/MovingBlob'
import TechnologistIcon from '../TechnologistIcon/TechnologistIcon'

import profilePhoto from '../../images/profile_photo2.jpg'

import styles from './IntroSection.module.css'

const IntroSection: React.FC = () => (
  <header className={styles.wrapper}>
    <img alt="Profile" src={profilePhoto} className={styles.profilePhoto} />
    <div className={styles.introSection}>
      <h1 className={styles.introText}>
        Hello! <Wave />
      </h1>
      <h2 className={styles.introText}>
        I'm <span>Jordan Garcia</span>, a technical lead at{' '}
        <a href="https://invitae.com" target="_blank" rel="noopener noreferrer">
          @invitae
        </a>
        . An aussie "aw-see" (\ä-s\) currently residing in new york. <TechnologistIcon />
      </h2>
    </div>
    <div className={styles.blobWrapper}>
      <MovingBlob />
    </div>
  </header>
)

export default IntroSection
