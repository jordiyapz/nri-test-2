import { css } from "@emotion/react";
import { Header } from "./layouts/header";
import Container from "./shared/ui/Container";
import { Carousel } from "./shared/ui/carousel";
import { PhotoDoc } from "./shared/types";

const items: PhotoDoc[] = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
];

function App() {
  return (
    <Container css={styles.root}>
      <div css={styles.headerContainer}>
        <Header />
        <Carousel items={items} />
      </div>
    </Container>
  );
}

export default App;

const styles = {
  root: css({ backgroundColor: "#F0F0F0", minHeight: "100vh" }),
  headerContainer: css({
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    height: 180,
    marginBottom: 60,
  }),
};
