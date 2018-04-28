import styled from 'styled-components';

export default styled.a`
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  color: ${props => props.color || '#4c4c4c'};
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${props => props.color || '#4c4c4c'};
  }

  &:visited {
    text-decoration: none;
    color: ${props => props.color || '#4c4c4c'};
  }
`;
