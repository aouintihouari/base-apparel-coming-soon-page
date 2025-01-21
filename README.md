# Frontend Mentor - Base Apparel Coming Soon Solution

This is a solution to the **Base Apparel Coming Soon** challenge on [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

#### Mobile View

![Mobile Screenshot](./screenshots/mobile-view.png)

#### Desktop View

![Desktop Screenshot](./screenshots/desktop-view.png)

### Links

- [Solution URL](https://aouintihouari.github.io/base-apparel-coming-soon-page/)
- [Live Site URL](https://github.com/aouintihouari/base-apparel-coming-soon-page)

## Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Media Queries for responsiveness
- Vanilla JavaScript

## What I Learned

This project enhanced my skills in creating a responsive webpage that adapts to both desktop and mobile views. Below are some key takeaways:

1. **Responsive Images with `picture` element**:
   ```html
   <picture>
     <source srcset="./images/hero-desktop.jpg" media="(min-width: 768px)" />
     <img src="./images/hero-mobile.jpg" alt="hero image" />
   </picture>
   ```
