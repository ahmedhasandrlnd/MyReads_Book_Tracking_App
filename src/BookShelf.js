import React from 'react'
import DropBox from './DropBox'
// import * as BooksAPI from './BooksAPI'
import './App.css'


class BookShelf extends React.Component {



render(){

  const {books}  = this.props  
  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];
 
  console.log("Books from BookShelf",books)
  return(
    <div className="list-books-content">
    <div>
    
    {shelfTypes.map((shelf, index) => (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === shelf.type)
                .map(book => (
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")" }}></div>
                        <DropBox/>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.author}</div>
                    </div>
                  </li>
                ))}

          </ol>
      </div>
      </div>
    ))}
       
    </div>
  </div>

 )}}

export default BookShelf


