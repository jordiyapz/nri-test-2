import { css } from "@emotion/react";
import Card from "./Card";
import { PhotoDoc } from "@/shared/types";
import { palette } from "@/theme";

type Props = {
  items: PhotoDoc[];
};

const Carousel = ({ items }: Props) => {
  /* TODO: implement pagination */
  const active = 1;

  // TODO: add loading indicator
  // TODO: add empty fallback
  return (
    <div css={styles.root}>
      <div css={styles.container}>
        {items.map((item, i) => (
          <Card
            key={item.id}
            src={item.thumbnailUrl}
            title={item.title}
            active={i === active}
          />
        ))}
      </div>
      <div css={styles.pagination}>
        {active} of {items.length}
      </div>
    </div>
  );
};

export default Carousel;

const styles = {
  root: css({
    position: "relative"
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
