// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
 
  initialize: function() {
    this.on('enqueue add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended dequeue', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

  },

  playFirst: function() {
    this.models[0].play();
  }
});