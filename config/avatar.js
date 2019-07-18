const Avatar = require('../models/avatar');

exports.avatarthree = function () {
  const avatars = [{
    avatar: '100_1.jpg'
  }, {
    avatar: '100_2.jpg'
  }, {
    avatar: '100_3.jpg'
  }, {
    avatar: '100_4.jpg'
  }, {
    avatar: '100_5.jpg'
  }, {
    avatar: '100_6.jpg'
  }, {
    avatar: '100_7.jpg'
  }, {
    avatar: '100_8.jpg'
  }, {
    avatar: '100_9.jpg'
  }, {
    avatar: '100_10.jpg'
  }, {
    avatar: '100_11.jpg'
  }, {
    avatar: '100_12.jpg'
  }, {
    avatar: '100_13.jpg'
  }, {
    avatar: '100_14.jpg'
  }]
  return avatars;
  // avatars.forEach(element => {
  //   element.avatar = '/assets/avatar/' + element.avatar;
  //   const newAvatar = new Avatar(element);
  //   newAvatar.save((err, avr) => {

  //   });
  // });
}


exports.avatarone = function () {

  const avatarsList = [{
    avatar: '300_1.jpg'
  }, {
    avatar: '300_2.jpg'
  }, {
    avatar: '300_3.jpg'
  }, {
    avatar: '300_4.jpg'
  }, {
    avatar: '300_5.jpg'
  }, {
    avatar: '300_6.jpg'
  }, {
    avatar: '300_7.jpg'
  }, {
    avatar: '300_8.jpg'
  }, {
    avatar: '300_9.jpg'
  }, {
    avatar: '300_10.jpg'
  }, {
    avatar: '300_11.jpg'
  }, {
    avatar: '300_12.jpg'
  }, {
    avatar: '300_13.jpg'
  }, {
    avatar: '300_14.jpg'
  }]
  // avatarsList.forEach(element => {
  //   element.avatar = '/assets/avatar/' + element.avatar;
  //   const newAvatar = new Avatar(element);
  //   newAvatar.save((err, avr) => {

  //   });
  // });
}

exports.chooseAvatar = function (avatar) {
  // const arrays = avatar.avatarthree();
  const rands = avatar[Math.floor(Math.random() * avatar.length)];
  const avatars = '/assets/avatar/' + rands.avatar;
  return avatars;
}