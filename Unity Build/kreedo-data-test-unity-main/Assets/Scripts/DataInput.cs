using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;

public class DataInput : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void GetDataFromUnity(string arg );

    public Text prestime;
    public Text prescount;
    public Text prescomplete;

    public Text levcount;
    public Text levtime;
    public Text levcomplete;

    public InputField inputfield1;
    public InputField inputfield2;
    public InputField inputfield3;

    public InputField inputfield4;
    public InputField inputfield5;
    public InputField inputfield6;


    public static string Prescompleted;
    public static string Prescount;
    public static string Prestime;

    public static string Levcompleted;
    public static string Levcount;
    public static string Levtime;



    // Start is called before the first frame update
    void Start()
    {

        //GetDataFromUnity("Unity Calling");
        
            


    }

    // Update is called once per frame
    void Update()
    {
        LoadGameData();
    }

    public void Fill()
    {
        Prescompleted = inputfield1.text;
        Prescount = inputfield2.text;
        Prestime = inputfield3.text;

        Levcompleted = inputfield4.text;
        Levcount = inputfield5.text;
        Levtime = inputfield6.text;

        LoadGameData();
    }

    public void LoadGameData()
    {
        prestime.text = Prestime;
        prescount.text = Prescount;
        prescomplete.text = Prescompleted;

        levtime.text = Levtime;
        levcount.text = Levcount;
        levcomplete.text = Levcompleted;
    }

    public void SendData(string str)
    {
        GetDataFromUnity(str);
    }



    
}
