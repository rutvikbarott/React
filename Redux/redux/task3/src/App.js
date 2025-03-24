import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateItem } from "./features/itemsSlice";

function App() {

  const [inputValue, setInputValue] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text: inputValue
      };
      dispatch(addItem(newItem));
      setInputValue('');
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateItem = () => {
    if (updateValue.trim() !== '' && editId !== null) {
      dispatch(updateItem({ id: editId, newText: updateValue }));
      setUpdateValue('');
      setEditId(null);
    }
  };

  const handleEditItem = (id, text) => {
    setEditId(id);
    setUpdateValue(text);
  };
  return (
    <div className="App">
    <h1>Redux CRUD App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <div>
        <h2>Items List</h2>
        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {editId === item.id ? (
                  <>
                    <input
                      type="text"
                      value={updateValue}
                      onChange={(e) => setUpdateValue(e.target.value)}
                    />
                    <button onClick={handleUpdateItem}>Update</button>
                  </>
                ) : (
                  <>
                    {item.text}
                    <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
                    <button onClick={() => handleEditItem(item.id, item.text)}>Edit</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      

    </div>
  );
}

export default App;
