import styled from 'styled-components'
import {Col, Row} from 'react-bootstrap'
import ButtonBlue from '/components/ButtonBlue'

const Wrapper = styled.div`
    padding: 4rem 0;
    overflow: hidden;

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
        height: 35rem;
        padding: 0;
    }
`

const StyledRow = styled(Row)`
    height: 100%;
`

const StyledColDroite = styled(Col)`
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
        justify-content: right;
        padding-bottom: 0;
    }
`

const LogoCentrakor = styled.img`
    width: 50%;

    @media (min-width: ${props => props.theme.breakpoint.md}) {
        width: 35%;
    }
    @media (min-width: ${props => props.theme.breakpoint.xl}) {
        padding-right: 4rem;
        width: initial;
    }
`

const StyledColGauche = styled(Col)`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
        align-items: flex-start;
        padding-left: 4rem;
    }
`

const QuiSommesNous = styled.h2`
    text-transform: uppercase;
    text-weight: bold;

`

const SuivezNous = styled.div`
    text-align: center;
    width: 13rem;
`

const BlockIconesSociales = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    opacity: .7;
    height: 2rem;
    width: 100%;
`

const IconesSocial = styled.img`
    width: 2rem;
`

const WrapperQuiSommesNous = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;
`

export default function BlockSocial() {
    return (            
    <Wrapper>
        <StyledRow>
            <StyledColDroite xl={6}>
                <LogoCentrakor src="./logo.png" alt="Logo Centrakor" />
            </StyledColDroite>
            <StyledColGauche xl={6}>
                <WrapperQuiSommesNous>
                    <QuiSommesNous>Qui sommes nous ?</QuiSommesNous>
                    <ButtonBlue>Découvrez Centrakor</ButtonBlue>
                    <SuivezNous>et suivez nos aventures sur les réseaux sociaux</SuivezNous>
                    <BlockIconesSociales>
                        <IconesSocial src="./icons/facebook.svg" alt="Facebook" />
                        <IconesSocial src="./icons/instagram.svg" alt="Instagram" />
                        <IconesSocial src="./icons/pinterest.svg" alt="Pinterest" />
                        <IconesSocial src="./icons/tiktok.svg" alt="Tiktok" />
                    </BlockIconesSociales>
                </WrapperQuiSommesNous>
            </StyledColGauche>
        </StyledRow>
    </Wrapper>
    )
}