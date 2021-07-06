# Data-Transfer
This repository contains detailed information on data transfer from app to game and vice-versa.This is a two way communication [App to Game  & Game to App].

This communication can be understood more clearly through this [PPT](https://docs.google.com/presentation/d/10nTF6JEUjx2hPdvR29nui6Qqlz_dpkey_omlIU9hsQM/edit?usp=sharing)

There are two types of game's builds available for now: - 
1. Unity Build
2. Construct3 Build 
 
## Initial Set-Up for each build
  ### For Unity ###
  #### [Play Game](https://kreedo-education.github.io/Data-Transfer/Unity%20Build/Web%20Build)
   #### [Zip Link](https://kreedo-education.github.io/Data-Transfer/Unity%20Build/web_build.zip)
   #### [KMPH Zip Link](https://kreedo-education.github.io/Data-Transfer/Unity%20Build/web_build.zip)
   These are some steps that need to be followed for initial setup for Unity build
   1. Generate the WebGL build.
   2. Open index.html in any text editor.

  ### For Construct3 ###
   #### [Play Game](https://kreedo-education.github.io/Data-Transfer/Construct3%20Build/place_value_quantities/)
   #### [Zip link](https://kreedo-education.github.io/Data-Transfer/Construct3%20Build/place_value_quantities.zip)
   These are some steps that need to be followed for initial setup for Construct build
   1. Add two scripts called main.js and script.js [refer to screenshots to know how to add them].  These files can also be found in exported html5 build at scripts/project/main.js & scripts/project/scriptsInEvents.js
   2. Open main.js and script.js in construct editor

Adding script in construct3 editor.
![image](https://user-images.githubusercontent.com/79310045/117129403-418abb80-adbc-11eb-96e5-c5a0155a9bcb.png)

## Steps to achieve two way comunication:
1. Data Format (Common for all types of build).
2. Data Listeners (Common for all types of build).
3. Initialize the Game's Varibales.
4. Send the data to app.


We will be looking into all four tasks one by one. 



**All Tasks explained :-**
 ### 1. Data Format ###
 This is the common task for each types of build. It says that the app need to send the data in the JSOn format.
  This is a sample data format:-
 ``` 
 {
   "data":{
      "learningTrackid":1,
      "gameId":1,
      "gameVersion":"string",
      "predGameId":0,
      "gamePath":"https://kreedo-game-upload-poc.s3.us-east-2.amazonaws.com/701_LearningTeens.zip",
      "isActive":true,
      "isblocked":false,
      "isGameDownloadComplete":true,
      "gameName":"Place Value Quantities",
      "attemptId":0,
      "totalRewards":0,
      "completedCount":0,
      "startDateTime":"",
      "endDateTime":"",
      "completed":false,
      "isMusic":true,
      "levelDetails":{
          "currentLevel":{
            "level":0,
            "presentationCompleted":0
          },
          "level0":{
            "presentation":{
                "completed":0,
                "playCount":0,
                "completedCount":0,
                "timeSpent":0
            }
          },
          "level1":{
            "presentation":{
                "completed":0,
                "playCount":0,
                "completedCount":0,
                "timeSpent":0
            },
            "completed":0,
            "playCount":0,
            "completedCount":0,
            "timeSpent":0,
            "correctAttempts":0,
            "incorrectAttempts":0
          },
          "level2":{
            "presentation":{
                "completed":0,
                "playCount":0,
                "completedCount":0,
                "timeSpent":0
            },
            "completed":0,
            "playCount":0,
            "completedCount":0,
            "timeSpent":0,
            "correctAttempts":0,
            "incorrectAttempts":0
          },
          "level3":{
            "presentation":{
                "completed":0,
                "playCount":0,
                "completedCount":0,
                "timeSpent":0
            },
            "completed":0,
            "playCount":0,
            "completedCount":0,
            "timeSpent":0,
            "correctAttempts":0,
            "incorrectAttempts":0
          },
          "level4":{
            "presentation":{
                "completed":0,
                "playCount":0,
                "completedCount":0,
                "timeSpent":0
            },
            "completed":0,
            "playCount":0,
            "completedCount":0,
            "timeSpent":0,
            "correctAttempts":0,
            "incorrectAttempts":0
          }
      }
    }
}
```

Data Format when exiting the game (Home -> Pick New Game Button Click) :-
```
{"home":1,"gameData":{"learningTrackid":1,"gameId":"1","gameVersion":"string","predGameId":0,"gamePath":"https://kreedo-game-upload-poc.s3.us-east-2.amazonaws.com/701_LearningTeens.zip","isActive":true,"isblocked":false,"isGameDownloadComplete":true,"gameName":"Place Value Quantities","attemptId":"0","totalRewards":0,"completedCount":0,"startDateTime":"","endDateTime":"","completed":0,"isMusic":1,"levelDetails":{"currentLevel":{"level":0,"presentationCompleted":0},"level0":{"presentation":{"completed":0,"playCount":1,"completedCount":0,"timeSpent":3}},"level1":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level2":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level3":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level4":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0}}}}
```

## Data Fields
There are two types of data fields being captured here:
#### 1. Global Data:- These are used to resume the game
#### 2. Local Data:- These are used for reporting purpose.

Global Data List:
1. gameName: string [:Contains the name of the game]
2. attemptId: number [Contains the attempt Id]
3. totalRewards: number [Total rewards points accumulated till now includes all replays ]
4. completedCount: number [No. of times a game was completed, i.e all levels are completed]
5. startDateTime: string [The date an attempt starts]
6. endDateTime: string [The date an attempt ends]
7. completed: boolean [Whether game is completed, i.e all levels are unlocked]
8. isMusic: boolean [Decides that whether to start the game with background music or not]

Local Data List: These are nothing but the logs which are captured for each attempts for all levels
``` 
"level1":{
            "presentation":{ // Level1 Tutorial
                "completed":0, // booleab: whether the tutorial is completed or not 
                "playCount":0, // number: no. of times tutorial has started.
                "completedCount":0,// number: no. of times tutorial has completed.
                "timeSpent":0 //number: no. of seconds spent in the level tutorial.
            },
            "completed":0, // boolean: Level is completed or not.
            "playCount":0, // number: no. of times level has been started.
            "completedCount":0, // number: no. of times level has been completed.
            "timeSpent":0, // number: no. of seconds spent in the level.
            "correctAttempts":0, // number: no. of correct tries made in the level.
            "incorrectAttempts":0 // number: no. of incorrect tries made in the level.
          }
```

### 2. Data Listener ###
Initial data fields will be coming from app to start the game. To catch the data comming from App's webview a listener will be required.
 
 #### In Unity Build- ####
 Add this listener on top in the index.html of unity build.
 ```
 function handleEvent(message) { // the data evnet listener 
      //alert(message.data);   // data can be used now in game
      
 }	 
document.addEventListener("message", handleEvent);   //add listener
 ```
#### In Construct Build- ####
  Add this listener on top in the main.js of Construct3.
  
  
### 3. Initialize Game's Varibales ###
The game will accept this data and then initialize game's varibale with the data recieved, Once the data has arived from app to game, we can assign those to our game varibles. 
#### In Unity Build- ####
Make these changes in index.html file:
=> Create a global variable called messageData and assign it with data recieved in listener. 
```
var messageData; // Global variable To store the data arived from app
 function handleEvent(message) { // the data listener
      //alert(message.data);   // data can be used now in game
      messageData = message.data;
 }	
 ```
=> Add a function called sendDataToUnity(data) for varibale initialization.

 ```
// call this function to unity
function SendDataToUnity(data) {
	// Don't change this line.
	gameInstance.SendMessage("GetData","ReceiveData",data);
}
//GetData is a GameObject and ReceiveData is a method in that script.
//data is nothing but the string data, which is being sent to Unity.

```

=> Call this function once game finishes the loading. 
Unity 19 or older:-
```
//If unity finished loading
if (progress === 1 && !gameInstance.removeTimeout) 
{
	//Hide the preloader with a delay
	gameInstance.removeTimeout = setTimeout(function() 
	{
		//Hide the preloader
		preLoader.style.display = "none"		
		SendDataToUnity(messageData);
	}, 500);
}
```

Unity 20 and above:-
```
   script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          //CDA: Assigning gameInstance variable
          gameInstance = unityInstance;
          //CDA: Calling the function to send data to Unity
          SendDataToUnity(messageData);
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }).catch((message) => {
          alert(message);
        });
      };
```
n 


Important:  gameInstance.SendMessage("GetData","ReceiveData",data);
:- this line will bring data to Unity and then Unity code i.e C# will catch this message and initialize all varibales accordingly.

#### In Construct3 Build- ####
Make these changes in main.js file:
=> Create a global variable called messageData and assign it with the data recieved in listener. 
```
var messageData; // Global variable To store the data arived from app
 function handleEvent(message) { // the data listener
      //alert(message.data);   // data can be used now in game
      messageData = message.data;
 }	
```
=> Assign Value to game's variable
In main.js we have a system defined listener i.e 'runOnStartup'  which runs once loaging has finished.
```
runOnStartup(async runtime =>
{
	console.log("json string at start of game::",JSON.stringify(messageData)); 
	if(messageData){		
		runtime.globalVars.GameID = messageData.GameID;
		runtime.globalVars.ChildID = messageData.childId;
		runtime.globalVars.GameName = messageData.gameName;
		runtime.globalVars.AttemptID = messageData.attemptId;

		runtime.globalVars.RewardPoints = messageData.rewardPoints;

		//Presenation level
		runtime.globalVars.PresentationDone = messageData.level0.completed;	
		runtime.globalVars.L0_START_TIME = messageData.level0.startDate;
		runtime.globalVars.L0_END_TIME = messageData.level0.endDate;
		runtime.globalVars.L0_PLAY_COUNT = messageData.level0.playCount;
		runtime.globalVars.isMusic = messageData.isMusic;

		//set level 1 global vars
		runtime.globalVars.L1TutorialDone = messageData.level1.presentationDone;
		runtime.globalVars.L1_TotalTrial = messageData.level1.playCount;
		runtime.globalVars.L1_trial = messageData.level1.currentPlay;
		runtime.globalVars.L1_Completed = messageData.level1.completed;
		runtime.globalVars.L1_correctAttempts = messageData.level1.correctAttempts;
		runtime.globalVars.L1_IncorrectAttempts = messageData.level1.CorrectAttempts;
	
		//set level 2 global vars
		runtime.globalVars.L2TutorialDone = messageData.level2.presentationDone;
		runtime.globalVars.L2_TotalTrial = messageData.level2.playCount;
		runtime.globalVars.L2_trial = messageData.level2.currentPlay;
		runtime.globalVars.L2_Completed = messageData.level2.completed;
		runtime.globalVars.L2_correctAttempts = messageData.level2.correctAttempts;
		runtime.globalVars.L2_IncorrectAttempts = messageData.level2.incorrectAttempts;
	
		//set level 3 global vars
		runtime.globalVars.L3TutorialDone = messageData.level3.presentationDone;
		runtime.globalVars.L3_TotalTrial = messageData.level3.playCount;
		runtime.globalVars.L3_trial = messageData.level3.currentPlay;
		runtime.globalVars.L3_Completed = messageData.level3.completed;
		runtime.globalVars.L3_correctAttempts = messageData.level3.correctAttempts;
		runtime.globalVars.L3_IncorrectAttempts = messageData.level3.incorrectAttempts;
	
		//set level 4 global vars
		runtime.globalVars.L4TutorialDone = messageData.level4.presentationDone;
		runtime.globalVars.L4_TotalTrial = messageData.level4.playCount;
		runtime.globalVars.L4_trial = messageData.level4.currentPlay;
		runtime.globalVars.L4_Completed = messageData.level4.completed;
		runtime.globalVars.L4_correctAttempts = messageData.level4.correctAttempts;
		runtime.globalVars.L4_IncorrectAttempts = messageData.level4.incorrectAttempts;		   
	}
  ```
 
### 4. Send The Data Back To The App ###
The game will have to send the data back to the app each time the game make any progress/update.

#### In Unity Build ####
Before we send the data to App we need bring the updated data from game to index.html then send the data to app.
We can break this in two parts as following:
1. To bring data from Unity to javascript, we create a function getDataFromUnity(data)
2. To send the data brought in javascript to app, we write these lines. **window.ReactNativeWebView.postMessage(arg)**
 Code - snippet
```
// get data from unity Don't change name of it. 
function GetDataFromUnity( arg )
{
	  console.log("called ", arg);
	  if (window && window.ReactNativeWebView) {
		window.ReactNativeWebView.postMessage(arg) // pushes the data to app
	  }
//   alert( arg );
}
```
Note: All the js functions, that are being called in Unity C#, have to be defined in a plugin.
"connect.jslib" is a plugin in which is added in the plugin folder of Unity project. The script need to import this plugin to use the function defined in the plugin.
File:- connect.jslib
code:-
```
mergeInto(LibraryManager.library, {

// get data from unity Don't change name of it.
GetDataFromUnity: function ( arg )
{

  if (window && window.ReactNativeWebView) {
  window.ReactNativeWebView.postMessage(Pointer_stringify(arg)) // pushes the data to app
  }
   //alert( Pointer_stringify(arg) );
  },

});

Calling the function:

public class DataInput : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void GetDataFromUnity(string arg );
    //this function send the data to app.
    public void SendData(string str)
    {
        GetDataFromUnity(str);
    }

}

```



#### In Construct3 Build ####
=> Create and export a class AppInterface in script.js as following.
```
  export class AppInterface  {
    static showToast(msg){
          console.log('showToast', msg);
      if(typeof(Android)!="undefined")
           Android.showToast(msg);
    }
    static sendToApp(data){		// pushes the data back to app | Need to be called each time an progress done in the game.
      let json_str = JSON.stringify(data);
      console.log("Send data to Webview", json_str);
      if (window && window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(json_str);
      }

    }
  }
```
 => Call AppInterface.sendToApp(data) each time a progress/update donme in the game.
 => We will require a Construct3 function as saveData() [refer to below Screenshot]  need to be called each time data changes in the game.

 ![image](https://user-images.githubusercontent.com/79310045/117241850-a47a6200-ae51-11eb-93b6-be3697d9a50c.png)
 The last line of saveData function calls AppInterface.sendToApp(data);  // this function implements the logic to push the data to app.
This function contains following code:
```
// localStorage.setItem(runtime.globalVars.GameName+"_Music", runtime.globalVars.isMusic);
var data = {
gameName:runtime.globalVars.GameName,
gameId:runtime.globalVars.GameID,
childId: runtime.globalVars.ChildID,
attemptId:runtime.globalVars.AttemptID,
rewardPoints: runtime.globalVars.RewardPoints,
isMusic: runtime.globalVars.isMusic,

level0:{completed:runtime.globalVars.PresentationDone,
startDate: runtime.globalVars.L0_START_TIME,
endDate: runtime.globalVars.L0_END_TIME,
playCount: runtime.globalVars.L0_PLAY_COUNT
	
},
level1: {presentationDone: runtime.globalVars.L1TutorialDone, 
completed:runtime.globalVars.L1_Completed, 
playCount: runtime.globalVars.L1_TotalTrial, 
currentPlay: runtime.globalVars.L1_trial, 
correctAttempts: runtime.globalVars.L1_correctAttempts, 
incorrectAttempts: runtime.globalVars.L1_IncorrectAttempts},

level2:{presentationDone: runtime.globalVars.L2TutorialDone, 
completed:runtime.globalVars.L2_Completed, 
playCount: runtime.globalVars.L2_TotalTrial,
currentPlay: runtime.globalVars.L2_trial, 
correctAttempts: runtime.globalVars.L2_correctAttempts, 
incorrectAttempts: runtime.globalVars.L2_IncorrectAttempts},

level3:{presentationDone: runtime.globalVars.L3TutorialDone, 
completed:runtime.globalVars.L3_Completed,
 playCount: runtime.globalVars.L3_TotalTrial, 
 currentPlay: runtime.globalVars.L3_trial, 
 correctAttempts: runtime.globalVars.L3_correctAttempts, 
 incorrectAttempts: runtime.globalVars.L3_IncorrectAttempts},

level4:{presentationDone: runtime.globalVars.L4TutorialDone, 
completed:runtime.globalVars.L4_Completed, 
playCount: runtime.globalVars.L4_TotalTrial,
currentPlay: runtime.globalVars.L4_trial, 
correctAttempts: runtime.globalVars.L4_correctAttempts, 
incorrectAttempts: runtime.globalVars.L4_IncorrectAttempts}

}

localStorage.setItem("pvq-data", JSON.stringify(data));
AppInterface.sendToApp(data);  // implements the logic to push the data to app.

```




