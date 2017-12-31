new Vue({
    el: '#app',
    data: {
        todo: "",
        list: []
    },
    methods: {
        sendTodo: function() {
            console.log("sendTodo: " + this.todo)
            this.list.push({
                text: this.todo,
                status: 'todo'
            })
            this.todo = ""
        },
        doneTodo: function(item) {
            if(item.status == 'done') {
                item.status = 'todo'
            } else {
                item.status = 'done'
            }
        }
    }
})
