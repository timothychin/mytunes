// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('enqueue', function() {
      console.log('songQ NQ')
      this.playFirst();
    });

    this.on('ended dequeue', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.models[0].play();
  }
});