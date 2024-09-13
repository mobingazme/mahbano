'use client';
import Swal, { SweetAlertIcon } from 'sweetalert2';

interface AlertMethods {
  success: (message: string) => void;
  warning: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  question: (message: string) => void;
}

const Alerts = (): AlertMethods => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const createAlert = (icon: SweetAlertIcon) => (message: string) => {
    Toast.fire({
      icon,
      title: message,
    });
  };

  return {
    success: createAlert('success'),
    warning: createAlert('warning'),
    error: createAlert('error'),
    info: createAlert('info'),
    question: createAlert('question'),
  };
};

export default Alerts;
