
import { useState } from 'react'
import { books } from '../data/books'

function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [availabilityFilter, setAvailabilityFilter] = useState('all')


  const filteredBooks = books.filter((book) => {
    const search = searchTerm.toLowerCase().trim()

    const matchesSearch =
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.category.toLowerCase().includes(search)

    const matchesAvailability =
      availabilityFilter === 'all' ||
      (availabilityFilter === 'available' && book.available) ||
      (availabilityFilter === 'unavailable' && !book.available)

    return matchesSearch && matchesAvailability
  })


  return (
    <section>
      <h2>Library Book Catalogue</h2>

      <p>
        Search for books, check their availability,
        and find their locations in the library.
      </p>

      <div className="book-search">
        <label htmlFor="book-search-input">
          Search the catalogue
        </label>

        <input
          id="book-search-input"
          type="search"
          placeholder="Search by title, author or category..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

<div className="availability-filter">
  <label htmlFor="availability-select">
    Filter by availability
  </label>

  <select
    id="availability-select"
    value={availabilityFilter}
    onChange={(event) => setAvailabilityFilter(event.target.value)}
  >
    <option value="all">All Books</option>
    <option value="available">Available Books</option>
    <option value="unavailable">Unavailable Books</option>
  </select>
</div>


      <div className="book-list">
        {filteredBooks.map((book) => (
          <article key={book.id} className="book-card">
            <h3>{book.title}</h3>

            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Location: {book.location}</p>

            <p>
  Availability:{' '}
  <span
    className={
      book.available
        ? 'availability-badge available'
        : 'availability-badge unavailable'
    }
  >
    {book.available ? 'Available' : 'Unavailable'}
  </span>
</p>
          </article>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p role="status">
          No books found. Try a different search term.
        </p>
      )}
    </section>
  )
}

export default BooksPage
