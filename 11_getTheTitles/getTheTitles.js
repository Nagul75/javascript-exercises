const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
    ]
    let arrBooks = books.map(a => a.title);
    return arrBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
