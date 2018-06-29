Page({
  data: {
    messages: [{
      "留言对象": "Y",
      "内容": "abc",
      "头像": "http://dummyimage.com/140x140/40b7ea"
    }, {
      "留言对象": "H",
      "内容": "abc",
      "头像": "http://dummyimage.com/140x140/40b7ea"
    }, {
      "留言对象": "Y",
      "内容": "abc",
      "头像": "http://dummyimage.com/140x140/40b7ea"
    }]
  },
  onLoad: function (options) {
    console.log(options['ID']);
  }
})