

function getTaskownerApprovalTask(taskownersId, taskhelpersId, taskNumber, tasksInProject, aprvRmdrTask, aprvTask, s4Aprvtask, phase){
    
  if(phase == 2){ 
   if(s4Aprvtask == 1){
    aprvRmdrTask += 1;
    
    
    
    
    
        
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {aprvRmdrTask : aprvRmdrTask}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

    
        
    if(aprvTask != 1){
            

            if(aprvRmdrTask == 48){
                 
        
        
    
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskownersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
 





var loginUrl = "https://task.help/log_in_username/";

var sms_msgLink31 = "TaskAdmin.  Final reminder to approve project.   Please click here to login and approve taskID #:  " + taskNumber + " "  + loginUrl; 

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: sms_msgLink31,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
})


    db.close();
  });
});


                        
                        
                }
      
      
        
        if(aprvRmdrTask == 72){
            



            
var msg = "taskownersId:" +  taskownersId +  "taskhelpersId:" +  taskhelpersId + "taskNumber:" +  taskNumber + "tasksInProject:" +  tasksInProject + "aprvRmdrTask:" + aprvRmdrTask;
var subject = "auto_approve_task";
 
var postmark = require("postmark");

var serverToken = "5637fd25-6163-49a6-9cad-cdd684de7761";
var client = new postmark.ServerClient(serverToken);

client.sendEmail({
    "From": "noreply@task.help",
    "To": "autoapprovetask@task.help",
    "Subject": subject,
    "TextBody": msg
});    
 



 
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
  dbo.collection("taskAdmintable").find({phase: 2, s4Aprvtask: 1}, { projection: { _id: 0, taskownersId: 1, taskhelpersId: 1, taskID: 1, tasksInProject: 1, aprvRmdrTask: 1, aprvTask: 1, s4Aprvtask: 1, phase: 1  } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    getTaskownerApprovalTask(result.taskownersId, result.taskhelpersId, result.taskID, result.tasksInProject, result.aprvRmdrTask, result.aprvTask, result.s4Aprvtask, result.phase );
});

    db.close();
  });
});








