
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello Serverless'),
    };
    return response;
};
