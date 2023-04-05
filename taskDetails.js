const TaskDetails = require('../models/taskDetails')

const getAllTasks = async () => {
    try {
        let response = await TaskDetails.findAll({
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error occurred while fetching all the tasks from DB: ", err);
        return false;
    }
}

module.exports = {
    getAllTasks: getAllTasks
}