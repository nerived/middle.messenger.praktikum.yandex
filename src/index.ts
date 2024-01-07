import Block from './utils/Block';

import { registerComponent } from './utils/registerComponent';

import Router from './utils/Router';
import AuthController from './controllers/AuthController';

import { LoginPage } from './pages/Login';
import { JoinPage } from './pages/Join';
import { NotFoundPage } from './pages/NotFound';
import { ServerErrorPage } from './pages/ServerError';
import ProfilePage from './pages/Profile';
import EditProfilePage from './pages/EditProfile';
import ChangePasswordPage from './pages/ChangePassword';
import ChatsPage from './pages/Chats';

enum Routes {
  Index = '/',
  Join = '/sign-up',
  Login = '/login',
  NotFound = '/notFound',
  ServerError = '/serverError',
  ChangePassword = '/changePassword',
  Profile = '/settings',
  EditProfile = '/editProfile',
  Chats = '/messenger',
}

import './css/index.scss';

// blocks
import { Raw } from './components/blocks/Raw';
import { Avatar } from './components/blocks/Avatar';
import { ChatItem } from './components/blocks/ChatItem';
import ChatsList from './components/blocks/ChatsList';
import MessageField from './components/blocks/MessageField';
import { ChatsHead } from './components/blocks/ChatsHead';
import Messenger from './components/blocks/Messenger';
import Message from './components/blocks/Message';
import { UserDetails } from './components/blocks/UserDetails';
import { JoinForm } from './components/blocks/JoinForm';
import { LoginForm } from './components/blocks/LoginForm';
import { Container } from './components/blocks/Container';
import { Form } from './components/blocks/Form';
import {
  AuthformBody,
  AuthformBox,
  AuthformFooter,
  AuthformHead,
} from './components/blocks/Authform';

// layout
import { Nav } from './components/layout/Nav';
import { Stub } from './components/layout/Stub';
import {
  ProfileBox,
  ProfileLeft,
  ProfileRight,
} from './components/layout/Profile';

import PopupManager from './components/layout/PopupManager';

// ui
import { Button } from './components/ui/Button';
import { ActionButton } from './components/ui/ActionButton';
import { NavButton } from './components/ui/NavButton';
import { Input } from './components/ui/Input';
import { InputFile } from './components/ui/InputFile';
import { Field } from './components/ui/Field';
import { Link } from './components/ui/Link';

import { ChangeAvatar } from './components/popups/ChangeAvatar';
import { CreateChat } from './components/popups/CreateChat';
import AddUserToChat from './components/popups/AddUserToChat';
import DeleteUserFromChat from './components/popups/DeleteUserFromChat';

// blocks
registerComponent('Raw', Raw as typeof Block);
registerComponent('Avatar', Avatar as typeof Block);
registerComponent('ChatItem', ChatItem as typeof Block);
registerComponent('ChatsList', ChatsList as typeof Block);
registerComponent('Messenger', Messenger as typeof Block);
registerComponent('Message', Message as typeof Block);
registerComponent('UserDetails', UserDetails as typeof Block);
registerComponent('JoinForm', JoinForm as typeof Block);
registerComponent('LoginForm', LoginForm as typeof Block);
registerComponent('Container', Container as typeof Block);
registerComponent('Form', Form as typeof Block);

registerComponent('AuthformBody', AuthformBody as typeof Block);
registerComponent('AuthformBox', AuthformBox as typeof Block);
registerComponent('AuthformFooter', AuthformFooter as typeof Block);
registerComponent('AuthformHead', AuthformHead as typeof Block);

// layout
registerComponent('Nav', Nav as typeof Block);
registerComponent('Stub', Stub as typeof Block);

registerComponent('ProfileBox', ProfileBox as typeof Block);
registerComponent('ProfileLeft', ProfileLeft as typeof Block);
registerComponent('ProfileRight', ProfileRight as typeof Block);

registerComponent('MessageField', MessageField as typeof Block);
registerComponent('ChatsHead', ChatsHead as typeof Block);

registerComponent('PopupManager', PopupManager as typeof Block);

// ui
registerComponent('Button', Button as typeof Block);
registerComponent('ActionButton', ActionButton as typeof Block);
registerComponent('NavButton', NavButton as typeof Block);
registerComponent('Input', Input as typeof Block);
registerComponent('InputFile', InputFile as typeof Block);
registerComponent('Field', Field as typeof Block);
registerComponent('Link', Link as typeof Block);

// popups
registerComponent('ChangeAvatar', ChangeAvatar as typeof Block);
registerComponent('CreateChat', CreateChat as typeof Block);
registerComponent('AddUserToChat', AddUserToChat as typeof Block);
registerComponent('DeleteUserFromChat', DeleteUserFromChat as typeof Block);

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.Index, LoginPage)
    .use(Routes.Login, LoginPage)
    .use(Routes.Join, JoinPage)
    .use(Routes.NotFound, NotFoundPage)
    .use(Routes.ServerError, ServerErrorPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.EditProfile, EditProfilePage)
    .use(Routes.ChangePassword, ChangePasswordPage)
    .use(Routes.Chats, ChatsPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Join:
      isProtectedRoute = false;
      break;
    default: {
      isProtectedRoute = true;
    }
  }

  try {
    if (isProtectedRoute) {
      await AuthController.fetchUser();
    }

    Router.start();
    Router.go(window.location.pathname);
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
