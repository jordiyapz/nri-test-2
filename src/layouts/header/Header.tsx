import { css } from "@emotion/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Avatar } from "@/shared/ui/avatar";
import InfoItem from "./InfoItem";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate";
import { palette } from "@/theme";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

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
              {/* TODO: Create custom verified badge */}
              <FontAwesomeIcon
                icon={faCertificate}
                color={palette.tertiary}
                css={{ marginLeft: 8 }}
              />
            </h1>
            <p css={styles.title}>{user.title}</p>
          </div>
          {/* TODO: Create custom hamburger icon */}
          {/* TODO: Make this icon as menu button */}
          <FontAwesomeIcon
            icon={faBars}
            color={palette.tertiary}
            fontSize={20}
            css={{ marginTop: 8 }}
          />
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
};

export default Header;
