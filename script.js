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
            
        finishedAt: new Date("2021-01-17:15:00"),

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
    
let headers = ["Started at", "finished at", "tasks given" , "tasks finished" , "topic" , "total time" , "finished percent"];
        
        task["totalTime"] = (task.finishedAt - task.startedAt) / 3600000;
        task["finishedPercent"] = Math.floor(((task.tasksFinished / task.tasksGiven) *100)) ;        
        task.finishedAt=task.finishedAt.getHours();   
        task.startedAt=task.startedAt.getHours();
    }

     
let table = document.createElement("table");
let tblBody = document.createElement("tbody");
let headersRow = document.createElement("tr");

  for ( let headerCell of headers) {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerCell);
    header.appendChild(textNode);
    headersRow.appendChild(header);
  }

    table.appendChild(headersRow);

    document.body.appendChild(table);

    for ( let task of tasks) {
        let row = document.createElement("tr");
  
        for ( let property in task) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(task[property]);
            cell.appendChild(cellText);
            row.appendChild(cell);

             if (property === "totalTime" ) {
                 cell.classList.add(timeClass( task[property] ));
             } else if (property === "finishedPercent" ) {
                cell.classList.add(percentClass( task[property] ));
        }
    }

    tblBody.appendChild(row);
}
 table.appendChild(tblBody);
 document.body.appendChild(table);


 function timeClass (totalTime){
            console.log(totalTime);
            let className;  
            if (totalTime <= 3 ){
                className = "fast"; 
            } else if (totalTime <= 6 ){
                className = "normal";
            } else { 
                className = "slow";
            }
            return className;
        }

        function percentClass (finishedPercent){
            let className;  
            if (finishedPercent > 80 ){
                className = "half"; 
            } else if (finishedPercent > 50 ){
                className = "most";
            } else { 
                className = "done";
            }
            return className;
        }