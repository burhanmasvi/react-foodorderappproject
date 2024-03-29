import { Fragment } from 'react';
import classes from './Modal.module.css'
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onclick={props.onClose} />
    );
};

const ModalOverlays =(props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>

    );
};
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return(
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose} />,portalElement)}
            {createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement) }
        </Fragment>
    );
}

export default Modal;