import ReactDOM from 'react-dom';

const Modal = (props) => {
  const modalRoot = document.getElementById('modal-root');
  return (
    ReactDOM.createPortal(props.children, modalRoot)
  )
}

export default Modal