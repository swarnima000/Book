const Book = ({ bookImg, bookName, author, price }) => {
  return (
    <>
      <article className="book">
        <img src={bookImg} alt={bookName} />
        <h2>{bookName} </h2>
        <h3>{author}</h3>
        <h4>Rs.{price}</h4>
      </article>
    </>
  );
};

export default Book;
