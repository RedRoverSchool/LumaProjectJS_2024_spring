export const getRandomNumber = (max) =>
    Math.floor(Math.random() * max);

export const urlToRegexPattern = (url) => {
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regexPattern = escapedUrl.replace(/\*/g, '.*');

    return `${regexPattern}`;
};

export function generateRandomEmail() {
    const mailbox = Math.random().toString(36).substring(2, 10);
    const domain = "gmail.com";
    return `${mailbox}@${domain}`;
  };
