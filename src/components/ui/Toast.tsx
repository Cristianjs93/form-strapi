import { ToastContainer, toast, ToastPosition } from 'react-toastify';

const options = {
  position: 'top-right' as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const showSuccess = (message: string) => toast.success(message, options);
const showError = (message: string) => toast.error(message, options);

<ToastContainer {...options} />;

export { ToastContainer, showSuccess, showError };
