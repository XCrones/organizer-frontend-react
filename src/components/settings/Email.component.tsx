import { useAppSelector } from "../../hooks/redux";
import { Avatar, AvatarImg, AvatarSvg, EmailWrapper, Info, InfoEmail, InfoName } from "./Email.style";

interface Props {}

const EmailComponent = () => {
  const {
    userData: { email, name, urlAvatar },
  } = useAppSelector((state) => state.audh);

  const isEmptyAvatar = !!urlAvatar ? true : false;

  return (
    <EmailWrapper>
      <Avatar>
        {!isEmptyAvatar && (
          <AvatarSvg>
            <i className="bi bi-person-circle"></i>
          </AvatarSvg>
        )}
        {isEmptyAvatar && <AvatarImg src={String(urlAvatar)} alt={"avatar"} />}
      </Avatar>
      <Info>
        <InfoName>{name}</InfoName>
        <InfoEmail>{email}</InfoEmail>
      </Info>
    </EmailWrapper>
  );
};

export default EmailComponent;
