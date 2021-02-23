# [Todo](https://louvang.github.io/todo/)

A todo list web app with 3 editable categories for simpler todo-ing.

<p align="center"><a href="https://louvang.github.io/todo/" target="_blank"><img src="https://raw.githubusercontent.com/louvang/todo/main/dist/img/preview.png" alt="Todo Preview" width="750px" /></a></p>

## How To

To edit category titles, simply click on the title. The user can edit the title as well as input emojis in the title.

To add tasks, simply write down the description of the task in the "Create new task" box in its respective category. Click on the "Add" button and your task is complete.

To check off a task as complete, simply click on the checkbox button. You can also uncheck a task.

To delete a task, click on the ellipses icon of that specific task. A modal popup will appear in which you can click the "Delete Task" button to remove the task.

To add color and/or due dates to tasks, click on the ellipses icon. The modal popup allows you to select the priority level and due date for the task. You can also edit the description of the task here.

## About Code

Production code is located in the `/dist` directory. The webapp uses webpack to wire up JavaScript modules from the `/src` directory, compiling it into one file called `main.js` for production.

The code also uses a node module package called [date-fns](https://date-fns.org/) to format due dates.

## Thoughts

This is my second go at working with webpack. Initially, I had issues with the code not updating but I soon realized my mistake in developing the app in 'production' mode. After change the configurations into 'development' mode, everything was much smoother from then on out.

I had a lot planned for the Todo list. There were minor setbacks that made me minimalize some of the features for sake of simply completing the project and moving onto the next. This code is the minimum viable product but I know that I'd like to create a more advanaced todo list so it was a good start at seeing the complexities of a todo list with categories.

## Further Improvements

- [ ] Give users the ability to rearrange tasks
- [ ] Give users the ability to add or delete categories
- [ ] Give users the ability to change colors of priority levels as well as the task bar
- [ ] Make completed tasks less prominent (strikethrough text, move to bottom or archive, etc.)
- [ ] Darkmode/lightmode option
