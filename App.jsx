import Book from "./Book";
import { data } from "./assets/data";

const App = () => {
  return (
    <>
      <Book
        bookImg={data[0].bookImg}
        bookName={data[0].bookName}
        price={data[0].price}
        author={data[0].author}
      />
      <Book
        bookImg={data[1].bookImg}
        bookName={data[1].bookName}
        price={data[1].price}
        author={data[1].author}
      />
      <Book
        bookImg={data[2].bookImg}
        bookName={data[2].bookName}
        price={data[2].price}
        author={data[2].author}
        // bookImg={"https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg"}
        // bookName={"Don't Believe Everything You Think"}
        // price={"5484"}
        // author={"Yo Mama"}
      />
    </>
  );
};

export default App;
