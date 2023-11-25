import { palette } from "@/theme";
import { css } from "@emotion/react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFAB = () => {
  return (
    <div css={styles.root}>
      <FontAwesomeIcon icon={faAdd} color="white" fontSize={18} />
    </div>
  );
};

export default AddFAB;

const styles = {
  root: css({
    backgroundColor: palette.primary,
    width: 60,
    height: 60,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "fixed",
    bottom: 24,
    right: "calc((100% - 360px) / 2 + 16px)",

    borderRadius: 30,
    boxShadow: "0 4px 10px #525252",

    transition: "background-color .2s ease-out",

    "&:hover": {
      backgroundColor: palette.primaryLight,
    },
  }),
};
