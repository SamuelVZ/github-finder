import PropTypes from 'prop-types';

function RepoList({ repos }) {
  return (
    <div className='card rounded-lg shadow-lg bg-base-100'>
      <div className='card-body'>
        <h2 className='card-title text-3xl my-4 font-bold'>
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <h3 key={repo.id}>{repo.name}</h3>
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
