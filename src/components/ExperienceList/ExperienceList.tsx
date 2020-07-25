import React from 'react'

import {
  Logo,
  EmptyLogo,
  Company,
  ExperienceItem,
  CompanyHeading,
  Role,
  Duration,
} from './ExperienceList.style'

interface Experience {
  companyName: string
  roles: {
    title: string
    duration: string
  }[]
  logo?: {
    image: string
    alt: string
  }
}

interface Props {
  experiences: Experience[]
}

const ExperienceList: React.FC<Props> = ({ experiences }) => (
  <div>
    {experiences.map((item) => (
      <ExperienceItem key={item.companyName}>
        {item.logo ? (
          <Logo loading="lazy" alt={item.logo.alt} src={item.logo.image} />
        ) : (
          <EmptyLogo />
        )}
        <Company>
          <CompanyHeading>{item.companyName}</CompanyHeading>
          {item.roles.map((role) => (
            <Role key={role.title}>
              {role.title}
              <Duration>{role.duration}</Duration>
            </Role>
          ))}
        </Company>
      </ExperienceItem>
    ))}
  </div>
)

export default ExperienceList
