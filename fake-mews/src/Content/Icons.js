const CatIcons = [
  "http://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif",
  "https://media.giphy.com/media/hGz3TWDckwe5i/giphy.gif",
  "https://media.giphy.com/media/Y9Dvpbq29ffos/giphy.gif",
  "https://media.giphy.com/media/1bNDAuLzCzYqs/giphy.gif",
  "https://media.giphy.com/media/FUeRR8bg9f50k/giphy.gif",
  "https://media.giphy.com/media/KZGN8tU5OmFJC/giphy.gif",
  "https://media.giphy.com/media/mF67br5fugfHq/giphy.gif",
  "https://media.giphy.com/media/vSSdLSLbGIXio/giphy.gif",
  "https://media.giphy.com/media/Aab07O5PYOmQ/giphy.gif",
  "https://media.giphy.com/media/PUBxelwT57jsQ/giphy.gif"
];

const DogIcons = [
  "https://media.giphy.com/media/vHXikkJxLc29q/giphy.gif",
  "https://media.giphy.com/media/XUCkVk8oazCso/giphy.gif",
  "http://media.giphy.com/media/kgGZ3VXTEX33O/giphy.gif",
  "https://media.giphy.com/media/eJIZfUOlMnqLe/giphy.gif",
  "https://media.giphy.com/media/CjZ8BHuPu0cSY/giphy.gif",
  "https://media.giphy.com/media/zJO5kOG6tNL0Y/giphy.gif"
];

export default function Icons(){}
Icons.RandomCatIcon = function()
{
  var range = CatIcons.length;
  var index = Math.floor(Math.random()*range);
  return CatIcons[index];
}

Icons.RandomDogIcon = function()
{
  var range = DogIcons.length;
  var index = Math.floor(Math.random()*range);
  return DogIcons[index];
}
