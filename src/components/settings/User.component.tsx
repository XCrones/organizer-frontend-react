import { shallow } from "zustand/shallow";
import { useAuthStore } from "../../store";
import { UserSubtitle, UserTitle, UserAvatar, UserImage, UserInfo, UserSvg, UserWrapper } from "./User.style";

const UserComponent = () => {
  const authStore = useAuthStore(
    (state) => ({
      urlAvatar: state.userData?.urlAvatar,
      name: state.userData?.name,
      email: state.userData?.email,
    }),
    shallow
  );

  return (
    <UserWrapper>
      <UserAvatar>
        {!authStore?.urlAvatar && (
          <UserSvg>
            <i className="bi bi-person-circle"></i>
          </UserSvg>
        )}
        {!!authStore?.urlAvatar && <UserImage src={String(authStore?.urlAvatar)} alt={"avatar"} />}
      </UserAvatar>
      <UserInfo>
        <UserTitle>{authStore?.name}</UserTitle>
        <UserSubtitle>{authStore?.email}</UserSubtitle>
      </UserInfo>
    </UserWrapper>
  );
};

export default UserComponent;
