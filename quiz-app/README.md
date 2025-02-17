# Quiz App 🧠🎯



A fun and interactive Quiz App built using **React** and **Material UI**, powered by the **Trivia API**. Users can test their knowledge by selecting a category, choosing a difficulty level, and answering 10 randomly generated questions.


## Features

- Select quiz category
- Choose difficulty level (Easy, Medium, Hard)
- Fetches questions from [Trivia API](https://the-trivia-api.com/)
- Displays score at the end of the quiz
- Responsive UI built with Material UI

## Tech Stack

- React.js
- Material UI
- Tailwinds CSS
- Trivia API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/SuyashM013/Quize-app
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open the app in your browser at `http://localhost:3000`
2. Select a category and difficulty level
3. Answer 10 quiz questions
4. View your score at the end of the quiz

## API Reference

- **Trivia API**: The app fetches quiz questions from [Trivia API](https://the-trivia-api.com/)
- **API**: The API i used -  ```
 https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple ```

## Contributing

Feel free to fork the repository and submit pull requests for improvements.


