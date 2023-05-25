import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

//Action to insert a task into the database
const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if(TasksCollection.find().count() === 0){
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
      'Eighth Task',
      'Ninth Task',
      'Tenth Task',
    ].forEach(insertTask)
  }
});
