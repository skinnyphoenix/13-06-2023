import "./indexCard.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="Card">
        <h2 className="todo_Title">{data.todo}</h2>
        <button className="checkTodo">Done</button>
      </div>
    </>
  );
};

export default Card;
