import React from 'react';
import RepoItem from "../RepoItem/RepoItem"
import PropTypes from 'prop-types';

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

function Repos({repos}) {
    return repos.map((repo, index) => (<RepoItem repo={repo} key={index}/>))
}

export default Repos;