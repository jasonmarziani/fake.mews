using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Options : MonoBehaviour 
{
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
		_activeOptions = RandomOptions(2);
		SetOptionViews ();
	}

	public void Swap()
	{
		_activeOptions.Reverse();
		SetOptionViews();
	}
		
	public void Commit()
	{

	}

	private List<Option> RandomOptions(int count)
	{
		// TODO: FIX FOR REPETITION
		var list = new List<Option>();
		var options = _optionMappings.Options;
		for (int i = 0; i < count; i++) 
		{
			var randomIndex = Random.Range (0, options.Count);
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
