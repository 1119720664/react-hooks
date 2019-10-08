import React, { useContext, useEffect } from 'react';
import UserItem from "../useritem/userItem"
import GithubContext from "../../content/github/githubContent"
import Spinner from "../Spinner/Spinner";

function User() {
    const githubContent = useContext(GithubContext)
    const {loading, users, getGitHubList} = githubContent

    useEffect(() => {
        getGitHubList()
    }, [])

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map(item => (
                    <UserItem item={item} key={item.id}/>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}

export default User;