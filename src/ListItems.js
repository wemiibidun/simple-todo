import React from "react";
import "./ListItems.css";
import FlipMove from "react-flip-move";

function ListItems({ items, deleteItem, toggleItem, updateItem }) {
  return (
    <div className="list-wrap">
      {items.length === 0 && (
        <p className="empty">No tasks yet. Add your first one above.</p>
      )}
      <FlipMove duration={200} easing="ease-in-out">
        {items.map((item) => (
          <div key={item.id} className="list-item">
            <label className="check">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
              />
              <span />
            </label>
            <input
              className={item.completed ? "done" : ""}
              value={item.text}
              onChange={(event) => updateItem(item.id, event.target.value)}
            />
            <button type="button" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default ListItems;
