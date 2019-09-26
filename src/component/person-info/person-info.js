import React, { Component, Fragment, useEffect } from 'react';
import { Link } from "react-router-dom"
import Repos from "../Repos/Repos"
import PropTypes from 'prop-types';

/*class PersonInfo extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }

    render() {
        const {
            name,
            html_url,
            hireable,
            avatar_url,
            location,
            bio,
            company,
            blog,
            followers,
            Following,
            public_repos,
            public_gists
        } = this.props.user
        return (
            <Fragment>
                <Link to={"/"} className="btn btn-light">返回</Link>
                是否在职:{""}
                {
                    hireable ? (
                        <i className="fa fa-check text-success"/>
                    ) : (<i className="fa fa-times-circle text-danger"/>)
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{width: '150px'}} alt=""/>
                        <h1>{name}</h1>
                        <p>所在地:{location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>个人简介</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className="btn btn-dark my-1">访问</a>
                        <ul>
                            <li>{company && (
                                <Fragment>
                                    <strong>公司:</strong>
                                    {company}
                                </Fragment>
                            )}</li>
                            <li>{blog && (
                                <Fragment>
                                    <strong>网址:</strong>
                                    {blog}
                                </Fragment>
                            )}</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers:{followers}</div>
                    <div className="badge badge-success">Following:{Following}</div>
                    <div className="badge badge-light">Public Repos:{public_repos}</div>
                    <div className="badge badge-dark">Public_Gists{public_gists}</div>
                </div>
                <Repos repos={this.props.repos}/>
            </Fragment>
        );
    }
}*/

function PersonInfo({getUser, getUserRepos, match, user, repos}) {
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
    },[])

    const {
        name,
        html_url,
        hireable,
        avatar_url,
        location,
        bio,
        company,
        blog,
        followers,
        Following,
        public_repos,
        public_gists
    } = user
    return (
        <Fragment>
            <Link to={"/"} className="btn btn-light">返回</Link>
            是否在职:{""}
            {
                hireable ? (
                    <i className="fa fa-check text-success"/>
                ) : (<i className="fa fa-times-circle text-danger"/>)
            }
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{width: '150px'}} alt=""/>
                    <h1>{name}</h1>
                    <p>所在地:{location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>个人简介</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">访问</a>
                    <ul>
                        <li>{company && (
                            <Fragment>
                                <strong>公司:</strong>
                                {company}
                            </Fragment>
                        )}</li>
                        <li>{blog && (
                            <Fragment>
                                <strong>网址:</strong>
                                {blog}
                            </Fragment>
                        )}</li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers:{followers}</div>
                <div className="badge badge-success">Following:{Following}</div>
                <div className="badge badge-light">Public Repos:{public_repos}</div>
                <div className="badge badge-dark">Public_Gists{public_gists}</div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    );
}

PersonInfo.propTypes = {
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
};

export default PersonInfo;