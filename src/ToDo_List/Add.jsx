import React, { useReducer, useState } from "react";

const reduce = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const Add = () => {
  const [todos, dispatch] = useReducer(reduce, []);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (input.trim()) {
      if (editId) {
        dispatch({ type: "EDIT_TODO", payload: { id: editId, text: input } });
        setEditId(null);
      } else {
        dispatch({ type: "ADD_TODO", payload: input });
      }
      setInput("");
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setInput(text);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task."
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button
        onClick={handleAddOrEdit}
        style={{
          padding: "10px",
          backgroundColor: editId ? "#FFA500" : "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {editId ? "Update" : "Add"}
      </button>
      <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              backgroundColor: todo.completed ? "#D3F9D8" : "#f4f4f4",
              margin: "5px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => handleToggle(todo.id)} style={{ cursor: "pointer" }}>
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#FF0000",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;