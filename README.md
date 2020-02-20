# Angular Movie Gallery

After cloning the application, please run:

        npm install

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## About

This application represents the outcome of an exercise to build a movie gallery.

It was written using the following tech stack:

- [Angular](https://angular.io/) (v.~9.0.1)
- [TypeScript](https://www.typescriptlang.org/)
- [Rxjs](https://github.com/ReactiveX/rxjs)
- [Sass](http://sass-lang.com/)

Due to the relatively limited complexity and scope of the application, no **Redux** or similar state management was implemented.

## Features

**Main Page**

- List of movies
- Search
    - Filter by name
    - Filter by genre
    - Filter by name and genre
- Details page opens when selecting a specific movie

**Details Page**

- Detailed information regarding the specific movie
- Further movies the might be of interest based on genre
- Return button
