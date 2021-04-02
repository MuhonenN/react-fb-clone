import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <Container>
            <HeaderLeft>
                <img
                    src="https://www.iphonehacks.com/wp-content/uploads/2019/12/Facebook-logo.jpg"
                    alt=""
                />
                <HeaderInput>
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </HeaderInput>
            </HeaderLeft>

            <HeaderCenter>
                <HeaderOption className="active">
                    <HomeIcon fontSize="large" />
                </HeaderOption>
                <HeaderOption>
                    <FlagIcon fontSize="large" />
                </HeaderOption>
                <HeaderOption>
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </HeaderOption>
                <HeaderOption>
                    <StorefrontOutlinedIcon fontSize="large" />
                </HeaderOption>
                <HeaderOption>
                    <SupervisedUserCircleIcon fontSize="large" />
                </HeaderOption>
            </HeaderCenter>

            <HeaderRight>
                <HeaderInfo>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </HeaderInfo>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </HeaderRight>
        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`

const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-evenly;

    img {
        height: 40px;
    }
`


const HeaderInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 999px;

    input {
        border: none;
        background-color: transparent;
        outline-width: 0;
    }
`

const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`

const HeaderOption = styled.div`
    display: flex;
    align-items: center;
    padding: 0 30px;
    cursor: pointer;

    :hover {
        background-color: #eff2f5;
        border-radius: 10px;
        align-items: center;
        padding: 0 30px;
        border-bottom: none;
    }

    .MuiSvgIcon-root {
        color: gray;

        :hover {
            color: #2e81f4;
        }
    }

    &.active {
        border-bottom: 4px solid #2e81f4;

        .MuiSvgIcon-root {
            color: #2e81f4;
        }
    }
`

const HeaderRight = styled.div`
    display: flex;
`

const HeaderInfo = styled.div`
    display: flex;
    align-items: center;

    h4 {
        margin-left: 10px;
    }
`
