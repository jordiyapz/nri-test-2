import { Header } from "./layouts/header";
import Container from "./shared/ui/Container";

function App() {
  return (
    <Container
      css={{
        backgroundColor: "#F0F0F0",
        minHeight: "100vh",
      }}
    >
      <div
        css={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 32,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Header />
      </div>
    </Container>
  );
}

export default App;
