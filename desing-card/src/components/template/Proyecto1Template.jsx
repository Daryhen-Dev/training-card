import styled from 'styled-components'

export const Proyecto1Template = () => {

    return (
        <Container>
            <section className='header'>

            </section>
            <header className='main'>

            </header>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
    display: grid;
    grid-template: 
    'header' 100px
    'main' auto ;
    .header{
        grid-area: header;
        background-color: rgba(103,93,241, 0.14);
    }
    .main {
        grid-area: main;
        background-color: rgba(235,16,107, 0.14);
    }
`
