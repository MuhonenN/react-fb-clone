import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <Container>
            <PostTop>
                <Avatar src={profilePic} />
                <PostTopInfo>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </PostTopInfo>
            </PostTop>

            <PostBottom>
                <p>{message}</p>
            </PostBottom>

            <PostImage>
                <img src={image} alt="" />
            </PostImage>

            <PostOptions>
                <PostOption>
                    <ThumbUpIcon />
                    <p>Like</p>
                </PostOption>

                <PostOption>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </PostOption>

                <PostOption>
                    <NearMeIcon />
                    <p>Share</p>
                </PostOption>

                <PostOption>
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </PostOption>
            </PostOptions>
        </Container>
    )
}

export default Post


const Container = styled.div`
    width: 100%;
    margin-top: 15px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`

const PostTop = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    padding: 15px;

    .MuiAvatar-root {
        margin-right: 10px;
    }

    h3 {
        font-size: medium;
    }

    p {
        font-size: small;
        color: gray;
    }
`

const PostTopInfo = styled.div`

`

const PostBottom = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px 25px;
`

const PostImage = styled.div`
    img {
        width: 100%;
    }
`

const PostOptions = styled.div`
    padding-top: 10px;
    border-top: 1px solid lightgray;
    display: flex;
    justify-content: space-evenly;
    font-size: medium;
    color: gray;
    cursor: pointer;
    padding: 15px;
`

const PostOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex: 1;

    p {
        margin-left: 10px;
    }

    :hover {
        background-color: #eff2f5;
        border-radius: 10px;
    }
`