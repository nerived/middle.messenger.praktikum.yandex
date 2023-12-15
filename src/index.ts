import Block from './utils/Block';

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
registerComponent('Raw', Raw as typeof Block);
registerComponent('Avatar', Avatar as typeof Block);
registerComponent('ChatItem', ChatItem as typeof Block);
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

registerComponent('ChatsBox', ChatsBox as typeof Block);
registerComponent('ChatsLeft', ChatsLeft as typeof Block);
registerComponent('ChatsRight', ChatsRight as typeof Block);
registerComponent('ChatsField', ChatsField as typeof Block);
registerComponent('ChatsHead', ChatsHead as typeof Block);

registerComponent('PopupBox', PopupBox as typeof Block);
registerComponent('PopupContent', PopupContent as typeof Block);

// ui
registerComponent('Button', Button as typeof Block);
registerComponent('NavButton', NavButton as typeof Block);
registerComponent('Input', Input as typeof Block);
registerComponent('InputFile', InputFile as typeof Block);
registerComponent('Field', Field as typeof Block);
registerComponent('Link', Link as typeof Block);

window.addEventListener('DOMContentLoaded', () => {
  render('login');
});
