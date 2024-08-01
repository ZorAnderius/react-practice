import Button from "../Button/Button";
import css from './DeleteButton.module.css';

const DeleteButton = ({children}) => {
    return <Button variant={css.delete}>{ children }</Button>
}

export default DeleteButton;