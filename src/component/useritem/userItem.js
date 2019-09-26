import React, { Component } from 'react';
import { Link } from "react-router-dom"

class UserItem extends Component {
    render() {
        let {avatar_url, login, html_url} = this.props.item
        return (
            <div className="card text-center">
                <img src={avatar_url} className="round-img" style={{width: 60}}/>
                <h3>{login}</h3>
                <div>
                    <Link to={`/person-info/${login}`} className="btn btn-dark btn-sm my-1">
                        more
                    </Link>
                </div>
            </div>
        );
    }
}

export default UserItem;