import { css } from "@emotion/react";
import { Header } from "./layouts/header";
import Container from "./shared/ui/Container";
import { Carousel } from "./shared/ui/carousel";
import { PhotoDoc } from "./shared/types";
import { useEffect, useMemo, useState } from "react";
import Masonry from "react-masonry-css";

// Array of 10 items (1 to 10)
const albumIdList = Array(10)
  .fill(null)
  .map((_, i) => i + 1);

function handleError(error: unknown): void {
  console.error(error);
}

function App() {
  const [data, setData] = useState<PhotoDoc[]>([]);
  const [activeAlbum, setActiveAlbum] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        response
          .json()
          .then((values) => setData(values))
          .catch(handleError);
      })
      .catch(handleError);
  }, []);

  /** Data processing */
  const carouselItems = useMemo(
    () =>
      albumIdList
        .map((id) => {
          const pictures = data.filter((p) => p.albumId === id);
          if (!pictures.length) return null;

          const choosenId = 0;
          // const choosenId = Math.floor(Math.random() * pictures.length);

          return pictures[choosenId];
        })
        .filter((item) => item !== null) as PhotoDoc[],
    [data]
  );
  const pictureList = data.filter((p) => p.albumId === activeAlbum);

  /** Handlers */
  const handleOnActiveAlbumChange = (index: number) => {
    setActiveAlbum(index + 1);
  };

  return (
    <Container css={styles.root}>
      <div css={styles.headerContainer}>
        <Header />
        <Carousel
          items={carouselItems}
          activeItem={activeAlbum}
          onActiveItemChange={handleOnActiveAlbumChange}
        />
      </div>
      <div css={styles.masonryContainer}>
        <Masonry
          breakpointCols={2}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {pictureList.map((picture) => (
            <img
              key={picture.id}
              css={styles.picture}
              src={picture.url}
              alt={picture.title}
            />
          ))}
        </Masonry>
      </div>
    </Container>
  );
}

export default App;

const masonryContainerPaddingX = 16;
const masonryGutter = 10;
const styles = {
  root: css({ backgroundColor: "#F0F0F0", minHeight: "100vh" }),
  headerContainer: css({
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    height: 180,
    marginBottom: 60,
  }),
  masonryContainer: css({
    width: "100%",
    paddingLeft: masonryContainerPaddingX,
    paddingRigth: masonryContainerPaddingX,
    "& .masonry-grid": {
      display: "flex",
      marginLeft: -masonryGutter,
      marginRight: masonryContainerPaddingX * 2,
      width: "auto",
    },
    ".masonry-column": {
      paddingLeft: masonryGutter,
      backgroundClip: "padding-box",
    },
  }),
  picture: css({
    width: "100%",
  }),
};
