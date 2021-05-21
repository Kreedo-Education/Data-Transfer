


var messageData;
localStorage.clear();
// Uncomment if testing without app
var message = {"data":{}};

// message.data = {"learningTrackid":1,"gameId":1,"gameVersion":"string","predGameId":0,"gamePath":"https://kreedo-game-upload-poc.s3.us-east-2.amazonaws.com/701_LearningTeens.zip","isActive":true,"isblocked":false,"isGameDownloadComplete":true,"gameName":"Place Value Quantities","attemptId":0,"totalRewards":0,"completedCount":0,"startDateTime":"","endDateTime":"","completed":false,"isMusic":true,"levelDetails":{"currentLevel":{"level":0,"presentationCompleted":0},"level0":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0}},"level1":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level2":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level3":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level4":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0}}};

var levelDetails = {"currentLevel":{"level":0,"presentationCompleted":0},"level0":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0}},"level1":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level2":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level3":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level4":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0}}

//uncomment this block to mimic the data comming from app
// handleEvent(message);

//app will trigger this event on load finish.
// comment this listener if testing without app
document.addEventListener("message", handleEvent);

function handleEvent(message) {	
	messageData =  message.data;	

	
}

runOnStartup(async runtime =>
{
	if(localStorage.getItem("pvq-data")!=null){
	
	var jsonTxt = localStorage.getItem("pvq-data");
		let data = JSON.parse(localStorage.getItem("pvq-data"))	
		messageData=data;
		console.log("Loaded from LocalStorage", data);
	}
	else{
	console.log("loaded from app ", messageData);
	}
	if(messageData){
		console.log("loaded data: ", JSON.stringify(messageData));
		messageData.completedCount = 0;
		messageData.levelDetails.level0 = levelDetails.level0;
		messageData.levelDetails.level1 = levelDetails.level1;
		messageData.levelDetails.level2 = levelDetails.level2;
		messageData.levelDetails.level3 = levelDetails.level3;
		messageData.levelDetails.level4 = levelDetails.level4;
		console.log("Default data: ", JSON.stringify(messageData));
		runtime.globalVars.GameID = messageData.gameId;
// 		runtime.globalVars.ChildID = messageData.childId;
		runtime.globalVars.GameName = messageData.gameName;		
		runtime.globalVars.AttemptID = messageData.attemptId;
		
		runtime.globalVars.RewardPoints = messageData.totalRewards;
		runtime.globalVars.isMusic = messageData.isMusic;		
        runtime.globalVars.isGameCompleted = messageData.completed;
		runtime.globalVars.GameCompletedCounter = 0;
		runtime.globalVars.GameLevel = messageData.levelDetails.currentLevel.level;
	
        if(runtime.globalVars.isGameCompleted)
        {
            runtime.globalVars.L4TutorialDone = 1
			runtime.globalVars.L3TutorialDone = 1;
			runtime.globalVars.L2TutorialDone = 1;
			runtime.globalVars.L1TutorialDone = 1;						
			runtime.globalVars.L0TutorialDone = 1;

			runtime.globalVars.L1_Completed = 1;
			runtime.globalVars.L2_Completed = 1;
			runtime.globalVars.L3_Completed = 1;
            runtime.globalVars.L4_Completed = 1;

            ;
        }
        else{
            if(runtime.globalVars.GameLevel == 0){
                runtime.globalVars.L0TutorialDone =messageData.levelDetails.currentLevel.presentationCompleted
             //remaining are false by default
            }
            else if(runtime.globalVars.GameLevel == 1){
                runtime.globalVars.L0TutorialDone = 1;
                runtime.globalVars.L1TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted	
                
                }
            else if(runtime.globalVars.GameLevel == 2){
                runtime.globalVars.L2TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted;
                runtime.globalVars.L1TutorialDone = 1;			
                runtime.globalVars.L0TutorialDone = 1;
                
                runtime.globalVars.L1_Completed = 1;
                }
            else if(runtime.globalVars.GameLevel == 3){
                runtime.globalVars.L3TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted
                runtime.globalVars.L2TutorialDone = 1;
                runtime.globalVars.L1TutorialDone = 1;
                runtime.globalVars.L0TutorialDone = 1;
                
                
                runtime.globalVars.L1_Completed = 1;
                runtime.globalVars.L2_Completed = 1;
                }
            else if(runtime.globalVars.GameLevel == 4){
                runtime.globalVars.L4TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted
                runtime.globalVars.L3TutorialDone = 1;
                runtime.globalVars.L2TutorialDone = 1;
                runtime.globalVars.L1TutorialDone = 1;						
                runtime.globalVars.L0TutorialDone = 1;

                runtime.globalVars.L1_Completed = 1;
                runtime.globalVars.L2_Completed = 1;
                runtime.globalVars.L3_Completed = 1;			
                }
            else {
        		console.log("current level "+runtime.globalVars.GameLevel);
            }
        }
			
				   
	}
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
// 	console.log("OnBeforeProjectStart", window.location);
	runtime.getInstanceByUid(486).setJsonDataCopy(messageData);
	console.log("JSON_DATA", runtime.getInstanceByUid(486).getJsonDataCopy())
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
