import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    height: 85vh;
  }
`

export const Heading = styled.h2`
  font-size: 50px;
`

export const Link = styled.a`
  color: #ee5050;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:visited {
    color: #ee5050;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    font-weight: bold;
  }
`

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`
