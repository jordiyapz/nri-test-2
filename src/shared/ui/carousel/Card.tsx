import { palette } from "@/theme";
import { css } from "@emotion/react";

type Props = {
  title: string;
  src: string;
  alt?: string;
  active?: boolean;
};

const Card = ({ title, src, alt, active }: Props) => {
  return (
    <div css={[styles.card, active && styles.cardActive]}>
      <img
        css={[styles.image, active && styles.imageActive]}
        src={src}
        alt={alt}
      />
      {active && <div css={styles.title}>{title}</div>}
    </div>
  );
};

export default Card;

const styles = {
  card: css({
    background: palette.secondary,
    borderRadius: 10,
    width: 140,
    flex: "0 0 auto",
  }),
  cardActive: css({
    width: 180,
  }),
  image: css({
    display: "block",
    borderRadius: 10,
    height: 100,
    width: "100%",
    objectFit: "cover",
  }),
  imageActive: css({
    borderRadius: "10px 10px 0 23px",
  }),
  title: css({
    padding: "6px 8px",
    color: "white",
    fontSize: 11,
    lineHeight: "13px",
  }),
};
