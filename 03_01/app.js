new Vue({
    el: '#app',
    data:{
        count: 0
    },
    methods: {
        countup: function(){
            this.count++
        }
    }
})