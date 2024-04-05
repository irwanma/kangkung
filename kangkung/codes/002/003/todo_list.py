class Task:
    def __init__(self, name, due_date):
        self.name = name
        self.due_date = due_date
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):
        status = "Completed" if self.completed else "Not Completed"
        return f"Task: {self.name}, Due Date: {self.due_date}, Status: {status}"

class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)

    def complete_task(self, task_name):
        for task in self.tasks:
            if task.name == task_name:
                task.complete()
                print(f"Task '{task_name}' marked as completed.")
                return
        print(f"Task '{task_name}' not found in the to-do list.")

    def view_tasks(self):
        if not self.tasks:
            print("No tasks in the to-do list.")
        else:
            print("Tasks in the to-do list:")
            for task in self.tasks:
                print(task)

def main():
    todo_list = ToDoList()

    while True:
        print("\n===== To-Do List Menu =====")
        print("1. Add Task")
        print("2. Complete Task")
        print("3. View Tasks")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            name = input("Enter task name: ")
            due_date = input("Enter due date: ")
            task = Task(name, due_date)
            todo_list.add_task(task)
            print("Task added to the to-do list.")

        elif choice == "2":
            task_name = input("Enter the name of the task you want to mark as completed: ")
            todo_list.complete_task(task_name)

        elif choice == "3":
            todo_list.view_tasks()

        elif choice == "4":
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
