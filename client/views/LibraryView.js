// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('rerender', this.render);
    this.render();

  },

  render: function() {
    console.log('LibraryView render');
    // debugger;
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    if (this.$el) {
      this.$el.children().detach();

      this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      }));
    }
  }

});
