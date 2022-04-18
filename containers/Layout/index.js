import styled from 'styled-components'

import {Container} from 'react-bootstrap'

const StyledContainer = styled(Container)`
    padding: 0;
    overflow: hidden;
`

export default function Layout({children}) {
    return (
      <main>
          <StyledContainer>
            {children}
          </StyledContainer>
      </main>
    )
  }
