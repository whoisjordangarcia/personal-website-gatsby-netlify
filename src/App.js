import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Paragraph, Heading, Link } from './components';
import Intro from './sections/Intro';
import Information from './sections/Information';
import media from './styles/media';

const App = () => {
  const handleCVClick = (event) => {
    // eslint-disable-next-line no-undef
    ga('send', 'event', {
      eventCategory: 'CV',
      eventAction: 'click',
      eventLabel: event.target.href,
    });
  };

  return (
    <React.Fragment>
      <Intro />
      <Fade bottom>
        <div>
          <Information heading="BACKGROUND">
            <Paragraph>
              Software engineer on an assortment of technical projects, consistently recognised for
              achievements through my education and into my professional career. I enjoy discovering
              clever solutions to complex problems in all aspects of my field.
            </Paragraph>
            <Paragraph>
              <strong>When I’m not in front of the computer screen coding,</strong> I’m probably
              finding the next place to eat on ‘The Infatuation’, exploring the five boroughs of new
              york, or crossing off another item on my bucket list.
            </Paragraph>
          </Information>
          <Information heading="SKILLS">
            <Lists>
              <ul>
                <li>
                  <ListHeading fontSize="18px">FRONTEND</ListHeading>
                </li>
                <li>React</li>
                <li>Redux</li>
                <li>Graphql</li>
                <li>Webpack</li>
                <li>Jest</li>
                <li>Angular</li>
              </ul>
              <ul>
                <li>
                  <ListHeading fontSize="18px">BACKEND</ListHeading>
                </li>
                <li>Node</li>
                <li>Golang</li>
                <li>Python</li>
                <li>Redis</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
              <ul>
                <li>
                  <ListHeading fontSize="18px">INFRA</ListHeading>
                </li>
                <li>Docker</li>
                <li>Ansible</li>
                <li>NGINX</li>
              </ul>
              <ul>
                <li>
                  <ListHeading fontSize="18px">DESIGN</ListHeading>
                </li>
                <li>Sketch</li>
                <li>InDesign</li>
                <li>Photoshop</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
                <li>User Testing</li>
              </ul>
            </Lists>
          </Information>
          <Information>
            <Link
              bold
              color="#ee5050"
              fontSize="22px"
              href="https://arickho.com/assets/JORDAN_GARCIA_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCVClick}
            >
              View my resume
            </Link>
          </Information>
        </div>
        <div>
          <Information heading="CONTRIBUTION">
            <GithubImage
              src="http://ghchart.rshah.org/EE5050/arickho"
              alt="arickho 's Github chart"
            />
          </Information>
          <Information heading="EXPERIENCE">
            <CompanyWrapper>
              <CompanyHeading fontSize="18px">TodayTix</CompanyHeading>
              <CompanyContent>
                Senior Software Engineer <CompanyDuration>Oct 17’ - Present</CompanyDuration>{' '}
              </CompanyContent>
            </CompanyWrapper>
            <CompanyWrapper>
              <CompanyHeading fontSize="18px">Tigerspike</CompanyHeading>
              <CompanyContent>
                Senior Software Engineer <CompanyDuration>Jul 16’ - Oct 17’</CompanyDuration>
              </CompanyContent>
              <CompanyContent>
                Software Engineer <CompanyDuration>Sept 15’ - Jul 16’</CompanyDuration>
              </CompanyContent>
              <CompanyContent>
                Software Engineer <CompanyDuration>Feb 14’ - Sep 15’</CompanyDuration>
              </CompanyContent>
            </CompanyWrapper>
            <CompanyWrapper>
              <CompanyHeading fontSize="18px">Simbiotic</CompanyHeading>
              <CompanyContent>
                Senior Developer <CompanyDuration>Jul 11’ - Jan 14’</CompanyDuration>
              </CompanyContent>
            </CompanyWrapper>
            <CompanyWrapper>
              <CompanyHeading fontSize="18px">Western Australia Police Airwing</CompanyHeading>
              <CompanyContent>
                Software Developer / Designer <CompanyDuration>Jul 11’ - Nov 11’</CompanyDuration>
              </CompanyContent>
            </CompanyWrapper>
          </Information>
          <FooterSection>
            <ul>
              <li>
                <Link
                  bold
                  color="#ee5050"
                  fontSize="18px"
                  href="https://github.com/arickho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Link>
              </li>
              <li>
                <Link
                  bold
                  color="#ee5050"
                  fontSize="18px"
                  href="https://www.linkedin.com/in/arickhogarcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </Link>
              </li>
              <li>
                <Link
                  bold
                  color="#ee5050"
                  fontSize="18px"
                  href="mailto:arickho@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EMAIL
                </Link>
              </li>
              <li>
                <Link
                  bold
                  color="#ee5050"
                  fontSize="18px"
                  href="https://twitter.com/whoismrgarcia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TWITTER
                </Link>
              </li>
              <li>
                <Link
                  bold
                  fontSize="18px"
                  color="#ee5050"
                  href="https://www.instagram.com/whoisjordangarcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>
      </Fade>
    </React.Fragment>
  );
};

const ListHeading = Heading.h3.extend`
  font-weight: 500;
  margin: 0 10px 0 0;
  padding: 0;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: row;
  ul {
    list-style: none;
    -webkit-padding-start: 0;
    flex-grow: 1;

    li {
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: 300;
    }
  }

  ${media.small`
    flex-wrap: wrap;
  `};
`;

const GithubImage = styled.img`
  margin-top: 25px;
  width: 100%;
`;

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CompanyHeading = Heading.h3.extend`
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const CompanyContent = Paragraph.extend`
  margin: 0;
  padding: 0;
  width: 100%;

  ${media.small`
    line-height: 15px;
  `};
`;

const CompanyDuration = styled.span`
  text-align: right;
  float: right;
  font-size: 14px;

  ${media.small`
    display: inline-block;
    text-align: left;
    float: none;
    width: 100%;
    font-size: 12px;
    margin-bottom: 10px;
  `};
`;

const FooterSection = styled.footer`
  display: grid;
  margin: 50px 50px 20px 50px;

  ul {
    list-style: none;
    float: right;
    -webkit-padding-start: 0;

    li {
      float: right;
      text-align: right;
      margin-left: 20px;
      min-width: 100px;
    }
  }

  ${media.small`
    margin: 20px 40px;

    ul li {
      margin: 0 0 10px 0;
      display: block;
      float: left;
      text-align: left;
      width: 100%;
    }
  `};
`;

export default App;
