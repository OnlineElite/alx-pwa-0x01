# alx-project-0x14

## API Overview
Collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members. Support developers: https://www.buymeacoffee.com/SAdrian13

MoviesDatabase provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members

## API Version
version 1 : V1

## Available Endpoints
Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'

ALL query parameters are OPTIONAL

### Titles
Query parameters and model are explain below, in 'Description Of Optionals Query Parameters' and 'Description Of The Information (Models)'
* Titles - Multiple:
path: /titles
description: returns array of titles according to filters / sorting query parameters provided
query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
model: title
* Titles - By List of Id's:
path: /x/titles-by-ids
description: returns array of titles according to array of id's provided
query parameters: - info - list ( unique query parameter that sets the collection you want to query) - options available in Utils - Titles Lists - idsList ( the list of id's, must be an array of strings)
model: title
* Title
path: /titles/{id}
path parameter (required) : id -> imdb id of title
description: returns title acording to filters / sorting query parameters provided
query parameters: info
model: title
* Title Rating
path: /titles/{id}/ratings
path parameter (required) : id -> imdb id of title
description: returns title rating and votes number
query parameters: -
model: rating
* Seasons and Episodes
path: /titles/series/{id}
path parameter (required) : id -> imdb id of series
description: returns array of episodes only with episode id, episode number and season number in ascending order
query parameters: -
model: light episode
* Seasons Number
path: /titles/seasons/{id}
path parameter (required) : id -> imdb id of series
description: returns number of seasons for the series (integer)
query parameters: -
* Episodes Id`s By Series Id and Season
path: /titles/series/{id}/{season}
path parameter (required) : id -> imdb id of series, season -> season number
description: returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
query parameters: -
model: light episode
* Episode
path: /titles/episode/{id}
path parameter (required) : id -> imdb id of episode
description: returns episode according to filters / sorting query parameters provided
query parameters: info
model: title
* Upcoming Titles
path: /titles/x/upcoming
description: returns array of upcoming titles according to filters / sorting query parameters provided
query parameters: multiple
model: title

### Search
* Titles by Keyword
path: /titles/search/keyword/{keyword}
path parameter (required) : keyword
description: returns array of titles according to filters / sorting query parameters provided and the keyword provided in path
query parameters: multiple
model: title
* Titles by Title
path: /titles/search/title/{title}
path parameter (required) : title -> a title or part of a title
description: returns array of titles according to filters / sorting query parameters provided and the title provided in path
query parameters: *multiple, uniq query parameter exact that sets the looku to be exact default : false
model: title
* Titles by Aka's
path: /titles/search/akas/{aka}
path parameter (required) :aka -> a aka of a title ( exact only and case sensitive )
description: returns array of titles according to filters / sorting query parameters provided and the aka provided in path, work only for exact matches
query parameters: multiple
model: title

### Actors
* Actors
path: /actors
description: returns array of actors according to filters provided
query parameters: limit, page
model: actor
* Actor By Id
path: /actors/{id}
path parameter (required) : imdb id of actor
description: returns actor details
model: actor

### Utils
* Title Type
path: /title/utils/titleType
description: returs array of title types
* Genres
path: /title/utils/titleType
description: returs array of genres
* Titles Lists
path: /title/utils/lists
description: returns array of lists (for 'list' query parameter)

## Request and Response Format

### Example Request – Search Movie:
const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a71818debbmsh69542825bf5beaep17af9cjsndbe19ba83f25',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

### Example Response:
{
  "page": 1,
  "next": "/titles/x/upcoming?page=2",
  "entries": 10,
  "results": [
    {
      "_id": "61e58b85909c2ca78143aafb",
      "id": "tt10059166",
      "primaryImage": {
        "id": "rm457619714",
        "width": 510,
        "height": 755,
        "url": "https://m.media-amazon.com/images/M/MV5BOTk4YzcwZTItNDcyNS00M2MzLWJjODktNmQyYzkzYmEwNjIxXkEyXkFqcGc@._V1_.jpg",
        "caption": {
          "plainText": "Washington Black (2025)",
          "__typename": "Markdown"
        },
        "__typename": "Image"
      },
      "titleType": {
        "displayableProperty": {
          "value": {
            "plainText": "TV Mini Series",
            "__typename": "Markdown"
          },
          "__typename": "DisplayableTitleTypeProperty"
        },
        "text": "TV Mini Series",
        "id": "tvMiniSeries",
        "isSeries": true,
        "isEpisode": false,
        "categories": [
          {
            "value": "tv",
            "__typename": "TitleTypeCategory"
          }
        ],
        "canHaveEpisodes": true,
        "__typename": "TitleType"
      },
      "titleText": {
        "text": "Washington Black",
        "__typename": "TitleText"
      },
      "originalTitleText": {
        "text": "Washington Black",
        "__typename": "TitleText"
      },
      "releaseYear": {
        "year": 2025,
        "endYear": 2025,
        "__typename": "YearRange"
      },
      "releaseDate": {
        "day": 23,
        "month": 8,
        "year": 2025,
        "country": {
          "text": "Germany",
          "__typename": "LocalizedDisplayableCountry"
        },
        "__typename": "ReleaseDate"
      }
    },
    // additional fields...
  ]
}

## Authentication
To authenticate, you must obtain an API key from your rapid platform account settings page and pass it as a query parameter (api_key=YOUR_API_KEY) in every request
* Exemple : 
const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a71818debbmsh69542825bf5beaep17af9cjsndbe19ba83f25',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

## Error Handling
MoviesDatabase api returns HTTP status codes to denote request status. Common responses include:
- 401 Unauthorized – Missing or invalid API key
- 404 Not Found – Resource doesn’t exist (e.g., invalid movie_id)
- 429 Too Many Requests – Rate limit exceeded (see below)
- 500–599 Server Error – Internal server-side issue

Handling Strategy:
- Check the HTTP status code; for 401 or 404, correct your request or resource ID.
- For 429, implement retry logic with backoff timing.
- For server errors (5xx), retry after a delay; if persistent, log and alert or contact TMDb support.

## Usage Limits and Best Practices
- Rate Limiting: TMDb imposes a rate limit of approximately 40 requests per 10 seconds. 
- Best Practices:
  - Cache configuration data or retrieved movie details where possible to minimize redundant calls.
  - Use pagination (page, total_pages) for large result sets.
  - Leverage append_to_response parameter to combine multiple responses (e.g., details + credits) into one request when available. 
  - Respect rate limits by spacing out requests or queuing them.
  - Keep your API key secure (avoid client-side code sharing or exposing it in public repos).
  