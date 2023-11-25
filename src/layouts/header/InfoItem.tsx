import { palette } from "@/theme";
import { css } from "@emotion/react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type Props = Pick<FontAwesomeIconProps, "icon"> & {
  children: ReactNode;
};

const InfoItem = ({ children, icon }: Props) => {
  return (
    <div css={styles.root}>
      <FontAwesomeIcon
        icon={icon}
        color={palette.secondary}
        fontSize={11}
        css={styles.icon}
      />
      <div css={styles.text}>{children}</div>
    </div>
  );
};

export default InfoItem;

const styles = {
  root: css({ display: "flex" }),
  icon: css({ marginRight: 12 }),
  text: css({ color: palette.gray, fontWeight: 400, fontSize: 11 }),
};
