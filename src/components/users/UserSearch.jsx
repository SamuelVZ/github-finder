import { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContex';

// import PropTypes from 'prop-types';
function UserSearch(props) {
  const [text, setText] = useState('');

  const { users } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (f) => {
    f.preventDefault();

    if (text === '') {
      window.alert('Type a username');
    } else {
      //search users
    }

    setText('');
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='input input-lg w-full pr-40 bg-gray-200 text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='btn btn-lg absolute top-0 right-0 rounded-l-none w-36'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-accent btn-lg'>Clear</button>
        </div>
      )}
    </div>
  );
}
UserSearch.propTypes = {};
export default UserSearch;
