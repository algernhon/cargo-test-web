import styled from 'styled-components'
import {Button} from 'react-bootstrap'

const StyledButton = styled(Button)`
    background-color: ${props => props.theme.couleur.bleuClair};
    border: none;
    border-radius: 3rem;
    color: white;
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 1.2rem 3.8rem;
    position: relative;
    z-index: 10;

    &:hover{
        background-color: ${props => props.theme.couleur.bleuClairHover};
    }

    &:focus{
        background-color: ${props => props.theme.couleur.bleuClairHover};
        box-shadow: none;
    }
`

export default function ButtonBlue({children}) {
    return (<StyledButton>{children}</StyledButton>)
}