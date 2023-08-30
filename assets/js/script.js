// Wait for the DOM to finish loading before running the quiz.
document.addEventListener("DOMContentLoaded", function () {
    var answer = classSolution("barbarian");
    console.log(answer);
});

/**
 * This function holds all the quiz questions, linked by key:value pairs in a dictionary.
 * CHANGES TO MAKE - need to convert strings into template literals
 */

function questions(key) {
    const questionDict = {
        "start": "What's your preferred method for solving life's problems?",
        "bears": "How do you feel about bears?",
        "talk": "What happens when you talk?",
        "anger": "Are you angry?",
        "book": "What's your favourite book?",
        "suckers": "Are those people hapless suckers?",
        "hitting": "How do you like to hit things?",
        "attention": "Do you like being the centre of attention?",
        "religion": "How do you feel about religion?",
        "arrows": "Are your arrows poisoned?",
        "violence": "You sure about the talking rather than violence?",
    };

    return questionDict[key];
}

/**
 * This function stores the classDict dictionary, which holds the final answer to the quiz. 
 * When passed a key, it will return the description of the appropriate class.
 * CHANGES TO MAKE - need to convert strings into template literals
 */

function classSolution(key) {
    const classDict = {
        "barbarian": "You feel the fury of battle in your veins. In combat, your rage powers you through any encounter. You're also probably not smart enough to read this. You get really swole when you're angry. Basically, you're the Incredible Hulk",
        "paladin": "You are a knight of holy justice, smiting evildoers and upholding the law. You are also likely to be an insufferable goody-two-shoes. You can use most weapons and armour, and you also have some healing powers. You have a code of honour that you have to live by.",
        "fighter": "You are the most vanilla class imaginable. You fight stuff. That's what you're good at. It's a living, I guess. You can use just about any weapon or type of armour and you get a ton of extra feats. You can fight pretty good, is what I'm saying.",
        "ranger": "You like the woods, but not enough to go full druid. You can be either a master archer or a two-weapon fighter, and you have specific enemies that you're good at fighting. Later on, you can do some rubbish nature magic.",
        "rogue": "You're a sneaky, thieving scoundrel. You'd rather stab someone in the back than fight face-to-face, you big cheat. You can do extra damage with surprise attacks, and you're great at hiding and stealing stuff.",
        "bard": "You're an all-singing, all-dancing popinjay. People find you strangely charming. I've no idea why. You can fight a bit, cast spells a bit, sneak a bit, talk a lot, sing, dance, act... You're Bardic music can make your allies more powerful.",
        "sorceror": "Your magical ancestry means you lucked out in the genetic lottery. Your great-grandma was a dragon, and now you're a superhuman! You can cast magical spells, and your bloodline grants you additional special powers.",
        "wizard": "You studied for years to learn what sorcerors can just do with their innate charisma. Bitter much, Pointdexter? You can cast a wide range of spells, many of which may be augmented by your chosen school. You may have a familiar (a sort of magic pet).",
        "cleric": "You are a channel for your deity's power. Basically you're a Jehovah's Witness with magic. Your deity grants you the ability to cast spells, and you can control or destroy undead creatures. Despite your piety, you're also fairly handy in a fight.",
        "druid": "You're a tree-hugging hippy vegan. You probably smell of patchouli oil at best. You can cast magical spells with a nature theme, and get lots of bonuses in the wilds. Later on, you'll be able to turn into a bear, which will make veganism tricky.",
        "monk": "You are the consumate martial artist, at peace with themselves and the Universe. Think Bruce Lee, only more so. YOu can fight without weapons and get extra attacks when you do so. You're super agile and can dodge almost anything.",
    };

    return classDict[key];
};