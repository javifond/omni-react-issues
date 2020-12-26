import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAllIssues } from '../../actions/actions';
import * as api from '../../api';
import logo from '../../logo.svg';

import './home.scss';

const mapDispatchToProps = {
    setAllIssues,
};

class Home extends Component {

    componentDidMount() {
        fetch(api.ENDPOINT)
            .then((response) => response.json())
            .then((data) => this.props.setAllIssues({
                issues: data,
                isLoading: false
            }))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <main className="home">
                <header className="home__header">
                    <img src={logo} className="home__logo" alt="logo" />
                    <p>Omnipresent - React Issue Tracker</p>
                    <Link className="home__link" to="/issues-lobby">
                        Continue
                    </Link>
                </header>
            </main>
        );
    }
}

export default connect(null, mapDispatchToProps)(Home);
