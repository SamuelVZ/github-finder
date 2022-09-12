import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='text-center text-white'>
      <h1 className='text-8xl mb-4 '>Oops!</h1>
      <p className='text-5xl '>404 - Page not found</p>
      <Link to='/' className='btn btn-secondary m-8 text-lg'>
        Back to Home
        <AiOutlineHome className='ml-2' />
      </Link>
    </div>
  );
}
export default NotFound;
