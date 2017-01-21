using UnityEngine;
using System;
using System.Collections;

public class ChartIndex : MonoBehaviour 
{

	[SerializeField]
	private Options _options;
	[SerializeField]
	private ChartView _chartX;
	[SerializeField]
	private ChartView _chartY;

	void Start () 
	{
		_options.OnCommit += OnCommit;
	}

	void OnDestroy()
	{
		_options.OnCommit -= OnCommit;
	}

	private void OnCommit(Vector2 score)
	{
		
		_chartX.UpdateSlider((int)score.x);
		_chartY.UpdateSlider((int)score.y);

	}
}
