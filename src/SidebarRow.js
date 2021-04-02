import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

function SidebarRow({ src, Icon, title }) {
    return (
        <Container>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </Container>
    )
}

export default SidebarRow


const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    :hover {
        background-color: lightgray;
        border-radius: 10px;
    }

    h4 {
        margin-left: 20px;
        font-weight: 600;
    }

    .MuiSvgIcon-root {
        font-size: xx-large;
        color: #2e81f4;
    }
`