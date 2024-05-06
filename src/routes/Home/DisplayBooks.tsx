import { DisplayBookProps, Book } from "../../types/Types";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;

  const handleClick = () => {
    
  }

  return (
    <>
      {docs.map((book: Book, index: number) => (
        <article key={index}>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt=""
          />
          <p>{book.title}</p>
          <p>{book.author_name}</p>
          <p>{book.first_publish_year}</p>
          <button onClick={handleClick}>Add Favourite</button>
        </article>
      ))}
    </>
  );
};

export default DisplayBooks;
