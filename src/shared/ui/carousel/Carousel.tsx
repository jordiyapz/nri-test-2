import { css } from "@emotion/react";
import Card from "./Card";
import { PhotoDoc } from "@/entities/photos";
import { palette } from "@/theme";
import { useEffect, useRef } from "react";

type Props = {
  items: PhotoDoc[];
  activeItem?: number;
  onActiveItemChange?(index: number): void;
};

const Carousel = ({
  items,
  activeItem = 0,
  onActiveItemChange = () => {},
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: (140 + 16) * (activeItem - 1) });
  }, [activeItem]);

  // TODO: add loading indicator
  // TODO: add empty fallback

  return (
    <div css={styles.root}>
      <div css={styles.container} ref={scrollRef}>
        {items.map((item, i) => (
          <Card
            tabIndex={0}
            key={item.id}
            src={item.thumbnailUrl}
            title={item.title}
            active={item.albumId === activeItem}
            onFocus={() => onActiveItemChange(i)}
          />
        ))}
      </div>
      <div css={styles.pagination}>
        {activeItem} of {items.length}
      </div>
    </div>
  );
};

export default Carousel;

const styles = {
  root: css({
    position: "relative",
  }),
  container: css({
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    display: "flex",
    flexDirection: "row",
    columnGap: 16,
    alignItems: "center",
    paddingLeft: 32,
    paddingRight: 360 - 32 - 180,
  }),
  // TODO: fix this right position
  pagination: css({
    position: "absolute",
    fontSize: 10,
    color: palette.gray,
    bottom: 0,
    left: 180 + 48,
  }),
};
