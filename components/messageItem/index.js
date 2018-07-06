Component({
    properties: {
        listData: Array
    },
    methods: {
        longpress: function(e) {
            wx.showModal({
                title: 'aa',
                content: 'bb',
            })
        }
    }
})