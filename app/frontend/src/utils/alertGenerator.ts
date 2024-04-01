import Swal from 'sweetalert2';

const alertGenerator = (type: string, title: string, text = '') => {
  switch (type) {
    case 'success':
      Swal.fire({
        title,
        text,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        background: '#6d6a6a',
        color: 'white',
      });
      break;
    case 'error':
      Swal.fire({
        title,
        text,
        icon: 'error',
        background: '#6d6a6a',
        color: 'white',
        denyButtonAriaLabel: 'error-alert',
        showConfirmButton: false,
        timer: 2000,
      });
      break;
    default:
      console.error('Invalid params');
  }
};

export default alertGenerator;
