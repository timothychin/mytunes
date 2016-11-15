// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    //console.log(this);
    // this.collection.on('add remove', function() {
    //   this.render();
    // }, this);
    // this.collection.forEach(this.render);
    this.render();
  },

  render: function() {
    // var songQueueEntryView = new SongQueueEntryView();
    // songQueueEntryView.render();
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});

