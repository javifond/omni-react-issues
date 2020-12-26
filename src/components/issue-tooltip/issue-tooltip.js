import React from 'react';

import './issue-tooltip.scss';

function IssueTooltip(props) {
    const { title, body } = props;

    return (
        <div className="tooltip-container">
            <span className="title">{title}</span>
            <div className="tooltip">
                <h3 className="tooltip__title">{title}</h3>
                <p className="tooltip__body">{body}</p>
            </div>
        </div>
    );
}

export default IssueTooltip;
