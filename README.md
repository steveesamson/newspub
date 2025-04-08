# NewsPub

## How-to

`NewsPub` is a React.js application that allows people to read news from the `https://newsapi.org` API. You interact with the application by choosing one of the provided city names and news for the selected city will be listed.

The application further allows users to click on the `Read News` button of the respective news item in order to read the news details.

The application allows for offline usage, especially for all previously visited cities while it handles network errors with appropriate error message.

This application was created with the following:

- `api/index.js:` This exposes `getNewsFor` that is responsible for fetching news
  from `https://newsapi.org`, handling errors appropriately.
- `hooks/useNewsFor.js:` This is a custom React hook that is responsible for bringing data into the `views/News.js` view. This hook uses `getNewsFor` to fulfill this objective.
- `index.js:` This is the entry point of the application, it is responsible for mounting the application to the HTML DOM.
- `App.js:` This component is the parent component for the whole application, it houses `views/News.js`.
- `views/NewsMenu.js:` This component is responsible for managing `city` choices, which in turn gets propagated to the `views/News.js` component. It doubles as the page header too.
- `views/News.js:` This is the main `News` component. It is responsible for contacting `hooks/useNewsFor.js` for data fetches. It maintains states about which `city` is being used, which `NewsItem` is displaying its details or not. It also notifies of `loading`, `error` or `success` states of the fetch process.
- `views/NewsItem.js:` This is the component responsible for displaying individual `News` item. It triggers the event for the displaying or collapsing of the `News` detail based on `News` title.
- `views/DisplayWhen.js:` This component is a utility component that helps in `hiding` or `showing` of other components that it wraps based on the props `when`, a `boolean` prop. Wrapped components are displayed when `when` evaluates to `true` but are hidden otherwise.
- Additional stylesheet files like `index.css` `App.css` `views/News.css`, `views/NewsItem.css`, `views/NewsMenu.css` are also created to style the application.
- News are provided by `https://newsapi.org` API. You need an account in order to get API KEY. This is required.
- Application runs at `http://localhost:3000/`

## Setup

Inside the application folder, run:

```bash
npm install
```

The above will install all dependencies

## Run

Inside the application folder, run:

```bash
npm start
```

The above will start the application on the URL: http://localhost:3000. Browse the URL to view application. Follow the information on the How-to section above.
