let button = document.getElementById("button");

button.addEventListener('click', getInput);

function generateHoroscope(fName, zSign, gender, output)
{
    let finalHoroscope = "";
    let ariesScopes = [`No headbutting, Ram! Why try to slay your competitors when a dynamic duo makes such a killer combo? A clever coalition with another mover and shaker in your industry could reap rewards for both of you. Two is the magic number under these agreeable skies. Be a lover, not a fighter!`,
                        `Knowing some things will be beyond your control can help you ride out the slowdowns and work stoppages over the coming five months. Youll have opportunities to shift and refine how you manage or interact in a group. What probably WONT work is barking orders or being pushy or argumentative, even if that makes you feel better in the moment. (And even worse would be getting snarky or passive aggressive.) Of course, if youre heading up an important Team Aries project, you cant ignore bad behavior—but you can (and should) pick your battles carefully. Let the slackers and underminers know in no uncertain terms what needs to change—and what the consequences of not doing so look like. Since retrogrades rule the past—and the eleventh house is associated with groups and social activism—you could reconnect with former colleagues who still want to improve the world, which is more urgent now than ever!`];
    let taurusScopes = [`Rather than focusing on recent slipups, turn the page and institute new healthy habits. Stock your pantry and fridge with seasonal produce, find an inspiring workout to stream, book medical exams that youre overdue for. Even more incentive to double down on self-care: Unless you take action to keep yourself healthy, youll feel a bit discombobulated. You need to get grounded while your head is spinning out, so treat your body like the temple that it is.`, 
                        `Things can accelerate and come to a head quickly under these turbo-charged moonbeams. If youve been casually dating someone, you may feel a sudden need to define what youre actually doing together. Your security-seeking sign doesnt relish uncertainty, so its worth having a direct conversation—even if youre afraid of what theyll say. (But better to know for sure one way or another so you can take YOUR next steps.) Solid couples can double down on their commitment, perhaps planning a first-time or renewal ceremony scheduled after they spend some time together. And if youve been squabbling, this no-nonsense eclipse can help you get to the heart of the matter, even if it stings a bit in the process. Regardless of your romantic status, this pulse-quickening eclipse can intensify your urge to merge over the coming two weeks. If youre single, get proactive in all the ways youre comfortable with—and maybe one or two that stretch your limits (safely, of course). Keep an open mind because a surprisingly different “type” might just reveal themselves to be a true diamond in the rough!`];
    let geminiScopes = [`Unattached Twins should feel free to do what they do so well…flirt! And dont hesitate to glam up and snap some confident selfies. Start swiping on the apps or let friends know that youre open to fresh prospects if they know anyone great. If youre already in a relationship, kindle the flame by surprising your sweetie with an impromptu date. Score a reservation at the buzzy restaurant theyve been wanting to try or put together a picnic and head to the park (weather permitting!)`,
                        `This is another chance to snag a front seat on the wellness wagon and dial up your fitness game. This weekend and the next two weeks are the most potent for manifesting, but because this lunation is also an activating eclipse, things you undertake now can take up to six months to unfold. So get something started ASAP, and keep the momentum going. If youre up for it, try a mini detox or an online exercise challenge. (Pro tip: Since it supposedly takes 21 days to change a habit, why not commit to a full three weeks?) But please dont confuse this with a stern “no pain no gain” recommendation. Theres plenty of fun to be had as you raise your health quotient. Check out different styles of dance classes and experiment with new ingredients in the kitchen. Since the sixth house also rules your work routines, this eclipse could bring a payday from your hustle of the past six months. Its not egotistical to ensure the management knows YOURE the genius behind those brilliant ideas!`];
    let cancerScopes = [`You could feel the pendulum swinging from blue to blissful, so allow yourself the grace and space to experience the whole gamut. If a challenging issue has been upsetting you lately, confide in someone you trust. A little extra self-care may be in order, and its likely to smooth this rough patch for you. Close your office door and do some asanas or pop out for a cheerful manicure.`,
                        `You may have to tame your libido all week, Cancer, because the cosmic hits keep coming! On Friday, a full moon lunar eclipse in Scorpio turns on the lights in your passionate fifth house. (Or maybe it turns them all OFF except for one musk-scented tea candle.) Either way, you can expect a lunar power surge of amorous momentum, which is great if youre in a relationship or starting one up. If youre single or otherwise focused, this eclipse can fire up your creative juices and lead to some epic output! Whatever youre working on, be prepared to pitch, promote or perform in the two weeks that follow this lunation. Because the fifth house is your fertility zone, if youre not “birthing” a creative project, you might take this cue very literally. And if babies are the LAST thing on your mind, consider yourself duly warned.`];
    let leoScopes = [`Get going, Lion! Come up with a plan for the day, then check tasks off your list as you go. But you dont have to fly solo. Call an impromptu meeting with a few creative coworkers and put your heads together to bat around ideas for taking a venture to the next level. The skys the limit! You might have enough of a tailwind to finish work early and hit happy hour with your friends to celebrate a job well done.`,
                    `Pluto brokers in mystery, power plays and strong emotions, so this may not be a walk in the park. But if its clarity and commitment youre seeking, then this is a necessary (and probably inevitable) process. If some of your closest ties do hit a rough patch, the one thing you dont want to do is ignore it or pretend it isnt happening. At the very least, hashing out the sticking points can help you discover where you (both) stand and mutually work to rebuild things on a more solid foundation. Conflicts are a normal part of life for everyone, Leo. When jealousy, anger or resentment comes up for you, the healthiest and most productive thing you can do is to face it straight on and try to find its roots. Sometimes you can do this on your own, but its generally more effective when done under the guidance of a good therapist.`];
    let virgoScopes = [`Lucky you, Virgo! The cosmos give you permission to treat yourself to a sensual indulgence today as the moon floats through your material second house. If you have a hankering for an uplifting spring perfume or the softest silk blouse, check your budget to see if you can swing it. This luxe moon highlights quality, not quantity. So dont focus solely on finding a great bargain. Consider whether it gives you pleasure!`,
                        `The sixth house is associated with your organized, detail-oriented sign, and if youve been burning the candle at both ends, this involuntary slowdown might actually come as a welcome relief. Rather than bemoan the snails pace, relish this rare opportunity to catch your breath, regroup and put some streamlined new systems in place. Proceed with caution and mindfulness: Pluto will insist that you take things seriously and get them right out of the gate. With Pluto off-course, things might not progress in a linear fashion. The key to staying centered through this transit is stress management: channeling pent-up anxiety into physical exercise, meditating to still the mind, and getting plenty of rest.`];
    let libraScopes = [`Watch out for triggering comments, both TO you and FROM you. Tempers can flare quickly, but if you manage to keep a lid on your emotions, you could learn some valuable lessons about the relationships power dynamics. Your conflict-averse sign is quick to accommodate others to keep the peace, but something gets lost in the bargain, namely, getting YOUR needs met. If youre afraid that broaching the subject will reflect poorly on you, think of it this way: Its easy to get along when youre on the same page. But the real mark of a mature bond is being able to work through disagreements and come out stronger.`,
                        `Whats on the docket for the day? YOU are, Libra! As the moon in your sign infuses you with self-assurance and an indie spirit, others will look to you as their leader. And thats doubly true if you toot your own horn. Certain ventures may be lagging behind schedule due to Mercury retrograde. Do your best to keep them in motion. You may want to polish your branding materials to create some buzz. If youre not feeling ultra-confident, move your body! Some physical activity could be just what the doctor ordered. Invite a friend to go for a run with you—and grab a bite after if youre up for it.`];
    let scorpioScopes = [`Are you tired of being tired? With the Libra mood hiding out in your twelfth house of R and R today, the cosmos hands you the perfect excuse to take a well-earned break. Dont keep your pedal to the metal until you crash and burn. What soothing activities will replenish your reserves? Schedule a lunchtime bodywork session or enjoy a quiet dinner with one of your closest friends. You might try to take a personal day or leave work early if you have that flexibility. A healthy dose of downtime will have you up and running in no time.`,
                        `Your fuse might have gotten a little short of late, and it wont take much to reach the end of it. Unless you live contentedly alone, baes or a roomies little quirks may have grown from bothersome to unbearable. Before they send you over the edge, think about how you can broach the subject without starting a full-blown battle. Also have an honest look at your motivation. Are you trying to get back at someone? As a Scorpio, your M.O. can be more stealthy than direct. And with Pluto retrograde, that goes double.`];
    let sagittariusScopes = [`Teamwork is the answer today when the cooperative Libra moon lights up your eleventh house of collaboration. If youre already in the middle of a group endeavor, this lunar position will give you a burst of energy. Are there a few positions that still need to be filled? Start the search for the ideal cohorts. Since the eleventh house also governs tech, poking around online could lead you to discover the perfect prospects. Reach out with your ask.`,
                            `The third house is your communication center, and Pluto isnt known for being gentle or tactful. And in reverse, conversations could turn intense and stormy if you dont stay intentional. Heres where your natural candor comes in handy! By speaking YOUR piece, you tacitly give others permission to say whats on THEIR minds instead of passive-aggressively stewing in their juices. But think before you blurt. Do your Sagittarian best to eliminate any hint of condescension or self-righteousness from your words and even your body language.`];
    let capricornScopes = [`What do you want to achieve in the coming weeks—and with what supporters by your side? Map out a plan, but try not to overcommit yourself. Draw up a pragmatic timeline and task list so you dont get in over your head. Its wonderful to have a head of steam, but you wont cross the finish line if you dont take it slow and steady, one step at a time. With la luna in this cooperative sign, maximize your odds of success by partnering with another power player.`,
                            `Take your victory lap, but dont turn off your engine. With so much momentum, this is the perfect time to think about which next steps are right for YOU. Dont be distracted or swayed by others feedback. You may decide to stay the course OR totally pivot into something completely different. Since the eleventh house is your digital domain, this eclipse can help you actualize a virtual dream. But dont cut any corners (or costs!) when it comes to data security, especially with Mercury retrograde. On a related note, be mindful about what you post on social media. It may seem clever and innocent in the moment, but someone else might take grave offense.`];
    let aquariusScopes = [`Can you work remotely and take a road trip with your laptop? A quick getaway can satisfy your restlessness, and if theres an interesting local scene to explore wherever you land, all the better! If youre fenced in, take a couple of breaks during the day to start searching airfares for your next vacation. You couple come across an amazing deal to your dream destination.`,
                            `If a personal project was just getting off the ground, this backspin could feel super-frustrating. But trust the process! Its more than likely that some details got overlooked, or new data will be introduced that could change the scope or timeline in a key way. Instead of stewing in resentment, embrace this rare opportunity to hit pause in the middle of the action and review your progress to date. Is this still viable? Ready to put out into the marketplace? Whats left to do? Pluto in your sign can spark the desire for a personal makeover, but once it turns retrograde, tap the brakes before you do anything rash or irrevocable. Over the next five months, learn to love this slower, more deliberate pace.`];
    let piscesScopes = [`Channel this deep-diving energy to process profound emotions you havent had a chance to sift through. Someone clingy could try to intrude on your privacy, but dont let them. Youre especially sensitive to other peoples force fields, due to this touchy-feely starmap. So keep toxic types at arms length while youre vulnerable to soaking up their bad vibes.`,
                        `Stay flexible and prepare to cast the widest net possible over the coming two weeks. At the very least, this should stir your wanderlust and send you running to travel blogs and flight search engines. Scorpios intensifying energy might plant seeds for a purposeful pilgrimage, like a journey to your familys homeland or a yoga or cultural expedition. Since the ninth house rules education (and teaching) as well as entrepreneurism, you might put travel on the back burner and get that business plan out of your head and onto paper. Hit the accelerator now while the manifesting mojo is potent, and watch things take off like a rocket!`];
    
    let randomNumber = Math.round(Math.random());

    if (zSign.value === "aries")
    {
        output.innerHTML = ariesScopes[randomNumber];
    }
    else if (zSign.value === "taurus")
    {
        output.innerHTML = taurusScopes[randomNumber];
    }
    else if (zSign.value === "gemini")
    {
        output.innerHTML = geminiScopes[randomNumber];
    }
    else if (zSign.value === "cancer")
    {
        output.innerHTML = cancerScopes[randomNumber];
    }
    else if (zSign.value === "leo")
    {
        output.innerHTML = leoScopes[randomNumber];
    }
    else if (zSign.value === "virgo")
    {
        output.innerHTML = virgoScopes[randomNumber];
    }
    else if (zSign.value === "libra")
    {
        output.innerHTML = libraScopes[randomNumber];
    }
    else if (zSign.value === "scorpio")
    {
        output.innerHTML = scorpioScopes[randomNumber];
    }
    else if (zSign.value === "sagittarius")
    {
        output.innerHTML = sagittariusScopes[randomNumber];
    }
    else if (zSign.value === "capricorn")
    {
        output.innerHTML = capricornScopes[randomNumber];
    }
    else if (zSign.value === "aquarius")
    {
        output.innerHTML = aquariusScopes[randomNumber];
    }
    else if (zSign.value === "pisces")
    {
        output.innerHTML = piscesScopes[randomNumber];
    }
}

function getInput()
{
    let fName = document.getElementById("fName");
    let zSign = document.getElementById("zSign");
    let gender = document.getElementById("gender");
    let output = document.getElementById("output");
    let moveOn = 0;

    if (fName.value.length < 2)
    {
        alert("The name you entered is too short. Please change the name and try again.");
        moveOn++;
    }

    if (fName.value.includes('0') || fName.value.includes('1') || fName.value.includes('2') || fName.value.includes('3') || fName.value.includes('4') || fName.value.includes('5') || fName.value.includes('6') || fName.value.includes('7') || fName.value.includes('8') || fName.value.includes('9'))
    {
        alert("The name you entered contains a number. Please change the name and try again.")
        moveOn++;
    }

    if (zSign.value === "null")
    {
        alert("Please select your Zodiac Sign below.")
        moveOn++;
    }

    if (gender.value === "null")
    {
        alert("Please select your gender below");
        moveOn++;
    }

    if (moveOn === 0)
    {
    generateHoroscope(fName, zSign, gender, output);
    }
}