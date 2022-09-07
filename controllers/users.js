const users = (req, res) => {
  res.json({
    data: [
      {
        name: 'Ahmed',
      },
      {
        name: 'Ali',
      },
    ],
  });
};

const subRoute = (req, res) => {
  res.json({
    message: 'This is sub route | users/sub-route | method: GET',
  });
};

export { users, subRoute };
