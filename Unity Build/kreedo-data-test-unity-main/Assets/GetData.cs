using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GetData : MonoBehaviour
{


    public Text prestime;
    public Text prescount;
    public Text prescomplete;

    public Text levcount;
    public Text levtime;
    public Text levcomplete;

    public string jsonString;
    // Start is called before the first frame update
    void Start()
    {
        //ReceiveData(jsonString);
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void ReceiveData(string str)
    {
        GetResult result = JsonUtility.FromJson<GetResult>(str);
        //Camera.main.backgroundColor = Color.blue;
        Debug.Log(result.data.levelDetails.level1.presentation.completed);

        DataInput.Prescompleted = result.data.levelDetails.level1.presentation.completed.ToString();
        prescomplete.text = result.data.levelDetails.level1.presentation.completed.ToString();

        DataInput.Prescount = result.data.levelDetails.level1.presentation.playCount.ToString();
        prescount.text = result.data.levelDetails.level1.presentation.playCount.ToString();

        DataInput.Prestime = result.data.levelDetails.level1.presentation.timeSpent.ToString();
        prestime.text = result.data.levelDetails.level1.presentation.timeSpent.ToString();

        DataInput.Levcompleted = result.data.levelDetails.level1.completed.ToString();
        levcomplete.text = result.data.levelDetails.level1.completed.ToString();

        DataInput.Levcount = result.data.levelDetails.level1.playCount.ToString();
        levcount.text = result.data.levelDetails.level1.playCount.ToString();

        DataInput.Levtime = result.data.levelDetails.level1.timeSpent.ToString();
        levtime.text = result.data.levelDetails.level1.timeSpent.ToString();
    }

    [System.Serializable]
    public class GetResult{
        public Data data;

    }

    [System.Serializable]
    public class Data
    {
        public int learningTrackid;
        public LevelDetails levelDetails;
        public int gameId;
    }

    [System.Serializable]
    public class LevelDetails
    {
        public CurrentLevel currentLevel;
        public Level0 level0;
        public Level1 level1;
        public Level2 level2;
        public Level3 level3;

    }

    [System.Serializable]
    public class CurrentLevel
    {
        public int level;
        public bool presentationCompleted;

    }

    [System.Serializable]
    public class Level0
    {
        public Presentation presentation;

    }

    [System.Serializable]
    public class Level1
    {
        public Presentation presentation;
        public bool completed;
        public int playCount;
        public int completedCount;
        public int timeSpent;
        public int correctAttempts;
        public int incorrectAttempts;

    }

    [System.Serializable]
    public class Level2
    {
        public Presentation presentation;
        public bool completed;
        public int playCount;
        public int completedCount;
        public int timeSpent;
        public int correctAttempts;
        public int incorrectAttempts;
    }

    [System.Serializable]
    public class Level3
    {
        public Presentation presentation;
        public bool completed;
        public int playCount;
        public int completedCount;
        public int timeSpent;
        public int correctAttempts;
        public int incorrectAttempts;

    }

    [System.Serializable]
    public class Level4
    {
        public Presentation presentation;
        public bool completed;
        public int playCount;
        public int completedCount;
        public int timeSpent;
        public int correctAttempts;
        public int incorrectAttempts;

    }

    [System.Serializable]
    public class Presentation
    {
        public bool completed;
        public int playCount;
        public int completedCount;
        public int timeSpent;
    }




}
