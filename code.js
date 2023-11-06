const jokes = ["I like a woman with a head on her shoulders. I hate necks.","If God had written the Bible, the first line should have been Its round.","Trumps nothing like Hitler. Theres no way he could write a book."
,"Life is like a box of chocolates. It doesnt last long if youre fat.", "Whyd the man get fired from the orange-juice factory? He couldnt concentrate.","Two whales are sitting at the bar. One turns to the other and goes,Aaaooooowhhhooo ooooooohhhoohh. And the other one goes, Man, you are drunk."];
const philosophy = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Be the change that you wish to see in the world.","Without music, life would be a mistake.","The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
"You talk when you cease to be at peace with your thoughts.","There is nothing either good or bad, but thinking makes it so.", "Never let your sense of morals prevent you from doing what is right.","Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric."
,"A woman has to live her life, or live to repent not having lived it."];
const inspiration = ["When you have a dream, you've got to grab it and never let go.", "Nothing is impossible. The word itself says 'I'm possible!", "Nothing is impossible. The word itself says 'I'm possible!","You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.","What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.","No matter what people tell you, words and ideas can change the world.",
"It is during our darkest moments that we must focus to see the light.","Believe you can and you're halfway there.","We must let go of the life we have planned, so as to accept the one that is waiting for us.","Nobody built like you, you design yourself.",
"When it comes to luck, you make your own."];

const jLength = jokes.length;
const pLength = philosophy.length;
const iLength = inspiration.length;

const selection = [jokes, philosophy, inspiration];
const aLength = selection.length;

let randomGenerator = () => {
    return Math.floor(Math.random()*aLength)

    }

let typeCheck = ()=> {
    let random = randomGenerator();
    let chosen = selection[random];
    return chosen
}

let randomSaying = () => {
    let type = typeCheck();
    let random = Math.floor(Math.random()*type.length);
    console.log(random);
    return type[random];
}

console.log(jLength);
console.log(pLength);
console.log(iLength);

let type = typeCheck();
console.log(type);
let r = randomSaying(type);
console.log(r);



