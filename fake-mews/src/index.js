import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var posts = [
  "Some title for cats 1",
  "Some title for cats 2",
  "Some title for cats 3",
  "Some title for cats 4",
  "Some title for cats 5",
  "Some title for cats 6",
  "Some title for cats 7",
  "Some title for cats 8",
  "Some title for cats 9"
];

ReactDOM.render(
  <App posts={posts} />,
  document.getElementById('root')
);
