import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        src={spinner}
        alt='Loading...'
        className='text-center mx-auto w-180'
      />
    </div>
  );
}
export default Spinner;
