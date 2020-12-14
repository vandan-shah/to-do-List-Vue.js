app.component('productDetails', {
    template:
    /*html*/
    `<div class="product-details">
        <header>
            <h1>
                <i class="fas fa-th-list"></i> TO-DO LIST
            </h1>
        </header>

        <!-- BODY -->

        <to-do @todo-submitted="updateTodo"></to-do>
        <list :todos="todos"></list>

    </div>`,
    data() {
        return {
            todos: []
        }
    },
    methods: {
        updateTodo(todo) {
            this.todos.push(todo)
        }
    }
})