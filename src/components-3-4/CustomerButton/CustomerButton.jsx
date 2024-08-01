import Button from "../Button/Button";

const CusomerButton = ({ message, children }) => {
    const handlerClick = () => {
        alert(message);
    }

    return <Button handle={handlerClick}>
        {children}
    </Button>
 }

export default CusomerButton;