const model = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found!" });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};
