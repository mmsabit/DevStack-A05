# Project Name: DevStack

DevStack is a platform where you can mark and manage the technologies you have learned.

## 🚀 Technologies

- React.js
- Tailwind CSS
- TypeScript / JavaScript (ES6+)
- React-Toastify
- React Icons
- JSON 
- Vite

## ✨ Features

- Add a technology to the stack
- Remove a technology from the stack
- Manage technologies in the stack

## 📚 Simple Answer Questions

### 1. What is JSX, and why is it used in React?

**Answer:** JSX means JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML markup directly inside JavaScript files. JSX provides a clean, visual representation of the UI that is easier to read, write, and maintain.

### 2. What is the difference between props and state?

**Answer:** Props are used to pass data from a parent component to a child component. State is data that is managed within a component. State is private and fully controlled by the component itself.

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:** The `useState` hook is used to manage and remember state, such as data rendering, data storing, triggering re-renders, and fetched data. In this project, `useState` is used in several places, including rendering the selected technologies in the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** The `useEffect` hook lets you perform side effects, such as data fetching, setting up subscriptions, or manually changing the DOM, in functional components after the render phase.

Fetching external data is an asynchronous side effect. If you put a fetch call directly inside the component body, it would run on every render. `useEffect` ensures the data is fetched only when intended, typically when the component first loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** Every item in a `.map()` list needs a unique `key` prop because React can efficiently track and manage elements when the UI updates.

### 6. What is conditional rendering? Show one place you used it.

**Answer:** Conditional rendering means showing a data element or component depending on a condition.

I used it in several places, such as:
- Disabling a button when a technology is already selected.
- Showing **“No technologies selected yet.”** when there is no selected technology.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** To pass data from a parent component to a child component, we use component props. Through props, we can pass data from the parent to the child.

To send something back from the child to the parent, we can declare the state in the parent and pass a state-updating function to the child. The child can then call that function to send data or a request back to the parent.
