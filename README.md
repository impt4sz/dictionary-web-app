# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

In this project I got to put React context API into practice, I used it for the dropdown component state and the theme state. The benefit of using react context api is to pass down data without explicitly passing the props through every level. This prevents prop drilling (a goal of mine - improve data handling) and allows for efficient updates to the data. Below is the code for the dropdown menu context.

```js
import { createContext, useContext, useState } from "react";
const DropdownContext = createContext();
export const DropdownProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Sans Serif");
  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </DropdownContext.Provider>
  );
};
export const useDropdown = () => {
  return useContext(DropdownContext);
};
```
I wanted the custom dropdown to have its own state and be able transfer the selected data up to the App.jsx component, where it would set the app font based on what the user has selected.


### Continued development

I would like to continue to practice using the context API as it is benefical to use in React applications

