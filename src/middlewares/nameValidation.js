const nameValidation = (request, response, next) => {
  const { name } = request.body;
  if (name.length < 3) {
     return response.status(HTTP)
  }
};