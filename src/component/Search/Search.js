import React, { Component } from 'react';
import PropTypes from "prop-types";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onChange(ev) {
        this.setState({[ev.target.name]: ev.target.value})
    }

    onSubmit(ev) {
        ev.preventDefault()
        if (this.state.text === "") {
            this.props.setAlert("Please enter something", "light")
            return
        }
        this.props.searchUsers(this.state.text)
        this.setState({text: ''})
    }

    render() {
        let {text} = this.state
        let {clearUsers, showClear} = this.props
        return (
            <div>
                <form className="form" onSubmit={(ev) => this.onSubmit(ev)}>
                    <input type="text" name="text" placeholder="Search User..." value={text}
                           onChange={(ev) => this.onChange(ev)}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {
                    showClear && (
                        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                    )
                }
            </div>
        );
    }
}

Search.protoTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}


export default Search;