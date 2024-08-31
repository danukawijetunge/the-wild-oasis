import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Hone from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Hone as="h1">The Wild Oasis</Hone>
            <div>
              <Hone as="h2">Check in and out</Hone>
              <Button onClick={() => alert("naver giveup")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("naver giveup")}
              >
                Check Out
              </Button>
              <Input type="number" placeholder="Number of guests"></Input>
            </div>
          </Row>
          <Row>
            <Hone as="h3">Form</Hone>
            <div>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
