// Wait for the DOM to finish loading before running the quiz.
document.addEventListener("DOMContentLoaded", function () {
    var question = questions("start");
    var answer = answers("arrows");
    var solution = classSolution("barbarian");
    console.log(question);
    console.log(answer[0][0]);
    console.log(answer[0][1]);
    console.log(solution);
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
 * This function holds an embedded data structure that links all the questions with their appropriate answers, and also
 * provides the key for the following question.
 * CHANGES TO MAKE - need to conver strings into template literals
 */

function answers(key) {
    const answerDict = {
        "start": [
            ["Violence!", "bears"],
            ["Talking", "talk"],
        ],
        "bears": [
            ["I could take a bear in a fight...", "anger"],
            ["Good source of raw materials and meat. Don't eat the liver though, it's poisonous.", "ranger"],
            ["I love bears; many of my closest friends are bears. You'd better not mess with my bear friends!", "druid"],
        ],
        "talk": [
            ["Mainly explosions and other weird stuff.", "book"],
            ["People assume I'm lying.", "attention"],
            ["People listen and believe what I say.", "suckers"],
        ],
        "anger": [
            ["I'LL KILL ALL OF YOU!", "barbarian"],
            ["I feel the fury of the righteous!", "paladin"],
            ["Not especially...", "hitting"],
        ],
        "book": [
            ["My autobiography, Marvelous Me. Have you read it?", "bard"],
            ["Reading? Pah! Who has time for that?", "sorceror"],
            ["Chuzzleworth's Compleat Cyclopedia of Magick, in 13 volumes.", "wizard"],
            ["The Gospel According to Saint Philbious", "cleric"],
        ],
        "suckers": [
            ["Hah! Yeah, totally.", "attention"],
            ["No, they believe me because I'm telling the truth. Why do you ask?", "religion"],
        ],
        "hitting": [
            ["Anything pointy or stabby works for me.", "fighter"],
            ["My soul is my weapon. Also my fists, those too.", "monk"],
            ["From a safe distance", "arrows"],
        ],
        "attention": [
            ["No, I prefer to stick to the shadows so they don't see me coming.", "arrows"],
            ["Darling, when you're this fabulous it would be a crime to deny people your presence!", "bard"],
        ],
        "religion": [
            ["Can you spare a minute to talk about Chuzbolg the Swamp God?", "violence"],
            ["I don't do, like, a religion as such, more a sort of general connection with Nature, man...", "druid"],
            ["All paths lead to the same mountain. Also, check out the moon. Oooh, mystical...", "monk"],
        ],
        "arrows": [
            ["What? No! I'm not a monster!", "ranger"],
            ["Of course they are, why wouldn't they be?", "rogue"],
        ],
        "violence": [
            ["Actually, I'd like to reconsider... some violence might be good.", "paladin"],
            ["Chuzbolg is all about dialogue!", "cleric"],
        ],
    };

    return answerDict[key];
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