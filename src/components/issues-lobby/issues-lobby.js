import React, { Component } from 'react';
import { connect } from 'react-redux';
import Issue from '../issue/issue';

import './issues-lobby.scss';

const mapStateToProps = (state) => ({
    ...state,
});

class IssuesLobby extends Component {
    render() {
        const isLoading = this.props.isLoading;
        const issues = this.props.issues;

        return (
            <main className="issues">
                <header>
                    <h1>React Issue Tracker</h1>
                </header>

                {isLoading && <div>Loading...</div>}

                {!isLoading && (
                    <section className="issues__content">
                        <header className="issues__content-header">
                            <h4>{`Total issues shown: ${issues.length}`}</h4>
                        </header>

                        {issues.map((issue, i) => (
                            <Issue issue={issue} key={i} />
                        ))}
                    </section>
                )}
            </main>
        );
    }
}

export default connect(mapStateToProps, null)(IssuesLobby);
