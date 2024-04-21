# To-do App

A simple React-based To-do app that allows users to add, remove, edit, and mark tasks as done. The app includes a login feature using Firebase authentication, but also works without login by utilizing local storage.

## Features

- Add a task
- Remove a task
- Edit a task
- Mark a task as done
- Login with Firebase authentication
- Works without login using local storage

## Installation

1. Clone the repository:
git clone https://github.com/your-username/todo-app.git
2. Install the dependencies:
cd todo-app
npm install
3. Set up Firebase:
- Create a new Firebase project at https://console.firebase.google.com/
- Enable the Authentication service and configure the sign-in method (email/password)
- Copy the Firebase configuration object and paste it into `src/services/firebase.js`

4. Start the development server:
npm start

5. Open the app in your browser at http://localhost:3000

## Usage

- To add a task, type the task in the input field and press the "Add" button or hit Enter.
- To remove a task, click the "Remove" button next to the task.
- To edit a task, click the "Edit" button next to the task, make the changes, and click outside the input field or hit Enter.
- To mark a task as done, click on the task text.
- To login, enter your email and password in the login form and click the "Login" button.
- To logout, click the "Logout" button in the header.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)