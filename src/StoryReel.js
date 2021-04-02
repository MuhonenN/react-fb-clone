import React from 'react'
import styled from 'styled-components'
import Story from './Story'

function StoryReel() {
    return (
        <Container>
            <Story
                image="https://blogs.constantcontact.com/wp-content/uploads/2014/02/What-and-When-to-Post-to-Social-Media-April-2017-768x3135.png"
                profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                title="Sonny Sangha"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="Https://pbs.twimg.com/media/DflRaqSWkAE9sI0.jpg"
                title="Rafeh Qazi"
            />
            <Story
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109682gettyimages-1032942656.jpeg?v=1597932630"
                title="Frankie"
            />
            <Story
                image="http://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg"
                profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
                title="Aaron Bernath"
            />
            <Story
                image="https://later.com/blog/wp-content/uploads/2019/01/Nov2-The-Ultimate-Guide-to-Facebook-Stories-in-2021-Share-1024x683.png"
                profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
                title="Naz"
            />

        </Container>
    )
}

export default StoryReel


const Container = styled.div`
    display: flex;
`