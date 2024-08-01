/* eslint-disable react/jsx-no-comment-textnodes */
import "modern-normalize";

import Alert from './Alert/Alert';
import DeleteButton from './DeleteButton/DeleteButton';
import LoginButton from './LoginButton/LoginButton';
import UserMenu from "./UserMenu/UserMenu";

// import Mailbox from './Mailbox/Mailbox'
// import Product from './Product/Product'

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];


/**
 * A component that renders an alert box with a given variant and children.
 *
 * @param {Object} props - The props of the component.
 * @param {String} props.variant - The type of the alert box. Can be either "warning", "info", "success" or "error".
 * @param {String} props.children - The content of the alert box.
 * @returns {ReactElement} A React element representing the alert box.
 */
const App = () => {
  return (
    <>
      <UserMenu>John</UserMenu>
      <LoginButton>Login</LoginButton>
      <DeleteButton>Delete</DeleteButton>
      <Alert isOutline={true} variant='warning'>Warning</Alert>
      <Alert isOutline={false} variant='info'>Info Alert</Alert>
      <Alert isElevated={true} variant='success'>Success alert</Alert>
      <Alert isElevated={false} variant='error'>Error alert</Alert>
    </>
  );
}

export default App
