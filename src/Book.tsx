import "./Book.css";

export type BookType = {
  id: string;
  title: string;
  author: string;
  assignedTo: string[];
};

const Book = ({ title, author, assignedTo }: BookType) => {
  return (
    <div className="book">
      <span>
        <strong>{title}</strong> <span className="author">by {author}</span>
      </span>
      <p>Assigned to: {assignedTo.join(", ")}</p>
    </div>
  );
};

export default Book;
