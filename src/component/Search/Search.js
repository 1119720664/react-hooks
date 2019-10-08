import React, { Component, useState, useContext } from 'react';
import AlertContent from "../../content/alert/alertContent"
import GithubContent from "../../content/github/githubContent"

/*class Search extends Component {
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
}*/

function Search() {

    const alertContent = useContext(AlertContent)
    const githubContent = useContext(GithubContent)
    console.log(githubContent)
    const [text, setText] = useState("")
    const onChange = (ev) => {
        setText(ev.target.value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (text === "") {
            alertContent.AlertShow("Please enter something", "light")
            return
        }
        githubContent.searchUsers(text)
        setText('')
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search User..." value={text}
                       onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {
                githubContent.users.length > 0 && (
                    <button className="btn btn-light btn-block" onClick={githubContent.clearUsers}>Clear</button>
                )
            }
        </div>
    );

}

export default Search;