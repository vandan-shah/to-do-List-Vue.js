app.component('to-do', {
    template:
    /*html*/
    `<div>
        <form @submit.prevent="onSubmit">
            <input class="todo-input" type="text" placeholder="ADD TODO HERE..." v-model="todo">
            <button class="todo-button" type="submit">
                <i class="fa fa-check"></i>
            </button>
        </form>
    </div>`,
    data() {
        return {
            todo: ''
        }
    },
    methods: {
        onSubmit() {
            let todoAnswer = {
                todo: this.todo
            }
            this.$emit('todo-submitted', todoAnswer)

            this.todo = ''
        }
    }
})