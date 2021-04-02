import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))

    }

    return (
        <Container>
            <LoginLogo>
                <img
                    src="https://www.iphonehacks.com/wp-content/uploads/2019/12/Facebook-logo.jpg"
                    alt=""
                />
                <img
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg"
                    alt=""
                />
            </LoginLogo>

            <Button type="submit" onClick={signIn}
            >
                Sign In
            </Button>
        </Container>
    )
}

export default Login


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    div {
        display: flex;
        flex-direction: column;

        img {
        object-fit: contain;
        height: 150px;
        }
    }

    button {
        width: 300px;
        background-color: #2e81f4;
        color: #eff2f5;
        font-weight: 800;

        :hover {
            background-color: white;
            color: #2e81f4;
        }
    }
`

const LoginLogo = styled.div`

`