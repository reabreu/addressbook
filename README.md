This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and its intended for demo purposes.

## Development

### `yarn && yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Test

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Architectural notes

- The app uses react-redux for global state management, along with redux dev toolkit for ease speed of development
- Styles are managed via styled components to archieve scoped CSS
- Reselect is used to memoize computed date for perfomance reasons (eg: filter by nationality and search term)
- Virtualization was considered but not implemented due to small list size
- Infinite pagination is archieved with IntersectionObserver API
- Responsive design is not implemented
- Test is done via react testing library
- The app is not dockerized since that's out of scope for the purposes of this demo
- Code splitting is archieve per route via react router library and react suspense
