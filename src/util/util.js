export const getElapsedTime = (date) => {
    const actDate = new Date();
    const creationDate = new Date(date);
    const elapsed = Math.floor((actDate - creationDate) / 1000);

    const elapsedTimes = [
        {name: "year", elapsed: Math.floor(elapsed / 31536000)},
        {name: "month", elapsed: Math.floor(elapsed / 2628000 % 12)},
        {name: "week", elapsed: Math.floor(elapsed / 604800 % 52)},
        {name: "day", elapsed: Math.floor(elapsed / 86400 % 365)},
        {name: "hour", elapsed: Math.floor(elapsed / 3600 % 24)},
        {name: "minute", elapsed: Math.floor(elapsed / 60 % 60)},
        {name: "second", elapsed: Math.floor(elapsed % 60)}
    ];

    const time = elapsedTimes.find(t => t.elapsed > 0);
    return `${time.elapsed} ${time.elapsed > 1 ? `${time.name}s` : time.name} ago`;
};

export const getUserName = (user) => user ? `${user.firstName} ${user.lastName}` : "";