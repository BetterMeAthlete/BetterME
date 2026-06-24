/* ============================================================
   HEARTWORK DAILY QUOTES ENGINE
   Coverage: Every weekday (Mon-Fri) from launch through Dec 31, 2026
   Speakers: Inky Johnson, Tony Robbins, Eric Thomas
   Quotes rotate without repeats across the full weekday range above;
   once the list is exhausted the engine safely wraps and repeats.
   ============================================================ */

const heartworkQuotesMatrix = [
    { text: "Character supersedes talent every day of the week.", author: "Inky Johnson" },
    { text: "Watch your thoughts, they become your words. Watch your words, they become your actions. Watch your actions, they produce your future.", author: "Inky Johnson" },
    { text: "Everybody goes to the same weight room, but everybody doesn't come out the same way.", author: "Inky Johnson" },
    { text: "Play the hand you're dealt like it's the one you've always wanted.", author: "Inky Johnson" },
    { text: "The biggest risk you take in life is not taking one.", author: "Inky Johnson" },
    { text: "You can't control the cards you're dealt, but you can control how you play the hand.", author: "Inky Johnson" },
    { text: "If you're gonna do it anyway, why not be great at it? Why not be the best at it?", author: "Inky Johnson" },
    { text: "Most have the will to win, few have the will to prepare to win.", author: "Inky Johnson" },
    { text: "Don't be upset by the results you didn't get with the work you didn't do.", author: "Inky Johnson" },
    { text: "The process is more important than the product.", author: "Inky Johnson" },
    { text: "Control what you can control today.", author: "Inky Johnson" },
    { text: "Never let a situation or circumstance define your life, no matter what it may be.", author: "Inky Johnson" },
    { text: "Be stronger than your strongest excuse.", author: "Inky Johnson" },
    { text: "See something. Believe in it, and go get it.", author: "Inky Johnson" },
    { text: "Allow the opposition to make you better.", author: "Inky Johnson" },
    { text: "Try to be better than the person you were yesterday.", author: "Inky Johnson" },
    { text: "Ease is a greater threat to progress than hardship.", author: "Inky Johnson" },
    { text: "Perspective drives performance every day of the week.", author: "Inky Johnson" },
    { text: "Commitment is staying true to what you said you would do long after the mood that you said it in has left.", author: "Inky Johnson" },
    { text: "People get upset not because of the adversity they face, but because their adversity reveals who they really are.", author: "Inky Johnson" },
    { text: "When you come out of the storm, you won't be the same person who walked in. That's what the storm is all about.", author: "Inky Johnson" },
    { text: "At some point you just have to let go of what you thought should have happened and live in what is happening.", author: "Inky Johnson" },
    { text: "No amount of money ever bought a second of time. Don't get so busy making a living that you forget to make a life.", author: "Inky Johnson" },
    { text: "It's not where you're trying to go in life that's the problem. It's what you are willing to leave behind in order to get there.", author: "Inky Johnson" },
    { text: "The same boiling water that softens the potato hardens the egg. It's about what you're made of, not the circumstance.", author: "Inky Johnson" },
    { text: "Character is not something we inherit. Character is something we have to wake up every single day and build.", author: "Inky Johnson" },
    { text: "We never know what life is protecting us from. Control what you can control today.", author: "Inky Johnson" },
    { text: "The most important project you can work on is molding yourself into the person you want to become.", author: "Inky Johnson" },
    { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Inky Johnson" },
    { text: "Your expectations should never be higher than your work ethic.", author: "Inky Johnson" },
    { text: "Sometimes, you have to get knocked down lower than you have ever been to stand back up taller than you ever were.", author: "Inky Johnson" },
    { text: "Stop worrying how it's going to happen and start trusting that it will.", author: "Inky Johnson" },
    { text: "More of us would learn from our mistakes if we weren't so busy denying them.", author: "Inky Johnson" },
    { text: "The longer it takes to happen, the more you'll appreciate it when it finally does.", author: "Inky Johnson" },
    { text: "Will you stay true to what you said you were going to do?", author: "Inky Johnson" },
    { text: "Your life is your message to the world. Make sure it's inspiring.", author: "Inky Johnson" },
    { text: "Every interaction is a chance to lead. Every day is a chance to make a positive impact.", author: "Inky Johnson" },
    { text: "The ability to learn is a gift, even when pain is your teacher.", author: "Inky Johnson" },
    { text: "Leadership is not just about being in charge. It's about taking care of those in your charge.", author: "Inky Johnson" },
    { text: "I will never let a circumstance or a situation define my life.", author: "Inky Johnson" },
    { text: "Don't allow your talent to take you where your character can't sustain you.", author: "Inky Johnson" },
    { text: "Your current situation is not your final destination.", author: "Inky Johnson" },
    { text: "Every setback has a major comeback.", author: "Inky Johnson" },
    { text: "Success is not the absence of failure; it's the persistence through failure.", author: "Inky Johnson" },
    { text: "Make your pain your fuel, and let it propel you to greatness.", author: "Inky Johnson" },
    { text: "Be careful not to try and fast forward yourself into a future you haven't earned. Blessings on the journey.", author: "Inky Johnson" },
    { text: "People don't burn out because of what they do. People burn out because life makes them forget why they do it.", author: "Inky Johnson" },
    { text: "We have to learn to be comfortable being uncomfortable. Pull the strip off and activate your greatness.", author: "Inky Johnson" },

    { text: "All growth starts at the end of your comfort zone.", author: "Tony Robbins" },
    { text: "Don't surround yourself with people who just affirm you. Surround yourself with people who challenge you.", author: "Tony Robbins" },
    { text: "Change happens when the pain of staying the same is greater than the pain of change.", author: "Tony Robbins" },
    { text: "Without gratitude and appreciation for what you already have, you'll never know true fulfillment.", author: "Tony Robbins" },
    { text: "By changing nothing, nothing changes.", author: "Tony Robbins" },
    { text: "The only thing keeping you from what you want is your story about why you can't have it.", author: "Tony Robbins" },
    { text: "Who you spend time with is who you become.", author: "Tony Robbins" },
    { text: "Stay committed to your decisions, but stay flexible in your approach.", author: "Tony Robbins" },
    { text: "Focus on where you want to go, not on what you fear.", author: "Tony Robbins" },
    { text: "It's not about the goal. It's about growing to become the person that can accomplish that goal.", author: "Tony Robbins" },
    { text: "If you talk about it, it's a dream. If you envision it, it's possible. But if you schedule it, it's real.", author: "Tony Robbins" },
    { text: "Our beliefs about what we are and what we can be precisely determine what we can be.", author: "Tony Robbins" },
    { text: "It's not what we do once in a while that shapes our lives. It's what we do consistently.", author: "Tony Robbins" },
    { text: "People are not lazy. They simply have impotent goals, goals that do not inspire them.", author: "Tony Robbins" },
    { text: "Success in life is the result of good judgment. Good judgment is usually the result of experience. Experience is usually the result of bad judgment.", author: "Tony Robbins" },
    { text: "Why live an ordinary life, when you can live an extraordinary one.", author: "Tony Robbins" },
    { text: "You become what you do most of the time.", author: "Tony Robbins" },
    { text: "It's been said that there are only two pains in life: the pain of discipline or the pain of regret. Discipline weighs ounces while regret weighs tons.", author: "Tony Robbins" },
    { text: "The best opportunities come in times of maximum pessimism.", author: "Tony Robbins" },
    { text: "Don't drive into the past using your rear-view mirror as a guide. Learn from your past, don't live in it.", author: "Tony Robbins" },
    { text: "How you feel is not the result of what is happening in your life. It is your interpretation of what is happening.", author: "Tony Robbins" },
    { text: "The only limit to your impact is your imagination and commitment.", author: "Tony Robbins" },
    { text: "The path to success is to take massive, determined action.", author: "Tony Robbins" },
    { text: "There is no such thing as failure. There are only results.", author: "Tony Robbins" },
    { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
    { text: "It is in your moments of decision that your destiny is shaped.", author: "Tony Robbins" },
    { text: "If you do what you've always done, you'll get what you've always gotten.", author: "Tony Robbins" },
    { text: "Only those who have learned the power of sincere and selfless contribution experience life's deepest joy: true fulfillment.", author: "Tony Robbins" },
    { text: "Whatever happens, take responsibility.", author: "Tony Robbins" },
    { text: "It is not what we get, but who we become, what we contribute, that gives meaning to our lives.", author: "Tony Robbins" },
    { text: "We can change our lives. We can do, have, and be exactly what we wish.", author: "Tony Robbins" },
    { text: "There's always a way, if you're committed.", author: "Tony Robbins" },
    { text: "Successful people ask better questions, and as a result, they get better answers.", author: "Tony Robbins" },
    { text: "It's not the events of our lives that shape us, but our beliefs as to what those events mean.", author: "Tony Robbins" },
    { text: "What we can or cannot do, what we consider possible or impossible, is rarely a function of our true capability. It is more likely a function of our beliefs about who we are.", author: "Tony Robbins" },
    { text: "Personal power is the ability to take action.", author: "Tony Robbins" },
    { text: "Your biography is not your destiny, your decisions are.", author: "Tony Robbins" },
    { text: "Most people overestimate what they can accomplish in a year and underestimate what they can achieve in a decade.", author: "Tony Robbins" },
    { text: "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying.", author: "Tony Robbins" },
    { text: "Don't limit your challenges; challenge your limits. Each day we must strive for constant and never ending improvement.", author: "Tony Robbins" },
    { text: "Knowledge is not power. Knowledge is only potential power. Action is power.", author: "Tony Robbins" },
    { text: "People are rewarded in public for what they practice for years in private.", author: "Tony Robbins" },
    { text: "If you want to change your life you have to raise your standards.", author: "Tony Robbins" },
    { text: "Stop being afraid of what could go wrong, and start being excited of what could go right.", author: "Tony Robbins" },
    { text: "Success is doing what you want to do, when you want, where you want, with whom you want, as much as you want.", author: "Tony Robbins" },
    { text: "All personal breakthroughs begin with a change in beliefs.", author: "Tony Robbins" },
    { text: "Commit to constant and never-ending improvement.", author: "Tony Robbins" },
    { text: "I can tell you the secret to happiness in one word: progress.", author: "Tony Robbins" },
    { text: "Having goals is the fundamental key to success. Setting goals helps us grow and expand, pushing ourselves to transform in ways we never imagined.", author: "Tony Robbins" },

    { text: "When you want to succeed as bad as you want to breathe, then you'll be successful.", author: "Eric Thomas" },
    { text: "Once you realize who you are, you stop operating in desperation.", author: "Eric Thomas" },
    { text: "Unless you're number one in your industry, you shouldn't be chilling.", author: "Eric Thomas" },
    { text: "You will not outwork me, because your height has nothing to do with my work ethic.", author: "Eric Thomas" },
    { text: "If you can't measure it, it ain't real.", author: "Eric Thomas" },
    { text: "You've been through so much. You gonna quit now?", author: "Eric Thomas" },
    { text: "The breakthrough, that last 10%, is all mental toughness, and it's the hardest part.", author: "Eric Thomas" },
    { text: "You don't get here by quitting when you're tired. You get here by quitting when you're finished.", author: "Eric Thomas" },
    { text: "Why are you here on Earth for this particular time? What are you doing here?", author: "Eric Thomas" },
    { text: "The day you stop getting better is the day you die.", author: "Eric Thomas" },
    { text: "When the sun comes up, if you're a gazelle or a lion, you better get to running.", author: "Eric Thomas" },
    { text: "Don't cry to give up. Cry to keep going.", author: "Eric Thomas" },
    { text: "When adversity happens, most people are going to quit. Only the person who can go through adversity wins.", author: "Eric Thomas" },
    { text: "All men are created equal. Some work harder in pre-season.", author: "Eric Thomas" },
    { text: "It's not about where you come from. It's about heart.", author: "Eric Thomas" },
    { text: "The most important thing is to be able at any moment to sacrifice what you are, for what you will become.", author: "Eric Thomas" },
    { text: "A real man in the dark, when nobody's watching, he's putting in work.", author: "Eric Thomas" },
    { text: "Whatever it takes, you got to be willing to do it. Stop saying you're not there because of something else. It's easier to blame somebody else.", author: "Eric Thomas" },
    { text: "Stop being average.", author: "Eric Thomas" },
    { text: "Don't make a habit out of choosing what feels good over what's actually good for you.", author: "Eric Thomas" },
    { text: "Success is not for the weak and uncommitted. Sometimes it's gonna hurt.", author: "Eric Thomas" },
    { text: "We all have the ability to produce greatness in our lives.", author: "Eric Thomas" },
    { text: "You wanna shine like a diamond, you gotta get cut like a diamond.", author: "Eric Thomas" },
    { text: "You already in pain, you already hurt. Get a reward from it.", author: "Eric Thomas" },
    { text: "What you envision in your mind, how you see yourself, and how you envision the world around you is of great importance, because those things become your focus.", author: "Eric Thomas" },
    { text: "Only those who risk going too far can possibly find out how far one can go.", author: "Eric Thomas" },
    { text: "Sometimes it ain't about being the most talented or the smartest, or even working the hardest. Sometimes it's about consistency.", author: "Eric Thomas" },
    { text: "You saying you want to be great, but on the other hand you comfortable with average.", author: "Eric Thomas" },
    { text: "Your feelings ain't going to get you anywhere. Live by principles.", author: "Eric Thomas" },
    { text: "You don't have a balance problem, you have a priority problem.", author: "Eric Thomas" },
    { text: "Know how much each person in your life needs, and measure and prioritize it.", author: "Eric Thomas" },
    { text: "Pain is temporary. It may last a minute, an hour, a day, or even a year. But eventually it will subside. If I quit, however, it will last forever.", author: "Eric Thomas" },
    { text: "Don't think about what can happen in a month or a year. Just focus on the 24 hours in front of you and do what you can to get closer to where you want to be.", author: "Eric Thomas" },
    { text: "You can get through this. You are bigger than your pain. Don't give up, don't give in.", author: "Eric Thomas" },
    { text: "I wanted to surround myself with people who could help me turn my life around, people I could rub up against like iron and be sharpened.", author: "Eric Thomas" },
    { text: "Desire and imagination have the potential to position a person for greatness.", author: "Eric Thomas" },
    { text: "I dare you to be great. I challenge you to be great in every single thing you do.", author: "Eric Thomas" },
    { text: "I don't ever want you to settle for another average day in your life again.", author: "Eric Thomas" },
    { text: "God has a purpose for your pain, a reason for your struggles, and a reward for your faithfulness. Don't give up.", author: "Eric Thomas" },
    { text: "An eagle uses the storm to reach unimaginable heights.", author: "Eric Thomas" },
    { text: "You can't cheat the grind. It knows how much you've invested. It won't give you anything you haven't worked for.", author: "Eric Thomas" },
    { text: "The only way to get out of mediocrity is to keep shooting for excellence.", author: "Eric Thomas" },
    { text: "Information changes situations.", author: "Eric Thomas" },
    { text: "I'm not the smartest, but you will not outwork me. I wake up every morning at 3 o'clock.", author: "Eric Thomas" },
    { text: "I'm exactly where I wanted to be, because I realized I gotta commit my very being to this thing.", author: "Eric Thomas" },
    { text: "You got an opportunity to make a dream become a reality, and when you do, you just got to take advantage of it.", author: "Eric Thomas" },
    { text: "When you're willing to accept that you're the problem, you immediately become the solution.", author: "Eric Thomas" },
    { text: "Your success is not dependent upon a board of advisors. Nobody owes you anything. That was the biggest lesson for me.", author: "Eric Thomas" },
    { text: "When you do what you're supposed to do, each door opens up maybe ten to fifteen other doors.", author: "Eric Thomas" },
    { text: "Most of you say you want to be successful, but you don't want it bad. You just kinda want it.", author: "Eric Thomas" }
];

/* ===== DATE-MAPPED, NON-REPEATING WEEKDAY ENGINE =====
   Maps each weekday (Mon-Fri) starting from REFERENCE_START_DATE
   to a unique quote index. Weekends simply don't get a "new" quote
   assigned (site can show the most recent weekday's quote, or
   nothing changes until Monday). Once the list runs out it wraps
   safely rather than erroring. */

const REFERENCE_START_DATE = new Date(2026, 5, 18); // June 18, 2026 — adjust if redeploying

function getWeekdayIndexSince(refDate, targetDate) {
    let count = 0;
    let cursor = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate());
    const target = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());

    if (target < cursor) return 0;

    while (cursor < target) {
        const day = cursor.getDay();
        if (day !== 0 && day !== 6) count++;
        cursor.setDate(cursor.getDate() + 1);
    }
    return count;
}

function getTodaysQuote() {
    const today = new Date();
    const day = today.getDay();

    // If it's a weekend, fall back to Friday's quote so the strip isn't blank.
    let effectiveDate = new Date(today);
    if (day === 0) effectiveDate.setDate(effectiveDate.getDate() - 2); // Sunday -> Friday
    if (day === 6) effectiveDate.setDate(effectiveDate.getDate() - 1); // Saturday -> Friday

    const weekdayIndex = getWeekdayIndexSince(REFERENCE_START_DATE, effectiveDate);
    const safeIndex = weekdayIndex % heartworkQuotesMatrix.length;
    return heartworkQuotesMatrix[safeIndex];
}
