const TaskDetails = require('../models/taskDetails')

const getAllTasks = async () => {
    try {
        let response =  await TaskDetails.findAll({
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const getTaskById = async (taskId) => {
    try {
        let response =  await TaskDetails.findOne({
            where:{
                task_id: taskId
            }
        })
        return JSON.parse(JSON.stringify(response));
    } catch (err) {
        console.log("Error..: ", err);
    }
}


const createTask = async (data) => {
    try {
        let Newtask =  await TaskDetails.create({task_name:data});
        return JSON.parse(JSON.stringify(Newtask ));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const updateTask = async (id, data) => {
    try {
        let updatenew =  await TaskDetails.update({task_name:data},{
            where:{
                task_id: id
            },
            
        })
        return JSON.parse(JSON.stringify(updatenew));
    } catch (err) {
        console.log("Error..: ", err);
    }
};

const deleteTask = async (id) => {
    try {
        let delt =  await TaskDetails.destroy({
            where:{
                task_id: id
            }
        })
        return JSON.parse(JSON.stringify(delt));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

module.exports = {
    getAllTasks: getAllTasks,
    getTaskById: getTaskById,
    createTask : createTask,
    updateTask : updateTask,
    deleteTask : deleteTask,
}