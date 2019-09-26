import React, { Component } from 'react';
import UserItem from "../useritem/userItem"
import PropTypes from "prop-types"
import Spinner from "../Spinner/Spinner";

class User extends Component {
    render() {
        let {users, loading} = this.props
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
}

User.protoTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}

export default User;