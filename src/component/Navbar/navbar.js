import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Navbar extends Component {
    static defaultProps = {
        title: "Github",
        icon: "fa fa-github"
    }

    static propTypes={

    }

    constructor(props) {
        super(props)
    }

    render() {
        let {title, icon} = this.props
        return (
            <div className="navbar bg-primary">
                <h1>
                    <i className={icon}/>
                    {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Navbar;