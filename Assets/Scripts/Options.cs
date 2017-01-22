using UnityEngine;
using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

public class Options : MonoBehaviour 
{
	public Action<Vector2> OnCommit;
	[HideInInspector]
	public OptionMappings optionMappings;
	[HideInInspector]
	public string revenue;

	[HideInInspector]
	private OptionsPanel _optionsPanel;

	[SerializeField]
	private List<Option> _activeOptions;

	[SerializeField]
	private OptionView _optionView1;

	[SerializeField]
	private OptionView _optionView2;

	[SerializeField]
	private RevenueView _revenueView;

	[SerializeField]
	private int _stalenessFactor;

	public void Swap()
	{
		_activeOptions.Reverse();
		SetOptionViews();
	}
		
	public void Commit()
	{
		if (OnCommit != null) {
			var scoring = new Vector2 (_activeOptions [0].scoring.x, _activeOptions [1].scoring.y);
			OnCommit (scoring);
		}
	}

	public void MakeTurn()
	{
		_activeOptions = RandomOptions(2);
		_revenueView.Render(revenue);
		SetOptionViews();
	}

	private List<Option> RandomOptions(int count)
	{
		if (optionMappings == null) {
			Debug.LogWarning ("NO MAPPINGS, NO OPTIONS.");
		}
		var options = optionMappings.Options;
		var shuffled = options.OrderBy(a => Guid.NewGuid()).ToList();
		var selected = shuffled.Where(opt => opt.staleness <= 0).Take(count).ToList();
		selected.ForEach(opt => opt.staleness = _stalenessFactor);
		options.ForEach(opt => Mathf.Max(opt.staleness--, 0));
		return selected;
	}

	private void SetOptionViews()
	{
		_optionView1.option = _activeOptions[0];
		_optionView2.option = _activeOptions[1];
	}

}
