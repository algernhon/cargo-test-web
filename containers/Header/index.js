import styled from 'styled-components'
import {Col, Row} from 'react-bootstrap'
import HeadNext from '/components/HeadNext'
import ButtonBlue from '/components/ButtonBlue'
import Motif from '/components/Motif'

const Banner = styled.div`
  background: ${props => props.theme.couleur.vert};
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoint.xxl}) {
    background: no-repeat center/cover url('/BG_Hero-@2X.jpg');
    height: 800px;
  }
`
const StyledRow = styled(Row)`
  height: 100%;
`

const StyledFirstCol = styled(Col)`
`

const FlexLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  justify-content: center;
  padding: 15% 5%;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoint.xxl}) {
    padding: 0 15%;
  }
`

const FlexVideo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: .5rem;
`

const VuTV = styled.img`
  position: absolute;
  bottom: 2%;
  right: 2%;
  z-index: 10;
  width: 25%;
  max-width: 12rem;

  @media (min-width: ${props => props.theme.breakpoint.xl}) {
    left: 5%;
    top: 8%;
    width: 12rem;
  }
`

const LogoCentrakor = styled.img`
  width: 100%;
  max-width: 458px;
`

const TitleCoupCoeur = styled.h1`
  color: #002422;
  font-size: 3.8rem;
  font-weight: bold;
  mix-blend-mode: screen;
  text-align: center;
  letter-spacing: 0.04em;
  filter: drop-shadow( 0px 0px 8px rgba(225, 222, 0, .4));
  text-shadow: -1px 0px 0px #ffffe1, 1px 0px 0px #ffffe1, 0px -1px 0px #ffffe1, 0px 1px 0px #ffffe1;
`
const VideoPresentation = styled.video`
  width: 100%;
  max-width: 650px;
`

export default function Header() {
    return (
      <>
        <HeadNext />
        <Banner>
          <StyledRow>
            <StyledFirstCol xl={6}>
              <FlexLogo>
                <LogoCentrakor src="/logo.jpg" alt="Logo Centrakor" />
                <TitleCoupCoeur>Nos coups de cœur à prix magiques !</TitleCoupCoeur>
                <a href="#recherche">
                    <ButtonBlue>
                        <Icon src="/icons/magasins.svg" alt="Icone recherche" /> Je trouve mon magasin
                    </ButtonBlue>
                </a>
                <Motif type="cadeau" src="/icons/gift.svg" />
                <Motif type="flocon" src="/icons/flake.svg" />
                <Motif type="etoile3" src="/icons/star.svg" />
              </FlexLogo>
            </StyledFirstCol>
            <Col xl={6}>
              <FlexVideo>
                <VideoPresentation autoPlay muted loop>
                  <source src="/video.mp4" type="video/mp4" />
                  <p>Votre navigateur ne prend pas en charge les vidéos HTML5.</p>
                </VideoPresentation>
                <VuTV src="/Vu-TV-icon.svg" />
              </FlexVideo>
            </Col>
          </StyledRow>
        </Banner>
      </>
    )
  }
  