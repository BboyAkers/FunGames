using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProjectileLogic : MonoBehaviour {

    public float transformSpeed = 0.05f;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        moveTransformToTop();
	}

    void moveTransformToTop()
    {
        transform.Translate(0, transformSpeed, 0);
    }
}
