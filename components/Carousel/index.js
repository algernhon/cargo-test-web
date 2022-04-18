import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'

const Wrapper = styled(Carousel)`
    background-color: ${props => props.theme.couleur.grisClair};
    margin: auto;
    width: 60%;

    .carousel-item {
        padding: 3rem;
    }

    .carousel-control-prev {
        opacity: 1;
    }

    .carousel-control-next {
        opacity: 1;
    }

    .carousel-control-prev-icon, .carousel-control-next-icon {
        background-color: ${props => props.theme.couleur.bleuClair};
        border-radius: 5rem;
        border: 6px solid ${props => props.theme.couleur.bleuClair};
        padding: 1.1rem;
    }

    .carousel-control-prev-icon {
        margin-left: -100%;
    }

    .carousel-control-next-icon {
        margin-right: -100%;
    }

    .carousel-indicators button {
        background-color: ${props => props.theme.couleur.gris};
        border-radius: 100%;
        height: 10px;
        width: 10px;
        opacity: 1;
        margin: 0 .3rem;

    }

    .carousel-indicators > .active {
        background-color: ${props => props.theme.couleur.bleuClair};
    }
`

export default function CarouselBlock({liste, alt}) {
    const listeProduits = []

    for (const [index, value] of liste.entries()) {
        listeProduits.push(
        <Carousel.Item key={index}>
            <img className="d-block w-100" src={"./packshots/" + value} alt={alt} /> 
        </Carousel.Item>
        )
    }

    return <Wrapper>{listeProduits}</Wrapper>
}