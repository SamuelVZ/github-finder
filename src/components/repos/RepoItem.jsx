import PropTypes from 'prop-types';
import { HiLink, HiEye, HiStar, HiInformationCircle } from 'react-icons/hi';
import { FaUtensils } from 'react-icons/fa';

function RepoItem({ repo }) {
  return (
    <div className='card mb-2 rounded-md bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={repo.html_url}>
            <HiLink className='inline mr-1' /> {repo.name}
          </a>
        </h3>
        <p className='mb-3'> {repo.description}</p>
        <div>
          <div className='badge badge-info badge-lg mr-2'>
            <HiEye className='mr-2' /> {repo.watchers_count}
          </div>
          <div className='badge badge-success badge-lg mr-2'>
            <HiStar className='mr-2' /> {repo.stargazers_count}
          </div>
          <div className='badge badge-error badge-lg mr-2'>
            <HiInformationCircle className='mr-2' /> {repo.open_issues}
          </div>
          <div className='badge badge-warning badge-lg mr-2'>
            <FaUtensils className='mr-2' /> {repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
