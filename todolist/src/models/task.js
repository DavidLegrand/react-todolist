export default class TaskModel {
  constructor(id, title, completed = false, userId = null, description = "", created = new Date()) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.userId = userId;
    this.description = description;
    this.created = created;
  }
}