import React from 'react'

import ExperienceList from '../components/ExperienceList/ExperienceList'
import InfoSection from '../components/InfoSection/InfoSection'
import IntroSection from '../components/IntroSection/IntroSection'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import SkillList from '../components/SkillList/SkillList'

import invitaeLogo from '../static/logos/invitae-logo.png'
import tigerspikeLogo from '../static/logos/tigerspike-logo.png'
import todaytixLogo from '../static/logos/todaytix-logo.png'
import cv from '../static/resume/jordan_garcia_oct_18_cv.pdf'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <InfoSection title="Background">
      <p>
        Software engineer on an assortment of technical projects, consistently recognised for achievements through my
        education and into my professional career. I enjoy discovering clever solutions to complex problems in all
        aspects of my field.
      </p>
      <p>
        <strong>When I’m not in front of the computer screen coding</strong>, I’m probably finding the next place to eat
        on ‘The Infatuation’, exploring the five boroughs of new york, or crossing off another item on my bucket list.
      </p>
    </InfoSection>
    <InfoSection title="Skills">
      <SkillList
        skills={[
          {
            heading: 'Frontend',
            items: ['Typescript', 'React', 'Redux', 'Graphql', 'Webpack', 'Jest', 'Cypress']
          },
          {
            heading: 'Backend',
            items: ['Python', 'Node', 'Golang', 'C#', 'Redis', 'MySQL', 'MongoDB']
          },
          {
            heading: 'Infra',
            items: ['Docker', 'Kubernetes', 'Ansible', 'NGINX']
          },
          {
            heading: 'Design',
            items: ['Sketch', 'InDesign', 'Photoshop', 'Prototyping', 'Wireframing', 'User Testing']
          }
        ]}
      />
    </InfoSection>
    <InfoSection title="">
      <a href={cv} target="_blank" rel="noopener noreferrer">
        View my resume
      </a>
    </InfoSection>
    <InfoSection title="Contribution">
      <img src="https://ghchart.rshah.org/EE5050/arickho" style={{width: '100%'}} alt="Jordan Garcia's Github chart" />
    </InfoSection>
    <InfoSection title="Experience">
      <ExperienceList
        experiences={[
          {
            companyName: 'Invitae, NY',
            roles: [{title: 'Senior Software Engineer', duration: 'Nov 18’ - Present'}],
            logo: {alt: 'Invitae, NYC logo', image: invitaeLogo}
          },
          {
            companyName: 'TodayTix, NY',
            roles: [{title: 'Senior Software Engineer', duration: 'Oct 17’ - Oct 18’'}],
            logo: {alt: 'TodayTix, NYC logo', image: todaytixLogo}
          },
          {
            companyName: 'Tigerspike, NY',
            roles: [
              {title: 'Senior Software Engineer', duration: 'Jul 16’ - Oct 17’'},
              {title: 'Software Engineer', duration: 'Sept 15’ - Jul 16’'}
            ],
            logo: {alt: 'Tigerspike, NYC logo', image: tigerspikeLogo}
          },
          {
            companyName: 'Tigerspike, SYD',
            roles: [{title: 'Software Engineer', duration: 'Feb 14’ - Sept 15’'}],
            logo: {alt: 'Tigerspike, SYD logo', image: tigerspikeLogo}
          },
          {
            companyName: 'Western Australia Police Airwing, PER',
            roles: [{title: 'Software Developer', duration: 'Jul 11’ - Jan 14’'}]
          },
          {
            companyName: 'Simbiotic, PER',
            roles: [{title: 'Software Developer / Designer', duration: 'Jul 11’ - Nov 11’'}]
          }
        ]}
      />
    </InfoSection>
  </Layout>
)

export default IndexPage
