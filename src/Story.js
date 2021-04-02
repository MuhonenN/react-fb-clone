import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

function Story({ image, profileSrc, title }) {
    return (
        <Container style={{ backgroundImage: `url(${image})` }}>
            <Avatar className="avatar" src={profileSrc} />
            <h4>{title}</h4>
        </Container>
    )
}

export default Story


const Container = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 200px;
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    margin-right: 10px;
    transition: transform 100ms ease-in;
    cursor: pointer;

    :hover {
        transform: scale(1.07);
    }

    .MuiAvatar-root {
        margin: 10px;
        border: 5px solid #2e81f4;
    }

    h4 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
    }
`