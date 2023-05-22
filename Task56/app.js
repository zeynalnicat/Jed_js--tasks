const msgs = [
  {
    sender: "Nicat",
    receiver: "Ali",
    hasRead: false,
  },
  {
    sender: "Ali",
    receiver: "Nicat",
    hasRead: true,
  },
  {
    sender: "Orxan",
    receiver: "Nicat",
    hasRead: false,
  },
  {
    sender: "Seymur",
    receiver: "Nicat",
    hasRead: true,
  },
  {
    sender: "Nicat",
    receiver: "Seymur",
    hasRead: true,
  },
];

msgs.forEach((user) => {
  if (user.hasRead === true) {
    console.log(
      `${user.receiver} has received the message from ${user.sender}`
    );
  }
});
