import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import db from './firebase';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        db.colletion('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setInput('')
        setImageUrl('')
    }

    return (
        <Container>
            <MessageSenderTop>
                <Avatar src={user.photoURL} />
                <MessageSenderForm>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSenderInput"
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)"
                    />

                    <HiddenSubmit onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </HiddenSubmit>
                </MessageSenderForm>
            </MessageSenderTop>

            <MessageSenderBottom>
                <MessageSenderOption>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </MessageSenderOption>
                <MessageSenderOption>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </MessageSenderOption>
                <MessageSenderOption>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </MessageSenderOption>
            </MessageSenderBottom>

        </Container>
    )
}

export default MessageSender


const Container = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
    width: 100%;
`

const MessageSenderTop = styled.div`
    display: flex;
    border-bottom: 1px solid #eff2f5;
    padding: 15px;

    form {
        flex: 1;
        display: flex;

        input {
            outline-width: 0;
            border: none;
            padding: 5px 20px;
            margin: 0 10px;
            border-radius: 999px;
            background-color: #eff2f5;
        }
    }
`

const MessageSenderForm = styled.form`
    input {
        &.messageSenderInput {
            flex: 1;
        }
    }
`

const HiddenSubmit = styled.button`
    display: none;

`

const MessageSenderBottom = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const MessageSenderOption = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    color: gray;
    margin: 5px;

    h3 {
        font-size: medium;
        margin-left: 10px;
        cursor: pointer;
    }

    :hover {
        background-color: #eff2f5;
        border-radius: 20px;
    }
`