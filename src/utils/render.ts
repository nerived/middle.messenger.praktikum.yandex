import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { ServerErrorPage } from "../pages/ServerError";
import { ChangePasswordPage } from "../pages/ChangePassword";
import { ChatsPage } from "../pages/Chats";
import { EditProfilePage } from "../pages/EditProfile";
import { JoinPage } from "../pages/Join";
import { PopupPage } from "../pages/Popup";
import { ProfilePage } from "../pages/Profile";

export const ROUTES = {
  login: LoginPage,
  join: JoinPage,
  notFound: NotFoundPage,
  serverError: ServerErrorPage,
  changePassword: ChangePasswordPage,
  chats: ChatsPage,
  editProfile: EditProfilePage,
  popup: PopupPage,
  profile: ProfilePage,
};

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector("#app")!;

  root.innerHTML = "";

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}

export default render;
