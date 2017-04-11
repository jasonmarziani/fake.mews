import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// TODO: Fix values with some actual content to play against.
// Check photos, lots aren't loading

var posts = [
  {title:"Some title for cats 1", color:"#EEE", img:"imgs/cat-stock/ca64724af7b9b60f8e1cadf82bddc53c.jpg", values:{right:2, left:-2}},
  {title:"Some title for cats 2", color:"#EEE", img:"imgs/cat-stock/cat-angry-unhappy-wild-55841.jpeg", values:{right:2, left:-2}},
  {title:"Some title for cats 3", color:"#EEE", img:"imgs/cat-stock/cat-eyes-view-face-66292.jpeg", values:{right:-3, left:2}},
  {title:"Some title for cats 4", color:"#EEE", img:"imgs/cat-stock/cat-striped-mackerel-tiger-160715.jpeg", values:{right:-2, left:1}},
  {title:"Some title for dogs 1", color:"#EEE", img:"imgs/cat-stock/pet-kitten-cat-lying.jpg", values:{right:-1, left:2}},
  {title:"Some title for dogs 2", color:"#EEE", img:"imgs/cat-stock/pexels-photo-24104.jpg", values:{right:3, left:-1}},
  {title:"Some title for dogs 3", color:"#EEE", img:"imgs/dog-stock/animal-dog-pet-cute.jpg", values:{right:2, left:-2}},
  {title:"Some title for dogs 4", color:"#EEE", img:"imgs/dog-stock/animal-dog-pet-dangerous.jpg", values:{right:3, left:-3}},
  {title:"Some title for dogs 5", color:"#EEE", img:"imgs/dog-stock/animal-dog-pet-indoors.jpg", values:{right:1, left:-1}}
];

var endgame = {min:-45, max:55};

ReactDOM.render(
  <App posts={posts} endgame={endgame} />,
  document.getElementById('root')
);
