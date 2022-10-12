import { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContex';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

// import PropTypes from 'prop-types';
function UserSearch(props) {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (f) => {
    f.preventDefault();

    if (text === '') {
      setAlert('Please type something', 'error');
    } else {
      dispatch({ type: 'set_loading' });
      const users = await searchUsers(text);

      dispatch({
        type: 'get_users',
        payload: users,
      });
      setText('');
    }
  };

  const handleClick = () => {
    dispatch({
      type: 'clear_users',
    });
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
          <button className='btn btn-accent btn-lg' onClick={handleClick}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
UserSearch.propTypes = {};
export default UserSearch;
