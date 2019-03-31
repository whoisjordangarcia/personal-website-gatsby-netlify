import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Head from 'next/head';

import { Paragraph, Heading, Link, HeaderTags } from 'components';
import { Intro, Information } from 'templates';
import { media } from 'styles';

import {
  downloadClicked as downloadClickedActionCreator,
  externalClicked as externalClickedActionCreator,
  fetchData,
  getData as getDataSelector
} from 'store';

const ResumeInformation = styled(Information)`
  margin: 10px 0;
`;

const ListHeading = styled(Heading.h3)`
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

    ul {
      flex: 50%;
    }
  `};

  ${media.medium`
    flex-wrap: wrap;

    ul {
      flex: 50%;
    }
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

const CompanyHeading = styled(Heading.h3)`
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const CompanyContent = styled(Paragraph)`
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

class Index extends Component {
  static async getInitialProps({ reduxStore }) {
    reduxStore.dispatch(fetchData());
    return {};
  }

  static propTypes = {
    data: PropTypes.shape(),
    downloadClicked: PropTypes.func.isRequired
  };

  handleOnDownloadCVClick = event => {
    this.props.downloadClicked(event.target.href);
  };

  handleOnLinkClick = event => {
    this.props.externalClicked(event.target.href);
  };

  render() {
    const { data } = this.props;
    const {
      background: backgroundParagraphs,
      skills: skillsList,
      resume: resumeLink,
      contribution,
      experience: experienceList,
      contacts
    } = data;

    return (
      <React.Fragment>
        <Head>
          <title>Who is Jordan Garcia?</title>
          <HeaderTags {...data.headers} />
        </Head>
        <Intro />
        <Fade bottom>
          <div>
            <Information heading="BACKGROUND">
              {backgroundParagraphs.map(backgroundParagraph => (
                <Paragraph
                  key={backgroundParagraph}
                  dangerouslySetInnerHTML={{
                    __html: backgroundParagraph
                  }}
                />
              ))}
            </Information>

            <Information heading="SKILLS">
              <Lists>
                {skillsList.map(skill => (
                  <ul key={skill.name}>
                    <li>
                      <ListHeading fontSize="18px">{skill.name}</ListHeading>
                    </li>
                    {skill.list.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </Lists>
            </Information>

            <ResumeInformation>
              <Link
                bold
                color="#ee5050"
                fontSize="22px"
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.handleOnDownloadCVClick}
              >
                View my resume
              </Link>
            </ResumeInformation>
          </div>

          <div>
            {!contribution.isHidden && (
              <Information heading="CONTRIBUTION">
                <GithubImage src={contribution.url} alt={contribution.alt} />
              </Information>
            )}

            <Information heading="EXPERIENCE">
              {experienceList.map(experience => (
                <CompanyWrapper key={experience.title}>
                  <CompanyHeading fontSize="18px">
                    {experience.title}
                  </CompanyHeading>
                  {experience.positions.map(position => (
                    <CompanyContent key={position.role}>
                      {position.role}{' '}
                      <CompanyDuration>
                        {position.from} - {position.to}
                      </CompanyDuration>
                    </CompanyContent>
                  ))}
                </CompanyWrapper>
              ))}
            </Information>

            <FooterSection>
              <ul>
                {contacts.map(contact => (
                  <li key={contact.name}>
                    <Link
                      bold
                      color="#ee5050"
                      fontSize="18px"
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={this.handleOnLinkClick}
                    >
                      {contact.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ data: getDataSelector(state) }),
  {
    downloadClicked: downloadClickedActionCreator,
    externalClicked: externalClickedActionCreator
  }
)(Index);
