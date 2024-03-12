import styled from 'styled-components'

export const Card1 = () => {

    return (
        <Container>
            <div className='image-over2'>
                <div className='contentImg'>
                    <img src='https://i.ibb.co/wSs2B9F/Diapositiva2.png' />
                </div>
            </div>
            <a className='seller'>
                <div className='seller-thumb avatar-lg'>
                    <img className='rounded-circle' src='https://i.ibb.co/GsJvk3W/charizard.png' />
                </div>
            </a>
            <div className='card-body'>
                <span className='title'>
                    React-intermedio - full diseños responsive
                </span>
                <span className='precio' >$ 9.99</span>
                <span> 12 de marzo del 2024</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.bg};
    justify-content: center;
    flex-direction: column;
    padding: 18px;
    text-align: center;
    border-radius: 20px;
    width: 300px;
    box-shadow: 28px 7px 35px 9px rgba(0, 0, 0, 0.1);
    .image-over2{
        .contentImg{
            img{
                max-width: 100%;
                height: auto;
            }
        }
    }
    .seller{
        .seller-thumb{
            img {
                height: calc(5rem - 16px);
                width: calc(5rem - 16px);
                margin: 5px;
            }
        }
    }
    .card-body{
        display: flex;
        flex-direction: column;
        padding-top: 16%;
        span{
            font-weight: 700;
        }
        .precio{
            color: #b8b8b8;
            font-weight: 500;
        }
        .fecha {
            color: ${({theme})=> theme.text};
        }
    }
`
