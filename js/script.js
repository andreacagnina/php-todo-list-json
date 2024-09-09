const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            url: 'server.php',
        }
    },
    methods: {
        getTodoList() {
            axios.get(this.url).then((resp) => {
                this.todoList = resp.data;
            });
        }
    },
    mounted() {
        this.getTodoList();
    },
}).mount('#app');