import header from "../assets/Header.jpg";
import unknown from "../assets/unknown.png";
import gemIcon from "../assets/gems.png";
import gembag from "../assets/gemsbag.png";
import gemspot from "../assets/gems-pot.png";
import beanIcon from "../assets/bean.png";
import beanbag from "../assets/beanbag.png";
import beanpot from "../assets/Beans-Pot.png";
import explorePointsIcon from "../assets/ExplorePointsIcon.png";
import oopsHead from "../assets/popups/game/oops.png";
import amazingTour from "../assets/popups/game/amazing-tour.png";
import congratulations from "../assets/popups/game/congratulations.png";
import treasureUnlock from "../assets/popups/game/treasure-unlocked.png";
import moonlighRecieved from "../assets/popups/game/moonlight-recieved.png";
import { baseUrl } from "../js/baserUrl";

export {
  header,
  unknown,
  gembag,
  gemIcon,
  gemspot,
  beanIcon,
  beanbag,
  beanpot,
  explorePointsIcon,
  oopsHead,
  amazingTour,
  congratulations,
  treasureUnlock,
  moonlighRecieved,
};
export function rewardImages(rewDesc) {
  var rewImg;
  if (
    rewDesc === "phantom Entrance" ||
    rewDesc === "Phantom entrance" ||
    rewDesc === "Phantom Entrance"
  ) {
    rewImg = baseUrl + "streamkar/rewards/phantom.png";
  } else if (
    rewDesc === "Victory Slide entrance" ||
    rewDesc === "Victory slide Entrance"
  ) {
    rewImg = baseUrl + "streamkar/rewards/victorySlide.png";
  } else if (rewDesc === "Thunder Audio broadcast theme") {
    rewImg = baseUrl + "streamkar/rewards/thunderRoomskin.png";
  } else if (rewDesc === "VIP") {
    rewImg = baseUrl + "streamkar/rewards/vip.png";
  } else if (rewDesc === "SVIP") {
    rewImg = baseUrl + "streamkar/rewards/svip.png";
  } else if (rewDesc === "Celebration Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/celebrationFrame.png";
  } else if (rewDesc === "Celebration room skin") {
    rewImg = baseUrl + "streamkar/rewards/celeberationRoomskin.png";
  } else if (rewDesc === "Victor Audio Theme") {
    rewImg = baseUrl + "streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc === "Beans" || rewDesc === "beans") {
    rewImg = baseUrl + "streamkar/rewards/beanbag.png";
  } else if (rewDesc === "Premier Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/premierFrame.png";
  } else if (rewDesc === "Kingpin Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/kingpinFrame.png";
  } else if (
    rewDesc === "Rusty Ranger entrance" ||
    rewDesc === "Rusty Ranger Entrance"
  ) {
    rewImg = baseUrl + "streamkar/rewards/rustyRanger.png";
  } else if (
    rewDesc === "Monarch Audio Theme" ||
    rewDesc === "Monarch Audio Broadcast Theme"
  ) {
    rewImg = baseUrl + "streamkar/rewards/monarchRoom.png";
  } else if (rewDesc === "Spaceship entrance") {
    rewImg = baseUrl + "streamkar/rewards/spaceship.png";
  } else if (rewDesc === "Sea Wolf Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/seawolfFrame.png";
  } else if (rewDesc === "Fury Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/furyFrame.png";
  } else if (rewDesc === "Discoverer Audio Broadcast theme") {
    rewImg = baseUrl + "streamkar/rewards/discovererAudioTheme.png";
  } else if (rewDesc === "Safari Champion Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/safariDesertframe.png";
  } else if (rewDesc === "Voyager Profile Frame") {
    rewImg = baseUrl + "streamkar/rewards/voyagerProfileFrame.png";
  } else if (rewDesc === "Bunny profile frame") {
    rewImg = baseUrl + "streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc === "Fish World audio theme") {
    rewImg = baseUrl + "streamkar/rewards/fishWorldRoomskin.png";
  } else if (rewDesc === "Thunder room skin") {
    rewImg = baseUrl + "streamkar/rewards/thunderRoomskin.png";
  } else if (rewDesc === "Enchanted frame") {
    rewImg = baseUrl + "streamkar/rewards/enchantedFrame.png";
  } else if (rewDesc === "Gold Luxury entrance") {
    rewImg = baseUrl + "streamkar/rewards/goldLuxury.png";
  } else if (rewDesc === "Frosty Frame") {
    rewImg = baseUrl + "streamkar/rewards/frostyFrame.png";
  } else if (rewDesc === "Sea Wolf room skin") {
    rewImg = baseUrl + "streamkar/rewards/seaWolfRoomSkin.png";
  } else if (rewDesc === "Game Master room skin") {
    rewImg = baseUrl + "streamkar/rewards/gameMasterRoomSkin.png";
  } else if (rewDesc === "gems" || rewDesc === "Gems") {
    rewImg = baseUrl + "streamkar/rewards/gems.png";
  } else if (rewDesc === "Frenzy room skin") {
    rewImg = baseUrl + "streamkar/rewards/frenzyRoomSkin.png";
  } else if (rewDesc === "Subzero room skin") {
    rewImg = baseUrl + "streamkar/rewards/subzeroSkin.png";
  } else if (rewDesc === "Aesthetic room skin") {
    rewImg = baseUrl + "streamkar/rewards/aestheticRoomskin.png";
  } else if (rewDesc === "Desire frame") {
    rewImg = baseUrl + "streamkar/rewards/desireFrame.png";
  } else if (rewDesc === "Peacemaker room skin") {
    rewImg = baseUrl + "streamkar/rewards/peaceMakerRoomSkin.png";
  } else if (rewDesc === "Maharaja Premium entrance") {
    rewImg = baseUrl + "streamkar/rewards/maharajaPremium.png";
  } else if (rewDesc === "Royalty frame") {
    rewImg = baseUrl + "streamkar/rewards/royaltiProfileFrame.png";
  } else if (rewDesc === "Eid Delight Room skin (New)") {
    rewImg = baseUrl + "streamkar/rewards/eidDelightRoomSkin.png";
  } else if (rewDesc === "Eid Delight frame (New)") {
    rewImg = baseUrl + "streamkar/rewards/eidDelightFrame.png";
  } else if (
    rewDesc === "Blessify Room skin (New)" ||
    rewDesc === "Blessify room skin (New)"
  ) {
    rewImg = baseUrl + "streamkar/rewards/blessifyRoomskin.png";
  } else if (rewDesc === "Blessify frame (New)") {
    rewImg = baseUrl + "streamkar/rewards/blessifyFrame.png";
  } else if (rewDesc === "MasterMind room skin (NEW)") {
    rewImg = baseUrl + "streamkar/rewards/MasterMindRoomSkin.png";
  } else if (rewDesc === "Game Master Battle frame") {
    rewImg = baseUrl + "streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc === "MasterMind frame (NEW)") {
    rewImg = baseUrl + "streamkar/rewards/mastermind.png";
  } else if (rewDesc === "Bumblebee entrance") {
    rewImg = baseUrl + "streamkar/rewards/bumblebee.png";
  } else if (rewDesc === "Enlightening Room Skin") {
    rewImg = baseUrl + "streamkar/rewards/enlighteningRoom.png";
  } else if (rewDesc === "Monarch Entrance") {
    rewImg = baseUrl + "streamkar/rewards/monarch.png";
  } else if (rewDesc === "Hawk Entrance") {
    rewImg = baseUrl + "streamkar/rewards/hawk.png";
  } else if (rewDesc === "Game Battle frame") {
    rewImg = baseUrl + "streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc === "Eid Mandi room skin") {
    rewImg = baseUrl + "streamkar/rewards/eidMandiRoomSkin.png";
  } else if (rewDesc === "Unicorn frame") {
    rewImg = baseUrl + "streamkar/rewards/unicornFrame.png";
  } else if (rewDesc === "Monarch frame") {
    rewImg = baseUrl + "streamkar/rewards/monarchProfileFrame.png";
  } else {
    rewImg = baseUrl + "streamkar/rewards/noRew.png";
  }
  return rewImg;
}
