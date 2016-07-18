import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updatePreprint(preprintId, title, abstract, authors, subject, tags, journal) {
            // TODO: there is a PATCH request error in Jam right now, not sure what is happening
            this.get('store').findRecord('preprint', preprintId).then(preprint => {
                preprint.set('title', title);
                preprint.set('abstract', abstract);
                preprint.set('authors', authors);
                // preprint.set('subject', subject);
                //preprint.set('tags', tags);
                //preprint.set('journal', journal);
                console.log('done');
                preprint.save().then(this.transitionToRoute('preprints', preprintId));
            });
        }
    }
});
