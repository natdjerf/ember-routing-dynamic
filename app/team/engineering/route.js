import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Jason Weeks',
        note: 'likes working out',
      },
      {
        id: 2,
        name: 'Lauren Fazah',
        note: 'is currently teaching',
      },
      {
        id: 3,
        name: 'Antony Donovan',
        note: 'long time programmer',
      },
    ];
  }
});
