app.component('list', {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
    `<div class="todo-container">
        <ul class="todo-list">
            <div v-for="(todo, index) in todos" class="todo">
                <li class="todo-item" @click="toggle">{{ todo.todo }}</li>
                <button class="trash-btn" @click="deleteTodo(index)">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
        </ul>
    </div>`,
    data() {

    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        toggle(event) {
            event.target.classList.toggle("todo-item-check")
        }
    }
})