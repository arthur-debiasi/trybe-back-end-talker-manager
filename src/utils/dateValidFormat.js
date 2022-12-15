const dateValidFormat = (date) => /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date); // https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript

module.exports = dateValidFormat;
