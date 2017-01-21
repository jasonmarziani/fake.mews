using UnityEngine;
using System.Collections;

public class Game : MonoBehaviour 
{
	[SerializeField]
	private Options _options;
	[SerializeField]
	private ChartIndex _chartIndex;
	[SerializeField]
	private GameOver _gameOver;
	[SerializeField]
	private Revenue _revenue;

	void Start () 
	{
		_chartIndex.OnChartIndexUpdate += CheckGameState;
	}

	void OnDestroy()
	{
		_chartIndex.OnChartIndexUpdate -= CheckGameState;
	}

	private void CheckGameState(Vector2 index)
	{
		Debug.Log ("CheckGameState: " + index);
		if (index.x == 0 || index.y == 0) 
		{
			GameOver ();
		}
	}

	private void GameOver()
	{
		var reason = "Here's the reason";
		var rev = "$"+_revenue.Value.ToString();
		_gameOver.Activate(reason, rev);
	}

	public void PlayAgain()
	{
		// RESET EVERYTHING
		_gameOver.Reset();
		_chartIndex.Reset();
		_revenue.Reset();
		_options.StartGame();
	}
}
