// Wait for the DOM to finish loading before running the quiz.
document.addEventListener("DOMContentLoaded", () => {
    generateQuestion("start");
});

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener("click", () => {
    generateQuestion("start");
});

function startScreen() {

}

function clearScreens(screen) {
    const allScreens = document.getElementsByTagName('section');
    const currentScreen = document.getElementById(screen);

    for (const screens of allScreens) {
        console.log(screens);
        if (screens.id != screen) {
            console.log('Not a current screen.');
            screens.style.display = "none";
        } else {
            currentScreen.style.display = "flex";
            currentScreen.style.flexDirection = "column";
        }
    }
}

/**
 * This function holds all the quiz questions, linked by key:value pairs in the questionDict object.
 * The function then checks if the key is in the object and if so replaces the text content of the question box with that of the key value,
 * and then runs the generateAnswers function.
 * If the key is not in the questionDict object, the quiz has reached a conclusion and the classSolution function is called.
 * CHANGES TO MAKE - need to convert strings into template literals
 */


function generateQuestion(key) {
    clearScreens('game-screen');

    let questionBox = document.getElementById('question-box');

    const questionDict = {
        "start": "What's your preferred method for solving life's problems?",
        "bears": "How do you feel about bears?",
        "talk": "What happens when you talk?",
        "anger": "Are you angry?",
        "book": "What's your favourite book?",
        "cthulu": "What do you think when you hear the phrase 'Cthulu fhtaqn!'?",
        "suckers": "Are those people hapless suckers?",
        "hitting": "How do you like to hit things?",
        "attention": "Do you like being the centre of attention?",
        "religion": "How do you feel about religion?",
        "arrows": "Are your arrows poisoned?",
        "violence": "You sure about the talking rather than violence?",
    };

    questionBox.textContent = questionDict[key];
    generateAnswers(key);

}

/**
 * This function holds an embedded data structure that links all the questions with their appropriate answers, and also
 * provides the key for the following question.
 * The function iterates through the array value associated with the key and populates the button text with the appropriate answer text.
 * The function then adds an event listener to the buttons in order to call the generateQuestion function for the follow up question.
 * CHANGES TO MAKE - need to convert strings into template literals
 */

function generateAnswers(key) {
    let answerButtons = document.getElementsByClassName('answer-btn');

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = "";
        answerButtons[i].style.display = "inline-block";
    }

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
            ["Reading? Pah! Who has time for that?", "cthulu"],
            ["Chuzzleworth's Compleat Cyclopedia of Magick, in 13 volumes.", "wizard"],
            ["The Gospel According to Saint Philbious", "cleric"],
        ],
        "cthulu": [
            ["Grandad's got a cold", "sorceror"],
            ["What is thy bidding, master?", "warlock"],
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

    let choices = answerDict[key];

    for (let i = 0; i < choices.length; i++) {
        answerButtons[i].textContent = choices[i][0];
        answerButtons[i].id = choices[i][1];
    }

    for (const button of answerButtons) {
        if (button.textContent === "") {
            button.style.display = "none";
        } else {
            button.addEventListener('click', goNext);
        }
    }
}

/**
 * This function will check whether a clicked button has an id that is a key to generate further questions, if so
 * it will call the generateQuestion function and if not it will call the classSolution function to provide the user with
 * the final screen.
 */

function goNext() {
    const keyArray = ["start", "bears", "talk", "anger", "book", "cthulu", "suckers", "hitting", "attention", "religion", "arrows", "violence"];

    if (keyArray.includes(this.id)) {
        generateQuestion(this.id);
    } else {
        classSolution(this.id);
    }
}

/**
 * This function stores the classDict dictionary, which holds the final answer to the quiz. 
 * When passed a key, it will return the description of the appropriate class.
 * CHANGES TO MAKE - need to convert strings into template literals
 */

function classSolution(key) {
    clearScreens('class-screen');

    const classDict = {
        "barbarian": `<h2>You are a Barbarian!</h2>
        <p>You feel the fury of battle in your veins!</p>
        <p>In combat, your rage powers you through any encounter, although you're probably not smart enough to read this.</p>
        <p>You get really swole when you're angry. Basically, you're the Incredible Hulk</p>`,
        "paladin": `<h2>You are a Paladin!</h2>
        <p>You are a knight of holy justice, smiting evildoers and upholding the law. You are also likely to be an insufferable goody-two-shoes.</p>
        <p>You can use most weapons and armour, and you also have some healing powers. You have a code of honour that you have to live by.</p>`,
        "fighter": `<h2>You are a Fighter!</h2>
        <p>You are the most vanilla class imaginable.</p>
        <p>You fight stuff. That's what you're good at. It's a living, I guess.</p>
        <p>You can use just about any weapon or type of armour and you get a ton of extra feats. You can fight pretty good, is what I'm saying.</p>`,
        "ranger": `<h2>You are a Ranger!</h2>
        <p>You like the woods, but not enough to go full druid.</p>
        <p>You can be either a master archer or a two-weapon fighter, and you have specific enemies that you're good at fighting. Later on, you can do some rubbish nature magic.</p>`,
        "rogue": `<h2>You are a Rogue!</h2>
        <p>You're a sneaky, thieving scoundrel. You'd rather stab someone in the back than fight face-to-face, you big cheat.</p>
        <p>You can do extra damage with surprise attacks, and you're great at hiding and stealing stuff.</p>`,
        "bard": `<h2>You are a Bard!</h2>
        <p>You're an all-singing, all-dancing dandy!</p>
        <p>People find you strangely charming. I've no idea why...</p>
        <p>You can fight a bit, cast spells a bit, sneak a bit, talk a lot, sing, dance, act... Your Bardic music can make your allies more powerful.</p>`,
        "sorceror": `<h2>You are a Sorceror!</h2>
        <p>Your magical ancestry means you lucked out in the genetic lottery. Your great-grandma was a dragon, and now you're a superhuman!</p>
        <p>You can cast magical spells, and your bloodline grants you additional special powers.</p>`,
        "warlock": `<h2>You are a Warlock!</h2>
        <p>You entered into an ungodly pack with some otherwordly being, just so you could do magic?</p>
        <p>Didn't think that through, did you?</p>
        <p>You can cast magical spells, and your pact with your patron gives you other special abilities.</p>`,
        "wizard": `<h2>You are a Wizard!</h2>
        <p>You studied for years to learn what sorcerors can just do with their innate charisma. Bitter much, Pointdexter?</p>
        <p>You can cast a wide range of spells, many of which may be augmented by your chosen school. You may have a familiar (a sort of magic pet).</p>`,
        "cleric": `<h2>You are a Cleric!</h2>
        <p>You are a channel for your deity's power. Basically, you're a Jehovah's Witness with magic.</p>
        <p>Your deity grants you the ability to cast spells, and you can control or destroy undead creatures.</p>
        <p>Despite your piety, you're also fairly handy in a fight.</p>`,
        "druid": `<h2>You are a Druid!</h2>
        <p>You're a tree-hugging hippy vegan. You probably smell of patchouli oil at best.</p>
        <p>You can cast magical spells with a nature theme, and get lots of bonuses in the wilds. Later on, you'll be able to turn into a bear, which will make veganism tricky.</p>`,
        "monk": `<h2>You are a Monk!</h2>
        <p>You are the consumate martial artist, at peace with themselves and the Universe. Think Bruce Lee, only more so.</p>
        <p>You can fight without weapons and get extra attacks when you do so. You're super agile and can dodge almost anything.</p>`,
    };

    const revealBox = document.getElementById('reveal-box');

    revealBox.innerHTML = classDict[key];
};