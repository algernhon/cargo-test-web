import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Carousel from '/components/Carousel'
import Motif from '/components/Motif'

const StyledRow = styled(Row)`
    padding: 6rem 0;
`

const StyledCol = styled(Col)`
    position: relative;
`

const PrixGauche = styled.img`
    position: absolute;
    top: 0;
    left: 12%;
    width: 25%;
    z-index: 10;
    filter: drop-shadow( 0px 0px 5px rgba(62, 182, 179, .7));

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
    top: -2%;
    left: 12%;
    width: 25%;
    }
`

const PrixDroite = styled.img`
    position: absolute;
    top: 0;
    left: 12%;
    width: 25%;
    z-index: 10;
    filter: drop-shadow( 0px 0px 5px rgba(62, 182, 179, .7));

    @media (min-width: ${props => props.theme.breakpoint.xl}) {
    top: -2%;
    left: 12%;
    width: 25%;
    }
`

const TitreProduit = styled.h3`
    margin: 2rem 20% 1rem 20%;
    text-align: center;

    @media (min-width: ${props => props.theme.breakpoint.xxl}) {
        text-align: left;
        font-size: 2.2rem;
    }
`

export default function Products() {
    const bouteilles = [
        'Bouteille_iso_01.png', 
        'Bouteille_iso_02.png',
        'Bouteille_iso_03.png',
        'Bouteille_iso_04.png',
        'Bouteille_iso_05.png',
        'Bouteille_iso_06.png',
        'Bouteille_iso_07.png', 
        'Bouteille_iso_08.png',]

    const chaises = ['Fauteuil_Patchwork-Blc.png', 'Fauteuil_Patchwork-Coul.png']

    return (
        <StyledRow>
            <StyledCol xl={6} itemType="https://schema.org/Product" itemScope>
                <meta itemProp="name" content="Bouteille isotherme 50cL" />
                <meta itemProp="description" content="Une superbe bouteille isotherme de 50cL" />
                <div itemProp="offers" itemType="https://schema.org/Offer" itemScope>
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="priceCurrency" content="EUR" />
                    <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
                    <meta itemProp="price" content="4.99" />
                    <meta itemProp="priceValidUntil" content="2024-04-17" />
                </div>
                <div itemProp="brand" itemType="https://schema.org/Brand" itemScope>
                    <meta itemProp="name" content="Centrakor" />
                </div>
                <Carousel liste={bouteilles} alt="bouteille" />
                <TitreProduit>La bouteille isotherme 50cL</TitreProduit>
                <Motif type="etoile1" src="/icons/star.svg" />
                <PrixGauche src="/Encart-Prix-iso.png" />
            </StyledCol>
            <StyledCol xl={6} itemType="https://schema.org/Product" itemScope>
                <meta itemProp="name" content="Fauteuil Patchwork" />
                <meta itemProp="description" content="Une magnifique fauteuil Patchwork" />
                <div itemProp="offers" itemType="https://schema.org/Offer" itemScope>
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="priceCurrency" content="EUR" />
                    <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
                    <meta itemProp="price" content="39.99" />
                    <meta itemProp="priceValidUntil" content="2024-04-17" />
                </div>
                <div itemProp="brand" itemType="https://schema.org/Brand" itemScope>
                    <meta itemProp="name" content="Centrakor" />
                </div>
                <Carousel liste={chaises} alt="chaise" />
                <TitreProduit>Le fauteuil patchwork</TitreProduit>
                <Motif type="etoile2" src="/icons/star.svg" />
                <PrixDroite src="/Encart-Prix-patchwork.png" />
            </StyledCol>
        </StyledRow>
    )
  }
  