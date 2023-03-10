import { shallow } from "zustand/shallow";
import { useAuthStore } from "../../store";
import { Avatar, AvatarImg, AvatarSvg, EmailWrapper, Info, InfoEmail, InfoName } from "./Email.style";

const EmailComponent = () => {
  const authStore = useAuthStore(
    (state) => ({
      urlAvatar: state.userData?.urlAvatar,
      name: state.userData?.name,
      email: state.userData?.email,
    }),
    shallow
  );

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
