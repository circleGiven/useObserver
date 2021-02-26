import { Container, Header, Content } from 'rsuite';
import UserList from "./UserList";
import UserInput from "./components/UserInput";

function App() {
  return (
    <Container>
      <Container>
        <Header>
          <h2>OBSERVER TEST</h2>
        </Header>
        <Content>
            <UserInput />
            <UserList />
        </Content>
      </Container>
    </Container>
  );
}

export default App;
