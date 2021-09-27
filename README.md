## Info

1. The builder can add and remove choices from the list of choices. In the visual spec provided, the builder adds and removes choices in a textarea element. Individual items are separated by a new line.

2. There is a validation in place.

  - [x] The Label field is required.

  - [x] Duplicates choices are not allowed.

  - [x] There cannot be more than 50 choices total.

3. If the default value is not one of the choices, it is added to the list of choices when the field is saved.

4. All components are created in a reusable fashion the allows to be future used in other containers/components.

## Bonus tasks
  - [x] Very basic responsiveness.

  - [x] Localstorage implemented to solve issues if accidental closing of window.

  - [x] All components were created with possibility of reusability.



### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed.
