const BookList = ({ books, children }) =>
    <>
    <h1>{children}</h1>
    <ul>
        {books.map(({ id, name }) =>
            <li key={id}>
                {name}
            </li>
        )}
        </ul>
    </>

export default BookList;