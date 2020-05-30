import React from 'react'
import Wave from 'components/Wave/Wave'
import MovingBlob from 'components/MovingBlob/MovingBlob'
import TechnologistIcon from 'components/TechnologistIcon/TechnologistIcon'
import profilePhoto from 'images/profile_photo.34446d3a6e19a8.jpg'
import styles from './IntroSection.module.css'

const IntroSection: React.FC = () => (
  <header className={styles.wrapper}>
    <img
      alt="Profile"
      src={profilePhoto}
      className={styles.profilePhoto}
      loading="lazy"
    />
    <div className={styles.introSection}>
      <h1 className={styles.introText}>
        Hello! <Wave />
      </h1>
      <h2 className={styles.introText}>
        I&apos;m <span>Jordan Garcia</span>, a technical lead at{' '}
        <a href="https://invitae.com" target="_blank" rel="noopener noreferrer">
          @invitae
        </a>
        . An aussie &quot;aw-see&quot; (\ä-s\) currently residing in new york.{' '}
        <TechnologistIcon />
      </h2>
    </div>
    <div className={styles.blobWrapper}>
      <MovingBlob />
    </div>
  </header>
)

export default IntroSection
