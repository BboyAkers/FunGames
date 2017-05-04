using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class moveTransformDown : MonoBehaviour {

    public float enemySpeed = 0.1f;
	
	void Start () {
		
	}
	
	
	void Update () {
        moveToBottom();
		
	}

    void moveToBottom()
    {
        transform.Translate(0, -tranformSpeed, 0);
    }
}
