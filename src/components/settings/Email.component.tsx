import { useAuthStore } from "../../store/auth.store";
import { Avatar, AvatarImg, AvatarSvg, EmailWrapper, Info, InfoEmail, InfoName } from "./Email.style";

interface Props {}

const EmailComponent = () => {
  // const {
  //   userData: { email, name, urlAvatar },
  // } = useAppSelector((state) => state.audh);
  const authStore = useAuthStore((state) => state.userData);

  const isEmptyAvatar = !!authStore?.urlAvatar ? true : false;

  return (
    <EmailWrapper>
      <Avatar>
        {!isEmptyAvatar && (
          <AvatarSvg>
            <i className="bi bi-person-circle"></i>
          </AvatarSvg>
        )}
        {isEmptyAvatar && <AvatarImg src={String(authStore?.urlAvatar)} alt={"avatar"} />}
      </Avatar>
      <Info>
        <InfoName>{authStore?.name}</InfoName>
        <InfoEmail>{authStore?.email}</InfoEmail>
      </Info>
    </EmailWrapper>
  );
};

export default EmailComponent;
