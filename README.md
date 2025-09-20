# 🎬 Movie Explorer

A responsive React-based movie search website that uses the [TMDB API](https://developer.themoviedb.org/) to display popular/recent movies, search the entire TMDB database, and manage a personal list of favorite movies using local storage.

## ✨ Features
- **Browse Popular & Recent Movies** → Landing page shows trending and newly released titles.
- **Search Movies** → Search any film from the TMDB database.
- **Favorites** → Add/remove favorite movies, stored in browser local storage.
- **Routing** →  
  - `/` → Popular & Recent Movies  
  - `/favorites` → Your saved favorites  
- **Responsive Design** → Optimized for desktop and mobile screens.
- **Planned** → Tailwind CSS integration for faster and cleaner styling.

## 🛠️ Technologies Used
- **React (Vite)** → Frontend framework & fast dev server
- **React Router** → For routing between pages
- **Context API** → For managing state across components
- **Local Storage API** → Persistent favorites
- **TMDB API** → Real-time movie data
- **CSS** → Custom component/page styles

## 📚 Things I Learned While Building This Project

- **Page Routing**:  
  Page routing is the process of defining different URLs (paths) in a web application and deciding which component or content should be displayed for each path — without reloading the entire page.  
  In React, this is handled through client-side routing, which makes navigation faster and provides a multi-page-like experience within a single-page app. It also helps organize the app into sections and enables deep linking (sharing links to specific pages).

- **Navigation with Navbar Links**:  
  Using links in the Navbar allows users to easily navigate between different pages of the app.

- **React Context**:  
  Context allows state to be shared globally across components, making it accessible to any part of the app that is wrapped inside the provided context.

- **Children Prop in React**:  
  `children` is a special reserved prop in React. It represents anything that is passed between the opening and closing tags of a component, making components more reusable and flexible.

- **Local Storage**:  
  Local storage enables storing values directly in the browser. This makes data (like favorite movies) persist even after refreshing or closing the tab.



### API key - 
const API_KEY = "your-api-key-here";
