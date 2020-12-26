export const getDaysFromIssueWasReported = (created_at) => {
    const now = new Date();
    const dateWhenIssueWasCreated = new Date(created_at).getTime();
    const nowTimeStamp = now.getTime();

    const microSecondsDiff = Math.abs(dateWhenIssueWasCreated - nowTimeStamp);
    const daysDiff = Math.round(microSecondsDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
};
