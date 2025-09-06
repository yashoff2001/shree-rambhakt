import pageNotFound from '../assets/404.svg';

const PageNoteFound = () => {
  return (
    <div className="px-5 md:px-20 bg-gray-200 h-[100dvh] flex flex-col justify-center items-center">
      <img src={pageNotFound} alt="404 Page Not Found" className='h-[300px]' />
      <a href='./home' className='text-red-600 text-[20px] font-semibold font-mono hover:underline'>Get Back To Home</a>
    </div>
  );
};

export default PageNoteFound;