# Article List Web App

This is a web application built using React and Redux that allows users to view, add, and remove articles. Users can also pin articles to make them appear first in the list. Additionally, the application provides a search feature to filter articles by name or description. It also includes a page that fetches articles from the News API.

## Features

- View a list of articles
- Add new articles (only created by the user)
- Remove articles
- Pin articles to prioritize them at the top of the list (only one pinned item allowed)
- Search articles by title or description
- Fetch articles from the News API

## Technologies Used

- React
- Redux
- React Router (for navigation)
- News API (for fetching news articles)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/KotenkoNata/articles-list.git
   
2. Install dependencies:
   ```shell
   npm install
   
3. Set up the News API:
* Obtain an API key from https://newsapi.org/
* Create a .env file in the project root directory
* Add your API key to the .env file:

4. Start the development server:
   ```shell
   npm start
   
5. Open the web application in your browser at http://localhost:3000

## Usage
* On the homepage, you will see a list of articles. You can add new articles by clicking the "Post" button and providing the necessary information.
* To remove an article, click the "Remove Icon" button.
* To pin an article, click the "Pin" button. Only one article can be pinned at a time.
* Use the search bar to filter articles by name or description.
* Navigate to the "News" page to view 10 articles fetched from the News API. Click the "Load more" button to fetch an additional 10 articles. The application ensures that previously fetched articles are not repeated.
