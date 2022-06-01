import React from 'react'
import Wave from 'components/Wave/Wave'
import TechnologistIcon from 'components/TechnologistIcon/TechnologistIcon'
import profilePhoto from 'images/profile_photo.0983212.png'
import * as styles from './IntroSection.module.css'
import SplineBackground from 'components/SplineBackground/SplineBackground'

const IntroSection: React.FC = () => (
  <header className={styles.wrapper}>
    <SplineBackground />
    <div className={styles.content}>
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
          I&apos;m <span>Jordan Garcia</span>, a engineering lead at{' '}
          <a
            href="https://invitae.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @invitae
          </a>
          . An aussie &quot;aw-see&quot; (\ä-s\) currently residing in miami.{' '}
          <TechnologistIcon />
        </h2>
      </div>
    </div>
  </header>
)

export default IntroSection
