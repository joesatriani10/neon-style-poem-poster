import classes from "./Modal.module.css";
import {useNavigate} from "react-router-dom";

const Modal = ({children}) => {
    const navigate = useNavigate();
    const closeHandler = () => {
        navigate('..'); /// Go up to the parent.
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal;