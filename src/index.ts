import { registerComponent } from './utils/registerComponent';
import { render } from './utils/render';

import './css/index.scss';

// blocks
import { Raw } from './components/blocks/Raw';
import { Avatar } from './components/blocks/Avatar';
import { ChatItem } from './components/blocks/ChatItem';
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
import {
  ChatsBox,
  ChatsLeft,
  ChatsRight,
  ChatsField,
  ChatsHead,
} from './components/layout/Chats';
import { PopupBox, PopupContent } from './components/layout/Popup';

// ui
import { Button } from './components/ui/Button';
import { NavButton } from './components/ui/NavButton';
import { Input } from './components/ui/Input';
import { InputFile } from './components/ui/InputFile';
import { Field } from './components/ui/Field';
import { Link } from './components/ui/Link';

// blocks
registerComponent('Raw', Raw);
registerComponent('Avatar', Avatar);
registerComponent('ChatItem', ChatItem);
registerComponent('UserDetails', UserDetails);
registerComponent('JoinForm', JoinForm);
registerComponent('LoginForm', LoginForm);
registerComponent('Container', Container);
registerComponent('Form', Form);

registerComponent('AuthformBody', AuthformBody);
registerComponent('AuthformBox', AuthformBox);
registerComponent('AuthformFooter', AuthformFooter);
registerComponent('AuthformHead', AuthformHead);

// layout
registerComponent('Nav', Nav);
registerComponent('Stub', Stub);

registerComponent('ProfileBox', ProfileBox);
registerComponent('ProfileLeft', ProfileLeft);
registerComponent('ProfileRight', ProfileRight);

registerComponent('ChatsBox', ChatsBox);
registerComponent('ChatsLeft', ChatsLeft);
registerComponent('ChatsRight', ChatsRight);
registerComponent('ChatsField', ChatsField);
registerComponent('ChatsHead', ChatsHead);

registerComponent('PopupBox', PopupBox);
registerComponent('PopupContent', PopupContent);

// ui
registerComponent('Button', Button);
registerComponent('NavButton', NavButton);
registerComponent('Input', Input);
registerComponent('InputFile', InputFile);
registerComponent('Field', Field);
registerComponent('Link', Link);

window.addEventListener('DOMContentLoaded', () => {
  render('login');
});
