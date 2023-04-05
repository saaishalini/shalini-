const express = require('express');
const app = express();
const taskDetails = require('./dao/taskDetails');


app.get("/getAllTasks", async (req, res) => {
    let response = {
        code: 200,
        message: "",
        data: null,
    }
    try {
        let tasks = await taskDetails.getAllTasks();
        if (tasks) {
            response = {
                code: 200,
                message: "Task fetched succefully",
                data: tasks,
            }
        } else {
            response = {
                code: 500,
                message: "Error occurred while fetching all tasks",
                data: null,
            }
        }
        res.send(response);
    } catch (err) {
        console.log("Error occurred in all tasks fetching API: ", err);
        response = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
        res.send(response);
    }
});

const server = app.listen(5001, function () {
    console.log("Listening on port %s...", server.address().port);
})