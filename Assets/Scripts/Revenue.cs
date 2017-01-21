using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Revenue : MonoBehaviour 
{
	[SerializeField]
	private Options _options;

	[SerializeField]
	private int _multiplier = 1;
	[SerializeField]
	private Text _text;
	[SerializeField]
	private int _revenue;

	void Start()
	{
		_options.OnCommit += OnCommit;
	}

	void OnDestroy()
	{
		_options.OnCommit -= OnCommit;
	}

	public void OnCommit(Vector2 score)
	{
		var total =(int)(Mathf.Abs(score.x) + Mathf.Abs(score.y));
		AddRevenue(total);
	}

	public void AddRevenue(int value)
	{
		_revenue += (value * _multiplier);
		Render();
	}

	private void Render()
	{
		_text.text = "$" + _revenue.ToString();
	}
}
