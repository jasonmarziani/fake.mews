const CatImages = [
  "imgs/cat-stock/ca64724af7b9b60f8e1cadf82bddc53c.jpg",
  "imgs/cat-stock/cat-angry-unhappy-wild-55841.jpeg",
  "imgs/cat-stock/cat-eyes-view-face-66292.jpeg",
  "imgs/cat-stock/cat-striped-mackerel-tiger-160715.jpeg",
  "imgs/cat-stock/pet-kitten-cat-lying.jpg",
  "imgs/cat-stock/pexels-photo-24104.jpg",
  "imgs/cat-stock/pexels-photo-57678.jpeg",
  "imgs/cat-stock/pexels-photo-60224.jpeg",
  "imgs/cat-stock/pexels-photo-110243.jpeg",
  "imgs/cat-stock/pexels-photo-203333.jpeg",
  "imgs/cat-stock/pexels-photo-205975.jpeg",
  "imgs/cat-stock/pexels-photo-233220.jpeg",
  "imgs/cat-stock/pexels-photo.jpg"
];

const DogImages = [
  "imgs/dog-stock/animal-dog-pet-cute.jpg",
  "imgs/dog-stock/animal-dog-pet-dangerous.jpg",
  "imgs/dog-stock/animal-dog-pet-indoors.jpg",
  "imgs/dog-stock/chihuahua-dog-puppy-cute-39317.jpeg",
  "imgs/dog-stock/night-animal-dog-pet.jpg",
  "imgs/dog-stock/pexels-photo (1).jpg",
  "imgs/dog-stock/pexels-photo-101634.jpeg",
  "imgs/dog-stock/pexels-photo-129634.jpeg",
  "imgs/dog-stock/pexels-photo-164543.jpeg",
  "imgs/dog-stock/pexels-photo.jpg",
  "imgs/dog-stock/puppy-buddy-look-50mm-85363.jpeg",
  "imgs/dog-stock/wildlife-photography-pet-photography-dog-animal-159541.jpeg"
];

export default function PostImages(){}
PostImages.RandomCatImage = function()
{
  var range = CatImages.length;
  var index = Math.floor(Math.random()*range);
  return CatImages[index];
}

PostImages.RandomDogImage = function()
{
  var range = DogImages.length;
  var index = Math.floor(Math.random()*range);
  return DogImages[index];
}
