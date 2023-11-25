import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { css } from "@emotion/react";
import Masonry from "react-masonry-css";
import Skeleton from "react-loading-skeleton";

import Container from "./shared/ui/Container";
import { Carousel } from "./shared/ui/carousel";
import { PhotoDoc } from "./entities/photos";
import AddFAB from "./shared/ui/AddFAB";
import { useScrollDirection } from "./shared/lib/hooks";

import { Header } from "./layouts/header";
import { usePhotos } from "./entities/photos/lib";

// Array of 10 items (1 to 10)
const albumIdList = Array(10)
  .fill(null)
  .map((_, i) => i + 1);

function handleError(error: unknown): void {
  console.error(error);
}

function App() {
  const { data, isLoading } = usePhotos({ onError: handleError });
  const [activeAlbum, setActiveAlbum] = useState(1);
  const scrollDirection = useScrollDirection();

  // Scroll to top on album focus change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeAlbum]);

  /** Data processing */
  const carouselItems = useMemo(
    () =>
      albumIdList
        .map((id) => {
          const pictures = data.filter((p) => p.albumId === id);
          if (!pictures.length) return null;
          return pictures[0];
        })
        .filter((item) => item !== null) as PhotoDoc[],
    [data]
  );
  const pictureList = data.filter((p) => p.albumId === activeAlbum);
  const isScrollingDown = !!scrollDirection && scrollDirection === "down";

  /** Handlers */
  const handleOnActiveAlbumChange = (index: number) => {
    setActiveAlbum(index + 1);
  };

  return (
    <Container css={styles.root}>
      <div
        css={[
          styles.headerContainer,
          isScrollingDown && styles.headerContainerShorter,
        ]}
      >
        <Header hide={isScrollingDown} />
        <Carousel
          items={carouselItems}
          isLoading={isLoading}
          activeItem={activeAlbum}
          onActiveItemChange={handleOnActiveAlbumChange}
        />
      </div>
      <div
        css={[
          styles.masonryContainer,
          isScrollingDown && styles.masonryContainerFull,
        ]}
      >
        <Masonry
          breakpointCols={2}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {isLoading ? (
            <>
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
              <Skeleton width={159} height={159} />
            </>
          ) : (
            pictureList.map((picture) => (
              <img
                key={picture.id}
                css={styles.picture}
                src={picture.url}
                alt={picture.title}
              />
            ))
          )}
        </Masonry>
      </div>
      {createPortal(<AddFAB />, document.body)}
    </Container>
  );
}

export default App;

const masonryContainerPaddingX = 16;
const masonryGutter = 10;
const styles = {
  root: css({
    backgroundColor: "#F0F0F0",
    minHeight: "100vh",
    paddingTop: 280,
  }),
  headerContainer: css({
    zIndex: 1,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    height: 180,
    marginBottom: 60,
    position: "fixed",
    top: 0,
    width: 360,
  }),
  headerContainerShorter: css({ height: 100 }),
  masonryContainer: css({
    width: "100%",
    paddingLeft: masonryContainerPaddingX,
    paddingRight: masonryContainerPaddingX,
    position: "relative",
    "&:after": {
      position: "fixed",
      bottom: 0,
      height: "100%",
      width: 360 - 16,
      content: '""',
      background: `linear-gradient(to top,
        rgba(255,255,255, 1) 0%, 
        rgba(255,255,255, 0) 10%
      )`,
      pointerEvents: "none" /* so the text is still selectable */,
    },
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
  masonryContainerFull: css({
    "&:after": {
      position: "relative",
      background: "none",
    },
  }),
  picture: css({
    width: "100%",
  }),
};
