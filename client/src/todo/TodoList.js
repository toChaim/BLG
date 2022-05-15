import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todo({ id, title, desc, isCompleat, setFetch }) {
  const [formValues, setFormValues] = useState({ title, desc, isCompleat });
  const [edit, setEdit] = useState(!id);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleUpdate = (e) => {
    UpdateTodo(e, id, formValues).then(res => {
      if (res === 204) {
        setEdit(false);
        setFetch('update');
      }
      if (res === 200) {
        setFormValues({ title: '', desc: '' });
        console.log(setFetch)
        setFetch('add New');
      }
    });
  };

  const deleteTodo = () => {
    axios.delete(`/todos/${id}`).then(res => {
      console.log(res);
    });
    setFetch('delete');
  };

  return (<form onSubmit={handleUpdate}>
    {!edit && (<>
      <p>Title: {title}</p>
      <p>Description: {desc}</p>
    </>)}
    {edit && (<><label htmlFor='title'>Title: </label>
      <input type="text" name="title" id="title" value={formValues['title'] || ''} onChange={handleChange} />
      <label htmlFor='desc'>Desc: </label>
      <input type="text" name="desc" id="desc" value={formValues['desc'] || ''} onChange={handleChange} /></>)}

    <label htmlFor='isCompleat'>Compleat</label>
    <input type="checkbox" id="isCompleat" name="isCompleat" checked={isCompleat} onChange={CompleatTodo} />
    {edit && (<button>Save</button>)}
    {edit && id && (<button type="button" onClick={deleteTodo}>Delete</button>)}
    {!edit && (<button type="button" onClick={() => setEdit(!edit)}>Edit</button>)}
  </form>);
}


function CompleatTodo(e) {
  e.preventDefault();
  console.log('CompleatTodo', e.target);
}

function UpdateTodo(e, id, formValues) {
  console.log(e, id, formValues);
  e.preventDefault();

  if (id) {
    return axios.patch(`/todos/${id}`, formValues)
      .then(res => {
        console.log(`/todos/${id}`, res);
        return res.status;
      });
  }
  else {
    return axios.post(`/todos`, formValues).then(res => {
      console.log('/todo', res);
      return res.status;
    });
  }
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [fetch, setFetch] = useState('');

  useEffect(() => {
    console.log('fetching data');

    axios.get('/todos')
      .then(res => {
        // console.log('fetching data', res);
        setTodos(res.data || []);
      })
      .catch(err => {
        console.log('err fetching data', err);

      });
  }, [fetch]);

  return (<div>
    <header>
      <h1>
        Todo List
      </h1>
      <Todo setFetch={setFetch} />
    </header>
    <main>
      <ol>
        {todos.map((v, i) => (<li key={v.id} ><Todo {...v} setFetch={setFetch} /></li>))}
      </ol>
    </main>
  </div>);
}

export default TodoList;
