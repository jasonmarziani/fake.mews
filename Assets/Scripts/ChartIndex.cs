using UnityEngine;
using System;
using System.Collections;

public class ChartIndex : MonoBehaviour 
{
	public Action<Vector2> OnChartIndexUpdate;

	[SerializeField]
	private Options _options;
	[SerializeField]
	private ChartView _chartX;
	[SerializeField]
	private ChartView _chartY;

	public Vector2 Index
	{
		get {
			// INDEX APPROACHES 0 AS PLAYER APPROACHES MAX VALUES. IF X OR Y == 0, GAMEOVER.
			return new Vector2(_chartX.Slider.maxValue - Mathf.Abs(_chartX.Slider.value),
				_chartY.Slider.maxValue - Mathf.Abs(_chartY.Slider.value));
		}
	}

	void Start () 
	{
		_options.OnCommit += OnCommit;
	}

	void OnDestroy()
	{
		_options.OnCommit -= OnCommit;
	}
		
	public void Reset()
	{
		_chartX.Reset();
		_chartY.Reset();
	}

	private void OnCommit(Vector2 score)
	{
		_chartX.UpdateSlider((int)score.x);
		_chartY.UpdateSlider((int)score.y);

		if (OnChartIndexUpdate != null)
			OnChartIndexUpdate(Index);
	}
		
}
