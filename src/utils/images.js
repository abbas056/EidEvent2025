import header from "../assets/Header.jpg";
import unknown from "../assets/unknown.png";
import { baserUrl } from "../js/baserUrl";
import gemIcon from "../assets/gems.png";
import gembag from "../assets/gemsbag.png";
import gemspot from "../assets/gems-pot.png";
import beanIcon from "../assets/bean.png";
import beanbag from "../assets/beanbag.png";
import beanpot from "../assets/Beans-Pot.png";
import explorePointsIcon from "../assets/ExplorePointsIcon.png";

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
};
export function rewardImages(rewDesc) {
  var rewImg;
  if (
    rewDesc === "phantom Entrance" ||
    rewDesc === "Phantom entrance" ||
    rewDesc === "Phantom Entrance"
  ) {
    rewImg = baserUrl + "streamkar/rewards/phantom.png";
  } else if (
    rewDesc === "Victory Slide entrance" ||
    rewDesc === "Victory slide Entrance"
  ) {
    rewImg = baserUrl + "streamkar/rewards/victorySlide.png";
  } else if (rewDesc === "Thunder Audio broadcast theme") {
    rewImg = baserUrl + "streamkar/rewards/thunderRoomskin.png";
  } else if (rewDesc === "VIP") {
    rewImg = baserUrl + "streamkar/rewards/vip.png";
  } else if (rewDesc === "SVIP") {
    rewImg = baserUrl + "streamkar/rewards/svip.png";
  } else if (rewDesc === "Celebration Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/celebrationFrame.png";
  } else if (rewDesc === "Victor Audio Theme") {
    rewImg = baserUrl + "streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc === "Beans" || rewDesc === "beans") {
    rewImg = baserUrl + "streamkar/rewards/beanbag.png";
  } else if (rewDesc === "Premier Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/premierFrame.png";
  } else if (rewDesc === "Kingpin Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/kingpinFrame.png";
  } else if (
    rewDesc === "Rusty Ranger entrance" ||
    rewDesc === "Rusty Ranger Entrance"
  ) {
    rewImg = baserUrl + "streamkar/rewards/rustyRanger.png";
  } else if (
    rewDesc === "Monarch Audio Theme" ||
    rewDesc === "Monarch Audio Broadcast Theme"
  ) {
    rewImg = baserUrl + "streamkar/rewards/monarchRoom.png";
  } else if (rewDesc === "Spaceship entrance") {
    rewImg = baserUrl + "streamkar/rewards/spaceship.png";
  } else if (rewDesc === "Sea Wolf Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/seawolfFrame.png";
  } else if (rewDesc === "Fury Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/furyFrame.png";
  } else if (rewDesc === "Discoverer Audio Broadcast theme") {
    rewImg = baserUrl + "streamkar/rewards/discovererAudioTheme.png";
  } else if (rewDesc === "Safari Champion Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/safariDesertframe.png";
  } else if (rewDesc === "Voyager Profile Frame") {
    rewImg = baserUrl + "streamkar/rewards/voyagerProfileFrame.png";
  } else if (rewDesc === "Bunny profile frame") {
    rewImg = baserUrl + "streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc === "Fish World audio theme") {
    rewImg = baserUrl + "streamkar/rewards/fishWorldRoomskin.png";
  } else if (rewDesc === "Thunder room skin") {
    rewImg = baserUrl + "streamkar/rewards/thunderRoomskin.png";
  } else if (rewDesc === "Enchanted frame") {
    rewImg = baserUrl + "streamkar/rewards/enchantedFrame.png";
  } else if (rewDesc === "Gold Luxury entrance") {
    rewImg = baserUrl + "streamkar/rewards/goldLuxury.png";
  } else if (rewDesc === "Frosty Frame") {
    rewImg = baserUrl + "streamkar/rewards/frostyFrame.png";
  } else if (rewDesc === "Sea Wolf room skin") {
    rewImg = baserUrl + "streamkar/rewards/seaWolfRoomSkin.png";
  } else if (rewDesc === "Game Master room skin") {
    rewImg = baserUrl + "streamkar/rewards/gameMasterRoomSkin.png";
  } else if (rewDesc === "gems") {
    rewImg = baserUrl + "streamkar/rewards/gems.png";
  } else if (rewDesc === "MasterMind room skin (NEW)") {
    rewImg = baserUrl + "streamkar/rewards/MasterMindRoomSkin.png";
  } else if (rewDesc === "Game Master Battle frame") {
    rewImg = baserUrl + "streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc === "MasterMind frame (NEW)") {
    rewImg = baserUrl + "streamkar/rewards/mastermind.png";
  } else if (rewDesc === "Bumblebee entrance") {
    rewImg = baserUrl + "streamkar/rewards/bumblebee.png";
  } else if (rewDesc === "Enlightening Room Skin") {
    rewImg = baserUrl + "streamkar/rewards/enlighteningRoom.png";
  } else if (rewDesc === "Monarch Entrance") {
    rewImg = baserUrl + "streamkar/rewards/monarch.png";
  } else if (rewDesc === "Hawk Entrance") {
    rewImg = baserUrl + "streamkar/rewards/hawk.png";
  } else if (rewDesc === "Game Battle frame") {
    rewImg = baserUrl + "streamkar/rewards/gameMasterFarme.png";
  } else {
    rewImg = baserUrl + "streamkar/rewards/noRew.png";
  }
  return rewImg;
}
