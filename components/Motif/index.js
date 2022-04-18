import styled from 'styled-components'

const Etoile1 = styled.img`
    position: absolute;
    top: -5%;
    right: 17%;
    width: 10%;
    transform: rotate(-15deg);
    z-index: 10;
    filter: drop-shadow( 0px 0px 5px rgba(62, 182, 179, .7));

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
    width: initial;
    }
`

const Etoile2 = styled.img`
    position: absolute;
    top: 71%;
    right: 17%;
    width: 10%;
    transform: rotate(-15deg);
    z-index: 10;
    filter: drop-shadow( 0px 0px 5px rgba(225, 222, 0, 1));

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
        right: 14%;
        top: 65%;
        width: initial;
    }

    @media (min-width: ${props => props.theme.breakpoint.xxl}) {
        right: 17%;
        top: 76%;
    }
`

const Cadeau = styled.img`
  display: none;
  position: absolute;
  bottom: 5%;
  left: 16%;
  transform: rotate(20deg);
  z-index: 0;
  filter: drop-shadow( 0px 0px 8px rgba(255, 255, 255, .7));

  @media (min-width: ${props => props.theme.breakpoint.xl}) {
    display: block;
  }
`

const Flocon = styled.img`
  position: absolute;
  bottom: 5%;
  right: -5rem;
  transform: rotate(15deg);
  width: 180px;
  z-index: 0;
  filter: drop-shadow( 0px 0px 8px rgba(255, 255, 255, .6));

  @media (min-width: ${props => props.theme.breakpoint.xl}) {
    bottom: 7%;
    right: 10%;
    width: 220px;
  }
`

const Etoile3 = styled.img`
  position: absolute;
  bottom: -1.5rem;
  right: 30%;
  transform: rotate(-15deg);
  z-index: 10;
  filter: drop-shadow( 0px 0px 8px rgba(225, 222, 0, 1));

  @media (min-width: ${props => props.theme.breakpoint.xl}) {
    bottom: 40%;
    right: 0;
    z-index: 0;
  }
`

const Cadeau2 = styled.img`
    position: absolute;
    top: -12%;
    left: -10%;
    fill: red;
    transform: rotate(20deg);
    z-index: 10;
    filter: drop-shadow( 0px 0px 8px rgba(225, 222, 0, 1));

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
    top: 25%;
    left: 13%;
    }
`

const Etoile4 = styled.img`
    position: absolute;
    bottom: 15%;
    right: 10%;
    width: 10%;
    transform: rotate(-15deg);
    z-index: 10;
    filter: drop-shadow( 0px 0px 5px rgba(62, 182, 179, .7));

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
    bottom: 15%;
    right: 13%;
    width: initial;
    }
`

export default function Motif({src, type}) {
    switch(type) {
        case "etoile1":
            return <Etoile1 src={src} />
        case "etoile2":
            return <Etoile2 src={src} />
        case "etoile3":
            return <Etoile3 src={src} />
        case "etoile4":
            return <Etoile4 src={src} />
        case "flocon":
            return <Flocon src={src} />
        case "cadeau":
            return <Cadeau src={src} />
        case "cadeau2":
            return <Cadeau2 src={src} />
        default:
            return <Etoile1 src={src} />
    }
}