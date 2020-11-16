export default class TaskModel {
  constructor(id, title, completed = false, userId = null) {
    this.id = id; this.title = title; this.completed = completed; this.userId = userId
  }
  getCompleted = () => this.completed ? "Terminée" : "En cours"
  getColor = () => this.completed ? "success" : "warning"
  getButtonColor = () => this.completed ? "dark" : "success"
}