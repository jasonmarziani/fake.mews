using UnityEngine;

using System.Collections;

public class Revenue : MonoBehaviour 
{
	[SerializeField]
	private OptionsPanel _optionsPanel;

	[SerializeField]
	private int _multiplier = 1;
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
		_optionsPanel.OnSelection += OnSelection;
	}

	void OnDestroy()
	{
		_optionsPanel.OnSelection -= OnSelection;
	}

	public void OnSelection(Vector2 score)
	{
		var total =(int)(Mathf.Abs(score.x) + Mathf.Abs(score.y));
		AddRevenue(total);
	}

	public void AddRevenue(int value)
	{
		_highlight = value * _multiplier;
		_revenue += _highlight;
	}

	public void Reset()
	{
		_revenue = 0;
		_highlight = 0;
	}
}
