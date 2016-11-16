// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    // this.collection.on('enqueue', function() {
    //   this.render();
    // }, this);
    this.render();
  },


  render: function() {
    console.log('render Song Q entry');
    //console.log(this.collection);
    //console.log(this.collection.get('artist'));
    // var html = [];
    // html.push('<div>',
    //               '<span>',
    //                 'hello',
    //                 // this.collection.get('artist')
    //                 // + ' ' + this.collection.get('title'),
    //               '</span>',  
    //             '</div>');
    // html.join('');
    // return this.$el.html(html);
      // return this.$el;
    return this.$el.html(this.template(this.model.attributes));
  }
});
