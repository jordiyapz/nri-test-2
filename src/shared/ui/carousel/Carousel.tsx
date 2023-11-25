import { css } from "@emotion/react";
import Card from "./Card";
import { PhotoDoc } from "@/shared/types";
import { palette } from "@/theme";

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
  // TODO: implement onActiveItemChange effect
  // TODO: add loading indicator
  // TODO: add empty fallback
  return (
    <div css={styles.root}>
      <div css={styles.container}>
        {items.map((item) => (
          <Card
            key={item.id}
            src={item.thumbnailUrl}
            title={item.title}
            active={item.albumId === activeItem}
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
    padding: "0 16px"

  }),
  // TODO: fix this right position
  pagination: css({
    position: "absolute",
    fontSize: 10,
    color: palette.gray,
    bottom: 0,
    right: 0,
  }),
};
