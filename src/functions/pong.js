exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      pong: true,
      message: event.pathParameters.message
    }),
  };
};
