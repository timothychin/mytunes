// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var that = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      datatype: 'json',
      contentType: 'application/json', 
      success: function(data) {
        that.add(data.results);
        that.trigger('rerender', that);
      },
      error: function(data) {
        console.log('Error' + data);
      }
    });
  }
});