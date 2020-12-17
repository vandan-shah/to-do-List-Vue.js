<template>
    <div class="todo-container">
        <ul class="todo-list">
            <div v-for="(todo, index) in todos" :key="index" class="todo">
                <li class="todo-item" @click="toggle">{{ todo.todo }}</li>
                <button class="trash-btn" @click="deleteTodo(index)">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        toggle(event) {
            event.target.classList.toggle("todo-item-check")
        }
    }
}
</script>

<style>

</style>