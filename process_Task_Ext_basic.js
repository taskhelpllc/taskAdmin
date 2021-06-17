
function  processTask_Ext_basic(taskownersId, taskNumber, tasksInProject, taskhelpersId, taskExt1Respn, taskExt1count, phase, s4Aprvtask, taskStatusID){
        
 if(phase == 2){
      if(s4Aprvtask != 1){
          
       if(taskStatusID == 2){
        
           taskExt1count += 1;
 
 
  
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://txxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskExt1count : taskExt1count}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

 
 
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var query = { taskID: taskNumber };
  dbo.collection("taskAdmintable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var taskInProjectAdmin = result[0].tasksInProject;

 
      if(taskInProjectAdmin > 25){
          
              MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {taskStatusID : 1, taskExt1count : 0}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});
          
          
      }
 
 
 
 
    db.close();
  });
});

 
            if(taskExt1Respn == 1){
         
             if(taskExt1count == 65){ 
   
   MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;


var taskReassigned_link = "https://task.help/taskAdmin/task_is_about_to_be_reassigned/?un=" + taskhelpersId + "&tnum=" + taskNumber;

var sms_msgLink33 = "TaskAdmin.  The 72 hours your requested to complete your project will expire in 7 hours. Your project will be reasigned in 7 hours  Please click link below for more information. " + taskReassigned_link;

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink33,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});
   
   
   }
  
 
                    if(taskExt1count == 72){
                      
                                                  
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("reassignque");
  var myobj = { reassign: 1, taskNumber: taskNumber };
  dbo.collection("reassignqueTable").insertOne(myobj, function(err, res) {
    if (err) throw err;
     db.close();
  });
});
          
                    }
               
           
               
            }
            else{
                
                if(taskExt1count == 72){
                    
                    
                    
                            
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("reassignque");
  var myobj = { reassign: 1, taskNumber: taskNumber };
  dbo.collection("reassignqueTable").insertOne(myobj, function(err, res) {
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
  dbo.collection("taskAdmintable").find({phase: 2, s4Aprvtask: 0, taskStatusID: 2}, { projection: { _id: 0, taskownersId: 1, taskID: 1, tasksInProject: 1, taskhelpersId: 1, taskExt1Respn: 1, taskExt1count: 1, phase: 1, s4Aprvtask: 1, taskStatusID: 1  } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    processTask_Ext_basic(result.taskownersId, result.taskID, result.tasksInProject, result.taskhelpersId, result.taskExt1Respn, result.taskExt1count, result.phase, result.s4Aprvtask, result.taskStatusID );
});

    db.close();
  });
});









