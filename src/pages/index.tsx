import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import ExperienceList from 'components/ExperienceList/ExperienceList'
import InfoSection from 'components/InfoSection/InfoSection'
import IntroSection from 'components/IntroSection/IntroSection'
import Layout from 'components/Layout'
import Seo from 'components/Seo/Seo'

import invitaeLogo from 'static/logos/invitae-logo.png'
import tigerspikeLogo from 'static/logos/tigerspike-logo.png'
import todaytixLogo from 'static/logos/todaytix-logo.png'
import cv from 'static/resume/jordan_garcia_oct_18_cv.pdf'

const IndexPage = (): React.ReactNode => {
  return (
    <Layout>
      <Seo title="Home" />

      <IntroSection />

      <InfoSection title="Background">
        <p>
          Hello! I&apos;m Jordan, a technical lead based in New York, NY. I enjoy creating clever solutions that are scalable
          and performant while providing engaging, pixel-perfect user
          experiences.
        </p>
        <p>
          If you&apos;d like to get in touch with me, then{' '}
          <OutboundLink
            href="mailto:arickho@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </OutboundLink>{' '}
          and{' '}
          <OutboundLink
            href="https://twitter.com/whoismrgarcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </OutboundLink>{' '}
          are your best channels.
        </p>
      </InfoSection>

      <InfoSection>
        <OutboundLink href={cv} target="_blank" rel="noopener noreferrer">
          View my resume
        </OutboundLink>
      </InfoSection>

      <InfoSection title="Contribution">
        <img
          src="https://ghchart.rshah.org/EE5050/whoisjordangarcia"
          style={{ width: '100%' }}
          alt="Jordan Garcia's Github chart"
          loading="lazy"
        />
      </InfoSection>

      <InfoSection title="Experience">
        <ExperienceList
          experiences={[
            {
              companyName: 'Invitae, NY',
              roles: [
                { title: 'Engineering Lead', duration: 'Dec 19’ - Present' },
                {
                  title: 'Senior Software Engineer',
                  duration: 'Nov 18’ - Dec 19’',
                },
              ],
              logo: { alt: 'Invitae, NYC logo', image: invitaeLogo },
            },
            {
              companyName: 'TodayTix, NY',
              roles: [
                {
                  title: 'Senior Software Engineer',
                  duration: 'Oct 17’ - Oct 18’',
                },
              ],
              logo: { alt: 'TodayTix, NYC logo', image: todaytixLogo },
            },
            {
              companyName: 'Tigerspike, NY',
              roles: [
                {
                  title: 'Senior Software Engineer',
                  duration: 'Jul 16’ - Oct 17’',
                },
                { title: 'Software Engineer', duration: 'Sept 15’ - Jul 16’' },
              ],
              logo: { alt: 'Tigerspike, NYC logo', image: tigerspikeLogo },
            },
            {
              companyName: 'Tigerspike, SYD',
              roles: [
                { title: 'Software Engineer', duration: 'Feb 14’ - Sept 15’' },
              ],
              logo: { alt: 'Tigerspike, SYD logo', image: tigerspikeLogo },
            },
            {
              companyName: 'Western Australia Police Airwing, PER',
              roles: [
                { title: 'Software Developer', duration: 'Jul 11’ - Jan 14’' },
              ],
            },
            {
              companyName: 'Simbiotic, PER',
              roles: [
                {
                  title: 'Software Developer / Designer',
                  duration: 'Jul 11’ - Nov 11’',
                },
              ],
            },
          ]}
        />
      </InfoSection>
    </Layout>
  )
}

export default IndexPage
