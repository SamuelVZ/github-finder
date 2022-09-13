import { BsGithub } from 'react-icons/bs';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <BsGithub className='text-5xl' />
        <a
          href='https://github.com/SamuelVZ'
          className='text-lg align-middle font bold'
        >
          https://github.com/SamuelVZ
        </a>
        <p>Copyright &copy; {year} All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
