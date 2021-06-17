var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";

function processTfs_accepted(taskownersId, tasksInProject, accepted, acceptedCount, taskNumber, taskhelpersId, phase, s4AprvTfs, tfsStatusID){

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://txxxxxxxxxxxxxxxxxxxxxxxxxxxx.mongodb.net/?retryWrites=true&w=majority";


     if(phase == 1){
 
    if(s4AprvTfs != 1){
 
      if(tfsStatusID == 5){
  
         if(accepted == 1){


    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {tfsStatusID : 1}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});

      }
      else
      {
       
    acceptedCount += 1;   



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  var myquery = { taskID: taskNumber };
  var newvalues = { $set: {acceptedCount : acceptedCount}};
  dbo.collection("taskAdmintable").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});


   if(acceptedCount == 24){


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("usersdatabase");
  var query = { userNumber: taskhelpersId };
  dbo.collection("userstable").find(query).toArray(function(err, result) {
    if (err) throw err;
    var mobileNumber = result[0].mobileNumber;
    


var acceptTask = "https://task.help/accept_task/?tnum=" + taskNumber;

var sms_msgLink19 = "TASK HELP.  Last chance to accept task.  This is final reminder to accept task.  Please click link to accept task. " + acceptTask; 

var accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your Account SID from www.twilio.com/console
var authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


client.messages.create({
    body: sms_msgLink19,
    to: mobileNumber,  // Text this number
    from: '+14155826487' // From a valid Twilio number
});


    db.close();
  });
});



       
   }



    if(acceptedCount == 48){ 
        
        
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




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("taskAdmin");
  dbo.collection("taskAdmintable").find({phase: 1, s4AprvTfs: 0, tfsStatusID: 5}, { projection: { _id: 0, taskownersId: 1, tasksInProject: 1, accepted: 1, acceptedCount: 1, taskID: 1, taskhelpersId: 1, phase: 1, s4AprvTfs: 1, tfsStatusID: 1  } }).toArray(function(err, result) {
    if (err) throw err;
    
    result.forEach(function (result) {
    processTfs_accepted(result.taskownersId, result.tasksInProject, result.accepted, result.acceptedCount, result.taskID, result.taskhelpersId, result.phase, result.s4AprvTfs, result.tfsStatusID );
});

    db.close();
  });
});








