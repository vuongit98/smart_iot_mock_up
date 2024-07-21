Page(
  {
  jump: function () {
    ty.navigateTo({
      url: '/pages/light_setting/index',
    })
  },

  onReady: function() {
    console.log("onReady tab1")
  },

  onShow: function() {
    console.log("onShow tab1")
  },
  onLoad : function(){
    console.log("onLoad tab1");
  }
})
