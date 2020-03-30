// Generate a unique key for elements created with loops
export const generateKey = (key: string | number) => {
    return key + '_' + (Date.now() * Math.random());
}