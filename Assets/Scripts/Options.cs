using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

public class Options : MonoBehaviour 
{
	public Action<Vector2> OnCommit;

	[SerializeField]
	private OptionMappings _optionMappings;

	[SerializeField]
	private List<Option> _activeOptions;

	[SerializeField]
	private OptionView _optionView1;

	[SerializeField]
	private OptionView _optionView2;

	void Start()
	{
		NextTurn ();
	}

	public void Swap()
	{
		_activeOptions.Reverse();
		SetOptionViews();
	}
		
	public void Commit()
	{
		if (OnCommit != null) {
			var scoring = new Vector2 (_activeOptions [0].scoring.x, _activeOptions [1].scoring.y);
			Debug.Log ("SCORING: " + scoring);
			OnCommit (scoring);
		}
		NextTurn ();
	}

	private void NextTurn()
	{
		_activeOptions = RandomOptions(2);
		SetOptionViews ();
	}

	private List<Option> RandomOptions(int count)
	{
		// TODO: FIX FOR REPETITION
		var list = new List<Option>();
		var options = _optionMappings.Options;
		for (int i = 0; i < count; i++) 
		{
			var randomIndex = UnityEngine.Random.Range (0, options.Count);
			list.Add (options[randomIndex]);
		}
		return list;

	}

	private void SetOptionViews()
	{
		_optionView1.option = _activeOptions[0];
		_optionView2.option = _activeOptions[1];
	}

}
