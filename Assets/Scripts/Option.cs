using UnityEngine;
using System;
using System.Collections;

[System.Serializable]
public class Option 
{
	public string headline;
	public Sprite sprite;
	public Vector2 scoring; // x = cats, y = dogs
	public int staleness;
}
