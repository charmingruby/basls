exports.ping = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ping: true,
    }),
  };
};
