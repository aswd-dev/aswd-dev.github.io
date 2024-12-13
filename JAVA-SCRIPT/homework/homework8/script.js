function tellStory(args){
    let [name, mood, activity] = args;
    return `This is ${name}. ${name} is a nice person. Today she is ${mood}. She is playing ${activity} all day.`;
}


console.log(tellStory(["Alice", "happy", "tennis"]));
