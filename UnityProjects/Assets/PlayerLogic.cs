using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerLogic : MonoBehaviour {

    public GameObject projectile;

    public float playerSpeed = 1.0f;
    public float shootingSpeed = 0.5f;

    float maxPlayerXDistance = 30.0f;

    public bool isShooting = true;

	// Use this for initialization
	void Start () {
        StartCoroutine(projectileShootTimer());
	}
	
	// Update is called once per frame
	void Update () {
        playerMovemment();	
	}

    void playerMovemment() {
        if (Input.GetKey(KeyCode.A) && transform.position.x >= -maxPlayerXDistance)
        {
            transform.Translate(-playerSpeed, 0, 0);
        }

        if (Input.GetKey(KeyCode.D) && transform.position.x <= maxPlayerXDistance)
        {
            transform.Translate(playerSpeed, 0, 0);
        }
    }

    IEnumerator projectileShootTimer()
    {
        while (isShooting == true)
        {
            spawnProjectile();
            yield return new WaitForSeconds(shootingSpeed);
        }
    }

    void spawnProjectile()
    {
        Instantiate(projectile, transform.position, Quaternion.identity);
    }
}
