import { css } from "@emotion/react";
import { HiBadgeCheck, HiOutlineMenuAlt3 } from "react-icons/hi";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

import { Avatar } from "@/shared/ui/avatar";
import { palette } from "@/theme";

import InfoItem from "./InfoItem";

type Props = {
  hide?: boolean;
};

const Header = ({ hide }: Props) => {
  // TODO: add hide on scroll animation
  const user = {
    profilePic: "/images/melanie-tan-profile-1_40x40.jpeg",
    name: "Melanie Tan",
    title: "Professional Food Photographer",
    location: "Bangkok",
    email: "melanietan99@gmail.com",
  };

  if (hide) return null;

  return (
    <div css={styles.root}>
      <Avatar
        src={user.profilePic}
        alt={`Picture of ${user.name}`}
        css={{ marginTop: 4 }}
      />
      <div css={styles.content}>
        <div css={styles.row1}>
          <div>
            <h1 css={styles.username}>
              {user.name}
              <HiBadgeCheck
                fontSize={20}
                color={palette.tertiary}
                css={{ marginLeft: 8 }}
              />
            </h1>
            <p css={styles.title}>{user.title}</p>
          </div>
          <div css={styles.menuBtn}>
            <HiOutlineMenuAlt3 color={palette.tertiary} fontSize={28} />
          </div>
        </div>
        <div css={styles.row2}>
          <InfoItem icon={faLocationDot}>{user.location}</InfoItem>
          <InfoItem icon={faEnvelope}>{user.email}</InfoItem>
        </div>
      </div>
    </div>
  );
};

const styles = {
  root: css({
    display: "flex",
    gap: 19,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 12,
  }),
  content: css({ display: "flex", flexDirection: "column", gap: 8, flex: 1 }),
  row1: css({ display: "flex", justifyContent: "space-between" }),
  row2: css({ display: "flex", columnGap: 18, flexWrap: "wrap" }),
  username: css({
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "30px",
    margin: 0,
  }),
  title: css({
    fontSize: 12,
    color: "#969696",
    margin: 0,
  }),
  menuBtn: css({
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "rgba(160, 160, 160, 0)",
    "&:hover": {
      backgroundColor: "rgba(160, 160, 160, .2)",
      transition: "background-color .2s ease-out",
    },
  }),
};

export default Header;
