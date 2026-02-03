import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import ListItems from "./ListItems";

const STORAGE_KEY = "simple-todo-items";

function App() {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (event) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems((prev) => [
      ...prev,
      { id: Date.now().toString(), text: trimmed, completed: false },
    ]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const updateItem = (id, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: value } : item))
    );
  };

  const clearCompleted = () => {
    setItems((prev) => prev.filter((item) => !item.completed));
  };

  const stats = useMemo(() => {
    const completed = items.filter((item) => item.completed).length;
    return {
      total: items.length,
      completed,
      remaining: items.length - completed,
    };
  }, [items]);

  return (
    <div className="app">
      <div className="card">
        <header className="header">
          <div>
            <p className="eyebrow">Simple Todo</p>
            <h1>Stay on top of your tasks.</h1>
            <p className="subtitle">
              Add, edit, and complete tasks with automatic local saving.
            </p>
          </div>
          <div className="stats">
            <div>
              <span>Total</span>
              <strong>{stats.total}</strong>
            </div>
            <div>
              <span>Remaining</span>
              <strong>{stats.remaining}</strong>
            </div>
            <div>
              <span>Done</span>
              <strong>{stats.completed}</strong>
            </div>
          </div>
        </header>

        <form className="todo-form" onSubmit={addItem}>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add a new task"
          />
          <button type="submit">Add</button>
        </form>

        <ListItems
          items={items}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          updateItem={updateItem}
        />

        <div className="footer">
          <button type="button" className="ghost" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
