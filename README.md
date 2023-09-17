# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
    - [Added features](#added-features)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

### Added features

- Added a Google Maps link for the user's location
- Dark mode preferred on first load, except for users that explicitly prefer light mode

### Links

- [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/reacttstailwind-github-user-search-6ZiGvyrkzU)

- [Live site](https://fm-github-user-search-9000.netlify.app/)

### Screenshot

#### Desktop

![Solution](https://github.com/Dudeldups/FM-github-user-search-app/blob/main/screenshots/solution.png)

## My process

### Built with

- React (TypeScript)
- Tailwind

## Author

- Frontend Mentor - [@Dudeldups](https://www.frontendmentor.io/profile/Dudeldups)
