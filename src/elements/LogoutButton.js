
import Cookies from 'js-cookie';

const LogoutButton = () => {
  const logouthandler = () => {
    Cookies.remove('authToken'); // حذف توکن از کوکی
    window.location.replace("/signup");
  }

  return (
    <div onClick={logouthandler} className='bg-gr font-bold w-full h-10 rounded-sm hover:bg-B duration-700 flex justify-start items-center p-3 cursor-pointer'>
       خروج
    </div>
  );
}

export default LogoutButton;