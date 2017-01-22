using UnityEngine;
using System.Collections;

public class Game : MonoBehaviour 
{
	[SerializeField]
	private OptionsPanel _optionsPanel;
	[SerializeField]
	private Options _options;
	[SerializeField]
	private ChartIndex _chartIndex;
	[SerializeField]
	private GameOver _gameOver;
	[SerializeField]
	private Revenue _revenue;

	private string[] _reasons = new string[]{"Here's the reason."};

	void Start () 
	{
		_chartIndex.OnChartIndexUpdate += CheckGameState;
		StartGame ();
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
			StartCoroutine(GameOver());
		}
	}

	private void StartGame()
	{
		Debug.Log ("StartGame");
		_optionsPanel.ClearAll ();
		_optionsPanel.Animate ();
	}

	private IEnumerator GameOver()
	{
		yield return new WaitForSeconds (0.1f);
		var reason = _reasons[0];
		var rev = "$"+_revenue.Value.ToString();
		_gameOver.Activate(reason, rev);
	}

	public void PlayAgain()
	{
		// RESET EVERYTHING
		_gameOver.Reset();
		_chartIndex.Reset();
		_revenue.Reset();
		StartGame ();
	}
}
