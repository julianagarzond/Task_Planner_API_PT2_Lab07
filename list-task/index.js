module.exports = async function (context, req) {
    context.log('Task List');

    const taskList = [{
    "id": "1",
    "description": "create view",
    "status": "in progress",
    "responsible": "aa@gmail.com"
  },
{
    "id": "2",
    "description": "create controller",
    "status": "in progress",
    "responsible": "aa@gmail.com"
  }];
    // Implement the response
    const responseMessage = { response:taskList};

    context.res = {
        status: 200,
        body: responseMessage
    };
}