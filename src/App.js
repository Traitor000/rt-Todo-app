import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './services/firebase';
import { loadTasks, saveTasks } from './services/localStorageService';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, text) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text } : task))
    );
  };

  const handleToggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLoginClick={handleLoginClick}
      />
      <main>
        {showLoginForm ? (
          <LoginForm onLogin={handleLoginSuccess} />
        ) : (
          <>
            <AddTaskForm onAdd={handleAddTask} />
            <TaskList
              tasks={tasks}
              onRemove={handleRemoveTask}
              onEdit={handleEditTask}
              onToggleDone={handleToggleDone}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;