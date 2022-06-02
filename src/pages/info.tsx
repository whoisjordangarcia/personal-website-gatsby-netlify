import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import InfoSection from 'components/InfoSection/InfoSection'
import Layout from 'components/Layout'
import Seo from 'components/Seo/Seo'
import profilePhoto from 'images/profile_photo.0983212.png'

const IndexPage = (): React.ReactNode => {
  return (
    <Layout>
      <Seo title="Info" />

      <InfoSection title="Info">
        <h3>Jordan&apos;s Name</h3>
        <p>These are correct:</p>
        <ul>
          <li>Jordan</li>
          <li>Jordan Garcia</li>
        </ul>
        <p>
          These are <b>not</b> correct:
        </p>
        <ul>
          <li>Jordon</li>
          <li>JJ</li>
          <li>Jay-jay</li>
          <li>J-dawg</li>
        </ul>
      </InfoSection>

      <InfoSection title="Photos">
        <img
          alt="Cropped photo of Jordan"
          src={profilePhoto}
          style={{ maxHeight: '200px' }}
        />
      </InfoSection>

      <InfoSection title="Bio">
        <h3>Long, First Person</h3>
        <p>
          Hello! I&apos;m Jordan, a engineering manager based in Miami, FL. I
          enjoy creating clever solutions that are scalable and performant while
          providing engaging, pixel-perfect user experiences.
        </p>
        <h3>Long, Third Person</h3>
        <p>
          Jordan is a engineering manager based in Miami, FL. He enjoys creating
          clever solutions that are scalable and performant while providing
          engaging, pixel-perfect user experiences.
        </p>

        <h3>Short, First Person</h3>
        <p>
          Hi, I&apos;m Jordan Garcia. I&apos;m a engineering manager at Invitae
          and an active contributor to the open-source community. I like solving
          large-scale problems.
        </p>
        <h3>Short, Third Person</h3>
        <p>
          Jordan Garcia is a engineering manager at Invitae and is an active
          contributor to the open-source community. He also likes solving
          large-scale problems.
        </p>
      </InfoSection>

      <InfoSection title="Links">
        <ul>
          <li>
            <OutboundLink href="/">Website</OutboundLink> - this website
          </li>
          <li>
            <OutboundLink href="/info">Info</OutboundLink> - this page
          </li>
          <li>
            <OutboundLink href="https://twitter.com/whoismrgarcia">
              Twitter
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="mailto:arickho@gmail.com">Email</OutboundLink> -
            Email
          </li>
          <li>
            <OutboundLink href="https://github.com/whoisjordangarcia">
              Github
            </OutboundLink>
          </li>
        </ul>
      </InfoSection>
    </Layout>
  )
}

export default IndexPage
