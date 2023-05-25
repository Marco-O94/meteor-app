import { Template } from 'meteor/templating';
import { TasksCollection } from '../api/TasksCollection';

Template.mainContainer.helpers({
    tasks() {
        return TasksCollection.find({}, { sort: { createdAt: -1 } });
    }
})
