import React from 'react'
import styled from 'styled-components'

function Widgets() {
    return (
        <Container>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=242006903732852"
                width="340"
                height="1500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </Container>
    )
}

export default Widgets


const Container = styled.div`

`