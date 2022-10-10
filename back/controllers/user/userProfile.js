const getUserProfile = (req, res) => {
  const user = {
    name: "Nikolay",
    age: 22,
  };

  res.json(user);
};

export default getUserProfile;
