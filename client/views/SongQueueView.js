// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // this.collection.on('add remove', function() {
    //   this.render();
    // }, this);
    
  },

  render: function() {
    var songQueueEntryView = new SongQueueEntryView();


    // var html = [];
    // for (var i = 0 ; i < this.collection.length; i++) {
    //   html.push('<div>',
    //               '<span>',
    //                 // this.collection.get()
    //               '</span>',
    //             '</div>');
    // };
    // html.join('');
    //return this.$el.html(html);
      // return this.$el;
  }
});

