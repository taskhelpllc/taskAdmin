
 
function processTask_statusGreen(taskGreen, taskNumber, taskhelpersId, tasksInProject, phase, taskStatusID, s4Aprvtask, mod72){
       
  if(phase == 2){

 if(s4Aprvtask != 1){

 if(taskStatusID == 1){

        taskGreen += 1;
          mod72 += 1;


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskGreen: taskGreen, mod72: mod72 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});


if(mod72 == 72){
  
  mod72 = 0;
  
        MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: { mod72: mod72 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});
 
 
 
 
  
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
  



var checkIn_link = "https://task.help/taskAdmin/friendly_checkIn/?tnum=" + taskNumber;


var sms_msgLink29 = "TaskAdmin.  Please click link to check in on task " + taskNumber + " "  + checkIn_link;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink29,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});

 
    
    
}


    if(tasksInProject >= 2 && tasksInProject <= 25){
        

      if(taskGreen == 144){ 
 
 
 
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
   


var taskExt1Sent = "http://task.help/taskAdmin/taskExt1Sent/?tnum=" + taskNumber + "&un=" + taskhelpersId;


var sms_msgLink25 = "TASK HELP.  Request more time to complete your project " +  taskExt1Sent;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink25,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});

 

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskStatusID: 2, taskExt1Sent: 1 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
}); 

 
 
 
      
 
      
   }
        
       
        
    }
    
      if(tasksInProject > 25  &&  tasksInProject <= 50){
            

       
              
if(taskGreen == 288){ 



 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
 





var taskExt2Sent = "http://task.help/taskAdmin/taskExt2Sent/?tnum=" + taskNumber + "&un=" + taskhelpersId;


var sms_msgLink26 = "TASK HELP.  Request more time to complete your project " +  taskExt2Sent;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink26,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});





    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskStatusID: 3, taskExt2Sent: 1 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
}); 


    
      
   }
        
 
        
       
    }
    
    
    if(tasksInProject > 50 && tasksInProject <= 75){

 
              
if(taskGreen == 432){ 
 
 
 
 
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
  


var taskExt3Sent = "http://task.help/taskAdmin/taskExt3Sent/?tnum=" + taskNumber + "&un=" + taskhelpersId;


var sms_msgLink27 = "TASK HELP.  Request more time to complete your project " + taskExt3Sent;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink27,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});

 
 
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskStatusID: 4, taskExt3Sent: 1 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});
 
 
 
 
 
 
 
 
      
      
   }
        
     
        
        
        
       
    }
    
    
if(tasksInProject > 75 && tasksInProject <= 100){
  
if(taskGreen == 576){ 
                
 
  
 
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
     console.log(mobileNumber);






var taskExt4Sent = "http://task.help/taskAdmin/taskExt4Sent/?tnum=" + taskNumber + "&un=" + taskhelpersId;


var sms_msgLink28 = "TASK HELP.  Request more time to complete your project " +  taskExt4Sent;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink28,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});

 
 
 
 
 
     MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskStatusID: 5, taskExt4Sent: 1 }};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

 
 
 
 


      
   }
        
    
        
        
        
        
    }
    

  
 } 
  
  } 
  } 
  
  
  
  }




 




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  dbo.collection("taskAdmintable").find({phase: 2, s4Aprvtask: 0, taskStatusID: 1}, { projection: { _id: 0, taskGreen: 1, taskID: 1, taskhelpersId: 1, tasksInProject: 1, phase: 1, taskStatusID: 1, s4Aprvtask: 1, mod72: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    processTask_statusGreen(result.taskGreen, result.taskID, result.taskhelpersId, result.tasksInProject, result.phase, result.taskStatusID, result.s4Aprvtask, result.mod72 );
});

    db.close();
  });
});









