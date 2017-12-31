new Vue({
    el: '#app',
    data: {
        todo: "",
        list: ["hoge", "fuga"]
    },
    methods: {
        sendTodo: function() {
            console.log("sendTodo: " + this.todo)
            this.list.push(this.todo)
            this.todo = ""
        }
    }
})
