import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import Motif from '/components/Motif'

const BlockRecherche = styled.div`
    background-color: #004542;
    padding: 6rem 15%;
    text-align: center;
    position: relative;
`

const TitreRecherche = styled.h2`
    color: white;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px #ffffff;
    margin-bottom: 3rem;
`

const BlockFormulaire = styled.div`
    background-color: white;
    border-radius: .2rem;
`

const FormRow = styled(Row)`
    padding: 1rem 0 1rem 1rem;

    @media (min-width: 1200px) {
        padding: 4rem 9rem;
    }
`

const IconeRecherche = styled(InputGroup.Text)`
    background-color: black;
    padding: 0 2rem;
    margin: -.2rem -.2rem -.2rem 0;
`

const IconeLocation = styled(InputGroup.Text)`
    background-color: #3eb6b3;
    padding: 0 2rem;
    margin: -.2rem -.2rem -.2rem 0;
`

const InputGroupBlockVille = styled(InputGroup)`
    border: 2px solid black;
    border-radius: .4rem;
    height: 5rem;
    margin-bottom: 1rem;

    @media (min-width: 1200px) {
        margin-bottom: 0;
    }
`

const InputGroupBlockLocation = styled(InputGroup)`
    border: 2px solid #3eb6b3;
    border-radius: .4rem;
    height: 5rem;
`

const FormControlLocation = styled(FormControl)`
    &::placeholder {
        color: #3eb6b3;
    }
`

const MerciBlock = styled.div`
    display: ${props => props.display ? "inline-block" : "none"};
    margin: 4rem 0;
    width: 100%;
`

const Spinner = styled.div`
    display: inline-block;
    margin: 3.6rem 0;
    width: 100%;
`

export default function SearchStore() {
    const [ville, setVille] = React.useState('')
    const [displayBlock, setDisplayBlock] = React.useState(false)
    const [displayLoading, setDisplayLoading] = React.useState(false)
  
    function handleSubmit(event) {
      event.preventDefault()
      setDisplayLoading(true)
      setVille('')
      setDisplayBlock(false)
      setTimeout(() => {
        setDisplayLoading(false);
        setDisplayBlock(true)
      }, 2000);
    }


    return (
      <BlockRecherche id="recherche">
        <Motif type="cadeau2" src="/icons/gift.svg" />
        <Motif type="etoile4" src="/icons/star.svg" />
        <TitreRecherche>Je cherche mon magasin</TitreRecherche>
        <BlockFormulaire>
            <FormRow>
                <Row>
                    <Col xl={8}>
                        <form onSubmit={handleSubmit}>
                            <InputGroupBlockVille>
                                <FormControl
                                placeholder="Indiquez une ville"
                                aria-label="Indiquez une ville"
                                aria-describedby="icone-recherche"
                                onChange={e => setVille(e.target.value)}
                                value={ville}
                                />
                                <IconeRecherche id="icone-recherche" onClick={handleSubmit}><img src="/icons/search.svg" width="40px" /></IconeRecherche>
                            </InputGroupBlockVille>
                        </form>
                    </Col>
                    <Col xl={4}>
                        <InputGroupBlockLocation>
                            <FormControlLocation
                            placeholder="Magasins autour de moi"
                            aria-label="Magasins autour de moi"
                            aria-describedby="icone-magasins"
                            />
                            <IconeLocation id="icone-magasins"><img src="/icons/location.svg" width="40px" /></IconeLocation>
                        </InputGroupBlockLocation>
                    </Col>
                </Row>
            </FormRow>
            {displayLoading ? <Spinner><div class="spinner-border" role="status"></div></Spinner> : ''}
            <MerciBlock display={displayBlock ? 1 : 0}>Merci pour votre recherche</MerciBlock>
        </BlockFormulaire>
      </BlockRecherche>
    )
  }
  