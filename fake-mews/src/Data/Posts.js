import Icons from "./Icons"
import PostImages from "./PostImages"

const PostArray = [
  {title:"Cats Clean Better than Dogs", values:{right:2, left:-1}},
  {title:"Cat Owners Agree, the Dogs can Go!", values:{right:2, left:-2}},
  {title:"5 Times Kittens Cuter than Puppies", values:{right:1, left:-2}},
  {title:"Cat Tips to Get More Lap Time", values:{right:2, left:-1}},
  {title:"Dogs Decide Bones are just for Dogs", values:{right:-1, left:2}},
  {title:"10 Things to Keep Cats off Laps", values:{right:-2, left:1}},
  {title:"Cats Strike Out Against Puppies", values:{right:1, left:-2}},
  {title:"5 Things Dogs do Better than Cats", values:{right:-1, left:2}},
  {title:"Dogs Call for Massive Strike Against Cats", values:{right:-3, left:2}},
  //
  {title:"10 Ways Cats Outsmart Dogs Every Time", values:{right:2, left:-1}},
  {title:"5 Key Steps to Lap Time, Dog says", values:{right:-1, left:2}},
  {title:"The Best Laps for Cats", values:{right:2, left:-1}},
  {title:"10 Ways Dogs Soften that Lap.", values:{right:-1, left:2}},
  {title:"No More Laps for Cats, says Dogs", values:{right:-1, left:2}},
  {title:"Lap Time exclusively for Cats", values:{right:2, left:-1}},
  {title:"Dogs Demand More Lap Time.", values:{right:-2, left:3}},
  {title:"Cats' War Over Lap Time Rages On.", values:{right:2, left:-3}},
  {title:"The War on Lap time, a Dog's perspective.", values:{right:-2, left:3}},
  {title:"Dogs Declared Winner in Lap War", values:{right:-3, left:2}},
  {title:"Lap War Over, Cats Declare Victory.", values:{right:3, left:-2}},
  {title:"Cats Unwilling to Surrender in Lap War", values:{right:3, left:-2}},
  //
  {title:"5 Tasty Treats Cats Beg for this Summer", values:{right:2, left:-1}},
  {title:"New Ingredients Appear in Cat Food", values:{right:1, left:-2}},
  {title:"Cat Food Superior to Dog Chow, says Cat", values:{right:2, left:-1}},
  {title:"When it Comes to Dinner, Dog Diners Want More", values:{right:-1, left:2}},
  {title:"9 Tricks to Dog Treats", values:{right:-1, left:2}},
  {title:"Cats Want More Treats, Says Study", values:{right:2, left:-1}},
  {title:"Dogs Demand Equal Treats for Equal Tricks", values:{right:-1, left:2}},
  {title:"Dogs Declare Strike! No Treats, No Tricks!", values:{right:-3, left:2}},
  {title:"Dog Strike Reaches Day 5", values:{right:-1, left:2}},
  {title:"Analysts Warn, Cat Treat Supply in Peril", values:{right:-2, left:1}},
  {title:"Dog Treat Shortage Looms!", values:{right:2, left:-3}},
  {title:"Cat Treat Shortage Slams Supply", values:{right:-3, left:2}},
  {title:"Dog Treat Shortage, Day 8", values:{right:1, left:-2}},
  {title:"New Regulations Help Relieve Cat Treat Shortage", values:{right:2, left:-1}},
  {title:"Cats declared winner in treat shortage aftermath", values:{right:3, left:-2}},
  {title:"Treat shortage over, Dogs rejoice!", values:{right:-2, left:2}},
  {title:"Treat shortage ends, Cats the winner?", values:{right:2, left:-1}},
  //
  {title:"5 Steps to a Better Litterbox", values:{right:2, left:-1}},
  {title:"Litterbox 101, Go Early or Go Elsewhere", values:{right:2, left:-1}},
  {title:"Cat Caught in the Litterbox, the Shocking Details", values:{right:-1, left:2}},
  {title:"5 Cats Caught in Litterbox, #3 will Shock You", values:{right:-1, left:2}},
  {title:"Litterbox Scandal, Cat Finds Dog Tasting Toots?", values:{right:2, left:-1}},
  {title:"Walks, are They What they Seem?", values:{right:2, left:-1}},
  {title:"Walking in the Rain Bad for Health?", values:{right:-1, left:2}},
  {title:"Lost Dog Finds Home Jumping from Car.", values:{right:-1, left:2}}
];

export default function Posts(){}

Posts.Init = function()
{
  PostArray.map((post) => {
    post.context = (post.values.right > 0)? "cat" : "dog";
    post.img = (post.values.right > 0)? PostImages.RandomCatImage() : PostImages.RandomDogImage();
    post.icon = (post.values.right > 0)? Icons.RandomCatIcon() : Icons.RandomDogIcon();
    post.color = randomHex();
  })
}

Posts.Get = function()
{
  var range = PostArray.length;
  var index = Math.floor(Math.random()*range);
  return PostArray[index];
}

Posts.GetAtIndex = function(index)
{
  return PostArray[index];
}

Posts.ShuffledPosts = function()
{
  var options = [...PostArray];
  shuffle(options);
  return options;
}

const randomHex = function(){
  return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

const shuffle = function(a){
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
