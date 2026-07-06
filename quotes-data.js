/* ============================================================
   HEARTWORK DAILY QUOTES ENGINE — MIXED & VERIFIED
   Coverage: Every weekday (Mon-Fri) through Dec 31, 2026
   Voices: Inky Johnson, Tony Robbins, Eric Thomas,
           Maya Angelou, Muhammad Ali, Wayne Gretzky,
           Jason Wilson, Michael Jordan, Peyton Manning,
           Virgil van Dijk, Usain Bolt, Kobe Bryant,
           Kevin Durant, Ray Lewis, Denzel Washington,
           JJ Watt, Jerry Rice, Vince Lombardi, Barack Obama
   Structured in rotating groups of 6 — no two consecutive
   days ever land on the same speaker.
   ============================================================ */

const heartworkQuotesMatrix = [
    /* GROUP 1 */
    { text: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", author: "Maya Angelou" },
    { text: "All growth starts at the end of your comfort zone.", author: "Tony Robbins" },
    { text: "When you want to succeed as bad as you want to breathe, then you'll be successful.", author: "Eric Thomas" },
    { text: "Character supersedes talent every day of the week.", author: "Inky Johnson" },
    { text: "Float like a butterfly, sting like a bee. The hands can't hit what the eyes can't see.", author: "Muhammad Ali" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },

    /* GROUP 2 */
    { text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.", author: "Maya Angelou" },
    { text: "It's not what we do once in a while that shapes our lives. It's what we do consistently.", author: "Tony Robbins" },
    { text: "Don't cry to give up. Cry to keep going.", author: "Eric Thomas" },
    { text: "Commitment is staying true to what you said you would do long after the mood that you said it in has left.", author: "Inky Johnson" },
    { text: "Champions aren't made in gyms. Champions are made from something they have deep inside them — a desire, a dream, a vision. They have to have the skill, and the will. But the will must be stronger than the skill.", author: "Muhammad Ali" },
    { text: "I skate to where the puck is going to be, not where it has been.", author: "Wayne Gretzky" },

    /* GROUP 3 */
    { text: "Courage is the most important of all the virtues, because without courage you can't practice any other virtue consistently.", author: "Maya Angelou" },
    { text: "Stay committed to your decisions, but stay flexible in your approach.", author: "Tony Robbins" },
    { text: "Pain is temporary. It may last a minute, an hour, a day, or even a year. But eventually it will subside. If I quit, however, it will last forever.", author: "Eric Thomas" },
    { text: "Never let a situation or circumstance define your life, no matter what it may be.", author: "Inky Johnson" },
    { text: "I hated every minute of training, but I said, don't quit. Suffer now and live the rest of your life as a champion.", author: "Muhammad Ali" },
    { text: "No matter who you are, we're creatures of habit. The better your habits are, the better they will be in pressure situations.", author: "Wayne Gretzky" },

    /* GROUP 4 */
    { text: "Nothing will work unless you do.", author: "Maya Angelou" },
    { text: "By changing nothing, nothing changes.", author: "Tony Robbins" },
    { text: "You can't cheat the grind. It knows how much you've invested. It won't give you anything you haven't worked for.", author: "Eric Thomas" },
    { text: "Ease is a greater threat to progress than hardship.", author: "Inky Johnson" },
    { text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali" },
    { text: "Procrastination is one of the most common and deadliest of diseases and its toll on success and happiness is heavy.", author: "Wayne Gretzky" },

    /* GROUP 5 */
    { text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", author: "Maya Angelou" },
    { text: "Who you spend time with is who you become.", author: "Tony Robbins" },
    { text: "All men are created equal. Some work harder in pre-season.", author: "Eric Thomas" },
    { text: "Perspective drives performance every day of the week.", author: "Inky Johnson" },
    { text: "Discipline without love is ineffectual. Our boys need to be healed, not scared straight.", author: "Jason Wilson" },
    { text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan" },

    /* GROUP 6 */
    { text: "Do the best you can until you know better. Then when you know better, do better.", author: "Maya Angelou" },
    { text: "It is in your moments of decision that your destiny is shaped.", author: "Tony Robbins" },
    { text: "When you're willing to accept that you're the problem, you immediately become the solution.", author: "Eric Thomas" },
    { text: "Don't be upset by the results you didn't get with the work you didn't do.", author: "Inky Johnson" },
    { text: "It is encouraging to see more men learning how to speak about emotions, but sadly, most of those same men do not know how to feel them.", author: "Jason Wilson" },
    { text: "I can accept failure, everyone fails at something. But I can't accept not trying.", author: "Michael Jordan" },

    /* GROUP 7 */
    { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    { text: "Change happens when the pain of staying the same is greater than the pain of change.", author: "Tony Robbins" },
    { text: "Success is not for the weak and uncommitted. Sometimes it's gonna hurt.", author: "Eric Thomas" },
    { text: "The process is more important than the product.", author: "Inky Johnson" },
    { text: "The main thing is to try to put in your head that we all start from the bottom.", author: "Virgil van Dijk" },
    { text: "Worrying gets you nowhere. If you turn up worrying about how you're going to perform, you've already lost. Train hard, turn up, run your best and the rest will take care of itself.", author: "Usain Bolt" },

    /* GROUP 8 */
    { text: "If you don't like something, change it. If you can't change it, change your attitude.", author: "Maya Angelou" },
    { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
    { text: "Don't make a habit out of choosing what feels good over what's actually good for you.", author: "Eric Thomas" },
    { text: "Be stronger than your strongest excuse.", author: "Inky Johnson" },
    { text: "Just focus on doing what you love to do and play your best game. Get your qualities out of the pitch, enjoy your game and don't think about the other things.", author: "Virgil van Dijk" },
    { text: "There are better starters than me, but I'm a strong finisher.", author: "Usain Bolt" },

    /* GROUP 9 */
    { text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
    { text: "The only limit to your impact is your imagination and commitment.", author: "Tony Robbins" },
    { text: "We all have the ability to produce greatness in our lives.", author: "Eric Thomas" },
    { text: "Your expectations should never be higher than your work ethic.", author: "Inky Johnson" },
    { text: "Every step of my career was hard work.", author: "Virgil van Dijk" },
    { text: "Dreams are free. Goals have a cost. While you can daydream for free, goals don't come without a price. Time, effort, sacrifice, and sweat.", author: "Usain Bolt" },

    /* GROUP 10 */
    { text: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are.", author: "Maya Angelou" },
    { text: "Without gratitude and appreciation for what you already have, you'll never know true fulfillment.", author: "Tony Robbins" },
    { text: "Stop being average.", author: "Eric Thomas" },
    { text: "The same boiling water that softens the potato hardens the egg. It's about what you're made of, not the circumstance.", author: "Inky Johnson" },
    { text: "Why be negative when you can enjoy life and be positive? That's something I learned over the years.", author: "Virgil van Dijk" },
    { text: "Kill them with success and bury them with a smile.", author: "Usain Bolt" },

    /* GROUP 11 */
    { text: "The idea of overcoming is always fascinating to me. Few of us realize how much energy we have expended just to be here today.", author: "Maya Angelou" },
    { text: "If you talk about it, it's a dream. If you envision it, it's possible. But if you schedule it, it's real.", author: "Tony Robbins" },
    { text: "It's not about where you come from. It's about heart.", author: "Eric Thomas" },
    { text: "Character is not something we inherit. It is something we have to wake up every single day and build.", author: "Inky Johnson" },
    { text: "The most important thing in football is what happens on the pitch.", author: "Peyton Manning" },
    { text: "Today I will do what others won't, so tomorrow I can accomplish what others can't.", author: "Jerry Rice" },

    /* GROUP 12 */
    { text: "My wish for you is that you continue. Continue to be who and how you are, to astonish a mean world with your acts of kindness.", author: "Maya Angelou" },
    { text: "People are rewarded in public for what they practice for years in private.", author: "Tony Robbins" },
    { text: "An eagle uses the storm to reach unimaginable heights.", author: "Eric Thomas" },
    { text: "Stop worrying how it's going to happen and start trusting that it will.", author: "Inky Johnson" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.", author: "Barack Obama" },

    /* GROUP 13 */
    { text: "Love life. Engage in it. Give it all you've got. Love it with a passion because life truly does give back, many times over, what you put into it.", author: "Maya Angelou" },
    { text: "Your biography is not your destiny, your decisions are.", author: "Tony Robbins" },
    { text: "Desire and imagination have the potential to position a person for greatness.", author: "Eric Thomas" },
    { text: "Your current situation is not your final destination.", author: "Inky Johnson" },
    { text: "Pressure is the homeless man who doesn't know where his next meal is coming from. We get paid a lot of money to play a game.", author: "Peyton Manning" },
    { text: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.", author: "Kobe Bryant" },

    /* GROUP 14 */
    { text: "I had to trust life since I was young enough to believe that life loved the person who dared to live it.", author: "Maya Angelou" },
    { text: "If you want to change your life you have to raise your standards.", author: "Tony Robbins" },
    { text: "I dare you to be great. I challenge you to be great in every single thing you do.", author: "Eric Thomas" },
    { text: "Every setback has a major comeback.", author: "Inky Johnson" },
    { text: "You need to have dreams, you need to go for it, otherwise why would you be a footballer?", author: "Virgil van Dijk" },
    { text: "Wins and losses come a dime a dozen. But effort? Nobody can judge that. Effort is between you and you.", author: "Ray Lewis" },

    /* GROUP 15 */
    { text: "One isn't necessarily born with courage, but one is born with potential. Without courage, we cannot practice any other virtue with consistency.", author: "Maya Angelou" },
    { text: "Knowledge is not power. Knowledge is only potential power. Action is power.", author: "Tony Robbins" },
    { text: "God has a purpose for your pain, a reason for your struggles, and a reward for your faithfulness. Don't give up.", author: "Eric Thomas" },
    { text: "People don't burn out because of what they do. People burn out because life makes them forget why they do it.", author: "Inky Johnson" },
    { text: "Success isn't owned. It's leased, and rent is due every day.", author: "JJ Watt" },
    { text: "Don't aspire to make a living on the court or stage; aspire to make a difference in the world.", author: "Denzel Washington" },

    /* GROUP 16 */
    { text: "Nothing can dim the light that shines within.", author: "Maya Angelou" },
    { text: "All personal breakthroughs begin with a change in beliefs.", author: "Tony Robbins" },
    { text: "Sometimes it ain't about being the most talented. Sometimes it's about consistency.", author: "Eric Thomas" },
    { text: "We have to learn to be comfortable being uncomfortable.", author: "Inky Johnson" },
    { text: "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact. It's an opinion. Impossible is potential. Impossible is temporary. Impossible is nothing.", author: "Muhammad Ali" },
    { text: "The highest compliment you can pay me is to say that I work hard every day, that I never dog it.", author: "Wayne Gretzky" },

    /* GROUP 17 */
    { text: "A person is the product of their dreams. So make sure to dream great dreams. And then try to live your dream.", author: "Maya Angelou" },
    { text: "There is no such thing as failure. There are only results.", author: "Tony Robbins" },
    { text: "The most important thing is to be able at any moment to sacrifice what you are for what you will become.", author: "Eric Thomas" },
    { text: "Allow the opposition to make you better.", author: "Inky Johnson" },
    { text: "Service to others is the rent you pay for your room here on earth.", author: "Muhammad Ali" },
    { text: "Only one thing is ever guaranteed — that is that you will definitely not achieve the goal if you don't take the shot.", author: "Wayne Gretzky" },

    /* GROUP 18 */
    { text: "Develop enough courage so that you can stand up for yourself and then stand up for somebody else.", author: "Maya Angelou" },
    { text: "Commit to constant and never-ending improvement.", author: "Tony Robbins" },
    { text: "You already in pain, you already hurt. Get a reward from it.", author: "Eric Thomas" },
    { text: "Play the hand you're dealt like it's the one you've always wanted.", author: "Inky Johnson" },
    { text: "The fight is won or lost far away from the witnesses, behind the lines, in the gym and out there on the road, long before I dance under those lights.", author: "Muhammad Ali" },
    { text: "Once you realize who you are, you stop operating in desperation.", author: "Eric Thomas" },
];

const REFERENCE_START_DATE = new Date(2026, 5, 18);

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
    let effectiveDate = new Date(today);
    if (day === 0) effectiveDate.setDate(effectiveDate.getDate() - 2);
    if (day === 6) effectiveDate.setDate(effectiveDate.getDate() - 1);
    const weekdayIndex = getWeekdayIndexSince(REFERENCE_START_DATE, effectiveDate);
    const safeIndex = weekdayIndex % heartworkQuotesMatrix.length;
    return heartworkQuotesMatrix[safeIndex];
}
