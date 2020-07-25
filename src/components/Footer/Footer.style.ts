import styled from '@emotion/styled'

export const FooterWrapper = styled.footer`
  margin-left: 20px;

  @media (min-width: 768px) {
    display: grid;
    margin: 50px 0 0 50px;
  }
`

export const List = styled.ul`
  list-style: none;
  -webkit-padding-start: 0;

  @media (min-width: 768px) {
    float: right;
  }
`

export const ListItem = styled.li`
  margin-bottom: 5px;
  margin-left: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    float: right;
    text-align: right;
    margin-left: 10px;
    min-width: 100px;
  }
`

export const Link = styled.a`
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  color: #ee5050;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid transparent;

  &:visited {
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    color: #ee5050;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
  }

  &:hover {
    border-bottom: 2px solid #ee5050;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`
