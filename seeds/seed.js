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
        xp_gain:
            "When you play a Scoundrel, you earn xp when you address challenges with charm or audacity.",
        xp_advice:
            "Ramp up the daring and be quick on the draw with a catchy one-liner. You shine brightest when the situation is just about to get ugly.",
        character_questions:
            "Who was the last person you cheated out of their due? Are you loyal to this crew, or are they just a means to an end? How many times have you been left for dead?",
        starting_actions: "Sway 2, Skulk 1",
        starting_ability: "serendipitous",
        starting_ability_summary: "Your crew starts with +1 gambit when the pool resets.",
        starting_ability_clarification:
            "This increases the crew’s starting gambits on a job. You’re just plain luckier than other people.",
        items_description:
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
        xp_gain:
            "When you play a Stitch, you earn xp when you address challenges with insight or compassion. ",
        xp_advice:
            "Make sure you see the whole picture and help keep your crew safe and sound. When things get out of hand, they’ll need you. When they lose their way, guide them. Remember that not all wounds are physical.",
        character_questions:
            "What research interests you? What do you charge for your services? How did you learn your trade?",
        starting_actions: "Doctor 2, Study 1",
        starting_ability: "I’m a Doctor, not a…",
        starting_ability_summary:
            "You can push yourself to roll your Doctor rating while performing a different action. Say which patient, research, or posting taught you this trick.",
        starting_ability_clarification:
            "Each time you use this ability we learn a little bit more about your past. Consider introducing your contacts in these discoveries, if appropriate.",
        items_description:
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
        xp_gain:
            "When you play a Mechanic, you earn xp when you address challenges with technical skill or ingenuity. ",
        xp_advice:
            "Always look at the devices around you and be prepared to make them do what you want them to.",
        character_questions:
            "Did you make your own drone? How’d you learn your technical skills? Where’d you find your pet and what is it? Are you unassuming, fading into a crowd, or hard to miss, covered in tattoos?",
        starting_actions: "Rig 2, Study 1",
        starting_ability: "tinker",
        starting_ability_summary:
            "When you work on a clock with rig or hack, or when you study a schematic, fill +1 segment.",
        starting_ability_clarification:
            "You get this bonus segment regardless of whether this is a Downtime action or not. This means that bypassing security on a job or doing an emergency patch while escaping a chasing ship is easier for you than others.",
        items_description:
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
        xp_gain:
            "When you play a Muscle, you earn xp when you address challenges with force or threats.",
        xp_advice:
            "Make sure everyone knows that violence and intimidation are always options, and you stand ready to deliver. When things fall apart, show them how it’s done.",
        character_questions:
            "Do you have a personal code that you follow? Times you won’t apply violence no matter the cost? What caused you to throw your lot in with the crew and not seek employment as a soldier?",
        starting_actions: "Scrap 2, Command 1",
        starting_ability: "unstoppable",
        starting_ability_summary:
            "You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat.",
        starting_ability_clarification:
            "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability.\\n\\nA superhuman feat is one a regular person could not do unassisted, such as tearing apart metal handcuffs. If you engage a small gang on equal footing, you have equal scale.",
        items_description:
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
        xp_gain:
            "When you play a Speaker, you earn xp when you address challenges with deception or influence. ",
        xp_advice:
            "You’re at your best talking and setting up your teammates. Use the Teamwork maneuvers and Flashbacks to highlight your connections, foresight, and planning.",
        character_questions:
            "Why did you turn to a life of crime? What walk of life did you come from? How much do you still keep in touch with it?",
        starting_actions: "Consort 2, Command 1",
        starting_ability: "air of respectability",
        starting_ability_summary:
            "You get an extra Downtime activity to Acquire Assets or Lay Low.",
        starting_ability_clarification:
            "Your connections give you a continuous stream of material and people that you can use to smooth things over after your escapades.",
        items_description:
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
        xp_gain:
            "When you play a Pilot, you earn xp when you address challenges with speed or flair.",
        xp_advice:
            "If it drives, punch the gas. If it flies, see if you can do a barrel roll. It’s your show.",
        character_questions:
            "How’d you get so good with ships? What’s the most risky stunt you’ve pulled off—and who knows about it? How did you get an Urbot? Are you fearless, or just very, very good?",
        starting_actions: "Helm 2, Rig 1",
        starting_ability: "ace pilot",
        starting_ability_summary:
            "You have Potency on all speed-related rolls. When you roll to resist the Consequences of piloting, gain +1d.",
        starting_ability_clarification:
            "Your Potency might be balanced out by their better quality (if their ship engines are better than yours, for instance). Remember that the Consequences of piloting are not always ship Damage but can often be resisted just the same.",
        items_description:
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
        xp_gain:
            "When you play a Mystic, you earn xp when you address challenges with wisdom or The Way.",
        xp_advice:
            "This will naturally push you towards the unknown and inexplicable. When things get weird, that’s your moment to find answers.",
        character_questions:
            "How did you come by your understanding of the Way? Does your path have any special creed or curious practices? How long have you been traveling?",
        starting_actions: "Attune 2, Scramble 1",
        starting_ability: "The Way",
        starting_ability_summary: "You can spend a gambit instead of paying any Stress cost.",
        starting_ability_clarification:
            "Any time you need to spend Stress, you may spend a gambit instead. This includes resistances and push costs. For abilities that have a variable cost, such as Sundering, those additional costs are all part of the same activation, so the push and all additional features together only costs one gambit.",
        items_description:
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
const items = [
    {
        id: "03d818a1-fcce-491d-98fb-0644343fb7b1",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        item: "Small drone",
        description:
            "Small, remote-controlled drone with cameras. May be able to carry something light. Did you make this or buy it? Does it fly, slither, or crawl? What nickname did you give it? Do you have several Drones on The Ship, or just a bunch of chassis and Repair bits you use to Repair one drone? [0 load]",
    },
    {
        id: "0a469e33-1611-404f-b0d9-0ac4e0b0f77b",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        item: "Fine bedside manner",
        description:
            "Charm that sets patients at ease. Some Stitches never bother to bring this. Do you know how to relate to many people? Do you share a lot of anecdotes? Do you project a demeanor of confident skill? [0 load]",
    },
    {
        id: "0b291bd4-e641-4895-917d-79251aa7a3e6",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        item: "Memento of a past encounter",
        description:
            "A distinctive piece of jewelry, a fine blade with a House crest, a signet ring, a small statue. Who are these from, and why do you hold onto them? [0 load]",
    },
    {
        id: "14e22bf6-8d37-433c-a950-8bfd43bfd321",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Sunder",
        description:
            "a fine vibro-blade. Cuts through almost any material. Decorated. Knife or dueling blade. What Design is etched on the blade? Did you claim it, or rightfully earn it? [1 load]",
    },
    {
        id: "1642f111-aa74-40c1-ad24-b71060196268",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        item: "Fine melee weapon",
        description:
            "Antiquated weapon that acts as an extension of your body. In the age of blasters, swords and polearms are quaint remnants of culture and custom for the most part. But Way powers seem to interact stubbornly with advanced technology. Each mystic order keeps anachronistic items, and uses them in different ways. Do you have such a weapon? If so, what training have you had with it, and how do you use it? [2 load]",
    },
    {
        id: "16e69915-0add-448e-b6d6-eef4558a8961",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        item: "Recognizable medic garb",
        description:
            "The common red medic outfit bearing the official white medic seal of The Hegemony. Recognizable from a distance. What are the rules about how medics should be treated in combat? Do medical personnel have legal obligations while so-dressed? [0 load]",
    },
    {
        id: "20d504f5-a891-47df-9e10-2ae1fcce3c6a",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        item: "Luxury item",
        description:
            "Fine brandies, small but thoughtful gifts, spices and perfumes, fine instruments, popular games, etc. These can come in varied sizes. Each time you bring one of these on The Job, explain what it is and why it’s luxurious. [0, 1, or 2 load]",
    },
    {
        id: "3914f0bb-86b2-40a5-bba0-9620dcde7600",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        item: "Fine customized spacesuit",
        description:
            "Sweet decals, emergency beacon, some thrust. Will keep you alive in space or when your cockpit gets shot. Lets you move about a bit and maybe even extends jumps in atmosphere. What patches or custom artwork do you have on yours, and what does it mean? [2 load]",
    },
    {
        id: "3c44c07c-8bb1-460b-ba3e-bd82071bdaac",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        item: "Spare parts",
        description:
            "Usually for ship repairs and electronics. Often forgotten in a pocket or tool belt. Although it’s usually nothing overly expensive, you end up carrying parts you’re working on and pieces for fixing ships. If you ever need a wire, solder, or a piece of tape, you have it on hand. Anything rare or more complex might take a lifestyle roll to have on you. [1 load]",
    },
    {
        id: "43dc8b89-d3ca-41bf-b504-eac9c2e16506",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        item: "Memento of your travels",
        description:
            "A small statue, outdated currency, a lock of hair, a picture. Who gave this to you, and why do you cherish it? Is it a reminder of a good or bad memory? [0 load]",
    },
    {
        id: "4693e1b5-599a-41c9-9681-61a2dc600600",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        item: "Fine blaster pistol (or matching pair)",
        description:
            "Customized or strange. Can fire mystic ammunition. What do they fire? Where in your travels did you get them? Did you name them? [1 or 2 load]",
    },
    {
        id: "563b5e82-9f57-47f4-9b4f-a418105a8475",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        item: "Guild license",
        description:
            "Legit pilot certification (though it may not be yours). Will allow you passage through a jumpgate. How did you get yours? [1 load]",
    },
    {
        id: "6267c40c-80d8-4cd7-83ce-2323d671ff31",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Mystic ammunition",
        description:
            " A large-caliber shell, designed to be fired from a specialized gun that releases mystic energies when it hits. Grants Potency against mystic targets. Who makes your mystic bullets? Why are they potent against Way energies? [0 load]",
    },
    {
        id: "661d3667-deb3-4a85-ada7-533b8c5f8609",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        item: "Trappings of religion",
        description:
            "Scrolls, texts, icons, cups and bowls, bells. What sacred objects does your particular order of Mystics bear? How easily recognizable would this be? [1 load]",
    },
    {
        id: "7e3a5970-5ee5-4399-91e4-395658714964",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        item: "Precursor artifact",
        description:
            "A small object made of ancient materials. Precursor tech. Was this given to you by the Mystics that trained you, found as a child, or something you’ve picked up on your travels? What does it do? Discuss its powers, costs, and side effects with your table (for more on Precursor Artifacts, see here). [1 load]",
    },
    {
        id: "7f1dd042-41b1-4b0b-851b-4dc3b81483e5",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        item: "Vision-enhancing goggles",
        description:
            "Eyewear with settings for thermal and ultraviolet, and magnification levels in the thousands. Even tints when required. What do they look like? [1 load]",
    },
    {
        id: "854662f4-ffb3-4f42-8efe-b263dfe4bec8",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        item: "Fine clothes",
        description:
            "Silk sarongs, suits, fine blue capes. You stand out and are always dressed for the occasion. Nobody will mistake these for a disguise. Which outfit is your favorite? [1 load]",
    },
    {
        id: "8ec887d1-5bc8-4032-bece-0e0b03147b1f",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        item: "Legitimate ID",
        description:
            "A properly encoded Hegemonic ID indicating your legitimate station in The Hegemony. Who will notice when you use this? [0 load]",
    },
    {
        id: "9250af24-cf6d-4f9e-81d4-e909c011bdd4",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        item: "Fine hacking rig",
        description:
            "Visualization goggles, unpublished exploits, overclocked non-market chips, optical vampire taps. Hacking is as much about hardware as it is about software. Who maintains your gear? Do you write your own programs or does someone hook you up with the latest? Any decorations on your kit? [1 load]",
    },
    {
        id: "94170ba6-1cc4-45bf-9fee-274bca688d74",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        item: "Forged documents",
        description:
            "Reasonably well-made facsimiles of documents that would never actually be given to someone like you. Who made these for you? Do you still owe someone for them? Or did you steal them from someone? [0 load]",
    },
    {
        id: "9492172b-176c-41f3-ac61-5e8b37c399bd",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        item: "Offerings",
        description:
            "A candle, oil lamp, flowers, food, water, incense, pebbles from your journey. Were they gifts, left at a shrine for any mystic to take as they wander, or given in return for a job? [0 load]",
    },
    {
        id: "97555451-056c-4b4b-b87b-dbd312b19d88",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        item: "Mystic ammunition",
        description:
            "A large-caliber shell, designed to be fired from a specialized gun, which releases mystic energies when it hits. Grants Potency against mystic targets. Who makes your mystic bullets? Why are they potent against Way energies? [0 load]",
    },
    {
        id: "9d7024e8-f2cc-4605-a82f-a7e6b410a645",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        item: "Loaded dice or trick holo-cards",
        description:
            "Gambling accoutrements subtly altered to favor particular Outcomes. Luck is one of your many skills. Sometimes it just needs a little help though. When’s the last time these got you into trouble? [0 load]",
    },
    {
        id: "a2a58313-7a75-4f72-9e01-0c1c05f0cd4c",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        item: "Fine clothing",
        description:
            "A suit or outfit for fancy dinner parties and high society. Is this an artifact of your past, or something you’ve picked up for when you need to secure funding for your doctoring work? [1 load]",
    },
    {
        id: "abf570ff-cab3-4e55-af50-d50b1a1ab535",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        item: "Victory cigars",
        description:
            "Enough to share with a few choice people. What’s the point of pulling off amazing stunts if you can’t celebrate? No guarantee the rest of your crew will appreciate the smell, or won’t turn up the air filters. Where do you get these, and how many do you have left? How rare are they? [0 load]",
    },
    {
        id: "ae459b4c-22aa-44d6-919d-0557db3633f3",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        item: "Fine small Urbot",
        description:
            "A small Urbot that supports piloting and can carry a few items. Seems eerily sentient. Urbots are supposed to be wiped about once a year. How long has it been since you’ve taken yours in to the Guild of Engineers for such a procedure? What is its designation and what personality quirks does it have? What does its chassis look like, and how does it help you pilot? [2 load]",
    },
    {
        id: "baae5e3a-626f-4079-9d0a-1a687ed9b953",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        item: "Syringes and applicators",
        description:
            "Syringes, injectors, patch applicators. Many can be palmed easily. Sometimes having drugs on hand also means having to subtly administer them. Are any of these not for medical purposes? [0 load]",
    },
    {
        id: "bc0c6121-ed15-4423-9f66-c7066de9dcc1",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        item: "Fine mechanics kit",
        description:
            "Hand-held scanners, hull patch kit, assortment of hand tools. Everything you need to patch a vehicle and get it flying again. What tool did you just pick up? Which one did you customize? [1 load]",
    },
    {
        id: "c5b65fac-c423-48ff-ae60-48a9b823cae2",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Zarathustra",
        description:
            "a detonator launcher. Fires detonators at high velocity. Detonators are illegal, so this generates heat when fired. Can be used to target/damage vehicles and structures. Not subtle. Batteries included, but detonators marked separately. [2 load]",
    },
    {
        id: "cf4a2fcd-59d5-4cf8-b61f-270912e0b4d1",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        item: "Outdated religious outfit",
        description:
            "Robes, worn cloaks, sandals, etc. Participants and practitioners of popular and sanctioned Hegemonic Cults often bear well-known insignia of modern manufacture. Was yours passed down? Never replaced? Hand crafted? [1 load]",
    },
    {
        id: "d07ddd4b-164f-4842-9200-9a3a4c1c4a90",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        item: "Fine coat",
        description:
            "A heavy but well-made and well-kept coat. Distinctive and with a history. Where did you get this coat? Was it a gift, an impulse purchase, or something you won in a bet? Is it decorated with any insignia or logos? Make sure it’s got a memorable look or color. [1 load]",
    },
    {
        id: "d17ed002-ec99-4bd8-b483-ee062eb81dcd",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Vera",
        description:
            " a fine sniper rifle. A full-bore auto-lock with customized trigger, double cartridge, thorough gauge. It can fire mystic ammunition. Did you customize this yourself, special order it, take it off a body, or is it a gift from someone? [2 load]",
    },
    {
        id: "d32ee990-8ce1-4339-8eaf-d22ff2835a6c",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        item: "Personal memento",
        description:
            "A keepsake you cherish. A locket, small holo, music from your homeworld. For someone so tied to the spaceways, what about this memento makes it so important? Who does it remind you of? Why do you still hold onto it? [0 load]",
    },
    {
        id: "da59174a-29a8-4c58-bfd9-e659b9d51808",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        item: "Grappling hook",
        description:
            "Small, but mechanized. Can pull you up. Fits in your belt. Makes you look dashing when you swing to the rescue. When did it last break? [1 load]",
    },
    {
        id: "e50cf319-0351-4008-be58-6ec2b02fb675",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        item: "Genius pet",
        description:
            "Incapable of speaking, but can understand language and Assist with basic tasks. Likes you. Really cute. Anticipates your actions. Is it something familiar (like a dog or a cat) or a small alien creature? What is its name? Who did you get it from (legally or illegally)? [0 load]",
    },
    {
        id: "e6cba708-a8ad-47bc-974f-1d8a715f7e9e",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        item: "Fine ship Repair tools",
        description:
            "Power-assisted wrenches, a sonic drill, testing probes, power calibrators, a rivet gun. Is this a set of items, or did you pick them up piecemeal? [2 load]",
    },
    {
        id: "e91d64c7-78bf-4781-9a35-5a7bf90b0a37",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Zmei",
        description:
            "a fine flamethrower. For those times when you really need to heat things up. Settings for regular and extra crispy. Not easy to hide. Attacks cover the area of a small room (and leave distinct scorch marks that may result in additional heat). Complications when getting shot may include the fuel tanks rupturing. What sweet decals or marks does it have? [2 load]",
    },
    {
        id: "ee1e39b5-c8f7-4fdd-85fc-d074439d9061",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Krieger",
        description:
            "a fine blaster pistol. As a friend or ally, this signature pistol can be used during Downtime to threaten or intimidate. As an enemy, someone else owns it and it’s carrying a bullet for you. You know this gun intimately\u00ad—from where or why? [1 load]",
    },
    {
        id: "f542e6b5-dc73-4a16-a0c4-d3eb89fa4f5b",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        item: "Fine medkit",
        description:
            "Better stocked than the standard. Skin staples, diagnostic hand scanners, synthflesh, bone stabilizers, spray hypos, antivenom (for dangerous alien beasts), and a wider selection of drugs. Are there any distinctive markings on your medkit? [2 load]",
    },
    {
        id: "f5d1d64d-f815-4c5e-a91b-87f5a2c85ab6",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        item: "Candies and treats",
        description:
            "For those extra brave customers. Do you indulge in them as well? Have you ever disguised a sedative as one to subdue someone? [1 load]",
    },
    {
        id: "fa6bd745-2c53-43e5-ac18-0efa14d8be59",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        item: "Fine martial arts style",
        description:
            "Your own custom blend of combat techniques, unique as a fingerprint. Where and with whom did you first train? What is your style called? Have you had any pupils? [0 load]",
    },
];
const specialAbilities = [
    {
        id: "018ba9b7-193b-4661-912b-b8b43144200e",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "construct whisperer",
        description:
            "Machines speak to you when you study them. The first time you roll a critical while fixing or building a particular machine, you may add a simple modification to it (see Crafting).",
        clarification:
            "How do machines whisper their secrets to you? Is it intuitive? Do you feel what they feel? You do not gain the modification if you improve the result with cred.",
    },
    {
        id: "04f54f6e-77ff-42c0-94ba-ebc06c7d83f1",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "traveler",
        description:
            "You’re comfortable around unusual cultures and xenos. You gain Potency when attempting to Consort with or sway them.",
        clarification:
            "While any character can have had some experience with specific xeno cultures, this ability represents a wide swath of experience and understanding. Whether you come across as deeply respectful or you just know what buttons to push, you are more effective than would be expected.",
    },
    {
        id: "0a2dee28-eb98-45c6-b108-7514eefe3c5d",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "purpose",
        description:
            "You may expend your special armor to push yourself when outclassed by your opposition, or when under the effects of wounds. When you resist with resolve, gain +1d.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. Being outclassed may be through quality, power, or scale. Being under the effect of wounds means acting with a harm penalty, though you may use this push to ignore the harm penalty (as per pushing yourself). If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "0cb578dd-43f2-4ccc-972e-4fb7035d400c",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "player",
        description: "You always know when someone is lying to you.",
        clarification:
            "This ability works in all situations without restriction. It is very powerful, but also a bit of a curse. You see though every lie, even the kind ones.",
    },
    {
        id: "1161e2ee-d984-4c68-b61e-54f63ac4bf2c",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "disarming",
        description:
            "Whenever you use a gambit while speaking, hostilities and danger also pause while you speak.",
        clarification:
            "You still gain +1d for whatever roll you need to make to explain yourself, likely Consort, sway, or Command.",
    },
    {
        id: "1277b443-5f04-4dff-a4a7-53fef2739484",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "warded",
        description:
            "You may expend your special armor to resist the Consequences of a Way attack or artifact use, or push yourself when using mystic powers.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "12967fee-5d61-4cb4-8d30-0f8d8473b782",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "scary",
        description:
            "You have an air of menace and danger obvious to even the most unobservant. You gain Potency when trying to intimidate someone. If done immediately after a show of force, also take +1d.",
        clarification:
            "You instill fear in those around you, particularly when you get violent. How they react depends on them. Some will flee from you, some will be impressed, some will get violent in return. The GM judges the response of a given NPC.\\n\\nIntimidation is usually handled with a Command roll, and your efforts to do so are more successful if you show you mean business.",
    },
    {
        id: "14270291-a5a9-4321-ae80-144664b6e5b5",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "favors owed",
        description:
            "During Downtime, you get +1d when you Acquire Assets or Lay Low. Any time you gather info, take +1d.",
        clarification:
            "Using your authority, connections, or inside information, you get better information and access to better resources.",
    },
    {
        id: "23420375-3129-4041-93d2-4bb3843c4285",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "flesh wound",
        description:
            "If you’re wounded at the beginning of Downtime, mark +3 segments on your healing clock. When you push yourself to ignore wound penalties, it takes only 1 Stress (not 2).",
        clarification:
            "Whether naturally tough or augmented in some way, wounds don’t keep you down. See Recover for more information.",
    },
    {
        id: "23829b33-ee62-4cb4-a01d-9a5308a18104",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "leaf on the wind",
        description:
            "When you push yourself, you may spend +1 Stress (3 Stress total) to gain both +1 effect and +1d instead of one or the other.",
        clarification:
            "Normally it takes two separate pushes (4 Stress total) to achieve the same effect. This can be used on any roll.",
    },
    {
        id: "25b50026-a3a4-4e5b-a1fd-004af300e4b4",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "old friends",
        description:
            "Whenever you land in a new location, write down a friend you know there (under Influential Friends on your playbook sheet).",
        clarification:
            "As with your starting Influential Friends, you may extend your list of friends the first time you land in a new location.",
    },
    {
        id: "2c7da9ad-0a1c-4b6c-b19f-9a2a30b9a8ab",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "under pressure",
        description:
            "Add a gambit to the pool whenever you or a crew member suffers level 2 or greater harm.",
        clarification:
            "In order to gain the gambit, the resulting applied consequence must be level 2 or greater—if it is resisted or reduced below that level, you do not gain the gambit.",
    },
    {
        id: "30f79c67-02e9-450d-8933-6b293f21d70d",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "i know a guy",
        description:
            "When you first dock at a port after being away, pick one and ask the GM about a job: it’s not deadly—it pays well enough—it’s not a rush job—it comes from a faction you trust—it targets an enemy you have. You may spend 1 cred per additional feature.",
        clarification:
            "Though you keep an ear to the ground, sufficient time has to pass for new jobs to crop up at a port (usually a Downtime or two). The GM will tell you how you hear about the work; it might be a publicly available bounty or something a contact reaches out about.",
    },
    {
        id: "3b55e8b3-64e7-4f00-a68d-d0c90336c400",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "SHOOT FIRST",
        description:
            "When you attack from hiding or spring a trap, take +1d. When there’s a question about who acts first, the answer is you (two characters with Shoot First act simultaneously).",
        clarification:
            "To attack from hiding, your target must be unaware of you. If you’re springing a trap, your target must be unaware of the trap.",
    },
    {
        id: "4bd527d0-77e6-46e3-8a57-afe94ad37996",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "overclock",
        description:
            "When you spend a gambit on a rig roll to Repair or upgrade, treat the system you worked on as 1 quality higher for the remainder of The Job.",
        clarification:
            "You may make a rig roll during a job to simply to get more out of a system, but such temporary boosts are only situational and need to be backed out the next time you hit drydock. You can overclock systems that aren’t ships, enhancing the system’s quality.",
    },
    {
        id: "4fef00e5-aabb-4dfe-9c59-fa5dfea764cd",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "physicker",
        description:
            "You may study a malady, wounds, or corpse, and gather info from a crime scene. Also, your crew gets +1d to recovery rolls.",
        clarification:
            "This ability often represents formal training, giving you a way to forensically understand a corpse or scientifically deconstruct a malady. The bonus to recovery for your crew only applies if you help treat wounds or injuries at any point during the recovery.",
    },
    {
        id: "50c935f7-1515-4dff-a5fc-3e042baae9b4",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "tenacious",
        description:
            "Penalties from harm are one level less severe (though level 4 harm is still fatal).",
        clarification:
            "When harm penalties are applied to action rolls, treat them as one level less than you’d expect, so level 1 harm is ignored, and level 3 harm is -1d. Level 4 harm, also called lethal harm, is still lethal unless you can use armor or a resistance roll to reduce it first.",
    },
    {
        id: "5272ed19-090e-448e-8a1e-0ef5da57e51b",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "never tell me the odds",
        description:
            "You generate gambits on desperate rolls. You may also generate gambits even if you spent a gambit.",
        clarification:
            "Normally you only generate gambits on risky rolls for which you have not spent a gambit. Your ability to “stretch” gambits, regenerating them on rolls you have already spent them on, gives you the ability to put yourself in situations others might not even want to consider.",
    },
    {
        id: "619137a6-203b-4409-b2a9-5e71fc672ffc",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "kinetics",
        description:
            "You can push yourself to do one of the following: use The Way to throw a table-sized object with dangerous force—propel yourself briefly with superhuman speed.",
        clarification:
            "Dangerous force means fast enough to severely injure a normal person. Superhuman speed means fast enough that you’re barely more than a blur. Your reach is about the size of a large room. Yes, people can count as objects.",
    },
    {
        id: "64f3e96a-8c97-4643-983e-2d7e71ba9a87",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "wrecking crew",
        description:
            "Your strength and ferocity are infamous. When striking in melee, you gain +1d. Whenever you spend a gambit in combat, you also gain +1 effect on that action.",
        clarification:
            "Whether you are a master of a martial arts, or raised by Mystics to fight with antique weapons, your martial prowess in close combat is legendary (and may attract those that wish to learn from or challenge you).\\n\\nIf you spend a gambit in combat, take +1 effect on that action. This can hit a single opponent harder or offset penalties from scale or quality. This also stacks with the +1d from the gambit and the +1d from the core Wrecking Crew ability.",
    },
    {
        id: "654daf47-a487-4ed6-9d65-9e4a5a979867",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "psy-blade",
        description:
            "You can focus Way energy into your melee weapon. While charged, the weapon can cut through non-shielded materials with ease, and you gain Potency on your melee attacks.",
        clarification:
            "Heavy metal plates are non-shielded, so you can cut through most doors without trouble. Shielded constructs are rare, but they offer enough protection that this attack would lose its Potency. You cannot infuse your fists with Way energy (or gloves, brass knuckles, etc.).",
    },
    {
        id: "67227801-d08e-4100-bb1d-e75fcd70f30d",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "commander",
        description:
            "Whenever you Lead a Group Action, gain +1 scale (for example, a small group counts as a medium group). If you lead a group action in combat, you may count multiple 6s from different rolls as a critical.",
        clarification:
            "A group action is one where multiple PCs perform the same action and roll their respective pools for those actions (see Lead a Group Action). If you already have scale on your opponent, you gain an additional scale (and therefore level of effect). If two or more players roll a 6, then the result of the roll for everyone is a crit. You must still suffer Stress costs from any participant whose result is a 1-3.",
    },
    {
        id: "69389148-5ed4-4c89-aedf-7f20193c3ab9",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "way shield",
        description:
            "You can block blaster bolts with The Way (resist with resolve). If you resist a blaster attack, you may spend 1 Stress to redirect fire and make an attack of your own with it.",
        clarification: "Resisting blasters in this way usually reduces the harm to zero.",
    },
    {
        id: "6a14ee42-7dea-402a-b0e4-9d306ba43a51",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "daredevil",
        description:
            "When you make a desperate roll, you may take +1d. If you do so, do not mark xp in that action’s attribute.",
        clarification:
            "You need to make the decision before your roll. You may only take this extra die if the final position of the roll is desperate, so if you use a setup to change the position to risky, for example, you may not take the extra die.",
    },
    {
        id: "6ea5354a-c894-42a0-9bbb-e607cc4ef1dd",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "keen eye",
        description:
            "You have sharp eyes and notice small details many might overlook. Gain +1d when firing ship guns or making trick shots.",
        clarification:
            "This can be used as a basis for resistance rolls to act first. “No, I want to act before him—I would’ve seen him reaching for the gun.” Also, trick shots can be performed with almost any kind of ranged weapon, not just ship weapons.",
    },
    {
        id: "7e20cc37-bf0e-4086-8db3-53c516253cfc",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "mechanic’s heart",
        description:
            "When you speak from your heart, your words can reach even the most hardened criminal, and you gain Potency.",
        clarification:
            "This ability works in all situations without restriction. As long as you speak genuinely and sincerely, your words will be heard.",
    },
    {
        id: "8454b56b-b18a-45b6-871d-862895a8cd53",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "welcome anywhere",
        description:
            "While wearing your medic garb, you are welcome even in dangerous places. Gain +1d to Consort and sway when offering to tend to anyone in need.",
        clarification:
            "When you choose to be, you’re recognizable as a medic, and of value to those living the hard life of Procyon.",
    },
    {
        id: "89237254-443e-4d72-add8-6780562e24b3",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "infiltrator",
        description: "You are not affected by quality or Tier when you bypass security measures.",
        clarification:
            "This ability lets you contend with higher-Tier enemies on equal footing. When you’re hacking an electronic security system, picking a lock, or sneaking past elite guards, your effect level is never reduced due to superior Tier or quality level of your opposition.",
    },
    {
        id: "8da36821-7a6c-4174-b6a1-08f57bea5a40",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "devil’s own luck",
        description:
            "You may expend your special armor to resist the Consequences of blaster fire, or to push yourself when talking your way out of (or running from) trouble.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. Blaster fire can extend to pistols and being shot in any way, and running from trouble can be via spaceship as much as your feet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "92e7708c-635e-4e4c-bd1e-38783e642231",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "bailing wire and mech-tape",
        description:
            "You get an extra Downtime activity to Repair, and the Repair activity costs you 0 cred.",
        clarification:
            "The Repair Downtime activity usually takes 1 cred to perform. With this ability, you can take the activity at no cred cost. The free repairs can’t be “saved up.” You get one per Downtime.",
    },
    {
        id: "938cc9c2-417a-425c-9794-f9a5b65dc1c5",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "hacker",
        description:
            "You may expend your special armor to resist the Consequences of hacking, or to push yourself when hacking or gathering info electronically.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "9acbd538-2ff9-4cc9-be95-a51a517bef83",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "analyst",
        description:
            "When you hack a system, you may also ask a question about the owner or location of the system as though you had rolled a 6 on gather info. When you resist the Consequences of hacking, roll +1d.",
        clarification:
            "Regardless of the purpose for which you are hacking, you learn something about the systems you’re manipulating. If you were Gathering Information, you may roll to learn a second thing, or you can simply accept the 6 for what you wanted to know.",
    },
    {
        id: "a21c5162-d52d-4c46-b5f5-41954218e5b1",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "combat medic",
        description:
            "You may expend your special armor to resist any consequence while tending to a patient. When you Doctor someone in combat, clear 1 Stress.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. When you resist Consequences, they can be for yourself, as a result of one of your rolls, or to Protect the patient. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "a9153de3-e87b-4479-b7d8-978947033214",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "exceed specs",
        description:
            "While onboard a ship, you may Damage a ship system you have access to in order to gain +1d or +1 effect to a roll.",
        clarification:
            "Overload a system for a short-term boost. The system’s quality is still the same for the one roll you’re boosting. After the roll, the system fries out and the quality is reduced.",
    },
    {
        id: "a9d05098-4c50-4a48-94d7-1e35a7fa1ab2",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "hedonist",
        description:
            "When you indulge your vice, you may adjust the dice outcome by +/-2. An ally who joins you may do the same.",
        clarification:
            "Any ally must join you in whatever vice you’re indulging (or you can indulge via a crew ability, such as the Stardancer’s Home Cooking). You can adjust the outcome by less than 2, or not adjust it at all. You can also Recover more than 6 Stress on a vice roll this way.",
    },
    {
        id: "ad787459-489e-43a2-a551-9992b835e87f",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "ask questions later",
        description:
            "When you Consort to gather info, you gain +1 effect and can in addition ask: Who might this benefit?",
        clarification:
            "When you ask your own question, you learn the answer to that, as well as to the question “who might this benefit?” Since you gain Potency, the worst a normal gather information roll can produce would be standard results.",
    },
    {
        id: "ae8b889d-5750-40d1-bf62-aed8449468d8",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "book learning",
        description:
            "You speak a multitude of languages and are broadly educated. Gain +1d when using study during a Downtime activity.",
        clarification:
            "Communication is almost never an issue for you. Additionally, you have a background in almost every academic subject that might come up, and can use gather information checks to find out what you might have learned in those studies.",
    },
    {
        id: "b62127c0-6b38-480d-b6aa-edbba1b152ca",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "visions",
        description:
            "Spend 1 Stress to remotely view a distant place or person tied to you in some intimate way. Spend 1 Stress for each extra feature: it lasts for a minute rather than a moment—your target can also see and hear you—you may see something only familiar to you, not intimate.",
        clarification:
            "Spending a gambit with your starting ability (“the Way”) covers all costs. When your target can also see and hear you, you are both within the same “area,” for the purposes of other abilities.",
    },
    {
        id: "b6e93062-f241-4000-8c0a-90ef6e939dfb",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "predator",
        description:
            "Take +1d to rolls against weakened or vulnerable targets. Whenever you gather information on a weakness or vulnerability, the worst you can get is a 4/5 result.",
        clarification:
            "You know how to leverage fear, pain, and vulnerability to get your way. When trying to suss out such things in a person, you usually come up with something, even if the information isn’t immediately useful or is incomplete. Someone in a vulnerable state might be drugged, trusting, badly wounded, or frightened.",
    },
    {
        id: "b82fb753-bd0c-4eee-a6df-e8c67b724c23",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        name: "when the chips are down",
        description: "You gain a second use of special armor between each Downtime.",
        clarification:
            "This allows you to use a second special armor OR use the same special armor twice.",
    },
    {
        id: "b9d99380-3487-4ad9-8756-42532476e3f6",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "ready for anything",
        description:
            "When being ambushed, you gain Potency to all actions during a flashback, and your first flashback costs 0 Stress.",
        clarification:
            "You always expect ambushes and prepare for them. Flash back to such preparation when an ambush happens. If your preparation requires action rolls, you gain Potency on them.",
    },
    {
        id: "cbcb111a-1cbe-4d01-abeb-a7b36ba1aee7",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "junkyard hunter",
        description:
            "When you acquire parts or equipment during Downtime, you may either gain two assets or one asset at +1 quality.",
        clarification:
            "Your junkyard contacts can get what you need refurbished or on special offer. If you gain two assets, they both have the same quality as your roll.",
    },
    {
        id: "d1af1d76-7b4a-4723-8df1-0092e89c5170",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "punch it!",
        description: "When you spend a gambit on a desperate roll, it counts as risky instead.",
        clarification:
            "Because you spent a gambit on the roll, even though it counts as risky, the roll may not itself generate a gambit (unless you have another ability that says it can). You still gain the +1d to the roll for the gambit, but the position of the roll should be adjusted, as should the Consequences. Bear in mind that this can be used on any roll (not just piloting ones).",
    },
    {
        id: "d4e66e3a-0e45-4f03-94a1-9b8a419a6c40",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "center",
        description:
            "You gain Meditation as a vice. When you indulge this vice, clear +1 Stress and add Dark Visions as a possible Overindulgence.",
        clarification:
            "Contemplation of the universe is not without its perils. When you choose Dark Visions as an Overindulgence, The Way shows you a loved one, contact, or friend in great danger.",
    },
    {
        id: "d5230701-3a11-4fb2-8125-b3be0e2871f5",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "backup",
        description: "An ally’s push costs 1 Stress (not 2) on any action you set up or Assist.",
        clarification:
            "The set up and Assist actions (see Teamwork) still grant their bonus dice or effect as usual.",
    },
    {
        id: "d5b26e60-e3d6-4d42-821e-05055b1315be",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "moral compass",
        description: "When you do the right thing at cost to yourself, mark xp (any category).",
        clarification:
            "The cost to yourself must be real, though it need not be devastating. Losing a meaningful opportunity, experiencing a setback with a project, or getting into a heated argument with a friend could all count.",
    },
    {
        id: "da37cbc5-543f-4419-aa00-1d327f25d9a4",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "patch",
        description:
            "You may Doctor someone during a job to allow them to ignore the effects of a harm penalty.",
        clarification:
            "A successful roll lasts for The Job. While your patient may ignore the effects of the harm penalty, it does not remove the penalty; there are still fewer boxes for additional wounds.",
    },
    {
        id: "db2b3fa0-d8bf-4ee2-bc0c-6c1f0b6726be",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        name: "dr. strange",
        description:
            "Your research and fields of study are fringe, esoteric, and focus on the mystical. You may always handle Precursor Artifacts safely. When you study an artifact or Doctor a strange substance, you may ask one",
        clarification: "what could this do?—why could this be dangerous?",
    },
    {
        id: "dd2d447f-eb02-4d03-be29-87e3823a4315",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "psy-dancing",
        description:
            "You may push yourself to cloud a target’s mind and sway them in the face of contradictory evidence. “You must do as I say. I am the ambassador.” Spend 1 Stress for each additional feature: they have only vague memories of the event—it works on a small group.",
        clarification:
            "Such confusions do not persist indefinitely, though those with vague memories will often fill in the missing details with assumptions. “I must’ve checked her badge. I always do.”",
    },
    {
        id: "eaf021a7-1c40-456e-bf57-76549102779b",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "heart to heart",
        description:
            "When you provide meaningful insight or heartfelt advice that a crewmate follows, you both clear 1 Stress.",
        clarification:
            "Meaningful advice taken can mean changing someone’s usual course of action, having them take a difficult action that costs them, or causing them to reconsider their choices. If there’s a question about what constitutes meaningful or heartfelt, discuss it as a group and decide together.",
    },
    {
        id: "eb5dde4b-3bef-4a48-a91d-430f7a2c44ac",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "bodyguard",
        description:
            "When you Protect a crewmate, resist with +1d. When you take harm, clear 1 Stress.",
        clarification: "The Protect teamwork maneuver lets you face a consequence for a teammate.",
    },
    {
        id: "ef49c9f4-8591-49f5-9e84-a224556f34d4",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        name: "fixed",
        description:
            "You may expend your special armor to resist a consequence from machines breaking or being damaged, or to push yourself when repairing or building a machine.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. Machines can include your ship, so you can use this as special armor for your ship if you are onboard dealing with the Damage. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "f22d0ae9-a8af-4508-a31b-12dada6d0050",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        name: "side job",
        description:
            "You may spend a Downtime activity in port doing odd jobs. Gain 1 cred. If there are rumors floating about, the GM will tell you of them.",
        clarification:
            "There may not be any rumors floating about, but the GM should treat this as a gather information roll, where you roll a 6 to learn about whatever is in the news and gossip at that port.",
    },
    {
        id: "f7e5f84e-5222-4738-aac2-249c19eea89a",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        name: "sundering",
        description:
            "You may push yourself to Attune to The Way and twist it, causing psychic harm to anyone in the area vulnerable to your assault. You may spend 1 Stress for each additional feature: it damages instead of stuns—you and anyone you choose get +2d to resist the effects.",
        clarification:
            "You warp The Way within you, and by extension warp The Way in others—a risky proposition at best. Sundering cannot harm inanimate objects. When causing harm, the symptoms can include short-term seizures and ruptured blood vessels. Those specially trained to resist psychic attacks or are somehow shielded may reduce your effect.",
    },
    {
        id: "fa0a79ef-fa75-42c8-bb08-c2a7d52cae5f",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        name: "battleborn",
        description:
            "You may expend your special armor to reduce harm from an attack in combat, or to push yourself during a fight.",
        clarification:
            "When you use this ability, tick the special armor box on your sheet. “Reducing harm” means reducing the harm one level. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
        id: "fb915569-8820-470e-8fd1-90d5dcfd8608",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        name: "subterfuge",
        description:
            "You may expend your special armor to resist a consequence of persuasion or suspicion. When you resist with insight, gain +1d.",
        clarification:
            "When you use this ability, tick the special armor box on your playbook sheet. Folks doubting your lies, stories, cover, etc., all count for the purpose of suspicion or persuasion. Your special armor is restored when you select your load at the start of a job.",
    },
];
const buildSuggestions = [
    {
        id: "188152de-0eac-4b50-affb-bdbf3dc20032",
        build_name: "Ship mechanic",
        playbook: "mechanic",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        special_ability: "Fixed",
        special_abilities_id: "ef49c9f4-8591-49f5-9e84-a224556f34d4",
        action_1: "Hack",
        action_2: "Hack",
        action_3: "Scramble",
        action_4: "Sway",
    },
    {
        id: "57b8f556-f782-45fd-bc7e-1f77efc5e61e",
        build_name: "Computer whiz",
        playbook: "mechanic",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        special_ability: "Hacker",
        special_abilities_id: "938cc9c2-417a-425c-9794-f9a5b65dc1c5",
        action_1: "Hack",
        action_2: "Hack",
        action_3: "Skulk",
        action_4: "Sway",
    },
    {
        id: "2640e193-1010-4b22-adec-cd5f05f79f26",
        build_name: "Bot builder",
        playbook: "mechanic",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        special_ability: "Construct Whisperer",
        special_abilities_id: "018ba9b7-193b-4661-912b-b8b43144200e",
        action_1: "Hack",
        action_2: "Scramble",
        action_3: "Attune",
        action_4: "Attune",
    },
    {
        id: "94197ad6-0c0c-4250-bcfd-d895824b9a96",
        build_name: "Ship owner",
        playbook: "mechanic",
        playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        special_ability: "Junkyard Hunter",
        special_abilities_id: "cbcb111a-1cbe-4d01-abeb-a7b36ba1aee7",
        action_1: "Helm",
        action_2: "Helm",
        action_3: "Scrap",
        action_4: "Command",
    },
    {
        id: "b8ebb3ff-2cea-45f4-a5ed-e11cb480fee7",
        build_name: "Gladiator",
        playbook: "muscle",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        special_ability: "Wrecking Crew",
        special_abilities_id: "64f3e96a-8c97-4643-983e-2d7e71ba9a87",
        action_1: "Scramble",
        action_2: "Scramble",
        action_3: "Skulk",
        action_4: "Command",
    },
    {
        id: "19647df6-60f6-43f3-b918-70e97b7e9a67",
        build_name: "Protector",
        playbook: "muscle",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        special_ability: "Bodyguard",
        special_abilities_id: "eb5dde4b-3bef-4a48-a91d-430f7a2c44ac",
        action_1: "Doctor",
        action_2: "Study",
        action_3: "Study",
        action_4: "Scramble",
    },
    {
        id: "83007d9f-8318-4617-9450-0c27520aab11",
        build_name: "Mystic hunter",
        playbook: "muscle",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        special_ability: "Battleborn",
        special_abilities_id: "fa0a79ef-fa75-42c8-bb08-c2a7d52cae5f",
        action_1: "Attune",
        action_2: "Attune",
        action_3: "Helm",
        action_4: "Scramble",
    },
    {
        id: "8b205076-c8a1-404d-8db6-e245352cf4f2",
        build_name: "Action hero",
        playbook: "muscle",
        playbooks_id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
        special_ability: "Flesh Wound",
        special_abilities_id: "23420375-3129-4041-93d2-4bb3843c4285",
        action_1: "Rig",
        action_2: "Helm",
        action_3: "Scramble",
        action_4: "Scramble",
    },
    {
        id: "19cc574d-f38f-42a9-ae8b-d29c732ecb4b",
        build_name: "Wandering warrior",
        playbook: "mystic",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        special_ability: "Psy-Blade",
        special_abilities_id: "654daf47-a487-4ed6-9d65-9e4a5a979867",
        action_1: "Study",
        action_2: "Scrap",
        action_3: "Scrap",
        action_4: "Command",
    },
    {
        id: "832ca1bb-7ded-4bb8-ab75-2753d661fcdd",
        build_name: "Mystic healer",
        playbook: "mystic",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        special_ability: "Visions",
        special_abilities_id: "b62127c0-6b38-480d-b6aa-edbba1b152ca",
        action_1: "Doctor",
        action_2: "Doctor",
        action_3: "Study",
        action_4: "Consort",
    },
    {
        id: "793df5d7-611e-425f-ad1e-e27600c123d7",
        build_name: "Way ghost",
        playbook: "mystic",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        special_ability: "Kinetics",
        special_abilities_id: "619137a6-203b-4409-b2a9-5e71fc672ffc",
        action_1: "Scramble",
        action_2: "Skulk",
        action_3: "Skulk",
        action_4: "Sway",
    },
    {
        id: "5c65082a-61e7-4cea-b8d6-5d94255e37b1",
        build_name: "Mentalist",
        playbook: "mystic",
        playbooks_id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
        special_ability: "Psy-Dancing",
        special_abilities_id: "dd2d447f-eb02-4d03-be29-87e3823a4315",
        action_1: "Skulk",
        action_2: "Consort",
        action_3: "Sway",
        action_4: "Sway",
    },
    {
        id: "707b7059-f95b-4025-832c-577e7eb15b53",
        build_name: "Glory hound",
        playbook: "pilot",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        special_ability: "Exceed Specs",
        special_abilities_id: "a9153de3-e87b-4479-b7d8-978947033214",
        action_1: "Scramble",
        action_2: "Scramble",
        action_3: "Scrap",
        action_4: "Sway",
    },
    {
        id: "cfea8339-1d7d-46a1-bd7f-8b06a438fbad",
        build_name: "Thrillseeker",
        playbook: "pilot",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        special_ability: "Punch it!",
        special_abilities_id: "d1af1d76-7b4a-4723-8df1-0092e89c5170",
        action_1: "Scramble",
        action_2: "Scramble",
        action_3: "Command",
        action_4: "Sway",
    },
    {
        id: "807a8bdb-1143-497a-a97f-657df6bcb1cb",
        build_name: "Captain",
        playbook: "pilot",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        special_ability: "Commander",
        special_abilities_id: "67227801-d08e-4100-bb1d-e75fcd70f30d",
        action_1: "Scrap",
        action_2: "Command",
        action_3: "Command",
        action_4: "Consort",
    },
    {
        id: "e4da76c3-5281-4024-8716-d14313827f0a",
        build_name: "Gunslinger",
        playbook: "pilot",
        playbooks_id: "90751430-77e8-4696-bbce-c3a64f31d79a",
        special_ability: "Keen Eye",
        special_abilities_id: "6ea5354a-c894-42a0-9bbb-e607cc4ef1dd",
        action_1: "Study",
        action_2: "Scrap",
        action_3: "Scrap",
        action_4: "Command",
    },
    {
        id: "126fb56e-f0a5-44a1-98f6-9769541c5f64",
        build_name: "Captain",
        playbook: "scoundrel",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        special_ability: "Never Tell Me the Odds",
        special_abilities_id: "5272ed19-090e-448e-8a1e-0ef5da57e51b",
        action_1: "Helm",
        action_2: "Helm",
        action_3: "Scramble",
        action_4: "Scramble",
    },
    {
        id: "0471509b-821f-4960-b04c-0774cfdc80a7",
        build_name: "Relic hunter",
        playbook: "scoundrel",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        special_ability: "Daredevil",
        special_abilities_id: "6a14ee42-7dea-402a-b0e4-9d306ba43a51",
        action_1: "Doctor",
        action_2: "Study",
        action_3: "Attune",
        action_4: "Attune",
    },
    {
        id: "1bb5fb12-c511-4fef-8068-d65dc7fe21b7",
        build_name: "Ex-detective",
        playbook: "scoundrel",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        special_ability: "Ask Questions Later",
        special_abilities_id: "ad787459-489e-43a2-a551-9992b835e87f",
        action_1: "Doctor",
        action_2: "Study",
        action_3: "Consort",
        action_4: "Consort",
    },
    {
        id: "ac8131b4-5d15-455b-ba5e-f69eb60627c7",
        build_name: "Veteran of Core Wars",
        playbook: "scoundrel",
        playbooks_id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
        special_ability: "Tenacious",
        special_abilities_id: "50c935f7-1515-4dff-a5fc-3e042baae9b4",
        action_1: "Helm",
        action_2: "Scramble",
        action_3: "Scrap",
        action_4: "Scrap",
    },
    {
        id: "9a6bbc34-b2ca-4bda-b209-1901e852dddd",
        build_name: "Smooth talker",
        playbook: "speaker",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        special_ability: "Subterfuge",
        special_abilities_id: "fb915569-8820-470e-8fd1-90d5dcfd8608",
        action_1: "Study",
        action_2: "Command",
        action_3: "Sway",
        action_4: "Sway",
    },
    {
        id: "7358f4e4-acb3-4e04-9c31-deacd3532834",
        build_name: "Ship owner",
        playbook: "speaker",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        special_ability: "Favors Owed",
        special_abilities_id: "14270291-a5a9-4321-ae80-144664b6e5b5",
        action_1: "Helm",
        action_2: "Helm",
        action_3: "Skulk",
        action_4: "Sway",
    },
    {
        id: "5b195a33-ebb0-4081-8138-e47135f3c7e2",
        build_name: "Spy",
        playbook: "speaker",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        special_ability: "Infiltrator",
        special_abilities_id: "89237254-443e-4d72-add8-6780562e24b3",
        action_1: "Hack",
        action_2: "Skulk",
        action_3: "Skulk",
        action_4: "Sway",
    },
    {
        id: "bcd177ec-8432-4df4-b1de-312b6f3981ca",
        build_name: "Counselor",
        playbook: "speaker",
        playbooks_id: "8db6b05e-da26-4165-bad7-35114929bc6c",
        special_ability: "Heart to Heart",
        special_abilities_id: "eaf021a7-1c40-456e-bf57-76549102779b",
        action_1: "Doctor",
        action_2: "Doctor",
        action_3: "Study",
        action_4: "Scramble",
    },
    {
        id: "c15f2ffa-c670-466d-9e4f-61bf1302fc6c",
        build_name: "Wandering healer",
        playbook: "stitch",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        special_ability: "Welcome Anywhere",
        special_abilities_id: "8454b56b-b18a-45b6-871d-862895a8cd53",
        action_1: "Consort",
        action_2: "Consort",
        action_3: "Sway",
        action_4: "Sway",
    },
    {
        id: "afa1d3e1-f863-4a78-80fa-fbf1e10ccfc9",
        build_name: "Mad scientist",
        playbook: "stitch",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        special_ability: "Dr. Strange",
        special_abilities_id: "db2b3fa0-d8bf-4ee2-bc0c-6c1f0b6726be",
        action_1: "Scramble",
        action_2: "Attune",
        action_3: "Attune",
        action_4: "Sway",
    },
    {
        id: "ce1c3eca-cc12-43ef-8c7d-af3660c8411b",
        build_name: "Action medic",
        playbook: "stitch",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        special_ability: "Combat Medic",
        special_abilities_id: "a21c5162-d52d-4c46-b5f5-41954218e5b1",
        action_1: "Scramble",
        action_2: "Scrap",
        action_3: "Scrap",
        action_4: "Sway",
    },
    {
        id: "50d73ed8-017f-4406-84a1-2e03655d9757",
        build_name: "Researcher",
        playbook: "stitch",
        playbooks_id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
        special_ability: "Book Learning",
        special_abilities_id: "ae8b889d-5750-40d1-bf62-aed8449468d8",
        action_1: "Study",
        action_2: "Skulk",
        action_3: "Sway",
        action_4: "Sway",
    },
];
const heritages = [
    {
        id: "1e8dbfa5-2124-489a-846d-1fd520c0e1f0",
        heritage: "imperial",
        description:
            "Those with imperial heritage hail from Warren or the Core worlds. You were brought up educated in ways of The Hegemony, through a Guild vocational education, Cult teachings, or Noble family tutors.",
    },
    {
        id: "f950f30c-4a7a-47a3-8944-413be401d9af",
        heritage: "spacer",
        description:
            "If you’d rather be more at home on a creaking ship, you could be from a spacer family. Ice miners, station mechanics, and most merchants are born, grow old, and die in space—and may or may not view your terrestrial ventures with suspicion.",
    },
    {
        id: "c68a9712-79c6-446b-b30a-ca1985eacd62",
        heritage: "colonist",
        description:
            "The exact opposite are colonist families. Farmers, miners, and terraformers form the backbone of the Hegemony. Fighting for a living on the borders of planets, these folks deal with alien beasts and odd Precursor ruins more than most.",
    },
    {
        id: "49c341b5-2a15-455c-b6cf-fb8e71f0bf84",
        heritage: "manufactured",
        description:
            "Manufactured “families” are fundamentally controlled in some way by the Guilds—for example, a Yaru clone who’s escaped from a facility or a Urbot that’s avoided routine memory wipes. You may often have to hide your origin and independence.",
    },
    {
        id: "4bf4ab75-b4d4-4475-9467-1cfdaac4dc85",
        heritage: "wanderer",
        description:
            "If you want to be without a planet to call home, you could be from a wanderer heritage. A small but notable portion of The Hegemony move from planet to planet, as opportunities emerge and galactic economic cycles shift. Or just follow where The Way takes you.",
    },
    {
        id: "70d96cd6-a280-44d6-8d7b-47b079015b36",
        heritage: "xeno",
        description:
            "Xeno families are as diverse as the countless kinds of xenos in the galaxy. You were raised in a non-human culture. Xenos struggle to find acceptance in The Hegemony, and many of their practices are seen as strange or unusual.",
    },
];
const backgrounds = [
    {
        id: "0ad31b2c-ac6e-423c-8bc9-07c453ad57da",
        background: "Academic",
        description: "A professor, student, researcher, or other knowledge-driven vocation.",
    },
    {
        id: "2a388aee-e449-4dfd-8787-4f5558f06ab7",
        background: "Labor",
        description:
            "A factory worker, driver, dockhand, miner, or other tradesperson. The majority of The Hegemony is of this background.",
    },
    {
        id: "2d530e5f-3bf8-4471-a5cb-2eedcbb22c5e",
        background: "Cult",
        description:
            "Part of a Cult, officially sanctioned or not. A holy warrior, priest, or religious devotee.",
    },
    {
        id: "e4c7879c-c6a5-47ea-95ba-bc6e528038c7",
        background: "Guilder",
        description:
            "Involved in the of machinations of a Guild, such as a ship designer, financial analyst, or logistics officer.",
    },
    {
        id: "e5a37b1e-0861-4bc7-aff7-bafe596c13d8",
        background: "Military",
        description:
            "A Hegemonic soldier, mercenary, intelligence operative, strategist, training instructor, etc.",
    },
    {
        id: "5d8f4a11-addd-412d-aa1f-9aed59541c89",
        background: "Noble",
        description:
            "Living the life of luxury, such as a dilettante, someone caught up in House politics, etc.",
    },
    {
        id: "8e640997-779e-49ae-9975-1272fd809084",
        background: "Syndicate",
        description:
            "Part of an organized criminal gang, from the lowest lookout to ousted former crime lord.",
    },
];
const vices = [
    {
        id: "d109c67c-46d9-47d5-adbd-72a69d4b0138",
        vice: "Faith",
        description: "You’re part of a Cult, or observe specific ceremonies at regular intervals.",
    },
    {
        id: "b81e2316-d0c4-4904-be1e-f518ce6ba806",
        vice: "Gambling",
        description: "You crave games of chance, or bet on sporting events, etc.",
    },
    {
        id: "30543565-bf6b-4eb7-a754-4730583c304b",
        vice: "Luxury",
        description: "You seek the high life with expensive, ostentatious displays of wealth.",
    },
    {
        id: "c7b0d8b0-63ed-4e87-a4da-8c322482ba17",
        vice: "Obligation",
        description: "You’re devoted to a family, cause, organization, charity, etc.",
    },
    {
        id: "ed60f373-3f7f-4f2c-b876-0ea17d6792a5",
        vice: "Pleasure",
        description: "You seek hedonistic gratification from lovers, food, drink, drugs, art, etc.",
    },
    {
        id: "3c74ab6d-608e-4f75-a03e-b1e78ef10a57",
        vice: "Stupor",
        description:
            "You dull the senses with drug abuse, excessive drinking, fighting to exhaustion, etc.",
    },
    {
        id: "6e2a4482-7926-4b67-9ab0-638df8952ea1",
        vice: "Weird",
        description:
            "You perform strange experiments, explore The Way, commune with Ur Artifacts, and so on.",
    },
];
const signature = [
    {
        id: "b145646d-72ab-4f2c-83b4-050fdced16de",
        item: "Ornate Headdress",
    },
    {
        id: "f119309f-a97e-4672-9785-afd68b01dcdf",
        item: "Long Coat",
    },
    {
        id: "7e8cda24-9877-4a15-b861-9d3102480b6a",
        item: "Hood and Veil",
    },
    {
        id: "8aa7388e-7dfa-4b0b-8d20-944126d7e198",
        item: "Short Cloak",
    },
    {
        id: "cf56ed9f-e0a3-425b-b843-70d87840a71c",
        item: "Knit Cap",
    },
    {
        id: "24f48cd3-11bd-40c0-8e85-bf7cf2a599dc",
        item: "Fancy Makeup",
    },
    {
        id: "7e00eaa4-2e91-4348-bf15-71148f0b4f2b",
        item: "Slim Jacket",
    },
    {
        id: "7612f1a8-5932-41a0-a84f-b85cb15781d8",
        item: "Hooded Cloak",
    },
    {
        id: "f560ac4d-4925-4c55-beb7-ccfe1d7aff4a",
        item: "Work Boots",
    },
    {
        id: "dd720b88-6841-4693-a45f-54d43e9c6c6a",
        item: "Mask and Robe",
    },
    {
        id: "32a776b5-08f9-4695-b8ba-f5df785fdca6",
        item: "Suit and Vest",
    },
    {
        id: "12afb950-f1f4-41e9-a4d8-3ac8a7c87a13",
        item: "Collared Shirt",
    },
    {
        id: "c5a2fe20-dcac-41df-82ff-2df886175220",
        item: "Suspenders",
    },
    {
        id: "9ba9a285-df7d-48b8-bc44-d6cd0e063c11",
        item: "Intricate Rings",
    },
    {
        id: "d7ccf7ef-b40e-4d6f-801c-d31dffb0b80a",
        item: "Skirt and Blouse",
    },
    {
        id: "5bbc7603-a010-472b-a8fe-f8ef9d053ca7",
        item: "Wide Belt",
    },
    {
        id: "7b36744a-7081-4e62-9092-fc7c82aa2f0d",
        item: "Fitted Dress",
    },
    {
        id: "a304c282-b691-49ed-a93e-94536488f97d",
        item: "Flight Suit",
    },
    {
        id: "b7da3557-863c-4074-b5a1-89ae0d076beb",
        item: "Heavy Cloak",
    },
    {
        id: "5575a1d4-a5d3-48e6-9582-87e62750962d",
        item: "Thick Duster",
    },
    {
        id: "165394b2-7a14-4566-98c3-4ac7b6558fd2",
        item: "Loose Silks",
    },
    {
        id: "24711ed5-4283-4805-94d3-2d1b8aa3ddb4",
        item: "Tight Pants",
    },
    {
        id: "c3d00059-c54a-46dc-97f0-729b4cb39f92",
        item: "Bomber Jacket",
    },
    {
        id: "c6e2f0f5-d4bf-40ff-b2a4-7ef3ac99bd0a",
        item: "Long Scarf",
    },
    {
        id: "3eef1bb0-59d5-4230-95e9-da96ce30c1f4",
        item: "Leathers",
    },
    {
        id: "775d6437-b0cc-4d9e-897d-288fedc0ff27",
        item: "Stillsuit",
    },
    {
        id: "2a02335b-9609-4808-b69f-a3d4db630a84",
        item: "Hides and Furs",
    },
    {
        id: "ebb9c428-d572-47a3-9036-33b4d6581f33",
        item: "Worn Uniform",
    },
    {
        id: "7aa47273-443e-48cd-b144-8ba4ab47e683",
        item: "Space Suit",
    },
    {
        id: "4ed3463d-2273-449a-951e-33a8294355ed",
        item: "Glittering Jewelry",
    },
];
const aliases = [
    {
        id: "986102b6-e30c-4648-b3ca-492220a5f1b9",
        alias: "Ace",
    },
    {
        id: "ca5bb4be-f68b-4a01-8835-1e9adac20600",
        alias: "Agony",
    },
    {
        id: "98a7b2ca-1553-4c3d-a1a5-638d71fdc775",
        alias: "Apex",
    },
    {
        id: "10d135b9-8db5-4375-b40f-ff7fb60f8957",
        alias: "Athena",
    },
    {
        id: "ae443627-20f0-47d9-87b9-6d12efa9b7bd",
        alias: "Badger",
    },
    {
        id: "46c4c2bb-c8f7-40dc-b898-466315ae8f6a",
        alias: "Bingo",
    },
    {
        id: "626912ab-3868-435a-bef3-7cc9aedef822",
        alias: "Black",
    },
    {
        id: "95436dda-7aac-4b77-a072-4bf97b3f7f93",
        alias: "Bolt",
    },
    {
        id: "5a326194-3d8a-4000-a864-a8ca9e9dfeb7",
        alias: "Brakes",
    },
    {
        id: "4ff184d5-184b-4083-b57b-40ba241dd9b5",
        alias: "Carrot",
    },
    {
        id: "6272678e-910c-4f8c-a696-ea39c412585b",
        alias: "Cash",
    },
    {
        id: "20093b4a-9d12-4aca-abca-1545e4b9eb8b",
        alias: "Cosmo",
    },
    {
        id: "0c81ab1b-772c-46f4-949e-8be5ea68d46f",
        alias: "Dash",
    },
    {
        id: "ff5db15b-32cf-4214-87ba-525c8f5567d0",
        alias: "Devil",
    },
    {
        id: "e9e3e9c0-dc77-4039-b311-3aa2d0abd35c",
        alias: "Dipper",
    },
    {
        id: "858b7a0c-1980-4cd9-b920-8e7ce14dbb69",
        alias: "Echo",
    },
    {
        id: "7126c6a4-dcd3-4e12-8e98-ac51b8a5861a",
        alias: "Eight",
    },
    {
        id: "b2a7af85-757d-4a09-96e2-4e4e1ac9248c",
        alias: "Elbows",
    },
    {
        id: "ef36ec50-339e-40fe-9501-e89d2b606ffa",
        alias: "Falcon",
    },
    {
        id: "fb6905b6-5873-4bbd-adae-fbc7d8da59eb",
        alias: "Fireball",
    },
    {
        id: "ebdc7bea-caf4-4a38-b8c0-88484086eb0e",
        alias: "Flex",
    },
    {
        id: "19a9c5ef-9a10-4783-81f4-d4ed27ccc5c1",
        alias: "Game",
    },
    {
        id: "c8874c2b-7da8-4d48-a251-944412d840a2",
        alias: "Gargoyle",
    },
    {
        id: "9c959d7a-5ab9-4b25-bd1a-4bab3e2b9a9a",
        alias: "Gear",
    },
    {
        id: "490c97cb-a005-4e78-ae8d-496abca9d3b5",
        alias: "Gonzo",
    },
    {
        id: "c745fe0f-841f-446b-9a77-87bd7e84ff3c",
        alias: "Guns",
    },
    {
        id: "e1a23309-9dd5-452a-a54c-0a0e4d5ac65a",
        alias: "Hammer",
    },
    {
        id: "34b5c1dd-aa87-452b-a370-9531445b2948",
        alias: "Headhunter",
    },
    {
        id: "37b97220-44b2-4642-bd2a-3065bf192aae",
        alias: "Helo",
    },
    {
        id: "cb59f56a-ed00-4116-85b8-8a455676e0f5",
        alias: "Hex",
    },
    {
        id: "db702024-d588-40de-9be3-845c10d0ce25",
        alias: "Highball",
    },
    {
        id: "ed94183e-1e7b-4782-86a8-6d0cf9043332",
        alias: "Hyper",
    },
    {
        id: "5bcb934c-41bb-4790-8ec5-369707f1a0f8",
        alias: "Intake",
    },
    {
        id: "355b49fc-5af4-4798-bfce-3b08e804e770",
        alias: "Iris",
    },
    {
        id: "3ffd5b70-0694-4eb5-ae65-5bac03a085da",
        alias: "Iron",
    },
    {
        id: "edb954c1-0ec6-4bb2-bb49-047b5911dcb1",
        alias: "Juggler",
    },
    {
        id: "24a26342-578d-4869-b687-b07bb6e1e969",
        alias: "Juice",
    },
    {
        id: "18bfc83e-3e1f-4ba9-a0ea-98bd7d5f24f6",
        alias: "Junior",
    },
    {
        id: "94a9b3f6-7339-46ea-80a0-a2c38a3bf203",
        alias: "Karma",
    },
    {
        id: "e97de4be-7085-45f6-b00b-8ade54bb6e3c",
        alias: "Lasher",
    },
    {
        id: "86f7b148-f949-4aa8-a17c-0101f8bd1d0f",
        alias: "Legend",
    },
    {
        id: "615dc862-6bd0-422d-99b6-7e66dbbbce04",
        alias: "Link",
    },
    {
        id: "e1644842-b185-4eae-8845-0c9a29fb7b32",
        alias: "Loco",
    },
    {
        id: "8d98d26f-9d5e-4cbc-bb80-10744c8fd532",
        alias: "Mooch",
    },
    {
        id: "acfc8fb2-2ffa-4c41-9617-ec9c283b8663",
        alias: "Nails",
    },
    {
        id: "522d7155-2147-43df-901c-13c13e0314f5",
        alias: "Nemesis",
    },
    {
        id: "d33bdc1a-9207-41c7-b7bb-35de8fc8f54a",
        alias: "Nova",
    },
    {
        id: "5a772bac-8bf0-4445-aa3b-c352840efdac",
        alias: "Owl",
    },
    {
        id: "43c1b1c5-3388-4c41-be47-afe2bcd43adc",
        alias: "Phoenix",
    },
    {
        id: "2bdd56d7-4b0c-4877-8596-32c1142b6951",
        alias: "Quirk",
    },
    {
        id: "595379c4-51de-4536-9530-0c3d31395c35",
        alias: "Raider",
    },
    {
        id: "11b61959-bf27-494f-b972-1f16bcdcffab",
        alias: "Razor",
    },
    {
        id: "741c1bd5-2713-4d35-91fe-53b27a820d31",
        alias: "Rash",
    },
    {
        id: "7079646e-b630-43d8-b85d-209c9d8b0ba0",
        alias: "Skulls",
    },
    {
        id: "97525463-10cf-406b-bcc4-f8d5a4bdb7e2",
        alias: "Snaps",
    },
    {
        id: "3898c8eb-146d-4b08-89bf-e619db890554",
        alias: "Snitch",
    },
    {
        id: "3f9584fd-2542-4e8e-936d-99f131e722d8",
        alias: "Stinger",
    },
    {
        id: "3a6a59b0-1b51-4383-a924-a7947c9d2945",
        alias: "Syndrome",
    },
    {
        id: "9b792ff4-fb37-4eea-bef8-6d15d3ecc9ed",
        alias: "Tank",
    },
    {
        id: "a67c888a-90b2-4253-826f-708abb2bdd38",
        alias: "Tax",
    },
    {
        id: "65cee91f-9f82-4c1a-ac25-13a2ff8a3f44",
        alias: "Titan",
    },
    {
        id: "f0a485c8-82a6-4452-9104-f9223ef762d4",
        alias: "Tread",
    },
    {
        id: "239e9cff-005f-4465-9643-c0850fa8deb9",
        alias: "Under",
    },
    {
        id: "9e22a119-d4f6-4c94-9be7-bd164ecc0bce",
        alias: "Vandal",
    },
    {
        id: "26338b78-4e0d-4e51-8a93-be1109c2091a",
        alias: "Vapor",
    },
    {
        id: "687976ec-1813-4cea-a4e6-32e224659b7d",
        alias: "Wraith",
    },
    {
        id: "53e43983-e64d-4035-8dfa-65e87be9f2db",
        alias: "X-Ray",
    },
    {
        id: "f3924ae0-d65d-4ee5-8701-5ef6226c3646",
        alias: "Yellow",
    },
    {
        id: "b61e5676-ff05-4a5e-89b7-0d75f6f0066a",
        alias: "Zen",
    },
    {
        id: "d00e7b1c-67f0-41d6-b7ff-d8c2b89dc144",
        alias: "Zenith",
    },
    {
        alias: "Zipper",
    },
];
const lastNames = [
    {
        id: "af3f0aa9-5abc-4217-8de2-10dc2884dcec",
        name: "Acon",
    },
    {
        id: "ef7ffe44-a039-4d25-8fa1-b35487e9d8aa",
        name: "Apple",
    },
    {
        id: "ca2e8edd-fa96-4c0d-b5a5-b73524f2abcb",
        name: "Bartok",
    },
    {
        id: "79ed3309-6aff-4c8a-af71-b2c605f41356",
        name: "Black",
    },
    {
        id: "45ddc349-620a-4293-b2f8-95095891ea94",
        name: "Brell",
    },
    {
        id: "9ca12c6f-a082-405a-a86d-438aa0a6c45d",
        name: "Clovis",
    },
    {
        id: "42a48baf-0cee-48fc-91b3-fe104e1a74ca",
        name: "Crynyd",
    },
    {
        id: "54f8e884-0b98-4eb2-bc66-198f34ded14d",
        name: "Curia",
    },
    {
        id: "12b94aa3-09c5-425e-bb70-2d743f9fa9f9",
        name: "Doona",
    },
    {
        id: "be7d3d33-dd0a-499c-b230-d47cb9bdf438",
        name: "Drake",
    },
    {
        id: "b63898ca-d748-4ef0-8a53-286f6bfa7568",
        name: "Dyson",
    },
    {
        id: "f912ffc7-fbb1-4e6a-b934-870945044de1",
        name: "Emari",
    },
    {
        id: "0a65e971-2ecb-4fb7-89bf-70cff56ea51b",
        name: "Endua",
    },
    {
        id: "f1cf80d7-09a0-4305-9ab5-70d1876961ce",
        name: "Evazan",
    },
    {
        id: "9618cab2-8404-4778-9cc5-6a7e5c4a2a0c",
        name: "Farr",
    },
    {
        id: "3be82d7c-5227-4525-9e66-e4d9c50a8962",
        name: "Feris",
    },
    {
        id: "28cc3661-1df5-4017-9e98-f25e76d2ab17",
        name: "Gallia",
    },
    {
        id: "e6d1678f-f47b-4168-b766-44fceba8166a",
        name: "Gree",
    },
    {
        id: "0ad4e1c3-ff75-46c0-b481-ea36eb7fc9a5",
        name: "Gyle",
    },
    {
        id: "183a6700-f55a-4380-8336-7300a0743cff",
        name: "Hawking",
    },
    {
        id: "e9ac8fa3-d6d2-4b19-8317-af7e7d59c0ea",
        name: "Hex",
    },
    {
        id: "2352327a-79aa-45ca-8682-9779bdbafac7",
        name: "Hill",
    },
    {
        id: "8107d656-3757-43e3-8b5d-b79a1471a6c3",
        name: "Impera",
    },
    {
        id: "d5e77273-e384-45db-a590-6e54244ee004",
        name: "Indigo",
    },
    {
        id: "14571806-99f6-40ad-b933-0d37b96e1d2a",
        name: "Intal",
    },
    {
        id: "10db16bd-b439-462f-985c-c03b5733a155",
        name: "Ivanov",
    },
    {
        id: "ff94d577-a541-4dbe-8221-33b31a38ecef",
        name: "Jor",
    },
    {
        id: "1f977557-4857-45c1-ba02-d38088710905",
        name: "Jusik",
    },
    {
        id: "5b05c4b8-1c93-4cae-9baf-9b234f9a8c8e",
        name: "Kasur",
    },
    {
        id: "10d52667-f980-458b-a3a7-d52bfd19cb0d",
        name: "Kedra",
    },
    {
        id: "fe754ff8-bf27-4384-a07c-18472276349b",
        name: "Kor",
    },
    {
        id: "afa33723-eda8-4273-86f3-4b919f639950",
        name: "Kranax",
    },
    {
        id: "fa625aa1-780b-4e80-abd4-b9221a276249",
        name: "Kritus",
    },
    {
        id: "8b0a6414-1d64-4b68-af97-94fc257341a6",
        name: "Kromyl",
    },
    {
        id: "f5375afb-cbae-4c27-8322-c1339d0c863e",
        name: "Kymnal",
    },
    {
        id: "d15f14b5-d28c-4997-8250-2f0c85b6e7f1",
        name: "Lana",
    },
    {
        id: "05b31dca-fedd-48d6-9c71-94e5d0fc850d",
        name: "Livia",
    },
    {
        id: "24856540-70d0-45b3-8863-37f857457fe5",
        name: "Luo",
    },
    {
        id: "0930f812-05f5-41f7-a93f-dfad638c9887",
        name: "Mahat",
    },
    {
        id: "da9ed097-9286-4269-93d0-351b17833be1",
        name: "Marak",
    },
    {
        id: "deac4e39-9206-430e-865d-0373bcfa04e7",
        name: "Natoth",
    },
    {
        id: "45a4b193-7b3d-42e1-ad7c-a85f457abf61",
        name: "Nagan",
    },
    {
        id: "b2497441-ac7c-4f8f-b392-a1b1b8bd3799",
        name: "Neumann",
    },
    {
        id: "3dc18659-a823-4b4f-976d-a3af1f0936c4",
        name: "Nur",
    },
    {
        id: "0275fa0b-eb22-4f36-ae41-61d745d2047d",
        name: "Ortcutt",
    },
    {
        id: "47d944dd-3750-4010-9045-3a8c861cd6d6",
        name: "Pava",
    },
    {
        id: "781a6673-672a-4763-bf88-995296449f56",
        name: "Pim",
    },
    {
        id: "50a8d661-44ad-4433-8642-05d6c94f84b4",
        name: "Quag",
    },
    {
        id: "5b342607-9ae1-428c-90c3-85a2207a7fc2",
        name: "Ramus",
    },
    {
        id: "130e0b1a-7861-44e7-8f9a-8dfc5240e3f3",
        name: "Rudra",
    },
    {
        id: "f7cb2236-41a0-498d-bade-0f93ff7421de",
        name: "Ryle",
    },
    {
        id: "1db95519-9306-4c79-a287-fbc6f826c8b7",
        name: "Shrike",
    },
    {
        id: "e0737a12-9e7a-4e72-908e-833a0516b800",
        name: "Sprek",
    },
    {
        id: "7b609460-35c7-4476-a9e1-784d8cbc5b8d",
        name: "Suzuka",
    },
    {
        id: "ff37f4d2-2f28-4031-bf49-6df9dd23d608",
        name: "Tann",
    },
    {
        id: "cd7ed8db-b9b6-4ff7-9e7d-1e1c7e048bf9",
        name: "Tarkin",
    },
    {
        id: "36b8ed2c-b08e-40d5-a9b4-07213a5e3edc",
        name: "Tel",
    },
    {
        id: "f2460837-f5f1-46ec-83b9-1630c55068bd",
        name: "Thorn",
    },
    {
        id: "2d983bfe-7981-45cb-a8c8-2ee46b274e3b",
        name: "Tilad",
    },
    {
        id: "9e7d2931-c660-4200-937d-902084d01c8a",
        name: "Ulmak",
    },
    {
        id: "8c9f5f95-8a84-49a1-816a-5c3401d97004",
        name: "Ursis",
    },
    {
        id: "b1df8791-424e-487e-a0b5-fce27043215a",
        name: "Valorum",
    },
    {
        id: "ddf930c4-39b6-4649-82b1-c0904d65b15b",
        name: "Veers",
    },
    {
        id: "052ea8a5-ab8e-4632-a61a-3130b689cc3e",
        name: "Vosa",
    },
    {
        id: "a18b373d-e7b3-4d72-9833-fe42940dd97f",
        name: "Wu",
    },
    {
        id: "5a8371e7-2139-429b-a254-31a0429a3462",
        name: "Wolffe",
    },
    {
        id: "7f3f31d4-2fa0-40d0-a8b8-95a8ff42fe74",
        name: "Wren",
    },
    {
        id: "338bd86f-7ba2-4d64-b770-118ca5d2df67",
        name: "Yoneyama",
    },
    {
        id: "ac3f3a2d-3890-414e-babc-47ee01553a52",
        name: "Yueh",
    },
    {
        id: "301c14a6-bdbb-4565-a13b-acd710a560fd",
        name: "Yularen",
    },
    {
        id: "c393aa93-eafd-4617-afb8-13c4f0cf9fc0",
        name: "Zan",
    },
    {
        id: "be8fa8f2-c3ca-447b-8efc-fe76fadbac76",
        name: "Zer",
    },
];
const firstNames = [
    {
        id: "1e2ae67e-21f6-4f94-8c11-798af6e962e5",
        name: "Abra",
    },
    {
        id: "ee1f2dde-b91a-48e3-bc6b-9a22ce986b17",
        name: "Aria",
    },
    {
        id: "7007c94e-4757-4652-a851-a1acf85931dd",
        name: "Chendra",
    },
    {
        id: "b27b0f76-f37c-450c-b991-961ce2e3f591",
        name: "Cord",
    },
    {
        id: "866e48a1-294a-4a2b-8a18-ba69a7c79f3b",
        name: "Del",
    },
    {
        id: "1b29071b-8c96-4761-9e00-d1e9f7639311",
        name: "Duncan",
    },
    {
        id: "89b031f0-7e62-449a-bf42-4999a500f727",
        name: "Ed",
    },
    {
        id: "7463a1a8-f542-4c62-b884-4328f1ccafbc",
        name: "Entex",
    },
    {
        id: "4e4ec686-3aa2-4997-87c8-ae7a4d8c342c",
        name: "Espa",
    },
    {
        id: "ce43e3cf-97a5-48c8-9556-6af0675462b8",
        name: "Faykan",
    },
    {
        id: "38a1d77b-b25a-4138-80f5-66bd9ea04a13",
        name: "Faye",
    },
    {
        id: "498bd3ac-f519-425a-ba76-b64ed926fa19",
        name: "Finn",
    },
    {
        id: "4965bdcb-acc5-4a74-b69d-b3a2b812b500",
        name: "Fox",
    },
    {
        id: "49fe24a0-8241-47c6-a948-5a9010168285",
        name: "Gaius",
    },
    {
        id: "525ecbe5-7815-44f7-883e-07ef51c828ff",
        name: "Garm",
    },
    {
        id: "5204daaf-9b54-4597-89d4-92ab512225af",
        name: "Garrus",
    },
    {
        id: "993b50d0-ccb0-45f6-a13d-9b32e76158ab",
        name: "Genera",
    },
    {
        id: "be50a1ef-cb6d-4583-9579-a3a8c410c9e5",
        name: "Greeg",
    },
    {
        id: "07847017-66ee-475c-820a-5404a590e13a",
        name: "Gurney",
    },
    {
        id: "3f713500-75b6-44d7-b8c4-825e7bf347d0",
        name: "Han",
    },
    {
        id: "51a3859f-8edf-43b2-84b0-5f635982b87a",
        name: "Hirak",
    },
    {
        id: "e65dc352-d221-4e13-816d-a829161a11b0",
        name: "Hondo",
    },
    {
        id: "b8408c72-2e44-45fb-92b9-1f85f38a98eb",
        name: "Ignor",
    },
    {
        id: "360437f7-80c1-4c3a-b81e-ef549ba48f93",
        name: "Jaana",
    },
    {
        id: "72bd2ca9-3a05-4162-b9d1-97d4b6dccf78",
        name: "Jango",
    },
    {
        id: "938cb14e-5592-4fed-8d48-78152c4b0613",
        name: "Jerec",
    },
    {
        id: "893b3e3d-664c-44a8-99ce-0755ccedf5f2",
        name: "Jet",
    },
    {
        id: "d0fea32f-1c6b-42a8-9474-93545cddd12a",
        name: "Jung",
    },
    {
        id: "839b1ae1-5a85-40ea-ba08-3ea453bd8f5f",
        name: "Kai",
    },
    {
        id: "cc219455-1d01-4ab2-bee0-e6ef42202224",
        name: "Kalo",
    },
    {
        id: "37f9591b-70a3-4887-aa13-5a0c2ec243d9",
        name: "Kahlee",
    },
    {
        id: "98876350-4242-4c2d-be82-cc9a3d99a796",
        name: "Kasumi",
    },
    {
        id: "4eabcd3f-9a50-483c-bce2-e427d702074b",
        name: "Kirk",
    },
    {
        id: "cbc7dc57-ccdb-419d-8956-a506a34ecb38",
        name: "Kit",
    },
    {
        id: "99213564-1516-4609-b4db-d6dd77ca177d",
        name: "Lando",
    },
    {
        id: "c2881e02-c811-44cc-8906-a5ebc09f75b5",
        name: "Leto",
    },
    {
        id: "2352078f-efc5-4c1a-8ec9-40ef7812d51c",
        name: "Liara",
    },
    {
        id: "d51b8257-e62f-42e8-9fb0-525e38c3c075",
        name: "Lotus",
    },
    {
        id: "610dd41e-3551-474b-9b0e-848f44825732",
        name: "Mevakor",
    },
    {
        id: "c7f5b8a2-5abd-4d58-a50a-c95dfca64de7",
        name: "Mill",
    },
    {
        id: "d813fd76-3e3f-48b3-9f40-ba36ba114ac0",
        name: "Mino",
    },
    {
        id: "d3fcf0d7-0301-458e-8f61-72f1d90853a5",
        name: "Miranda",
    },
    {
        id: "c98a1815-7ab3-4484-973c-fdac6dc5e5e3",
        name: "Mordin",
    },
    {
        id: "70c4e710-4400-4272-b148-64ea63f636f3",
        name: "Naimon",
    },
    {
        id: "3884c48e-5a25-40aa-aab2-786242906246",
        name: "Needa",
    },
    {
        id: "59141ebd-dd61-4412-a83a-1475b887db0a",
        name: "Oola",
    },
    {
        id: "8f384c6e-03e4-4c7a-9dce-bbf89dcca3b8",
        name: "Orrin",
    },
    {
        id: "26149e21-5584-422e-af6b-b75ce2cc9432",
        name: "Paul",
    },
    {
        id: "293409aa-bbd2-470b-a9b9-899618bbd2dc",
        name: "Poe",
    },
    {
        id: "ca39b2bf-ab44-4f9a-8e22-d80bb946f853",
        name: "Potak",
    },
    {
        id: "45cc6bf2-3bfa-4b78-9f92-a198136e1ff7",
        name: "Praxis",
    },
    {
        id: "8a9560d3-c557-49fd-8b41-c9a3c57a0e06",
        name: "Quinton",
    },
    {
        id: "0db82bcf-eaec-4fca-82c9-574f1cb48152",
        name: "Rey",
    },
    {
        id: "50507648-d319-40c1-9388-218e6392f728",
        name: "Rocco",
    },
    {
        id: "a6828c16-7ec1-43d1-bf11-a55b75b70e40",
        name: "Saldeed",
    },
    {
        id: "ed16d0eb-d79f-457a-90b1-67b8eae7cc2f",
        name: "Samara",
    },
    {
        id: "5616fa1a-3a87-4844-af7b-b75012ed79dc",
        name: "Saren",
    },
    {
        id: "ed9b0af3-2c93-45c3-8479-b876d1a44c92",
        name: "Seklor",
    },
    {
        id: "c337db64-51d8-4a4d-8ca9-dee7a1389663",
        name: "Spike",
    },
    {
        id: "67a8c405-5062-4af1-8e9e-fe21d0d8fb78",
        name: "Thane",
    },
    {
        id: "9454e97d-f2cf-4bae-99ae-0a95312c8398",
        name: "Yast",
    },
    {
        id: "a91f5b07-8558-468d-97f9-c9c26593a801",
        name: "Yola",
    },
    {
        id: "63e74caf-d8a3-4641-8f08-ca8ffe85d881",
        name: "Victor",
    },
    {
        id: "a4c706a6-b770-4cbd-8b0c-b7b895bd466e",
        name: "Wyndam",
    },
    {
        id: "b1dfff26-0749-4188-980f-fb2311154f1a",
        name: "Xavier",
    },
    {
        id: "dccf35d7-b349-4226-9fee-1de5003b4a15",
        name: "Zaeed",
    },
    {
        id: "2b75d7c0-c282-4442-9839-726ace5cd910",
        name: "Zokar",
    },
];
const actions = [
    {
        id: "2d955562-0706-4c52-aa6c-6434fd637785",
        action: "attune",
        description:
            "When you Attune to The Way, you open your mind to the galactic energies underlying all of existence.",
        clarification:
            "You might communicate with a non-sentient species or robot. You could safely handle Precursor Artifacts or remnants that tap directly into The Way. You might sense unseen danger, or killing intent (though study might be better).",
    },
    {
        id: "e8135559-e633-46b8-a68e-a2847fd15ce3",
        action: "command",
        description: "When you Command, you compel obedience with your force of personality.",
        clarification:
            "You might intimidate or threaten to get what you want. You might lead an action with NPCs. You might order people to do what you want (though sway might be better).",
    },
    {
        id: "649ff699-7629-4b0a-bbcf-8703f790b424",
        action: "consort",
        description: "When you Consort, you socialize with friends and contacts.",
        clarification:
            "You might gain access to resources, information, people, or places. You might make a good impression or win someone over with your charm and style. You might make new friends or connect with your heritage or background. You could try to direct your friends with social pressure (but Command might be better).",
    },
    {
        id: "5fddad07-5be8-4cbc-8ef4-5329d15bd9f1",
        action: "doctor",
        description:
            "When you Doctor, you attend to the needs of another by lending aid and comfort, or you look scientifically at the world.",
        clarification:
            "You might treat someone’s injuries. You might analyze a substance’s composition to learn how it functions. You might comfort someone in distress (but Consort might be better).",
    },
    {
        id: "b6b946b1-7a66-412b-bd50-8772250e6f23",
        action: "hack",
        description:
            "When you hack, you breach the security systems of computers or override their controls.",
        clarification:
            "You might access a data console to find a captive being held somewhere on the station. You might Scramble a drone’s control systems to keep it from firing on you. You might override a door’s controls to get it to open (though rig might be better).",
    },
    {
        id: "daa14d85-6a46-438c-bc69-60691fbf2d66",
        action: "helm",
        description: "When you helm, you pilot a vehicle or use vehicle weapons.",
        clarification:
            "You might plot a jump through a dark hyperspace lane. You might dive through a canyon to escape a chasing ship. You might fire quad-lasers at hostile pirates. You might reroute power on The Ship to weather fire (though rig may be better).",
    },
    {
        id: "6ceb5cde-deb5-4cf3-83eb-86d238687564",
        action: "rig",
        description:
            "When you rig mechanisms, you alter how an existing mechanism works or create a new one.",
        clarification:
            "You might disable a trap. You might repair a damaged ship system. You might crack a safe. You might overdrive an engine. You might program a bomb to detonate later. You might force a door open (though hack might be better).",
    },
    {
        id: "36866e1d-d14a-4877-8220-4bbb5482aa11",
        action: "scramble",
        description:
            "When you Scramble, you lift, climb, jump, run, or swim, usually either away from or into danger.",
        clarification:
            "You might vault over a turnstile while escaping authorities. You might climb up the side of a cliff to approach a secret base. You might dodge blaster fire as you cross the hangar to get to your ship. You might chase after a mark you’re following (though skulk might be better).",
    },
    {
        id: "f6eec4e6-0b7b-4106-b38e-fa2b52b64a68",
        action: "scrap",
        description:
            "When you scrap, you engage in pitched combat with the intent to harm or neutralize your opposition.",
        clarification:
            "You might brawl or wrestle with your foe. You might use a melee weapon. You might storm a barricade or hold a position in battle. You might lay down blaster fire. If you’re using a vehicle or ship weapon, you should use helm instead.",
    },
    {
        id: "537960fb-888d-4477-8736-ca332ca683ab",
        action: "skulk",
        description: "When you skulk, you move stealthily or without being noticed.",
        clarification:
            "You might sneak past security or hide in the shadows. You might lift a cred-stick off a mark. You might sneak up behind someone to attack them by surprise (but scrap might be better). You could try to climb up the side of a building (but Scramble might be better).",
    },
    {
        id: "5d9c5d61-766e-4719-ad4c-c17549412fed",
        action: "study",
        description: "When you study, you scrutinize details and interpret evidence.",
        clarification:
            "You might gather information from documents, newspapers, and books. You might do research on an esoteric topic. You might closely analyze a person to detect lies or true feelings. You could deduce a person’s intention to kill you (but Attune might be better).",
    },
    {
        id: "2f13c331-8aca-42ef-a703-bb5f41e00537",
        action: "sway",
        description: "When you sway, you influence someone with guile, charm, or logic.",
        clarification:
            "You might outright lie to someone’s face. You might persuade a sucker to believe you. You might argue the facts with an officer. You could try to trick people into affection or obedience (but Consort or Command might be better).",
    },
];

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("playbooks").del();
    await knex("playbooks").insert(playbooks);
    await knex("friends").del();
    await knex("friends").insert(friends);
    await knex("items").del();
    await knex("items").insert(items);
    await knex("special_abilities").del();
    await knex("special_abilities").insert(specialAbilities);
    await knex("build_name").del();
    await knex("build_name").insert(buildSuggestions);
    await knex("heritages").del();
    await knex("heritages").insert(heritages);
    await knex("backgrounds").del();
    await knex("backgrounds").insert(backgrounds);
    await knex("vices").del();
    await knex("vices").insert(vices);
    await knex("signature").del();
    await knex("signature").insert(signature);
    await knex("aliases").del();
    await knex("aliases").insert(aliases);
    await knex("last_names").del();
    await knex("last_names").insert(lastNames);
    await knex("first_names").del();
    await knex("first_names").insert(firstNames);
    await knex("actions").del();
    await knex("actions").insert(actions);
};
