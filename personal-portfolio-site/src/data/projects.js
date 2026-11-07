import tachyonStill from '../assets/projects/tachyon-still.png'
import tachyonVideo from '../assets/projects/tachyon.mp4'
import tachyonVehicle from '../assets/projects/tachyon-vehicle.png'
import jovianStill from '../assets/projects/jovian-still.png'
import jovianVideo from '../assets/projects/jovian2.mp4'

export const projects = [
    {
        id: 'tachyon',
        title: 'Tachyon',
        still: tachyonStill,
        video: tachyonVideo,
        links: {
            github: 'https://github.com/vfs-sct/GD80PG29FP-Tachyon', 
            itch: 'https://vfs-gdpg.itch.io/tachyon',
        },
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: [{
                    type: 'text', text: 'Tachyon is a 3D third-person, free-for-all multiplayer vehicle combat game set in a timed deathmatch arena. Players pilot hovercars through an environment built with extreme vertical transitions and half-pipes, where navigating the geometry is required to build and sustain momentum. In this system, velocity acts as the primary combat resource: moving faster directly increases the damage output of both ranged projectiles and physical collisions. Players must constantly balance this high speed with their steering control to eliminate opponents by shooting or ramming them, while using evasive maneuvers to dodge incoming fire. Dealing damage and securing kills charges a pre-equipped Ultimate Ability, which can be unleashed for a significant tactical advantage. The primary objective is to accumulate the highest score through combat eliminations and performance before the match clock runs out.' }],
            },
            {
                id: 'contributions',
                title: 'Contributions',
                content: [
                    { type: 'text', text: 'I was responsible for building the mechanics and networking of the combat and game systems. This includes shooting/overheating, abilities, player resources, respawn systems, player statistics, and game events. I built the system in conjunction with Unreal Engine’s GAS (Gameplay Ability System) plugin. I also facilitated technical meetings, produced and maintained technical documentation, and spearheaded the architecture of the project alongside our engineers.' },
                    { type: 'image', src: tachyonVehicle, alt: 'Vehicle shooting in-game', caption: 'Shooting', side: 'left', width: '40%' },
                    { type: 'text', text: ''},
                    { type: 'text', text: 'Shooting/Overheating'},
                    { type: 'text', text: 'Bullets in our game shoot forwards from the position of the vehicle, glide along the surfaces of our arena, and have a very slight homing effect. I built a custom movement script for the bullets with C++ taking these factors into consideration to avoid the overhead of UE5’s projectile component. I paired this system with GAS, setting the values of the bullet with the vehicle’s stats, and affecting the vehicle’s overheat meter. Instead of a traditional ammo count, the vehicle’s weapon will begin to overheat through continuous fire, and be unable to shoot if its overheat gauge maxes out. This system utilized GAS’s Gameplay Attributes and Gameplay Tags architecture.' },
                    { type: 'text', text: ''},
                    { type: 'text', text: 'Abilities'},
                    { type: 'text', text: 'Tachyon has six total abilities, three which worked on cooldowns, and three which worked on a resource called ‘Ultimate Charge’. Cooldowns work using tags on a set timer, affectable by a ‘Cooldown Multiplier’ value that calculates if a player has a buff that shortens their cooldown timers, and Ultimate Charge works on a value stored in the PlayerState, chargeable by both a constant overtime tick, and by damaging other players. It lives in the PlayerState so that its value is saved between deaths. The three cooldown based abilities were a rewind, a shield, and an invisibility. The three Ultimate Charge based abilities were a laser, a constant AOE damage effect around the player, and a lingering trail behind the vehicle which is lethal to enemy players. On top of the mechanics for each ability I created outlets for my technical artist and sound designers to be able to plug in their assets when they were ready.'},
                    { type: 'text', text: ''},
                    { type: 'text', text: 'Gameplay Events'},
                    { type: 'text', text: 'Tachyon has two events that trigger during each match. The first, ‘The Ultimate Ball’, spawns a large angular ball that the players can damage and destroy. Upon being destroyed, it grants the player who dealt the last blow maximum charge on their ultimate. This reused our existing health system, with its effect cleanly living inside its OnDeath function. The second, ‘Kill the King’, places a crown on the player with the highest score, the ‘King’. The King has reduced cooldowns on their cooldown based ability, however they are highlighted by a beam of light above their heads at all times, and are now worth double points for anyone who kills them. If another player overtakes the King in score during this event, they are now King.'},
                ],
            },
            {
                id: 'case-study', title: 'Case Study',
                content: [
                    { type: 'text', text: 'Building Networked Gameplay on a Client-Authoritative Movement System' },
                    { type: 'text', text: 'In consideration to our resources and production timeline, the engineering team decided on making the movement system client-authoritative, however GAS is traditionally server-authoritative. This created heavy desyncs with the combat system that lived on GAS as the players would actually be ahead of the server’s last stored position of them (ex. Player fires bullet, request to fire sent to server, bullet spawns at where the server thinks that player is, the player has already moved since they don’t require the server’s approval and the bullet is desynced on their screen). With this in mind, we decided on making the bullets client-authoritative as well, understanding and accepting that we wouldn’t be building this with creating anti-cheat systems in mind. ' },
                    { type: 'text', text: ''},
                    { type: 'text', text: 'Since the shooting client would always see the correct position of the bullet, the visual integration necessary was to have players able to view enemy bullets correctly. For this I opted to have proxy bullets spawn for all other players. They moved and appeared as a regular bullet, however the damage calls to the server lived solely on the shooting client’s machine as a Reliable function. This kept visual coherence for all players while having the underlying mechanic work as intended.'},

                ]
            },
            {
                id: 'takeaways', title: 'Takeaways', content: [{
                    type: 'text', text: 'Tachyon was a very interesting project to work on as it required an intimate understanding of networked gameplay in Unreal Engine 5 as well as an overall ability to communicate with engineers and technical designers on solutions that were feasible within our production timeline. If we had a longer time horizon to develop it, I believe we would have been able to commit to a more secure client-prediction server authoritative system which wasn’t possible due to the overhead we would face with the team overcoming the barrier of networked vehicle movement. Building a project atop multiple plugins was also a good learning experience as the team had to navigate the useful interactions of GAS, Common UI, MVVM, Steam Sockets, and our own scripts to build the game while maintaining a clear, scalable architecture. One of the most useful experiences I gathered was working with a team of engineers as we had to think more about how we could build efficiently for the future (ie. outlining particular outlets needed from each other in advance) so that our workflow wasn’t disrupted or blocked by another programmer’s domain.' }] },
        ],
    },
    {
        id: 'jovian-nightmare',
        title: 'Jovian Nightmare',
        still: jovianStill,
        video: jovianVideo,
        links: { github: 'https://github.com/vfs-sct/GD80PG29TP-JovianNightmare', itch: 'https://kensdevlog.itch.io/jovian-nightmare' },
        sections: [{
            id: 'overview', title: 'Overview',
            content: [
                { type: 'text', text: 'Jovian Nightmare is a 3D 1st person shooter where you must use your grappling hook and energy charged sniper rifle to defeat Spotlight, a space sentry gone rogue. It fires deadly lasers and crushes anything that gets close. Maneuver around the remains of its space station and wandering asteroids while targeting its exposed energy cells to destroy it before it destroys you.' },
            ]
        },
            {
            id: 'contributions', title: 'Contributions',
                content: [
                    { type: 'text', text: 'I was the gameplay and UI engineer/tech artist for this project, responsible for the movement, grappling hook, sniper rifle, inverse kinematics and UI integration including an auto-locking grappling reticle and weak point indicators..'},
                    { type: 'text', text: '' },
                    { type: 'text', text: 'Grappling Hook' },
                    { type: 'text', text: 'The grappling hook was definitely the highlight of the project. I designed and developed the mechanics of the grappling hook, exposing all necessary values such as max range and speed for designers to tweak. I also integrated movement bias dependent on whether the player was trying to move in a certain direction so they could swing left or right of objects instead of just pulling themselves straight towards their hook point. In addition to this, I also developed the grappling hook VFX, handling the implementation with the animations and arm IKs. I also developed our own camera system to add FOV changes and tilting based on player speed and orientation to hook points.' },
                    { type: 'text', text: '' },
                    { type: 'text', text: 'Auto Locking Reticle' },
                    { type: 'text', text: 'The auto locking reticle was an interesting feature to develop as it allowed me to create the back-end system to gather the data from the world and connect it to the UI frontend for how the reticle should appear on the player’s screen. I created UI materials using Unity’s Shader Graph and connected it with my C# logic to have it lock onto the nearest viable hook point within a certain radius of the player’s forward vector' },
                    { type: 'text', text: '' },
                    { type: 'text', text: 'Arm Inverse Kinematics' },
                    { type: 'text', text: 'I developed custom arm kinematics to add to the feeling of the grappling mechanic. It was made through overriding the arm’s position at the end of its animation and manipulating the rotation of the model’s shoulder and elbow joints to face the hook point while following certain adjustable limitations.' },
                    { type: 'text', text: '' },
                    { type: 'text', text: 'Grappling Hook VFX' },
                    { type: 'text', text: 'The VFX of the grappling hook was created by rendering a dynamic bezier curve that used the spool and hook as the first and last points of the curve. It was developed with Unity’s VFX graph. A key part of this working correctly with the inverse kinematics system was ensuring the script’s priority order ran after that of the IK script to ensure it was using the latest possible position for an accurate visual.' },
                    { type: 'text', text: '' },
                    { type: 'text', text: 'Weakpoint UI' },
                    { type: 'text', text: 'The weak points of the boss, Spotlight, are indicated by UI elements that appear when the player scopes into their sniper rifle. It pulls from the weak point data to indicate the health of each weak point, and sizes dynamically to fit the bounds of the weak point model on the player’s screen. For this I created scripts in C# to calculate the data of visible weak points to the player, and sent the data to the rendered UI shader to adjust the appropriate parameters.' },
            ]
            },
            {
            id: 'case-study', title: 'Case Study',
                content: [
                    { type: 'text', text: 'The design of giving weak points a UI indicator was brought up in order to allow players to more easily distinguish the points of interest on the boss instead of attempting to hit it wherever as that was contrary to the design. While creating the system needed for this feature to be created I realized that it would need a UI Shader instead of a 2D asset as the size of the element would change dynamically to fit the bounds of the screen and that could cause a drop in quality as the asset would have a fixed resolution. For this reason I collaborated with our UI artist, and translated his concept art into a UI Shader to resolve this concern.' },
                ]
            },
            {
            id: 'takeaways', title: 'Takeaways',
                content: [
                    { type: 'text', text: 'Jovian Nightmare was a project that allowed me to delve into systems closely integrated with the visual output of the game and really expanded my ability to collaborate with artists on our shared vision of what the final project would look like. Since the core systems were relatively simple once the vector math for the grappling hook mechanics and VFX were solved, we were able to focus a lot on building visual implementation. I learnt a lot about the relationship between the art and code assets, including how animations and IKs can cleanly transition into each other, and the order of operations necessary for dynamic VFX to appear correctly.'},
                ]
            },


        ],
    },
]