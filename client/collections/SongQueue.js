// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('ended dequeue', function() {
      this.shift();
    });

    this.on('add ended', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.models[0].play();
  }
});