<template>
    <div>
        <form @submit.prevent="onSubmit">
            <input class="todo-input" type="text" placeholder="ADD TODO HERE..." v-model="todo">
            <button class="todo-button" type="submit">
                <i class="fa fa-check"></i>
            </button>
        </form>
    </div>
</template>

<script>




export default {

    data() {
        return {
            todo: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.todo === '') {
                alert('Please fill in the data')
                return
            }

            let todoAnswer = {
                todo: this.todo
            }
            this.$emit('todo-submitted', todoAnswer)

            this.todo = ''
        }
    }
}
</script>

<style>

</style>