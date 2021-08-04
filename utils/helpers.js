// in this folder, we are exporting a function that makes the test pass
module.exports = {
    // the following function will make our dates on posts look cleaner/more readableS
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    // the following function will correctly pluralize words when needed
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
    },
    // the following function will shoretn our URLS to make them look cleaner
    format_url: url => {
        return url
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')[0]
          .split('?')[0];
    },
};
