const path = require("path");
// in mac and linux use ../public/skimountain.jpg
// in window, we use ..\public\skimountain.jpg

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
  // res.send("<ul><li>Message 1</li><li>Message 2</li></ul>");
}

function postMessage(req, res) {
  console.log("Message created....");
}

module.exports = {
  getMessages,
  postMessage,
};
