"use strict"

// document.write('hello moran');


    let task1 = {
        startedAt:new Date("2021-01-10:10:00"),

        finishedAt: new Date("2021-01-10:13:00"),

        tasksGiven: 10,

        tasksFinished: 6,

        topic: "HTML",
}

    let task2 = {
        startedAt:new Date("2021-01-11:10:00"),                                                
    
        finishedAt: new Date("2021-01-11:15:00"),

        tasksGiven: 15,
    
        tasksFinished: 8,
    
        topic: "HTML",
    }

    let task3 = {
        startedAt:new Date("2021-01-12:12:00"),
    
        finishedAt: new Date("2021-01-12:17:00"),

        tasksGiven: 5,
    
        tasksFinished: 3,
    
        topic: "CSS",
    }
    
    let task4 = {
        startedAt:new Date("2021-01-13:13:00"),
        
        finishedAt: new Date("2021-01-13:19:00"),

        tasksGiven: 7,
        
        tasksFinished: 4,
        
        topic: "CSS",
    }

    let task5 = {
        startedAt:new Date("2021-01-14:10:00"),
        
        finishedAt: new Date("2021-01-14:13:00"),

        tasksGiven: 25,
        
        tasksFinished: 12,
        
        topic: "JAVASCRIPT",
        }
    
    let task6 = {
        startedAt:new Date("2021-01-15:10:00"),
        
        finishedAt: new Date("2021-01-15:19:00"),
        
        tasksGiven: 35,
        
        tasksFinished: 20,
        
        topic: "JAVASCRIPT",
        }
        
    let task7 = {
        startedAt:new Date("2021-01-16:12:00"),
            
        finishedAt: new Date("2021-01-16:13:00"),

        tasksGiven: 4,
            
        tasksFinished: 4,
            
        topic: "JAVASCRIPT",
        }
    let task8 = {
        startedAt:new Date("2021-01-17:10:00"),
            
        finishedAt: new Date("2021-01-10:15:00"),

        tasksGiven: 17,
            
        tasksFinished: 15,            
        
        topic: "HTML + CSS",
        }
        
    let task9 = {
        startedAt:new Date("2021-01-10:10:00"),

        finishedAt: new Date("2021-01-10:14:00"),
            
        tasksGiven: 4,
            
        tasksFinished: 1,
            
        topic: "GITHUB",
        }
            
    let task10 = {
        startedAt:new Date("2021-01-20:10:00"),
                
        finishedAt: new Date("2021-01-20:18:00"),
                
        tasksGiven: 10,
                
        tasksFinished: 6,
                
        topic: "JAVASCRIPT",
        
        }
        
let tasks = [task1,task2,task3,task4,task5,task6,task7,task8,task9,task10];
    

         for (let task of tasks){
             task["totalTime"] = (task.finishedAt - task.startedAt) / 3600000;
             task["finishedPercent"] = Math.floor(((task.tasksFinished / task.tasksGiven) *100)) + "%";            
         }

         document.write('<table>');
         document.write('<tr><th> Started at </th> <th> finished at </th> <th> total time </th> <th> tasks given </th> <th> task finished </th> <th> topic </th> <th> finished percent </th> </tr>');
         
         for ( let task of tasks) {
            document.write(`<tr>`);
             document.write(`<td>${task.startedAt}</td>`);
             document.write(`<td>${task.finishedAt}</td>`);
             document.write(`<td>${task.totalTime}</td>`);
             document.write(`<td>${task.tasksGiven}</td>`);
             document.write(`<td>${task.tasksFinished}</td>`);
             document.write(`<td>${task.topic}</td>`);
             document.write(`<td>${task.finishedPercent}</td>`);
             document.write(`</tr>`);
             
         }
           
          
             
        
        //  let headOfTable = ["Started At", "Finished At", "Total Time", "Tasks Given", "Tasks Finished", "Topic", "Finished Percent "]
          
        document.write(`</table>`);

