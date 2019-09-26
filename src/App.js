import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./component/Navbar/navbar"
import axios from "axios"
import User from "./component/user/user"
import Search from "./component/Search/Search"
import "./App.css"
import Alert from "./component/Alert/Alert";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import PersonInfo from "./component/person-info/person-info";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            loading: false,
            alert: null,
            repos: []
        }
    }

    async componentDidMount() {
        this.setState({loading: true})
        const res = await axios.get(`http://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({users: res.data, loading: false})
    }


    searchUsers = async (text) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({users: res.data.items, loading: false})
    }

    clearUsers = () => {
        this.setState({users: [], loading: false})
    }

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
        setTimeout(() => {
            this.setState({alert: null})
        }, 2000)
    }

    getUser = async (login) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/users/${login}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data)
        this.setState({user: res.data, loading: false})
    }

    getUserRepos = async (login) => {
        this.setState({loading: true})
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        this.setState({repos: res.data, loading: false})
    }

    render() {
        let {loading, users, alert, user, repos} = this.state
        let showClear = users.length > 0
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <div className="container">
                        <Alert alert={alert}/>
                        <Switch>
                            <Route path="/" exact render={props => (
                                <Fragment>
                                    <Search showClear={showClear}
                                            searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            setAlert={this.setAlert}
                                    />
                                    <User loading={loading} users={users}/>
                                </Fragment>
                            )}
                            />
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/person-info/:login" render={props => (
                                <PersonInfo {...{
                                    ...props, user, repos, getUser: this.getUser,
                                    getUserRepos: this.getUserRepos
                                }}/>
                            )}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;