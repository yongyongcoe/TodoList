import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';


export default function Homepage(){
    const [todos, setTodos] = useState([
        {
          text: "",
          isDone: false
        }
      ]);
    const [value, setValue] = useState("");

    const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    };
    const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
    };
    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    };
    

    const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    };


    return(
    <div>
        <div>
            <Form onSubmit={handleSubmit}> 
                <Form.Group className="formgroup">
                    <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
                    <Button variant="primary mb-3" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            <div className="list">
            {todos.map((todo, index) => (
                    <Card>
                        <Card.Body>
                            <div className="btn-edit">
                                <Button>edit</Button>
                            </div>
                            <div className="todo">
                                <div className="itemtext">
                                    <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
                                </div>
                                <div className="itembtn">
                                    <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>
                                    <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
            ))} 
            </div> 
        </div>
    </div>
    )
}