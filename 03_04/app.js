new Vue({
    el: '#app',
    data: {
        showFlg: false
    }
})

new Vue({
    el: '#app-list',
    data: {
        array: ["kongo", "hiei", "haruna", "kirishima"],
        object: {
            "hoge": "hogehoge",
            "fuga": "fugafuga"
        },
        number: 10,
        string: "Lorem"
    }
})

new Vue({
    el: '#app-listener',
    data: {
        count: 0
    },
    methods: {
        showAlert: function() {
            alert('hoge')
        },
        increment: function() {
            this.count += 1
        }
    }
})

new Vue({
    el: '#app-form-text',
    data: {
        text: ""
    }
})

new Vue({
    el: '#app-form-multiline',
    data: {
        text: ""
    }
})

new Vue({
    el: '#app-form-checkbox',
    data: {
        checked: false,
        checkedNames: []
    }
})

new Vue({
    el: '#app-form-radio',
    data: {
        modulation: ""
    }
})

new Vue({
    el: '#app-form-select',
    data: {
        hisyo: "",
        kantai: []
    }
})
