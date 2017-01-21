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
	private Text _highlightText;
	[SerializeField]
	private int _revenue;
	[SerializeField]
	private int _highlight;


	public int Value
	{
		get { return _revenue; }
	}

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
		_highlight = value * _multiplier;
		_revenue += _highlight;
		Render();
	}

	public void Reset()
	{
		_revenue = 0;
		_highlight = 0;
		Render();
	}

	private void Render()
	{
		_text.text = "$" + _revenue.ToString();
		_highlightText.text = "+$" + _highlight.ToString();
	}
}
