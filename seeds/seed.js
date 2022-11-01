/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const playbooks = [
    {
        playbook: "scoundrel",
        id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        summary:
            "Scoundrels love getting into and out of trouble. Play a Scoundrel if you want to press your luck.",
        tagline: "A scrappy and lucky survivor",
        overview:
            "Neither the most reputable nor the one to choose the safe route, you’re a smooth-talking criminal and luck is just one of your many skills. You might be a charming rogue out for themselves. You might be the convict on the run who always has a trick up their sleeve. But while it’s true that anyone in Procyon can get into trouble, you always get into the very best kind.",
        xpgain: "When you play a Scoundrel, you earn xp when you address challenges with charm or audacity.",
        playbook_clarification:
            "Ramp up the daring and be quick on the draw with a catchy one-liner. You shine brightest when the situation is just about to get ugly.",
        character_questions:
            "Who was the last person you cheated out of their due? Are you loyal to this crew, or are they just a means to an end? How many times have you been left for dead?",
        starting_actions: "Sway 2, Skulk 1",
        build_suggestions:
            "Captain. Helm +2, Scramble +2. Never Tell Me the Odds.\nRelic hunter. Doctor +1, Study +1, Attune +2. Daredevil.\nEx-detective. Doctor +1, Study +1, Consort +2. Ask Questions Later.\nVeteran of Core Wars. Helm +1, Scramble +1 Scrap +2. Tenacious.",
        starting_ability: "serendipitous",
        starting_ability_summary: "Your crew starts with +1 gambit when the pool resets.",
        items_description:
            "This increases the crew’s starting gambits on a job. You’re just plain luckier than other people.",
        starting_ability_clarification:
            "Always gotta look good, and be ready for action. Scoundrels come with things to get them in trouble, and get them out—while looking good doing it.",
        playing_advice:
            "Scoundrels are one of the most versatile playbooks in Scum and Villainy—your innate luck and daring can give you a chance to shine in many situations. Learn when to push your luck and when to let things ride. Be a risk-taker, but consider the kinds of risks you’ll take and why. Are you always willing to put it on the line for a larger payout? Do you carry a grudge over slights long past?\n\nStrong characterization goes a long way for the Scoundrel. Describe your character’s attitude, their look, and how they walk into a room. Make them big and bold and let everyone have to deal with them. Do you have something to prove? Is your sense of importance earned or bravado? Are you smooth and friendly or brash and rough?\n\nDesperate actions earn xp and play into many of your abilities. Don’t shy away from them! Rely on armors (special and gear), resistance rolls, and your crew to mitigate the worst of it. A broad ability base helps with resistances and getting away with bad decisions.\n\nFor actions, focus on active skills—rig, scrap, even Command. Skulk will let you play a familiar pickpocket and card shark. The Ship captain stereotype leans on helm. A good scoundrel is always in the thick of it acting with a hare-brained plan, rather than reacting.\n\nVeteran abilities flesh out a concept. The Mystic’s Psy-Blades and most Muscle’s abilities make for tough rogues. Smooth-talking Scoundrels might look at the Speaker’s Disarming ability. Rogues with hearts of gold should look at the Stitch’s Moral Compass or the Mechanic’s Heart. And captains and crew leaders should look at the Pilot’s Commander and the Muscle’s Backup ability.",
        xeno_advice:
            "Scoundrels are often audience-inserts, representing an “ordinary person.” A xeno Scoundrel is an exercise in humanizing the Other and making the unusual characters of Procyon approachable. Think about your culture and people when making your xeno. Do your stodgy people accept your disregard for the rules? Are they welcomed in Hegemonic society or are they on the fringe of acceptability themselves? Are they from Procyon or elsewhere in the galaxy?\n\nAs for your abilities, almost every species has Scoundrels. Think about what sorts of things might be fun or dramatic that you want your character to do. Think about ways you can get in trouble, and ask your GM to work with you to create a xeno that has abilities that put you in those sorts of situations. Make your xeno abilities flashy and memorable.",
    },
    {
        playbook: "stitch",
        id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        summary:
            "Play a Stitch to deal with Science, patch people up, and be the crew’s moral compass.",
        tagline: "A spacefaring healer or scientist",
        overview:
            "Respected across the sector, the ability to heal is one of the most valuable out on the edge of Hegemonic space. Properly trained physicians are, if not welcomed, at least treated well. For crews that tend to take a few injuries, a Stitch capable of knitting bones and patching blaster burns is always a welcome addition.",
        xpgain: "When you play a Stitch, you earn xp when you address challenges with insight or compassion. ",
        playbook_clarification:
            "Make sure you see the whole picture and help keep your crew safe and sound. When things get out of hand, they’ll need you. When they lose their way, guide them. Remember that not all wounds are physical.",
        character_questions:
            "What research interests you? What do you charge for your services? How did you learn your trade?",
        starting_actions: "Doctor 2, Study 1",
        build_suggestions:
            "Wandering healer. Consort +2, Sway +2. Welcome Anywhere.\nMad scientist. Scramble +1, Attune +2, Sway +1. Dr. Strange.\nAction medic. Scramble +1, Scrap +2, Sway +1. Combat Medic.\nResearcher. Study +1, Skulk +1, Sway +2. Book Learning.",
        starting_ability: "I’m a Doctor, not a…",
        starting_ability_summary:
            "You can push yourself to roll your Doctor rating while performing a different action. Say which patient, research, or posting taught you this trick.",
        items_description:
            "Each time you use this ability we learn a little bit more about your past. Consider introducing your contacts in these discoveries, if appropriate.",
        starting_ability_clarification:
            "A Stitch’s items are less about the garb and more about the things you bring with you to any given situation.",
        playing_advice:
            "When making a Stitch, think about what drives you to tend to this particular crew. Do you care deeply for this crew of scoundrels, or is this a way to keep one step ahead of the law? Equally important is what kind of person you are—are your patients always safe in your care? Would you refuse to help someone you think is a bad person?\n\nStitches can have varied backgrounds. Some are former university-trained field medics who may have fallen on hard times. Others are folks that learned through necessity. Some might be scientists whose line of research is not condoned by The Hegemony.\n\nYour starting ability deserves some attention. With it, you can do two things at the same time. You can substitute your Doctor rating for any other ability for a push, but more importantly, you get to have a cool moment where you talk about a former patient, posting, or research project that lends you the knowledge you need.\n\nFor actions, consider sway and Consort, if you’re a friendly sort or still have connections in high society. If you used to be a combat medic, prowess actions are good.\n\nFor Veteran abilities, look at the Speaker’s Heart-to-Heart if you’re a caretaker, while the Muscle’s Bodyguard ability allows you to keep The People in your care alive even in the worst of conditions.\n\nAlthough Stitches are usually on board to tend to wounds, some are pure scientists. Consider starting with Dr. Strange or Book Learning in that case. Many Mechanic abilities might also fit. Also rig and hack might be useful to these types, as well as the crafting rules for your gadgets and newfangled inventions.",
        xeno_advice:
            "There are numerous species with a knack for medical Science and enhanced senses that render a medical scanner unnecessary. Think about how you might approach healing differently than a human Doctor. Perhaps you’re unused to species with a single heart. Or find it annoying that others can’t just regenerate limbs like your people can. Embrace and celebrate the differences.\n\nRegardless of the species, most physicians are at least superficially well treated in Procyon; you’re less likely to have problems than other xenos. That said, if you really want to build bridges between species, consider picking up the Welcome Anywhere ability. It will allow you to have a real conversation about society and change in Procyon.",
    },
    {
        playbook: "mechanic",
        id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        summary:
            "Play a Mechanic if you want to make new devices, keep your ship in good shape, or hack systems.",
        tagline: "A gearhead and hacker",
        overview:
            "Whether it’s fixing up the ship’s engines or constructing a specialized safecracker to break into a Hegemonic vault, a mechanic is an invaluable asset on most jobs. You might be the mousy one who has all the fancy toys, or more hands-on, lugging your gear to The Job. Or you might prefer to literally make friends and specialize in Urbotic creation. When something breaks, you’re the one to call.",
        xpgain: "When you play a Mechanic, you earn xp when you address challenges with technical skill or ingenuity. ",
        playbook_clarification:
            "Always look at the devices around you and be prepared to make them do what you want them to.",
        character_questions:
            "Did you make your own drone? How’d you learn your technical skills? Where’d you find your pet and what is it? Are you unassuming, fading into a crowd, or hard to miss, covered in tattoos?",
        starting_actions: "Rig 2, Study 1",
        build_suggestions:
            "Ship mechanic. Hack +2, Scramble +1, Sway +1. Fixed.\nComputer whiz. Hack +2, Skulk +1, Sway +1. Hacker.\nBot builder. Hack +1, Scramble +1, Attune +2. Construct Whisperer.\nShip owner. Helm +2, Scrap +1, Command +1. Junkyard Hunter.",
        starting_ability: "tinker",
        starting_ability_summary:
            "When you work on a clock with rig or hack, or when you study a schematic, fill +1 segment.",
        items_description:
            "You get this bonus segment regardless of whether this is a Downtime action or not. This means that bypassing security on a job or doing an emergency patch while escaping a chasing ship is easier for you than others.",
        starting_ability_clarification:
            "Mechanics have tools, ship parts, and their latest inventions around or on them. Although they can dress like anyone else, many mechanics prefer looks that are tough to tear, have plenty of places to stash a tool or two, and are easy to crawl through a ship duct in.",
        playing_advice:
            "Playing a Mechanic is foremost about your relationship with The Ship. No one else will have the same ability to keep it flying, and when something breaks, all eyes will be on you. Look for opportunities to bring up what you’ve personally modified on The Ship. Where do you get parts when The Ship needs something repaired?\n\nHow did you become a mechanic? Were you mentored by one of your friends? Were you once a Guild trainee? Why did you leave and join the crew? Do you approach fixing The Ship as a stop-gap solution, where you’re simply trying to find a patch until the next thing breaks, or is it a matter of pride that something never fails twice?\n\nFamiliarize yourself with the crafting system. The ability for you to make new devices is very powerful, and the starting Tinker ability gives you an advantage that no one else will be able to match. Ask the rest of the crew what devices you might be able to create and get them to chip in for their development, either in extra downtimes to speed up Design or with extra cred to pay for Assembly.\n\nAction-wise, you may want to pick up skulk if you tend to lurk in the background, or Attune if you expect to be working on Ur machines or Urbots. If you also serve as the crew’s foremost computer and system expert, you’ll want to stack some hack.\n\nVeteran ability-wise, the Speaker’s Old Friends ability can play up your connections among crafters and hackers. If you want to go full mad scientist, look at the Stitch’s Dr. Strange ability.",
        xeno_advice:
            "Every species has Mechanics, so when playing a xeno, consider how that xenotype relates to machines. Some xenos have an unusual relationship with technology (particularly Ur-based technology), such as the Sah’iir, while others use unusual materials, like the Mem.\n\nDoes your species have an unusual adaptation for working on machines? Are they small and fit into ventilation ducts easily? Also consider how your xeno adaptations might reflect sides of you that aren’t directly relating to machines.\n\nHow does your xeno heritage fit into the story? Have the Guilds excluded your character from certain opportunities because you aren’t human? Or have your people been embraced, perhaps because of an adaptation that The Hegemony could utilize?",
    },
    {
        playbook: "muscle",
        id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        summary:
            "Muscles are good at winning fights. Play a Muscle if you want to be unstoppable in combat.",
        tagline: "A dangerous and intimidating fighter",
        overview:
            "Most crews have one. The Procyon Sector isn’t a safe place, and when negotiations and slick words fail, it’s time for blasters, ship cannons, and close, swift violence. You are the crew’s ability to apply force. Your presence dissuades drawn weapons and your strength ends violent conversations. You can be a protector, enforcer, boarder, or quiet threat on the back burner. But you cannot be ignored.",
        xpgain: "When you play a Muscle, you earn xp when you address challenges with force or threats.",
        playbook_clarification:
            "Make sure everyone knows that violence and intimidation are always options, and you stand ready to deliver. When things fall apart, show them how it’s done.",
        character_questions:
            "Do you have a personal code that you follow? Times you won’t apply violence no matter the cost? What caused you to throw your lot in with the crew and not seek employment as a soldier?",
        starting_actions: "Scrap 2, Command 1",
        build_suggestions:
            "Gladiator. Scramble +1, Skulk +1, Command +1. Wrecking Crew.\nProtector. Doctor +1, Study +2, Scramble +1. Bodyguard.\nMystic hunter. Attune +2, Helm +1, Scramble +1. Battleborn.\nAction hero. Rig +1, Helm +1, Scramble +2. Flesh Wound.",
        starting_ability: "unstoppable",
        starting_ability_summary:
            "You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat.",
        items_description:
            "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability.\\n\\nA superhuman feat is one a regular person could not do unassisted, such as tearing apart metal handcuffs. If you engage a small gang on equal footing, you have equal scale.",
        starting_ability_clarification:
            "Muscles are particular about their weapons. If you have more than one Muscle in the crew, feel free to fill in your own weapon names. Here are a few suggestions:\\n\\nBlink, Checkmate, Echo, Ender, Equalizer, Ghost, Itchy, Malice, Mercy, Pride, Thorn, Thunder, Tickle, Twitch, Whisper, Wynona.",
        playing_advice:
            "Your Command of violence is both a blessing and a curse. Your relationship with conflict puts you in harm’s way more often than your crewmates; it’s not uncommon for a Muscle to be nursing an injury even at the start of a job. This is, of course, offset by your general physical dominance.\n\nThink about your style of fighting\u00ad. Are you a brute with rippling muscles and a fearsome reputation? Or perhaps part of a monastic order that trains with the Way? Do you train for zero-G combat? Are you just an unyielding wall, protecting your crew from all comers? These tell a story about who you are and how you came to be known for your ability to fight, and can be reflected in Muscle ability choices.\n\nWhatever the reason, you’re part of the crew, there’s no doubt that you’re going to be their go-to for when a fight breaks out. Play that up. Consider if you’re also the person training the crew for the day when you might not be there to bail them out. Equally important is how you feel about the violence you wreak. You might be excited for each opportunity to cut loose or you might dread each fight for what you might have to do.\n\nFor actions, you may want to pick up helm, if you want to shoot ship weapons, or study, if you’re looking to read your opponents before engaging. You can sense killing intent with Attune, or deal with Precursor or Way elements threatening your crew.\\n\\nFor Veteran abilities, take the Mystic’s Psy-Blade or Kinetics if you’re looking to be a mystical fighter. For a leadership role, look at the Pilot’s Commander. And if you are looking to stand strong against all threats, keep an eye on the Scoundrel’s Tenacious ability.",
        xeno_advice:
            "From Worf to D’Argo to Chewbacca, aliens mighty in a fight have been a staple of the space opera genre. The Muscle’s starting ability is significant, but many xenos have strength far beyond that of a normal human. Some may have more limbs, or adaptations for harsh environments. Consider how your xeno heritage might make you a more useful Muscle, and talk with your table about how you want to use your Xeno ability.\n\nEqually interesting are the limitations that your xeno lineage has. These limitations can be ways for you to help your crew generate gambits, or even just add flavor to the story. Does your species hate hot environments, including the forest world of Aketi? What does The Hegemony think of your people?",
    },
    {
        playbook: "speaker",
        id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        summary:
            "Play a Speaker if you want to be the respectable one and use connections to get your way.",
        tagline: "A respectable person on the take",
        overview:
            "Leave the blatant crimes to the rest of the crew. Your forte is the sophistication of polite society and the connections you leverage to get ahead of your next job before you even start. You open doors that might stay closed to the crew, and know just how to talk to powerful people. When things go south, you have a plan or a friend who might help. And afterwards, you know who can smooth things out and keep things under wraps.",
        xpgain: "When you play a Speaker, you earn xp when you address challenges with deception or influence. ",
        playbook_clarification:
            "You’re at your best talking and setting up your teammates. Use the Teamwork maneuvers and Flashbacks to highlight your connections, foresight, and planning.",
        character_questions:
            "Why did you turn to a life of crime? What walk of life did you come from? How much do you still keep in touch with it?",
        starting_actions: "Consort 2, Command 1",
        build_suggestions:
            "Smooth talker. Study +1, Command +1, Sway +2. Subterfuge.\nShip owner. Helm +2, Skulk +1, Sway +1. Favors Owed.\nSpy. Hack +1, Skulk +2, Sway +1. Infiltrator.\nCounselor. Doctor +2, Study +1, Scramble +1. Heart to Heart.",
        starting_ability: "air of respectability",
        starting_ability_summary:
            "You get an extra Downtime activity to Acquire Assets or Lay Low.",
        items_description:
            "Your connections give you a continuous stream of material and people that you can use to smooth things over after your escapades.",
        starting_ability_clarification:
            "Speakers always have a bit of the good stuff stashed away in their room. Sometimes they’re gifts from someone—or for someone. Others may be remnants of their past life. Speakers have a wide array of items they can bring to bear for The Job. And if they’re a little classy, all the better.",
        playing_advice:
            "A good Speaker relies on timing, context, and connections. It’s not just what you can do, but who you know. You’re best in social situations because you have wider access to society and influencers. It can also be fun to keep your past a mystery from the other PCs and reveal it through The People you meet and how you interact with them.\n\nA Speaker’s friends are defined more by who they are than what they do—Guild members, diplomats, etc. This leaves the question of how you know them and the relationship you have with them very open. Collectively, they can get you almost anything you need. Hold off before you define your fifth friend until an opportune moment in the story. Even better if that friend is an established NPC, like the Pirate Queen or Governor Malklaith himself!\n\nThe Speaker has the widest variety of items in terms of gear. Their luxury items are often more form than function, but out in Procyon they can mean a lot to those you share them with. Defining these items on a job is not a flashback, provided they fit into the category of luxury item, so look for opportunities to work them into the story.\n\nFor actions, take study if you want to read The People you’re meeting, or skulk and hack if you like leveraging connections to get on the inside and influence The Job from the shadows.\n\nFor Veteran abilities, consider the Stitch’s Book Learning to reflect a high society upbringing. The Mechanic’s Hacker ability will help those infiltrators that like going into well-guarded places. And the Mystic’s Psy-Dancing can help those Speakers looking for a little extra push when words alone don’t work.",
        xeno_advice:
            "Aside from diplomants, xeno Speakers are somewhat unusual in The Hegemony. Amongst the Syndicates, xenos are far more accepted, and in some, even preferred.\n\nSpace adventure has plenty of examples of natural empaths, species with advanced cognitive functions, or even protocol robots that serve as Speakers for their crew. When considering your xeno heritage, think about how your species communicates and work with your GM to figure out how those styles of Communication might manifest in play. Talk to your table about what they expect the limits of these abilities might be—one table may be completely comfortable with telepathy, while that may be too magical for another.",
    },
    {
        playbook: "pilot",
        id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        summary: "Play a Pilot if you want to be a daredevil at the wheel and widely traveled.",
        tagline: "A ship-handling wizard and danger addict",
        overview:
            "You are the crew’s speed demon and “get out of trouble” card. When the chips are down and the Legion is on your tail, there’s nobody else they’d rather turn to. There’s no vehicle you can’t overdrive, no canyon on an alien planet you can’t navigate through. You might be a hot-rodding show-off or calm and cool behind the helm. You might take desperate risks or thrive when the chips are down. But you’re always ahead of the pack.",
        xpgain: "When you play a Pilot, you earn xp when you address challenges with speed or flair.",
        playbook_clarification:
            "If it drives, punch the gas. If it flies, see if you can do a barrel roll. It’s your show.",
        character_questions:
            "How’d you get so good with ships? What’s the most risky stunt you’ve pulled off—and who knows about it? How did you get an Urbot? Are you fearless, or just very, very good?",
        starting_actions: "Helm 2, Rig 1",
        build_suggestions:
            "Glory hound. Scramble +2, Scrap +1, Sway +1. Exceed Specs.\nThrillseeker. Scramble +2, Command +1, Sway +1. Punch it!\nCaptain. Scrap +1, Command +2, Consort +1. Commander.\nGunslinger. Study +1, Scrap +2, Command +1. Keen Eye.",
        starting_ability: "ace pilot",
        starting_ability_summary:
            "You have Potency on all speed-related rolls. When you roll to resist the Consequences of piloting, gain +1d.",
        items_description:
            "Your Potency might be balanced out by their better quality (if their ship engines are better than yours, for instance). Remember that the Consequences of piloting are not always ship Damage but can often be resisted just the same.",
        starting_ability_clarification:
            "Things every pilot needs when flying, having adventures when not flying, and when celebrating success for all of the above.",
        playing_advice:
            "Those who spend their lives driving ships across the vast expanses of space, running from pirates and Hegemony forces alike, have a need for speed. You have a unique ability to push into and past danger, relying on your skill and your ship to come through in the end. Whereas the Mechanic may be what keeps The Ship in shape, you’re what gives the ship purpose. More than a few Hegemony holo-vids have been about a hotshot pilot and their ship.\n\nAs the Pilot, you’ll be of central focus when The Ship needs to be maneuvered on The Job. But helm is not confined to ships alone. A dirt bike, hovercar, even an alien beast being ridden can be helmed just as well. Whatever your getaway vehicle, helm has you covered.\n\nWhere did you pick up your piloting skills? Did you fight for the Legion but ran into trouble with the law? Have you grown up amongst racers and always loved the spotlight? Perhaps you quit a respectable job hauling ice for a bit more excitement. Remember to bring those influences into your descriptions of piloting. Talk about the crisp military maneuvers you use to shake a pirate or The Way you vent storage in order to correct a hard burn.\n\nWhile helm handles most piloting actions, consider how you might move fast in other ways. Perhaps Scramble when you’re on foot, and sway for fast-talking.\n\nFor Veteran abilities, consider picking up the Mechanic’s Fixed ability to keep your ship safe in fights. For total speed-demons, look at the Scoundrel’s Daredevil ability.",
        xeno_advice:
            "Xeno Pilots are usually associated with xeno ships. If you pursue the option, ask your GM about modifications that you might be able to make to your ship, or unusual upgrades your people might have access to. When developing your people, think of ways their piloting might be affected by having uncommon senses (perhaps they can see gravity or other spectrums), or unique ways of interfacing (such as direct neural connections).\n\nAlso think about how those adaptations may make it difficult for you in other contexts. If you have electrical impulses that manifest when you manipulate a device, perhaps you’re not one to have around sensitive computer arrays. At the GM’s discretion, such limitations may grant you the gambits you’ll need for your inevitable daring escapes (see Xenos in Play).",
    },
    {
        playbook: "mystic",
        id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        summary:
            "Mystics are good at dealing with The Way. Play one if you want to use Artifacts and weird powers.",
        tagline: "A galactic wanderer in touch with The Way",
        overview:
            "While your powers make you a force to be reckoned with in Procyon, far more important is your ability to understand and deal with The Way and all things tied to it. From handling Ur Artifacts to calming strange creatures in the dead of space, a Mystic makes life on the rim substantially safer.",
        xpgain: "When you play a Mystic, you earn xp when you address challenges with wisdom or The Way.",
        playbook_clarification:
            "This will naturally push you towards the unknown and inexplicable. When things get weird, that’s your moment to find answers.",
        character_questions:
            "How did you come by your understanding of the Way? Does your path have any special creed or curious practices? How long have you been traveling?",
        starting_actions: "Attune 2, Scramble 1",
        build_suggestions:
            "Wandering warrior. Study +1, Scrap +2, Command +1. Psy-Blade.\nMystic healer. Doctor +2, Study +1, Consort +1. Visions.\nWay ghost. Scramble +1, Skulk +2, Sway +1. Kinetics.\nMentalist. Skulk +1, Consort +1, Sway +2. Psy-Dancing.",
        starting_ability: "The Way",
        starting_ability_summary: "You can spend a gambit instead of paying any Stress cost.",
        items_description:
            "Any time you need to spend Stress, you may spend a gambit instead. This includes resistances and push costs. For abilities that have a variable cost, such as Sundering, those additional costs are all part of the same activation, so the push and all additional features together only costs one gambit.",
        starting_ability_clarification:
            "Mystics often have complex rituals and customs concerning the Way, and hence tend to carry more gear tied more to their practices. Many of their belongings are tied to their training or the price they pay for their dedication to it.",
        playing_advice:
            "Many kinds of Mystics wander the sector. Since there are numerous conflicting theories about The Way, mystic orders spring up around strong opinions about how the universe works. Think about how you access and perceive The Way and the forces you control. Do you connect to Way lines that crisscross the galaxy? Or use a focus of ancient symbols and embedded Ur artifacts?\n\nHow did you learn the techniques and secrets that have unlocked your access to the Way? Some Mystics are changed by exposure to Ur Artifacts or Way creatures. Others train for years in secluded monasteries, or in Hegemony-sponsored Cults.\n\nYour crew will rely on you to be their interpreter of the Way. When your crew comes across strange disturbances, filter your explanations through your theories about The Way. Look for experiences that challenge your beliefs of how The Way acts, and grapple with your new understandings. These obstacles bring life to the unusual. Remember that while there might be wild and fantastical things in Precursor ruins, The Hegemony also uses Ur Artifacts in some everyday things (like Urbots and jump drives).\n\nFor actions, if you intend to be a Mystic fighter, you’ll want to pick up scrap, or sway and Consort for those looking to go the more mental route.\n\nGood Veteran abilities to consider might be The Pilot’s Traveler ability for wandering Mystics, or Muscle abilities for Psy-Blade-wielding Mystic warriors.",
        xeno_advice:
            "The sector is rife with species that are uniquely attuned to The Way. Some claim ancestry to the Ur, while others claim evolution on a Way-ridden planet. Regardless, as a xeno Mystic, you’re giving up a key starting ability, and should consider how it influences your development as a Mystic. Work with your GM and table to define special abilities and permissions for the specific mystic tradition of your people. For example, look at the Memish mystical abilities.\n\nBecause The Way is carefully controlled, The Hegemony is leery of species with a greater than normal Command of The Way. Entire xeno populations have been eradicated for Way manipulation the Cults deemed heretical. Are you a last remnant of one of these species? Is your very existence a crime?",
    },
];
const friends = [
    {
        id: "197c0093-654f-4682-9228-21cad1662c71",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        type: "INFLUENTIAL FRIENDS",
        name: "Je-zee",
        description: "a diplomat. Were you from allied factions, or of opposing goals?",
    },
    {
        id: "2109c93e-ce21-4263-bb29-2907b3258f05",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        type: "WEIRD FRIENDS",
        name: "Blish",
        description:
            "a fellow mystic. Walking the same path or with wildly different beliefs about the Way?",
    },
    {
        id: "283caa6d-2081-4b68-9706-9c498fb6af95",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        type: "INFLUENTIAL FRIENDS",
        name: "____.",
        description:
            "Write in someone from your past when so inspired. If you gain the ability Old Friends, extend this list whenever you land in a new place.",
    },
    {
        id: "2dae8fee-fe1c-404d-8950-f1db936395a4",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        type: "FAST FRIENDS",
        name: "Choss",
        description:
            "a professional racer. Do you have hot tips for each other? Or are you always striving to outdo each other?",
    },
    {
        id: "354de4e1-8f73-4183-b0e7-9ed49e85e026",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        type: '"FRIENDS"',
        name: "Jal",
        description:
            "a ship mechanic. Have they always helped you with your ship? Or is The Ship theirs, and they want their due?",
    },
    {
        id: "383c05f6-df17-4f95-b996-bdd8f4f1192b",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        type: "DEADLY FRIENDS",
        name: "Yazu",
        description:
            "a crooked cop. Family to cover up your tracks, or someone who still hunts you for getting them in trouble?",
    },
    {
        id: "3c179ad9-74c5-424a-8c1f-261c2bc51e49",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        type: "FAST FRIENDS",
        name: "Yattu",
        description:
            "a gang boss. Did you use to fly for them? Did you leave them in the lurch on a job?",
    },
    {
        id: "3dcecba0-31ad-47df-8fd1-990b09089a5c",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        type: "DEADLY FRIENDS",
        name: "Shod",
        description:
            "a weapons dealer. A mentor or former partner who cashed out? Someone you owe?",
    },
    {
        id: "3f63cb3b-b289-43b9-9759-ffb2461c22e5",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        type: "WEIRD FRIENDS",
        name: "Rye",
        description: "an unrequited love. Was it your training and customs that got between you?",
    },
    {
        id: "46c591ee-f4cd-4f8c-bc3a-159d2a889073",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        type: '"FRIENDS"',
        name: "Ora",
        description: "an info broker. Always coming to you with juicy tips?",
    },
    {
        id: "4dc37057-71e2-4d6b-8b20-09b257534167",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        type: "COLORFUL FRIENDS",
        name: "Len",
        description:
            "a black market dealer. Do they get you the parts no one else can? Did you fail to deliver something you promised?",
    },
    {
        id: "518c2ec0-7eb7-4925-a44c-56d83871ba48",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        type: '"FRIENDS"',
        name: "Nyx",
        description: "a moneylender. Are you a favorite client? Or a deadbeat with a debt?",
    },
    {
        id: "6037282c-bf73-43f1-8422-fe0a07cde52a",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        type: "INFLUENTIAL FRIENDS",
        name: "Arryn",
        description:
            "a Noble. An old friend or relative? Or someone you overstepped your bounds with?",
    },
    {
        id: "70201cb5-8c56-40cc-879f-ead56054787e",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        type: '"FRIENDS"',
        name: "Rhin",
        description:
            "a smuggler. A trustworthy source that passes on tips? A rogue that came up in the ranks with you? Or a rival in your line of work?",
    },
    {
        id: "76ae55bc-1ebc-4341-9735-0e50b46364ba",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        type: "FAST FRIENDS",
        name: "Mav",
        description:
            "a former mentor. What tricks did they teach you? Are they now jealous of your skill?",
    },
    {
        id: "770e1306-d967-4f36-9912-e423a9e4d6d9",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        type: '"FRIENDS"',
        name: "Battro",
        description: "a bounty hunter. Have they let you go before? Are they looking for you now?",
    },
    {
        id: "78df709d-fb55-4faa-9c50-0282db595af3",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        type: "FAST FRIENDS",
        name: "Meris",
        description:
            "a scoundrel. Have you been on jobs together? Have they double-crossed you before?",
    },
    {
        id: "7bcb5e02-7ae6-4fa1-8b01-e363b159877a",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        type: "WEIRD FRIENDS",
        name: "Laxx",
        description:
            "a xeno. Unusual friend or a dangerous foe? Way sensitive, or your “normal” friend?",
    },
    {
        id: "80e93f9b-3673-49ae-b23f-973868c20eba",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        type: "FAST FRIENDS",
        name: "Triv",
        description:
            "a ship mechanic. Have they always helped you with your ship? Did you “forget” to pay them for a big upgrade?",
    },
    {
        id: "83d26ebb-53d0-4be0-a1aa-195d4d9ee5ca",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        type: "INFLUENTIAL FRIENDS",
        name: "Kerry",
        description: "a Doctor. Do they always treat you? Or did you break their heart?",
    },
    {
        id: "85560150-7959-4daa-8f68-d3f37f75c905",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        type: "OLD FRIENDS",
        name: "Lynie",
        description:
            "a hospital admin. An old boss? Did they get in trouble for something you did?",
    },
    {
        id: "9bb9a26c-5d08-4606-ae05-f6295a861e0d",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        type: "COLORFUL FRIENDS",
        name: "Stev",
        description:
            "a gambler of ill repute. Are you long-standing friends? Did you cheat at their table?",
    },
    {
        id: "aa17698f-5686-431a-8045-3dbdbb30a51e",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        type: "OLD FRIENDS",
        name: "Juda",
        description:
            "a Doctor. Do they still help you? Or was this an old rival who wants you punished for unlawful practice of medicine?",
    },
    {
        id: "b35e0438-70af-4b4a-bcd0-4ef992f35fbb",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        type: "COLORFUL FRIENDS",
        name: "Kenn",
        description:
            "a family member. Are they also a mechanic? Were you both vying for a parent’s attentions?",
    },
    {
        id: "b3688466-ad7f-427e-b3c1-a992f3df323e",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        type: "DEADLY FRIENDS",
        name: "Krieger",
        description:
            "a blaster pistol. Is this your favorite sidearm? Or is a rival carrying it to use on you?",
    },
    {
        id: "b98fbb51-be30-48ce-9eef-382571a56140",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        type: "WEIRD FRIENDS",
        name: "Hicks",
        description:
            "a mystic goods supplier. A reliable supplier of Vosian crystals, or a callous opportunist preying on your faith?",
    },
    {
        id: "bc237bf5-3164-41f6-9ba7-60d70421c28b",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        type: "WEIRD FRIENDS",
        name: "Horux",
        description:
            "a former teacher. Do you go to them for advice even now? Or do they feel you’ve misused their teachings?",
    },
    {
        id: "be837e95-80eb-48ac-9d19-b77aced14572",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        type: "COLORFUL FRIENDS",
        name: "Nisa",
        description: "a previous employer. A captain or a business owner? Did it end well?",
    },
    {
        id: "c52e6d1c-36d6-4888-bf0b-251ecbc3d8cc",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        type: "OLD FRIENDS",
        name: "Jackev",
        description:
            "a drug dealer. Legitimate hookup or feeding a vice? Or did you cut into their profits?",
    },
    {
        id: "d2bd40fb-ae56-4d1d-b90f-e5cd17c2280f",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        type: "COLORFUL FRIENDS",
        name: "Slice",
        description:
            "a junkyard owner. What parts do they save for you? Or did you boost something of theirs?",
    },
    {
        id: "d97743f8-fc83-4265-b327-d51ce08bd416",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        type: "INFLUENTIAL FRIENDS",
        name: "Manda",
        description: "a Guild member. Do you get the inside scoop? Or did you steal Guild secrets?",
    },
    {
        id: "e1c1930f-e547-41bb-bb52-defac8362ee2",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        type: "DEADLY FRIENDS",
        name: "Aya",
        description:
            "an assassin. An old lover still fond of you? A heart spurned? Or are you the target that got away?",
    },
    {
        id: "eee88ec7-112c-472a-8457-16ae841472b1",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        type: "OLD FRIENDS",
        name: "Alben",
        description: "a former patient. What did you treat them for? How can they help you now?",
    },
    {
        id: "f274e11c-83e5-43bc-876d-b3af672ab170",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        type: "OLD FRIENDS",
        name: "Ditha",
        description:
            "a family member. Are they supportive of your work? Or are they trying to get you to come home?",
    },
    {
        id: "f5ba6747-ddf4-4273-81d7-0ac433f0955a",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        type: "DEADLY FRIENDS",
        name: "Chon-zek",
        description: "a bounty hunter. Former partner? Or a competitor from the same background?",
    },
];
const specialAbilities = [
  {
    id: "018ba9b7-193b-4661-912b-b8b43144200e",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "CONSTRUCT WHISPERER",
    description: "Machines speak to you when you study them. The first time you roll a critical while fixing or building a particular machine, you may add a simple modification to it (see Crafting).",
    clarification: "How do machines whisper their secrets to you? Is it intuitive? Do you feel what they feel? You do not gain the modification if you improve the result with cred."
  },
  {
    id: "04f54f6e-77ff-42c0-94ba-ebc06c7d83f1",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "TRAVELER",
    description: "You’re comfortable around unusual cultures and xenos. You gain Potency when attempting to Consort with or sway them.",
    clarification: "While any character can have had some experience with specific xeno cultures, this ability represents a wide swath of experience and understanding. Whether you come across as deeply respectful or you just know what buttons to push, you are more effective than would be expected."
  },
  {
    id: "0a2dee28-eb98-45c6-b108-7514eefe3c5d",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "PURPOSE",
    description: "You may expend your special armor to push yourself when outclassed by your opposition, or when under the effects of wounds. When you resist with resolve, gain +1d.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. Being outclassed may be through quality, power, or scale. Being under the effect of wounds means acting with a harm penalty, though you may use this push to ignore the harm penalty (as per pushing yourself). If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "0cb578dd-43f2-4ccc-972e-4fb7035d400c",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "PLAYER",
    description: "You always know when someone is lying to you.",
    clarification: "This ability works in all situations without restriction. It is very powerful, but also a bit of a curse. You see though every lie, even the kind ones."
  },
  {
    id: "1161e2ee-d984-4c68-b61e-54f63ac4bf2c",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "DISARMING",
    description: "Whenever you use a gambit while speaking, hostilities and danger also pause while you speak.",
    clarification: "You still gain +1d for whatever roll you need to make to explain yourself, likely Consort, sway, or Command."
  },
  {
    id: "1277b443-5f04-4dff-a4a7-53fef2739484",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "WARDED",
    description: "You may expend your special armor to resist the Consequences of a Way attack or artifact use, or push yourself when using mystic powers.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "12967fee-5d61-4cb4-8d30-0f8d8473b782",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "SCARY",
    description: "You have an air of menace and danger obvious to even the most unobservant. You gain Potency when trying to intimidate someone. If done immediately after a show of force, also take +1d.",
    clarification: "You instill fear in those around you, particularly when you get violent. How they react depends on them. Some will flee from you, some will be impressed, some will get violent in return. The GM judges the response of a given NPC.\\n\\nIntimidation is usually handled with a Command roll, and your efforts to do so are more successful if you show you mean business."
  },
  {
    id: "14270291-a5a9-4321-ae80-144664b6e5b5",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "FAVORS OWED",
    description: "During Downtime, you get +1d when you Acquire Assets or Lay Low. Any time you gather info, take +1d.",
    clarification: "Using your authority, connections, or inside information, you get better information and access to better resources."
  },
  {
    id: "23420375-3129-4041-93d2-4bb3843c4285",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "FLESH WOUND",
    description: "If you’re wounded at the beginning of Downtime, mark +3 segments on your healing clock. When you push yourself to ignore wound penalties, it takes only 1 Stress (not 2).",
    clarification: "Whether naturally tough or augmented in some way, wounds don’t keep you down. See Recover for more information."
  },
  {
    id: "23829b33-ee62-4cb4-a01d-9a5308a18104",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "LEAF ON THE WIND",
    description: "When you push yourself, you may spend +1 Stress (3 Stress total) to gain both +1 effect and +1d instead of one or the other.",
    clarification: "Normally it takes two separate pushes (4 Stress total) to achieve the same effect. This can be used on any roll."
  },
  {
    id: "25b50026-a3a4-4e5b-a1fd-004af300e4b4",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "OLD FRIENDS",
    description: "Whenever you land in a new location, write down a friend you know there (under Influential Friends on your playbook sheet).",
    clarification: "As with your starting Influential Friends, you may extend your list of friends the first time you land in a new location."
  },
  {
    id: "2c7da9ad-0a1c-4b6c-b19f-9a2a30b9a8ab",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "UNDER PRESSURE",
    description: "Add a gambit to the pool whenever you or a crew member suffers level 2 or greater harm.",
    clarification: "In order to gain the gambit, the resulting applied consequence must be level 2 or greater—if it is resisted or reduced below that level, you do not gain the gambit."
  },
  {
    id: "30f79c67-02e9-450d-8933-6b293f21d70d",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "I KNOW A GUY",
    description: "When you first dock at a port after being away, pick one and ask the GM about a job: it’s not deadly—it pays well enough—it’s not a rush job—it comes from a faction you trust—it targets an enemy you have. You may spend 1 cred per additional feature.",
    clarification: "Though you keep an ear to the ground, sufficient time has to pass for new jobs to crop up at a port (usually a Downtime or two). The GM will tell you how you hear about the work; it might be a publicly available bounty or something a contact reaches out about."
  },
  {
    id: "3b55e8b3-64e7-4f00-a68d-d0c90336c400",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "SHOOT FIRST",
    description: "When you attack from hiding or spring a trap, take +1d. When there’s a question about who acts first, the answer is you (two characters with Shoot First act simultaneously).",
    clarification: "To attack from hiding, your target must be unaware of you. If you’re springing a trap, your target must be unaware of the trap."
  },
  {
    id: "4bd527d0-77e6-46e3-8a57-afe94ad37996",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "OVERCLOCK",
    description: "When you spend a gambit on a rig roll to Repair or upgrade, treat the system you worked on as 1 quality higher for the remainder of The Job.",
    clarification: "You may make a rig roll during a job to simply to get more out of a system, but such temporary boosts are only situational and need to be backed out the next time you hit drydock. You can overclock systems that aren’t ships, enhancing the system’s quality."
  },
  {
    id: "4fef00e5-aabb-4dfe-9c59-fa5dfea764cd",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "PHYSICKER",
    description: "You may study a malady, wounds, or corpse, and gather info from a crime scene. Also, your crew gets +1d to recovery rolls.",
    clarification: "This ability often represents formal training, giving you a way to forensically understand a corpse or scientifically deconstruct a malady. The bonus to recovery for your crew only applies if you help treat wounds or injuries at any point during the recovery."
  },
  {
    id: "50c935f7-1515-4dff-a5fc-3e042baae9b4",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "TENACIOUS",
    description: "Penalties from harm are one level less severe (though level 4 harm is still fatal).",
    clarification: "When harm penalties are applied to action rolls, treat them as one level less than you’d expect, so level 1 harm is ignored, and level 3 harm is -1d. Level 4 harm, also called lethal harm, is still lethal unless you can use armor or a resistance roll to reduce it first."
  },
  {
    id: "5272ed19-090e-448e-8a1e-0ef5da57e51b",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "NEVER TELL ME THE ODDS",
    description: "You generate gambits on desperate rolls. You may also generate gambits even if you spent a gambit.",
    clarification: "Normally you only generate gambits on risky rolls for which you have not spent a gambit. Your ability to “stretch” gambits, regenerating them on rolls you have already spent them on, gives you the ability to put yourself in situations others might not even want to consider."
  },
  {
    id: "619137a6-203b-4409-b2a9-5e71fc672ffc",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "KINETICS",
    description: "You can push yourself to do one of the following: use The Way to throw a table-sized object with dangerous force—propel yourself briefly with superhuman speed.",
    clarification: "Dangerous force means fast enough to severely injure a normal person. Superhuman speed means fast enough that you’re barely more than a blur. Your reach is about the size of a large room. Yes, people can count as objects."
  },
  {
    id: "64f3e96a-8c97-4643-983e-2d7e71ba9a87",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "WRECKING CREW",
    description: "Your strength and ferocity are infamous. When striking in melee, you gain +1d. Whenever you spend a gambit in combat, you also gain +1 effect on that action.",
    clarification: "Whether you are a master of a martial arts, or raised by Mystics to fight with antique weapons, your martial prowess in close combat is legendary (and may attract those that wish to learn from or challenge you).\\n\\nIf you spend a gambit in combat, take +1 effect on that action. This can hit a single opponent harder or offset penalties from scale or quality. This also stacks with the +1d from the gambit and the +1d from the core Wrecking Crew ability."
  },
  {
    id: "654daf47-a487-4ed6-9d65-9e4a5a979867",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "PSY-BLADE",
    description: "You can focus Way energy into your melee weapon. While charged, the weapon can cut through non-shielded materials with ease, and you gain Potency on your melee attacks.",
    clarification: "Heavy metal plates are non-shielded, so you can cut through most doors without trouble. Shielded constructs are rare, but they offer enough protection that this attack would lose its Potency. You cannot infuse your fists with Way energy (or gloves, brass knuckles, etc.)."
  },
  {
    id: "67227801-d08e-4100-bb1d-e75fcd70f30d",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "COMMANDER",
    description: "Whenever you Lead a Group Action, gain +1 scale (for example, a small group counts as a medium group). If you lead a group action in combat, you may count multiple 6s from different rolls as a critical.",
    clarification: "A group action is one where multiple PCs perform the same action and roll their respective pools for those actions (see Lead a Group Action). If you already have scale on your opponent, you gain an additional scale (and therefore level of effect). If two or more players roll a 6, then the result of the roll for everyone is a crit. You must still suffer Stress costs from any participant whose result is a 1-3."
  },
  {
    id: "69389148-5ed4-4c89-aedf-7f20193c3ab9",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "WAY SHIELD",
    description: "You can block blaster bolts with The Way (resist with resolve). If you resist a blaster attack, you may spend 1 Stress to redirect fire and make an attack of your own with it.",
    clarification: "Resisting blasters in this way usually reduces the harm to zero."
  },
  {
    id: "6a14ee42-7dea-402a-b0e4-9d306ba43a51",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "DAREDEVIL",
    description: "When you make a desperate roll, you may take +1d. If you do so, do not mark xp in that action’s attribute.",
    clarification: "You need to make the decision before your roll. You may only take this extra die if the final position of the roll is desperate, so if you use a setup to change the position to risky, for example, you may not take the extra die."
  },
  {
    id: "6ea5354a-c894-42a0-9bbb-e607cc4ef1dd",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "KEEN EYE",
    description: "You have sharp eyes and notice small details many might overlook. Gain +1d when firing ship guns or making trick shots.",
    clarification: "This can be used as a basis for resistance rolls to act first. “No, I want to act before him—I would’ve seen him reaching for the gun.” Also, trick shots can be performed with almost any kind of ranged weapon, not just ship weapons."
  },
  {
    id: "7e20cc37-bf0e-4086-8db3-53c516253cfc",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "MECHANIC’S HEART",
    description: "When you speak from your heart, your words can reach even the most hardened criminal, and you gain Potency.",
    clarification: "This ability works in all situations without restriction. As long as you speak genuinely and sincerely, your words will be heard."
  },
  {
    id: "8454b56b-b18a-45b6-871d-862895a8cd53",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "WELCOME ANYWHERE",
    description: "While wearing your medic garb, you are welcome even in dangerous places. Gain +1d to Consort and sway when offering to tend to anyone in need.",
    clarification: "When you choose to be, you’re recognizable as a medic, and of value to those living the hard life of Procyon."
  },
  {
    id: "89237254-443e-4d72-add8-6780562e24b3",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "INFILTRATOR",
    description: "You are not affected by quality or Tier when you bypass security measures.",
    clarification: "This ability lets you contend with higher-Tier enemies on equal footing. When you’re hacking an electronic security system, picking a lock, or sneaking past elite guards, your effect level is never reduced due to superior Tier or quality level of your opposition."
  },
  {
    id: "8da36821-7a6c-4174-b6a1-08f57bea5a40",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "DEVIL’S OWN LUCK",
    description: "You may expend your special armor to resist the Consequences of blaster fire, or to push yourself when talking your way out of (or running from) trouble.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. Blaster fire can extend to pistols and being shot in any way, and running from trouble can be via spaceship as much as your feet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "92e7708c-635e-4e4c-bd1e-38783e642231",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "BAILING WIRE AND MECH-TAPE",
    description: "You get an extra Downtime activity to Repair, and the Repair activity costs you 0 cred.",
    clarification: "The Repair Downtime activity usually takes 1 cred to perform. With this ability, you can take the activity at no cred cost. The free repairs can’t be “saved up.” You get one per Downtime."
  },
  {
    id: "938cc9c2-417a-425c-9794-f9a5b65dc1c5",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "HACKER",
    description: "You may expend your special armor to resist the Consequences of hacking, or to push yourself when hacking or gathering info electronically.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "9acbd538-2ff9-4cc9-be95-a51a517bef83",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "ANALYST",
    description: "When you hack a system, you may also ask a question about the owner or location of the system as though you had rolled a 6 on gather info. When you resist the Consequences of hacking, roll +1d.",
    clarification: "Regardless of the purpose for which you are hacking, you learn something about the systems you’re manipulating. If you were Gathering Information, you may roll to learn a second thing, or you can simply accept the 6 for what you wanted to know."
  },
  {
    id: "a21c5162-d52d-4c46-b5f5-41954218e5b1",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "COMBAT MEDIC",
    description: "You may expend your special armor to resist any consequence while tending to a patient. When you Doctor someone in combat, clear 1 Stress.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. When you resist Consequences, they can be for yourself, as a result of one of your rolls, or to Protect the patient. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "a9153de3-e87b-4479-b7d8-978947033214",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "EXCEED SPECS",
    description: "While onboard a ship, you may Damage a ship system you have access to in order to gain +1d or +1 effect to a roll.",
    clarification: "Overload a system for a short-term boost. The system’s quality is still the same for the one roll you’re boosting. After the roll, the system fries out and the quality is reduced."
  },
  {
    id: "a9d05098-4c50-4a48-94d7-1e35a7fa1ab2",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "HEDONIST",
    description: "When you indulge your vice, you may adjust the dice outcome by +/-2. An ally who joins you may do the same.",
    clarification: "Any ally must join you in whatever vice you’re indulging (or you can indulge via a crew ability, such as the Stardancer’s Home Cooking). You can adjust the outcome by less than 2, or not adjust it at all. You can also Recover more than 6 Stress on a vice roll this way."
  },
  {
    id: "ad787459-489e-43a2-a551-9992b835e87f",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "Ask Questions LATER",
    description: "When you Consort to gather info, you gain +1 effect and can in addition ask: Who might this benefit?",
    clarification: "When you ask your own question, you learn the answer to that, as well as to the question “who might this benefit?” Since you gain Potency, the worst a normal gather information roll can produce would be standard results."
  },
  {
    id: "ae8b889d-5750-40d1-bf62-aed8449468d8",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "BOOK LEARNING",
    description: "You speak a multitude of languages and are broadly educated. Gain +1d when using study during a Downtime activity.",
    clarification: "Communication is almost never an issue for you. Additionally, you have a background in almost every academic subject that might come up, and can use gather information checks to find out what you might have learned in those studies."
  },
  {
    id: "b62127c0-6b38-480d-b6aa-edbba1b152ca",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "VISIONS",
    description: "Spend 1 Stress to remotely view a distant place or person tied to you in some intimate way. Spend 1 Stress for each extra feature: it lasts for a minute rather than a moment—your target can also see and hear you—you may see something only familiar to you, not intimate.",
    clarification: "Spending a gambit with your starting ability (“the Way”) covers all costs. When your target can also see and hear you, you are both within the same “area,” for the purposes of other abilities."
  },
  {
    id: "b6e93062-f241-4000-8c0a-90ef6e939dfb",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "PREDATOR",
    description: "Take +1d to rolls against weakened or vulnerable targets. Whenever you gather information on a weakness or vulnerability, the worst you can get is a 4/5 result.",
    clarification: "You know how to leverage fear, pain, and vulnerability to get your way. When trying to suss out such things in a person, you usually come up with something, even if the information isn’t immediately useful or is incomplete. Someone in a vulnerable state might be drugged, trusting, badly wounded, or frightened."
  },
  {
    id: "b82fb753-bd0c-4eee-a6df-e8c67b724c23",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    name: "WHEN THE CHIPS ARE DOWN",
    description: "You gain a second use of special armor between each Downtime.",
    clarification: "This allows you to use a second special armor OR use the same special armor twice."
  },
  {
    id: "b9d99380-3487-4ad9-8756-42532476e3f6",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "READY FOR ANYTHING",
    description: "When being ambushed, you gain Potency to all actions during a flashback, and your first flashback costs 0 Stress.",
    clarification: "You always expect ambushes and prepare for them. Flash back to such preparation when an ambush happens. If your preparation requires action rolls, you gain Potency on them."
  },
  {
    id: "cbcb111a-1cbe-4d01-abeb-a7b36ba1aee7",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "JUNKYARD HUNTER",
    description: "When you acquire parts or equipment during Downtime, you may either gain two assets or one asset at +1 quality.",
    clarification: "Your junkyard contacts can get what you need refurbished or on special offer. If you gain two assets, they both have the same quality as your roll."
  },
  {
    id: "d1af1d76-7b4a-4723-8df1-0092e89c5170",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "PUNCH IT!",
    description: "When you spend a gambit on a desperate roll, it counts as risky instead.",
    clarification: "Because you spent a gambit on the roll, even though it counts as risky, the roll may not itself generate a gambit (unless you have another ability that says it can). You still gain the +1d to the roll for the gambit, but the position of the roll should be adjusted, as should the Consequences. Bear in mind that this can be used on any roll (not just piloting ones)."
  },
  {
    id: "d4e66e3a-0e45-4f03-94a1-9b8a419a6c40",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "CENTER",
    description: "You gain Meditation as a vice. When you indulge this vice, clear +1 Stress and add Dark Visions as a possible Overindulgence.",
    clarification: "Contemplation of the universe is not without its perils. When you choose Dark Visions as an Overindulgence, The Way shows you a loved one, contact, or friend in great danger."
  },
  {
    id: "d5230701-3a11-4fb2-8125-b3be0e2871f5",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "BACKUP",
    description: "An ally’s push costs 1 Stress (not 2) on any action you set up or Assist.",
    clarification: "The set up and Assist actions (see Teamwork) still grant their bonus dice or effect as usual."
  },
  {
    id: "d5b26e60-e3d6-4d42-821e-05055b1315be",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "MORAL COMPASS",
    description: "When you do the right thing at cost to yourself, mark xp (any category).",
    clarification: "The cost to yourself must be real, though it need not be devastating. Losing a meaningful opportunity, experiencing a setback with a project, or getting into a heated argument with a friend could all count."
  },
  {
    id: "da37cbc5-543f-4419-aa00-1d327f25d9a4",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "PATCH",
    description: "You may Doctor someone during a job to allow them to ignore the effects of a harm penalty.",
    clarification: "A successful roll lasts for The Job. While your patient may ignore the effects of the harm penalty, it does not remove the penalty; there are still fewer boxes for additional wounds."
  },
  {
    id: "db2b3fa0-d8bf-4ee2-bc0c-6c1f0b6726be",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    name: "DR. STRANGE",
    description: "Your research and fields of study are fringe, esoteric, and focus on the mystical. You may always handle Precursor Artifacts safely. When you study an artifact or Doctor a strange substance, you may ask one",
    clarification: "what could this do?—why could this be dangerous?"
  },
  {
    id: "dd2d447f-eb02-4d03-be29-87e3823a4315",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "PSY-DANCING",
    description: "You may push yourself to cloud a target’s mind and sway them in the face of contradictory evidence. “You must do as I say. I am the ambassador.” Spend 1 Stress for each additional feature: they have only vague memories of the event—it works on a small group.",
    clarification: "Such confusions do not persist indefinitely, though those with vague memories will often fill in the missing details with assumptions. “I must’ve checked her badge. I always do.”"
  },
  {
    id: "eaf021a7-1c40-456e-bf57-76549102779b",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "HEART TO HEART",
    description: "When you provide meaningful insight or heartfelt advice that a crewmate follows, you both clear 1 Stress.",
    clarification: "Meaningful advice taken can mean changing someone’s usual course of action, having them take a difficult action that costs them, or causing them to reconsider their choices. If there’s a question about what constitutes meaningful or heartfelt, discuss it as a group and decide together."
  },
  {
    id: "eb5dde4b-3bef-4a48-a91d-430f7a2c44ac",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "BODYGUARD",
    description: "When you Protect a crewmate, resist with +1d. When you take harm, clear 1 Stress.",
    clarification: "The Protect teamwork maneuver lets you face a consequence for a teammate."
  },
  {
    id: "ef49c9f4-8591-49f5-9e84-a224556f34d4",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    name: "FIXED",
    description: "You may expend your special armor to resist a consequence from machines breaking or being damaged, or to push yourself when repairing or building a machine.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. Machines can include your ship, so you can use this as special armor for your ship if you are onboard dealing with the Damage. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "f22d0ae9-a8af-4508-a31b-12dada6d0050",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    name: "SIDE JOB",
    description: "You may spend a Downtime activity in port doing odd jobs. Gain 1 cred. If there are rumors floating about, the GM will tell you of them.",
    clarification: "There may not be any rumors floating about, but the GM should treat this as a gather information roll, where you roll a 6 to learn about whatever is in the news and gossip at that port."
  },
  {
    id: "f7e5f84e-5222-4738-aac2-249c19eea89a",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    name: "SUNDERING",
    description: "You may push yourself to Attune to The Way and twist it, causing psychic harm to anyone in the area vulnerable to your assault. You may spend 1 Stress for each additional feature: it damages instead of stuns—you and anyone you choose get +2d to resist the effects.",
    clarification: "You warp The Way within you, and by extension warp The Way in others—a risky proposition at best. Sundering cannot harm inanimate objects. When causing harm, the symptoms can include short-term seizures and ruptured blood vessels. Those specially trained to resist psychic attacks or are somehow shielded may reduce your effect."
  },
  {
    id: "fa0a79ef-fa75-42c8-bb08-c2a7d52cae5f",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    name: "BATTLEBORN",
    description: "You may expend your special armor to reduce harm from an attack in combat, or to push yourself during a fight.",
    clarification: "When you use this ability, tick the special armor box on your sheet. “Reducing harm” means reducing the harm one level. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job."
  },
  {
    id: "fb915569-8820-470e-8fd1-90d5dcfd8608",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    name: "SUBTERFUGE",
    description: "You may expend your special armor to resist a consequence of persuasion or suspicion. When you resist with insight, gain +1d.",
    clarification: "When you use this ability, tick the special armor box on your playbook sheet. Folks doubting your lies, stories, cover, etc., all count for the purpose of suspicion or persuasion. Your special armor is restored when you select your load at the start of a job."
  }
]
const items = [
  {
    id: "03d818a1-fcce-491d-98fb-0644343fb7b1",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    item: "Small drone",
    description: "Small, remote-controlled drone with cameras. May be able to carry something light. Did you make this or buy it? Does it fly, slither, or crawl? What nickname did you give it? Do you have several Drones on The Ship, or just a bunch of chassis and Repair bits you use to Repair one drone? [0 load]"
  },
  {
    id: "0a469e33-1611-404f-b0d9-0ac4e0b0f77b",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    item: "Fine bedside manner",
    description: "Charm that sets patients at ease. Some Stitches never bother to bring this. Do you know how to relate to many people? Do you share a lot of anecdotes? Do you project a demeanor of confident skill? [0 load]"
  },
  {
    id: "0b291bd4-e641-4895-917d-79251aa7a3e6",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    item: "Memento of a past encounter",
    description: "A distinctive piece of jewelry, a fine blade with a House crest, a signet ring, a small statue. Who are these from, and why do you hold onto them? [0 load]"
  },
  {
    id: "14e22bf6-8d37-433c-a950-8bfd43bfd321",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Sunder",
    description: "a fine vibro-blade. Cuts through almost any material. Decorated. Knife or dueling blade. What Design is etched on the blade? Did you claim it, or rightfully earn it? [1 load]"
  },
  {
    id: "1642f111-aa74-40c1-ad24-b71060196268",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    item: "Fine melee weapon",
    description: "Antiquated weapon that acts as an extension of your body. In the age of blasters, swords and polearms are quaint remnants of culture and custom for the most part. But Way powers seem to interact stubbornly with advanced technology. Each mystic order keeps anachronistic items, and uses them in different ways. Do you have such a weapon? If so, what training have you had with it, and how do you use it? [2 load]"
  },
  {
    id: "16e69915-0add-448e-b6d6-eef4558a8961",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    item: "Recognizable medic garb",
    description: "The common red medic outfit bearing the official white medic seal of The Hegemony. Recognizable from a distance. What are the rules about how medics should be treated in combat? Do medical personnel have legal obligations while so-dressed? [0 load]"
  },
  {
    id: "20d504f5-a891-47df-9e10-2ae1fcce3c6a",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    item: "Luxury item",
    description: "Fine brandies, small but thoughtful gifts, spices and perfumes, fine instruments, popular games, etc. These can come in varied sizes. Each time you bring one of these on The Job, explain what it is and why it’s luxurious. [0, 1, or 2 load]"
  },
  {
    id: "3914f0bb-86b2-40a5-bba0-9620dcde7600",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    item: "Fine customized spacesuit",
    description: "Sweet decals, emergency beacon, some thrust. Will keep you alive in space or when your cockpit gets shot. Lets you move about a bit and maybe even extends jumps in atmosphere. What patches or custom artwork do you have on yours, and what does it mean? [2 load]"
  },
  {
    id: "3c44c07c-8bb1-460b-ba3e-bd82071bdaac",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    item: "Spare parts",
    description: "Usually for ship repairs and electronics. Often forgotten in a pocket or tool belt. Although it’s usually nothing overly expensive, you end up carrying parts you’re working on and pieces for fixing ships. If you ever need a wire, solder, or a piece of tape, you have it on hand. Anything rare or more complex might take a lifestyle roll to have on you. [1 load]"
  },
  {
    id: "43dc8b89-d3ca-41bf-b504-eac9c2e16506",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    item: "Memento of your travels",
    description: "A small statue, outdated currency, a lock of hair, a picture. Who gave this to you, and why do you cherish it? Is it a reminder of a good or bad memory? [0 load]"
  },
  {
    id: "4693e1b5-599a-41c9-9681-61a2dc600600",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    item: "Fine blaster pistol (or matching pair)",
    description: "Customized or strange. Can fire mystic ammunition. What do they fire? Where in your travels did you get them? Did you name them? [1 or 2 load]"
  },
  {
    id: "563b5e82-9f57-47f4-9b4f-a418105a8475",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    item: "Guild license",
    description: "Legit pilot certification (though it may not be yours). Will allow you passage through a jumpgate. How did you get yours? [1 load]"
  },
  {
    id: "6267c40c-80d8-4cd7-83ce-2323d671ff31",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Mystic ammunition",
    description: " A large-caliber shell, designed to be fired from a specialized gun that releases mystic energies when it hits. Grants Potency against mystic targets. Who makes your mystic bullets? Why are they potent against Way energies? [0 load]"
  },
  {
    id: "661d3667-deb3-4a85-ada7-533b8c5f8609",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    item: "Trappings of religion",
    description: "Scrolls, texts, icons, cups and bowls, bells. What sacred objects does your particular order of Mystics bear? How easily recognizable would this be? [1 load]"
  },
  {
    id: "7e3a5970-5ee5-4399-91e4-395658714964",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    item: "Precursor artifact",
    description: "A small object made of ancient materials. Precursor tech. Was this given to you by the Mystics that trained you, found as a child, or something you’ve picked up on your travels? What does it do? Discuss its powers, costs, and side effects with your table (for more on Precursor Artifacts, see here). [1 load]"
  },
  {
    id: "7f1dd042-41b1-4b0b-851b-4dc3b81483e5",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    item: "Vision-enhancing goggles",
    description: "Eyewear with settings for thermal and ultraviolet, and magnification levels in the thousands. Even tints when required. What do they look like? [1 load]"
  },
  {
    id: "854662f4-ffb3-4f42-8efe-b263dfe4bec8",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    item: "Fine clothes",
    description: "Silk sarongs, suits, fine blue capes. You stand out and are always dressed for the occasion. Nobody will mistake these for a disguise. Which outfit is your favorite? [1 load]"
  },
  {
    id: "8ec887d1-5bc8-4032-bece-0e0b03147b1f",
    playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
    item: "Legitimate ID",
    description: "A properly encoded Hegemonic ID indicating your legitimate station in The Hegemony. Who will notice when you use this? [0 load]"
  },
  {
    id: "9250af24-cf6d-4f9e-81d4-e909c011bdd4",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    item: "Fine hacking rig",
    description: "Visualization goggles, unpublished exploits, overclocked non-market chips, optical vampire taps. Hacking is as much about hardware as it is about software. Who maintains your gear? Do you write your own programs or does someone hook you up with the latest? Any decorations on your kit? [1 load]"
  },
  {
    id: "94170ba6-1cc4-45bf-9fee-274bca688d74",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    item: "Forged documents",
    description: "Reasonably well-made facsimiles of documents that would never actually be given to someone like you. Who made these for you? Do you still owe someone for them? Or did you steal them from someone? [0 load]"
  },
  {
    id: "9492172b-176c-41f3-ac61-5e8b37c399bd",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    item: "Offerings",
    description: "A candle, oil lamp, flowers, food, water, incense, pebbles from your journey. Were they gifts, left at a shrine for any mystic to take as they wander, or given in return for a job? [0 load]"
  },
  {
    id: "97555451-056c-4b4b-b87b-dbd312b19d88",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    item: "Mystic ammunition",
    description: "A large-caliber shell, designed to be fired from a specialized gun, which releases mystic energies when it hits. Grants Potency against mystic targets. Who makes your mystic bullets? Why are they potent against Way energies? [0 load]"
  },
  {
    id: "9d7024e8-f2cc-4605-a82f-a7e6b410a645",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    item: "Loaded dice or trick holo-cards",
    description: "Gambling accoutrements subtly altered to favor particular Outcomes. Luck is one of your many skills. Sometimes it just needs a little help though. When’s the last time these got you into trouble? [0 load]"
  },
  {
    id: "a2a58313-7a75-4f72-9e01-0c1c05f0cd4c",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    item: "Fine clothing",
    description: "A suit or outfit for fancy dinner parties and high society. Is this an artifact of your past, or something you’ve picked up for when you need to secure funding for your doctoring work? [1 load]"
  },
  {
    id: "abf570ff-cab3-4e55-af50-d50b1a1ab535",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    item: "Victory cigars",
    description: "Enough to share with a few choice people. What’s the point of pulling off amazing stunts if you can’t celebrate? No guarantee the rest of your crew will appreciate the smell, or won’t turn up the air filters. Where do you get these, and how many do you have left? How rare are they? [0 load]"
  },
  {
    id: "ae459b4c-22aa-44d6-919d-0557db3633f3",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    item: "Fine small Urbot",
    description: "A small Urbot that supports piloting and can carry a few items. Seems eerily sentient. Urbots are supposed to be wiped about once a year. How long has it been since you’ve taken yours in to the Guild of Engineers for such a procedure? What is its designation and what personality quirks does it have? What does its chassis look like, and how does it help you pilot? [2 load]"
  },
  {
    id: "baae5e3a-626f-4079-9d0a-1a687ed9b953",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    item: "Syringes and applicators",
    description: "Syringes, injectors, patch applicators. Many can be palmed easily. Sometimes having drugs on hand also means having to subtly administer them. Are any of these not for medical purposes? [0 load]"
  },
  {
    id: "bc0c6121-ed15-4423-9f66-c7066de9dcc1",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    item: "Fine mechanics kit",
    description: "Hand-held scanners, hull patch kit, assortment of hand tools. Everything you need to patch a vehicle and get it flying again. What tool did you just pick up? Which one did you customize? [1 load]"
  },
  {
    id: "c5b65fac-c423-48ff-ae60-48a9b823cae2",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Zarathustra",
    description: "a detonator launcher. Fires detonators at high velocity. Detonators are illegal, so this generates heat when fired. Can be used to target/damage vehicles and structures. Not subtle. Batteries included, but detonators marked separately. [2 load]"
  },
  {
    id: "cf4a2fcd-59d5-4cf8-b61f-270912e0b4d1",
    playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
    item: "Outdated religious outfit",
    description: "Robes, worn cloaks, sandals, etc. Participants and practitioners of popular and sanctioned Hegemonic Cults often bear well-known insignia of modern manufacture. Was yours passed down? Never replaced? Hand crafted? [1 load]"
  },
  {
    id: "d07ddd4b-164f-4842-9200-9a3a4c1c4a90",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    item: "Fine coat",
    description: "A heavy but well-made and well-kept coat. Distinctive and with a history. Where did you get this coat? Was it a gift, an impulse purchase, or something you won in a bet? Is it decorated with any insignia or logos? Make sure it’s got a memorable look or color. [1 load]"
  },
  {
    id: "d17ed002-ec99-4bd8-b483-ee062eb81dcd",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Vera",
    description: " a fine sniper rifle. A full-bore auto-lock with customized trigger, double cartridge, thorough gauge. It can fire mystic ammunition. Did you customize this yourself, special order it, take it off a body, or is it a gift from someone? [2 load]"
  },
  {
    id: "d32ee990-8ce1-4339-8eaf-d22ff2835a6c",
    playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
    item: "Personal memento",
    description: "A keepsake you cherish. A locket, small holo, music from your homeworld. For someone so tied to the spaceways, what about this memento makes it so important? Who does it remind you of? Why do you still hold onto it? [0 load]"
  },
  {
    id: "da59174a-29a8-4c58-bfd9-e659b9d51808",
    playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
    item: "Grappling hook",
    description: "Small, but mechanized. Can pull you up. Fits in your belt. Makes you look dashing when you swing to the rescue. When did it last break? [1 load]"
  },
  {
    id: "e50cf319-0351-4008-be58-6ec2b02fb675",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    item: "Genius pet",
    description: "Incapable of speaking, but can understand language and Assist with basic tasks. Likes you. Really cute. Anticipates your actions. Is it something familiar (like a dog or a cat) or a small alien creature? What is its name? Who did you get it from (legally or illegally)? [0 load]"
  },
  {
    id: "e6cba708-a8ad-47bc-974f-1d8a715f7e9e",
    playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    item: "Fine ship Repair tools",
    description: "Power-assisted wrenches, a sonic drill, testing probes, power calibrators, a rivet gun. Is this a set of items, or did you pick them up piecemeal? [2 load]"
  },
  {
    id: "e91d64c7-78bf-4781-9a35-5a7bf90b0a37",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Zmei",
    description: "a fine flamethrower. For those times when you really need to heat things up. Settings for regular and extra crispy. Not easy to hide. Attacks cover the area of a small room (and leave distinct scorch marks that may result in additional heat). Complications when getting shot may include the fuel tanks rupturing. What sweet decals or marks does it have? [2 load]"
  },
  {
    id: "ee1e39b5-c8f7-4fdd-85fc-d074439d9061",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Krieger",
    description: "a fine blaster pistol. As a friend or ally, this signature pistol can be used during Downtime to threaten or intimidate. As an enemy, someone else owns it and it’s carrying a bullet for you. You know this gun intimately\u00ad—from where or why? [1 load]"
  },
  {
    id: "f542e6b5-dc73-4a16-a0c4-d3eb89fa4f5b",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    item: "Fine medkit",
    description: "Better stocked than the standard. Skin staples, diagnostic hand scanners, synthflesh, bone stabilizers, spray hypos, antivenom (for dangerous alien beasts), and a wider selection of drugs. Are there any distinctive markings on your medkit? [2 load]"
  },
  {
    id: "f5d1d64d-f815-4c5e-a91b-87f5a2c85ab6",
    playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
    item: "Candies and treats",
    description: "For those extra brave customers. Do you indulge in them as well? Have you ever disguised a sedative as one to subdue someone? [1 load]"
  },
  {
    id: "fa6bd745-2c53-43e5-ac18-0efa14d8be59",
    playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
    item: "Fine martial arts style",
    description: "Your own custom blend of combat techniques, unique as a fingerprint. Where and with whom did you first train? What is your style called? Have you had any pupils? [0 load]"
  }
]

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("playbooks").del();
  await knex("playbooks").insert(playbooks);
};
