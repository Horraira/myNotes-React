import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <div>
      <Link to={`/note/${props.note.id}`}>
        <div className="notes-list-item">
          <h3>{props.note.body}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
