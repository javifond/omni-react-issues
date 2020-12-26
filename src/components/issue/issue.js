import React from 'react';
import IssueTooltip from '../issue-tooltip/issue-tooltip';
import { getDaysFromIssueWasReported } from './issue.utils';

import './issue.scss';

function Label(label) {
    const { name, color } = label.label;
    const labelStyle = {
        '--label-background': `#${color}`,
    };

    return (
        <span className="label" style={labelStyle}>
            {name}
        </span>
    );
}

function Issue(props) {
    const { issue } = props;
    const { title, labels, number, created_at, state, body } = issue;

    return (
        <div className="issue">
            <div className="first-row">
                <i className="icon" title={state} />
                <IssueTooltip title={title} body={body} />
                {labels &&
                    labels.map((label, i) => <Label label={label} key={i} />)}
                <span></span>
            </div>
            <div>
                <span className="issue-number">{`#${number}`}</span>
                <span className="created-at">{`created ${getDaysFromIssueWasReported(
                    created_at,
                )} day(s) ago.`}</span>
            </div>
        </div>
    );
}

export default Issue;
