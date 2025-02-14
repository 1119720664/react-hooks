import React, { useReducer } from "react"
import axios from "axios"
import GithubContent from "./githubContent"
import GithubReducer from "./githubReducer"
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER, GET_ALL_USERS } from "./types"

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };
    const [state, dispatch] = useReducer(GithubReducer, initialState)


    const getGitHubList = async () => {
        setLoading()
        const res = await axios.get(`http://api.github.com/users?client_id=
            ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        })
    }


    const searchUsers = async (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }


    const getUser = async (login) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${login}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    const getUserRepos = async (login) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }


    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }


    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <GithubContent.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos,
                getGitHubList
            }}>
            {props.children}
        </GithubContent.Provider>
    )
}

export default GithubState

