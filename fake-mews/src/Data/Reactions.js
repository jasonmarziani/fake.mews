

const PositiveReactions = ["OMG!",
                          "Wowzers!",
                          "LOL",
                          "Love it!",
                          "Moar plz",
                          "Please share.",
                          "100 100 100",
                          "Bout time.",
                          "Yeah!",
                          "Soo good",
                          "Lol",
                          "Finally",
                          "Lovefest!",
                          "Word",
                          "kewl",
                          "So glad for this",
                          "Thanks for sharing",
                          "😂😂😂😂😂😂",
                          "😍😍😍😍😍😍😍😍",
                          "😂😂😂😂",
                          "😜😜😜😜",
                          "😜",
                          "😘😘😘😘😘😘😘",
                          "😝😝😝😝😝😝",
                          "😎😎😎😎😎",
                          "😭😭😭",
                          "😴😴",
                          "😺😺😺😺😺😺",
                          "😹😹😹",
                          "😻😺😻😺",
                          "😹😹",
                          "👏👏👏👏👏👏👏👏👏",
                          "🐶🐶",
                          "🐕🐕🐕",
                          "🐩🐩🐩"];



const NegativeReactions = ["OMG!",
                          "Not even",
                          "I can't",
                          "This isn't real, is it?",
                          "I'm dead I died",
                          "No no no.",
                          "We need to stop this.",
                          "Nooooooo",
                          "Oh no no",
                          "Stop, donz even",
                          "I canzt",
                          "If this is true, not good.",
                          "Yarg",
                          "Helllz no",
                          "Realz?",
                          "Plz don't share again",
                          "Plz stop",
                          "Srsly?",
                          "Noe.",
                          "Nope.",
                          "😞😞😞😞😞😞😞😞😞😞",
                          "😤😤😤😤😯",
                          "😖😖😖",
                          "😩😩",
                          "😕",
                          "🙁🙁🙁😞",
                          "😱😱😱😱😱😱😱😱😱😱",
                          "😥😥😥😥😥😥",
                          "😬😬😬",
                          "🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀",
                          "😿😿😿😿😿😿😿😿",
                          "😾😾😾😾😾"];

  export default function Reactions(){}
  Reactions.Random = function(sentiment) // true=positive, false=negative
  {
    if(sentiment) return Reactions.RandomPositive();
    return Reactions.RandomNegative();
  }

  Reactions.RandomPositive = function()
  {
    var range = PositiveReactions.length;
    var index = Math.floor(Math.random()*range);
    return PositiveReactions[index];
  }

  Reactions.RandomNegative = function()
  {
    var range = NegativeReactions.length;
    var index = Math.floor(Math.random()*range);
    return NegativeReactions[index];
  }
