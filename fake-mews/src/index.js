import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// TODO: Fix values with some actual content to play against.
// Check photos, lots aren't loading

var posts = [
  {title:"Cats Clean Better than Dogs", color:"#EEE", img:"imgs/cat-stock/ca64724af7b9b60f8e1cadf82bddc53c.jpg", values:{right:2, left:-1}},
  {title:"Cat Owners Agree, the Dogs can Go!", color:"#EEE", img:"imgs/cat-stock/cat-angry-unhappy-wild-55841.jpeg", values:{right:4, left:-2}},
  {title:"5 Times Kittens Cuter than Puppies", color:"#EEE", img:"imgs/cat-stock/cat-eyes-view-face-66292.jpeg", values:{right:2, left:-1}},
  {title:"Cat Tips to Get More Lap Time", color:"#EEE", img:"imgs/cat-stock/cat-striped-mackerel-tiger-160715.jpeg", values:{right:2, left:-1}},
  {title:"Dogs Decide Bones are just for Dogs", color:"#EEE", img:"imgs/cat-stock/pet-kitten-cat-lying.jpg", values:{right:-1, left:3}},
  {title:"10 Things to Keep Cats off Laps", color:"#EEE", img:"imgs/cat-stock/pexels-photo-24104.jpg", values:{right:-2, left:3}},
  {title:"Cats Strike Out Against Puppies", color:"#EEE", img:"imgs/dog-stock/animal-dog-pet-cute.jpg", values:{right:-2, left:-2}},
  {title:"5 Things Dogs do Better than Cats", color:"#EEE", img:"imgs/dog-stock/animal-dog-pet-dangerous.jpg", values:{right:-2, left:2}},
  {title:"Dogs Call for Massive Strike Against Cats", color:"#EEE", img:"imgs/dog-stock/animal-dog-pet-indoors.jpg", values:{right:-3, left:4}}
];

var endgame = {min:-45, max:55};

ReactDOM.render(
  <App posts={posts} endgame={endgame} />,
  document.getElementById('root')
);
