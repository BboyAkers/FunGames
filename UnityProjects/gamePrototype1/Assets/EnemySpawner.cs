using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour {

    public GameObject enemyToSpawn;

    public bool canSpawn = true;

    public float enemySpawnTime = 1.0f;

    public float maxX = 28.0f;

    public float startingY = 20.0f;

    float randomX = 0.0f;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        StartCoroutine(spawnEnemyTimer());
	}

    IEnumerator spawnEnemyTimer()
    {
        spawnEnemy();
        yield return new WaitForSeconds(enemySpawnTime);
    }

    void spawnEnemy()
    {
        randomX = Random.Range(maxX, maxX);
        Instantiate(enemyToSpawn, new Vector3(randomX, startingY, 0), Quaternion.identity);
    }

}
