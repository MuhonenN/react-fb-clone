import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import styled from 'styled-components'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <Container>
            {
                !user ? (
                    <Login />
                ) : (
                    <>
                        <Header />

                        <Body>
                            <Sidebar />
                            <Feed />
                            <Widgets />
                        </Body>
                    </>
                )
            }
        </Container>
    );
}

export default App;


const Container = styled.div`
    background-color: #f1f2f5;
`

const Body = styled.div`
    display: flex;
`