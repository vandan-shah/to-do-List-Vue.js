<template>
  <div id="app">
    <header>
        <h1>
            <i class="fas fa-th-list"></i> TO-DO LIST
        </h1>
    </header>

        <!-- BODY -->

        <todo @todo-submitted="updateTodo"></todo>
        <list :todos="todos"></list>
  </div>
</template>

<script>

import Todo from './components/Todo.vue'
import List from './components/List.vue'


export default {
    data() {
        return {
            todos: []
        }
    },
    methods: {
        updateTodo(todo) {
            this.todos.push(todo)
        }
    },
    components: {
        Todo,
        List
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
}

body {
    background-image: linear-gradient(120deg, #ffff00, #008000);
}

header {
    font-size: 1.5rem;
    font-family: 'Libre Baskerville', serif;
}

header,
form {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

form input,
form button {
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: #fff;
}

form button {
    color: #5cb85c;

}

.todo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.todo-list {
    min-width: 30%;
    list-style: none;
}

.todo {
    margin: 0.5rem;
    background: transparent;
    color: black;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
}

.trash-btn {
    background: transparent;
    color: #d9534f;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
}

.todo-item {
    padding: 0rem 0.5rem;
    cursor: pointer;
}

.todo-item-check {
    text-decoration: line-through;
    opacity: 0.5;
}

.fa-minus-circle {
    pointer-events: none;
}
</style>
