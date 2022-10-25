# Test!

The purpose of this readme is to describe the steps I took throughout the process of solving this exercise.

## 1. Initialize the project with the corresponding dependencies:

### Vite

[Vite](https://vitejs.dev/) is a well-known and useful tool for developing libraries and single-page applications. It comes with a variety of scaffolds that facilitates the initialization phase of a project.

### Jest

Vite does not come with Jest, so I had to install it manually. What I did was

1. `pnpm add -D jest @types/jest jest jest-environment-jsdom`.
2. `pnpm add -D ts-node ts-jest`.
3. `pnpm add -D @testing-library/react @testing-library/user-event @types/react-test-renderer`.
4. configure the `jest.config.ts`.

## 2. Play with the API

After the initialization phase, the second step I did was to create a Postman collection to know how the results were structured and think about the possible UI components that the App would have.

## 3. Doing the UI

After figuring out the structure, it was time to create the SFC: the UI, the CSS with mocked data.

## 3. Design decisions

### PokedexList

I spent some time figuring out which would be the best way to list the Pokemons. First I started using the typical ul>li's elements, but I ended up discarding this option.
In the end I decided to use a Flexbox and control the number of colums depending on the width of the site.

### Responsiveness and CSS
If you take a look at the `PokedexList` component folder, you will be surprised to see so many files for a single component, especially with the styles. The reasoning behind this, was because people who are not very knowledgeable about CSS, tend to get lost when looking at css files with more than 400 lines, so I thought it would be easier for them if the css is divided according to responsiveness. 

### Store Custom pokemons at LocalStorage
Decided to store custom pokemons so we could later list them and even check their details!

### Pattern adapter
I decided to create the pattern adapter and modify the data coming from the API as it did not comply with the camelCase and some data were really complex for the purpose of this exercise 

### Redux
I thought if I used redux it would be overkill for the application, however, now that I've done most of the site, it seems to fit well. I didn't need it to meet the requirements though.

## 4. Not yet finished:

- [ ] Tests! - **I do tend to do the tests first**, how ever this was not the case and i focused more on the functionality.
- [ ] complete the i18N.
- [ ] Animation / transitions between pages.
- [ ] index file for each component / block of files.
- [ ] Due to time i could not solve the require issue at the tests and had to escape it with `//@tsconfig`.
- [ ] Could not solve the component typing at Jest

## 5.  Conclussion

I mistakenly wasted too much time doing the UI instead of doing the functionality. as of today (10/16/2022 1:10) I could only spend up to 5 days instead of a week and since I will not have enough free time for the rest of the week, I will present the solution without fully completing it.
