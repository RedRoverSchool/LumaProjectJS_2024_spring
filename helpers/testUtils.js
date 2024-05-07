export const getRandomNumber = (max) =>
    Math.floor(Math.random() * max);

export const urlToRegexPattern = (url) => {
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regexPattern = escapedUrl.replace(/\*/g, '.*');

    return `${regexPattern}`;
};
