module.exports = {
    isNullOrEmpty(value) {
        return value === '' || value === null || value === undefined || value === 0 || value === '0';
    }
}