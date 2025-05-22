import { gembag } from "../utils/images";
import gemsbag from "../assets/popups/Event-Gifting/gems-bag.png";
import gemspot from "../assets/popups/Event-Gifting/gems-pot.png";
import { baseUrl } from "./baserUrl";

export const tab1Rewards = [
  {
    id: 1,
    rank: "1",
    country: "Turkey",
    desc: <span>10% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 2,
    rank: "1",
    country: "Tunisia",
    desc: <span>20% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 3,
    rank: "1",
    country: "Bahrain",
    desc: <span>30% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 4,
    rank: "1",
    country: "Egypt",
    desc: <span>40% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
];
export const talentsOverallRewards = [
  {
    id: 1,
    name: "Talent",
    target: "Target: 65m",
    desc: (
      <span>
        2,000,000 gems + Eid Delight frame (New) x5 days + Eid Delight room skin
        (New) x5 days
      </span>
    ),
    frame: [
      { pic: gemsbag },
      { pic: `${baseUrl}streamkar/rewards/eidDelightFrame.png` },
      { pic: `${baseUrl}streamkar/rewards/noRew.png` },
    ],
  },
  {
    id: 2,
    name: "Talent",
    target: "Target: 50m",
    desc: (
      <span>
        1,000,000 gems + Eid Delight frame (New) x3 days + Eid Delight room skin
        (New) x3 days
      </span>
    ),
    frame: [
      { pic: gemsbag },
      { pic: `${baseUrl}streamkar/rewards/eidDelightFrame.png` },
      { pic: `${baseUrl}streamkar/rewards/noRew.png` },
    ],
  },
  {
    id: 3,
    name: "Talent",
    target: "Target: 40m",
    desc: (
      <span>
        500,000 gems + Eid Delight frame (New) x1 day + Eid Delight room skin
        (New) x1 day
      </span>
    ),
    frame: [
      { pic: gemsbag },
      { pic: `${baseUrl}streamkar/rewards/eidDelightFrame.png` },
      { pic: `${baseUrl}streamkar/rewards/noRew.png` },
    ],
  },
];
export const talentsDailyRewards = [
  {
    id: 1,
    desc: <span>40% of the Gems Pot + Blessify frame (New) x3 days</span>,
    frame: [
      { pic: gemspot },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
    ],
  },
  {
    id: 2,
    desc: <span>30% of the Gems Pot + Blessify frame (New) x2 days</span>,
    frame: [
      { pic: gemspot },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
    ],
  },
  {
    id: 3,
    desc: <span>10% of the Gems Pot + Blessify frame (New) x1 day </span>,
    frame: [
      { pic: gemspot },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
    ],
  },
  {
    id: 4,
    desc: <span>10% of the Gems Pot + Blessify frame (New) x1 days </span>,
    frame: [
      { pic: gemspot },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
    ],
  },
  {
    id: 5,
    desc: <span>10% of the Gems Pot + Blessify frame (New) x1 days </span>,
    frame: [
      { pic: gemspot },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
    ],
  },
  {
    id: 6,
    desc: <span>Blessify frame (New) x1 day </span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` }],
  },
  {
    id: 7,
    desc: <span>Blessify frame (New) x1 day </span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` }],
  },
  {
    id: 8,
    desc: <span>Blessify frame (New) x1 day </span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` }],
  },
  {
    id: 9,
    desc: <span>Blessify frame (New) x1 day </span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` }],
  },
  {
    id: 10,
    desc: <span>Blessify frame (New) x1 day </span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` }],
  },
];
export const usersOverallRewards = [
  {
    id: 1,
    name: "Gifter",
    desc: (
      <span>
        3,000,000 Beans + Blessify frame (New) x5 days + Blessify room skin
        (New) x5 days
      </span>
    ),
    frame: [
      { pic: `${baseUrl}streamkar/rewards/beanbag.png` },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
      { pic: `${baseUrl}streamkar/rewards/noRew.png` },
    ],
  },
  {
    id: 2,
    name: "Gifter",
    desc: (
      <span>
        2,000,000 + Beans Blessify frame (New) x3 days + Blessify room skin
        (New) x3 days
      </span>
    ),
    frame: [
      { pic: `${baseUrl}streamkar/rewards/beanbag.png` },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
      { pic: `${baseUrl}streamkar/rewards/noRew.png` },
    ],
  },
  {
    id: 3,
    name: "Gifter",
    desc: (
      <span>
        1,000,000 Beans + Blessify frame (New) x1 day + Blessify room skin (New)
        x1 day
      </span>
    ),
    frame: [
      { pic: `${baseUrl}streamkar/rewards/beanbag.png` },
      { pic: `${baseUrl}streamkar/rewards/blessifyFrame.png` },
      { pic: `${baseUrl}streamkar/rewards/noRew.png` },
    ],
  },
];
export const usersDailyRewards = [
  {
    id: 1,
    desc: <span>50% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 2,
    desc: <span>30% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 3,
    desc: <span>20% of the beans pot</span>,
    frame: [{ pic: `${baseUrl}streamkar/rewards/beanbag.png` }],
  },
];
export const eventGifts = [
  {
    id: 1,
    img: `${baseUrl}streamkar/gifts/40001673.png`,
    name: "Eid Mandi",
    cost: "50k",
  },
  {
    id: 2,
    img: `${baseUrl}streamkar/gifts/40011786.png`,
    name: "Champions",
    cost: "30k",
  },
  {
    id: 3,
    img: `${baseUrl}streamkar/gifts/40001653.png`,
    name: "Eid Mubarak",
    cost: "25k",
  },
  {
    id: 4,
    img: `${baseUrl}streamkar/gifts/40001330.png`,
    name: "Money Rain",
    cost: "5k",
  },
];
export var guideContent = {
  English: {
    topText: (
      <>
        <div>
          When you send event gifts, you will get{" "}
          <span className="c-yellow">Eidi Points</span>
        </div>
        <div>
          1 bean of event gift sent ={" "}
          <span className="c-yellow">1 Eidi Points</span>
        </div>
        <div>With these points, you will be able to play this event.</div>
      </>
    ),
    firstBox: (
      <>
        <h2 className="h1">Eid Around the World:</h2>
        <li>
          In this part of the event, you can visit 4 different countries and
          explore each location to find different keys used to open the Beans
          Treasure Box.
        </li>
        <li>
          Four different countries' landmarks are displayed on the webpage along
          with their names.
        </li>
        <li>You can tap on any of the four landmark images.</li>
        <li className="c-yellow">You can only select 1 Country at a time.</li>
        <li>
          An “Explore” button is displayed on the webpage along with text input
          box with default value “1” and maximum value “999”.
        </li>
        <li className="c-yellow">
          “Eidi Points” required for each country/location are different.
        </li>
        <li>
          When you tap on the “Explore” button successfully, Eidi Points will be
          deducted and you will get a reward and key based on possibility.
          (depending on the country as each country will have different color
          key)
        </li>
        <li>
          You also receive Explore Points depending on the country you are
          currently in, as each country gives different Explore Points.
        </li>
        <li>
          My Daily Explore Points” counter is displayed for each landmark on the
          webpage of each landmark.
        </li>
        <li>
          Each time you get Explore Points by playing the game, the outcome
          value i.e, Explore Points number is added to the “My Daily Explore
          Points” counter.
        </li>
        <li>
          My Daily Explore Points” counter of each landmark will reset daily at
          00:00:00 GMT
        </li>
        <li>
          A “Beans Treasure Box” is displayed on the webpage of all landmarks
          along with 4 different color keys (Red, blue, green & purple) & their
          respective counter.
        </li>
        <li>You can find each type of key from exploring countries.</li>
        <li>
          Each time you find a key, the corresponding key will be colored and
          value will be added on its respective counter.
        </li>
        <li>
          When you have found all the keys i.e., all keys are colored or the
          value on each keys respective counter is greater than “0” the “Open”
          button is enabled.
        </li>
        <li className="c-yellow">
          When you tap on the “Open” button successfully, you receive a one-time
          bonus reward of 1000 Beans!
        </li>
        <li>
          The maximum number of Beans distributed is 4,000,000 Beans per day.
        </li>
        <li>
          When the limit is reached, no more Beans are sent. Beans distribution
          resets at 00:00:00 GMT.
        </li>
        <li>
          When you tap on the “Open” button successfully, the common value from
          all the keys' counters is deducted, and you receive rewards
          accordingly.
        </li>
        <li>
          The top user in each of the 4 landmarks with the highest number of “My
          Daily Explore Points” will be rewarded with Beans Pot rewards daily.
        </li>
        <li className="c-yellow">
          1% of event gifts spending will be collected in the BEANS POT and
          collected Beans will be distributed among the top 1st Ranker of the
          leaderboard of each landmark each day.
        </li>
        <li>
          4 Landmarks buttons are displayed on the webpage, i.e. Turkey,
          Tunisia, Bahrain & Egypt.
        </li>
        <li>
          When you tap on these buttons, the leaderboard will be displayed
          according to the selected landmark type.
        </li>
      </>
    ),
    secondBox: (
      <>
        <h2 className="h1">Lunar Altar:</h2>
        <li>This part of the event is for the Talents only.</li>
        <li>
          A glowing “Lunar Altar” floating in space is displayed on the webpage.
        </li>
        <li>
          Below the “lunar altar” a “Summon Moonlight” button is displayed.
        </li>
        <li className="c-yellow">
          1-time successful tap on “Summon moonlight” button= 30K Talent Points.
        </li>
        <li>
          3 combo selection buttons (x1, x10, x100) are displayed above the
          “Summon moonlight” button.
        </li>
        <li>
          If you successfully tap on the “Summon moonlight” button without
          selecting a combo, then x1 combo will be played by default.
        </li>
        <li className="c-yellow">
          When you tap on the “Summon moonlight” button successfully, you will
          get a reward based on probability.
        </li>
      </>
    ),
    thirdBox: (
      <>
        <h2 className="h1">Event Gifting (Overall):</h2>
        <h2 className="h1">(For users)</h2>
        <li>In the total ranking, the top 3 users will be rewarded.</li>
        <li>
          Rewards will be sent after 7 working days of the event end date.
        </li>
        <h2 className="h1">(For talents)</h2>
        <li>In the total ranking, the top 3 talents will be rewarded.</li>
        <li>
          Rewards will be sent after 7 working days of the event end date.
        </li>
        <h2 className="h1">Daily:</h2>
        <h2 className="h1">(For users)</h2>
        <li>In the daily ranking, the top 3 users will be rewarded.</li>
        <li>
          0.3% of event gifts spending will be collected in the BEANS POT and
          collected Beans will be distributed among the top 3 Rankers of the
          leaderboard each day.
        </li>
        <h2 className="h1">(For talents)</h2>
        <li>In the daily ranking, the top 10 talents will be rewarded.</li>
        <li>
          0.3% of event gifts receiving will be collected in the GEMS POT and
          collected gems will be distributed among the top 5 Rankers of the
          leaderboard, each day.
        </li>
        <li>Top 10 talent will get resource rewards each day.</li>
      </>
    ),
  },
  Urdu: {
    topText: (
      <>
        <div>
          Jab aap event gifts bhejen gy, toh aap haasil karen gy{" "}
          <span className="c-yellow">Eidi Points.</span>
        </div>
        <div>
          1 bean of event gift sent ={" "}
          <span className="c-yellow">1 Eidi Points.</span>
        </div>
        <div>In points k sath, aap yeh event khel sakein gy.</div>
      </>
    ),
    firstBox: (
      <>
        <h2 className="h1">Eid Around the World:</h2>
        <li>
          Event k is hissay mein aap 4 different countries visit karengy aur
          location explore kar k keys dhondein gy jin sy ap Beans Treasure Box
          khol sakein gy.
        </li>
        <li>Webpage par 4 countries k famous landmarks aur unk naam hain.</li>
        <li>Aap kisi bhi ek landmark ki image par tap kar sakte hain.</li>
        <li className="c-yellow">
          Lekin ek time pe sirf ek country select kar sakte hain.
        </li>
        <li>
          Webpage par “Explore” button hai, jis k saath ek Text input box hai
          jis ki default value “1” aur maximum “999” hai.
        </li>
        <li className="c-yellow">
          Har country/location ko explore karne k liye Differet Eidi Points
          chahye hongy.
        </li>
        <li>
          Jab aap “Explore” button par tap karengy, tou aapk Eidi Points kat
          jayengy aur aapko reward milega, aur possibility k hisab sy key mile
          gi. (Country k mutabiq har country ki key ka color mukhtalif hoga)
        </li>
        <li>
          Jis country ko aap explore kar rahe hongy, usk hisaab sy aapko Explore
          Points milengy, har country k points different hongy.
        </li>
        <li>Har landmark k saath “My Daily Explore Points” ka counter hai.</li>
        <li>
          Jab bhi aapko game khelne sy Explore Points milengy, tou who explore
          points “My Daily Explore Points” counter mein add kiye jayengy.
        </li>
        <li>
          Har landmark ka “My Daily Explore Points” counter 00:00:00 GMT par
          reset hoga.
        </li>
        <li>
          Har landmark k webpage par Beans Treasure Box hai, jisk saath 4
          different colors ki keys (red, blue, green, purple) aur unk counters
          hain.
        </li>
        <li>
          Aap different countries explore kar k ye keys find kar sakte hain.
        </li>
        <li>
          Jab bhi aapko key milegi, tou wo key colored ho jaye gi aur uske
          respective counter par value add hojaye gi.
        </li>
        <li>
          Jab aap sari keys find kar leingy (yaani sab keys colored ho jayengi
          ya unka number “0” sy zyada hoga), tou “Open” button enable ho jaye
          ga.
        </li>
        <li className="c-yellow">
          Jab aap “Open” button par successfully tap karengy, tou aapko 1000
          Beans ka one-time bonus reward milega.
        </li>
        <li>Rozana sirf 4,000,000 Beans distribute kiye jayengy.</li>
        <li>
          Jab daily limit poori ho jaye gi, tou us din aur Beans nahi milengy.
          Beans distribution 00:00:00 GMT reset hogi.
        </li>
        <li>
          Jab aap “Open” button par successfully tap karengy, tou keys k
          counters sy common number cut jaye ga aur aapko usk hisab sy reward
          mile ga.
        </li>
        <li>
          Har landmark ka jo top user ho ga jisk “My Daily Explore Points” sabse
          zyada hongy, usay daily Beans Pot reward milega.
        </li>
        <li className="c-yellow">
          Event gifts par kharch hone wale beans ka 1% beans pot mein collect
          hoga aur collect kiye gaye beans ko rozana har landmark k leaderboard
          k top 1st Ranker mein distribute kiya jaye ga.
        </li>
        <li>
          Webpage par 4 landmarks k buttons hain. i.e. Turkey, Tunisia, Bahrain
          aur Egypt.
        </li>
        <li>
          Jab aap in buttons par tap karengy, tou selected landmark type k
          mutabiq leaderboard display hoga.
        </li>
      </>
    ),
    secondBox: (
      <>
        <h2 className="h1">Lunar Altar:</h2>
        <li>Event ka yeh hissa sirf talents k liye hai.</li>
        <li>
          Webpage par aik glowing “Lunar Altar” space mein float kar raha hai.
        </li>
        <li>Lunar Altar k neeche ek “Summon Moonlight” button hai.</li>
        <li className="c-yellow">
          “Summon moonlight " button par aik bar successful tap = 30K Talent
          Points.
        </li>
        <li>
          “Summon Moonlight” button k upar 3 combo buttons hain: x1, x10, aur
          x100.
        </li>
        <li>
          Agar aap bina koi combo select kiye “Summon Moonlight” button par tap
          karengy, toh default tor par x1 combo play hoga.
        </li>
        <li className="c-yellow">
          Jab ap “Summon Moonlight” button par successfully tap karen gy, to
          apko probability k hisab sy reward mile ga.
        </li>
      </>
    ),
    thirdBox: (
      <>
        <h2 className="h1">Event Gifting (Overall):</h2>
        <h2 className="h1">(For users)</h2>
        <li>Total ranking mein, top 3 users ko rewards milein gy.</li>
        <li>Rewards event khatam honay k 7 din baad tak send kiye jayen gy.</li>
        <h2 className="h1">(For talents)</h2>
        <li>Total ranking mein, top 3 talents ko rewards milein gy.</li>
        <li>Rewards event khatam honay k 7 din baad tak send kiye jayen gy.</li>
        <h2 className="h1">Daily:</h2>
        <h2 className="h1">(For users)</h2>
        <li>Daily ranking mein, top 3 users ko rewards milein gy.</li>
        <li>
          Event gifts par kharch hone wale beans ka 0.3% beans pot mein collect
          hoga aur collect kiye gaye beans ko leaderboard k top 3 rankers k
          beech event k end mein distribute kiya jaye ga.
        </li>
        <h2 className="h1">(For talents)</h2>
        <li>Daily ranking mein top 10 talents ko rewards milein gy.</li>
        <li>
          Event gifts receiving ka 0.3% GEMS POT mein collect hoga aur collect
          kiye gaye gems ko leaderboard k top 5 rankers k beech event k end mein
          distribute kiya jaye ga.
        </li>
        <li>Top 10 talents ko daily resource rewards bhi milengy.</li>
      </>
    ),
  },
};
export const tab1Details = {
  data: [
    {
      id: 1,
      country: "Turkey",
      pointsReq: "20K",
      key: "Red Key",
      explorePoints: "1",
      rewards: [
        {
          pic: `${baseUrl}streamkar/rewards/eidMandiRoomSkin.png`,
          text: "Eid Mandi room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/unicornFrame.png`,
          text: "Unicorn frame x1 Day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/beanbag.png`,
          text: "500 Beans",
        },
        {
          pic: `${baseUrl}streamkar/rewards/spaceship.png`,
          text: "Spaceship entrance x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/blessifyFrame.png`,
          text: "Blessify frame (New) x1 day",
        },
      ],
    },
    {
      id: 2,
      country: "Tunisia",
      pointsReq: "30K",
      key: "Blue Key",
      explorePoints: "2",
      rewards: [
        {
          pic: `${baseUrl}streamkar/rewards/monarchProfileFrame.png`,
          text: "Monarch frame x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/subzeroSkin.png`,
          text: "Subzero room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/beanbag.png`,
          text: "750 Beans",
        },
        {
          pic: `${baseUrl}streamkar/rewards/rustyRanger.png`,
          text: "Rusty Ranger entrance x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/noRew.png`,
          text: "Blessify Room skin (New) x1 day",
        },
      ],
    },
    {
      id: 3,
      country: "Bahrain",
      pointsReq: "40K",
      key: "Green Key",
      explorePoints: "3",
      rewards: [
        {
          pic: `${baseUrl}streamkar/rewards/aestheticRoomskin.png`,
          text: "Aesthetic room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/desireFrame.png`,
          text: "Desire frame x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/beanbag.png`,
          text: "1000 Beans",
        },
        {
          pic: `${baseUrl}streamkar/rewards/celebrationRoomskin.png`,
          text: "Celebration room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/eidDelightFrame.png`,
          text: "Eid Delight frame (New) x1 day",
        },
      ],
    },
    {
      id: 4,
      country: "Egypt",
      pointsReq: "50K",
      key: "Purple Key",
      explorePoints: "4",
      rewards: [
        {
          pic: `${baseUrl}streamkar/rewards/peaceMakerRoomSkin.png`,
          text: "Peacemaker room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/maharajaPremium.png`,
          text: "Maharaja Premium entrance x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/beanbag.png`,
          text: "1250 Beans",
        },
        {
          pic: `${baseUrl}streamkar/rewards/royaltiProfileFrame.png`,
          text: "Royalty frame x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/noRew.png`,
          text: "Eid Delight Room skin (New) x1 day",
        },
      ],
    },
  ],
};
export const tab2Details = {
  data: [
    {
      id: 1,
      pointsReq: "30K",
      rewards: [
        {
          pic: `${baseUrl}streamkar/rewards/blessifyFrame.png`,
          text: "Blessify frame x2 days (New)",
        },
        {
          pic: `${baseUrl}streamkar/rewards/noRew.png`,
          text: "Blessify room skin x2 days (New)",
        },
        {
          pic: `${baseUrl}streamkar/rewards/eidMandiRoomSkin.png`,
          text: "Eid Mandi room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/unicornFrame.png`,
          text: "Unicorn frame x1 Day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/spaceship.png`,
          text: "Spaceship entrance x2 days",
        },
        {
          pic: `${baseUrl}streamkar/rewards/monarchProfileFrame.png`,
          text: "Monarch frame x2 days",
        },
        {
          pic: `${baseUrl}streamkar/rewards/subzeroSkin.png`,
          text: "Subzero room skin x3 days",
        },
        {
          pic: `${baseUrl}streamkar/rewards/rustyRanger.png`,
          text: "Rusty Ranger entrance x2 days",
        },
        {
          pic: `${baseUrl}streamkar/rewards/frenzyRoomSkin.png`,
          text: "Frenzy room skin x1 day",
        },
        {
          pic: `${baseUrl}streamkar/rewards/gems.png`,
          text: "1000 Gems",
        },
      ],
    },
  ],
};
