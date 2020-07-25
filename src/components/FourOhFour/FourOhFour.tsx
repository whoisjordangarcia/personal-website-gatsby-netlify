import React from 'react'

import { Wrapper, Link, Text, Heading } from './FourOhFour.style'

const FourOhFour: React.FC<{}> = () => (
  <Wrapper>
    <Heading>PAGE NOT FOUND 🙁</Heading>
    <Text>You just hit a asdfat doesn&#39;t exist... the sadness.</Text>
    <Link href="/">Redirect back to home.</Link>
  </Wrapper>
)

export default FourOhFour
