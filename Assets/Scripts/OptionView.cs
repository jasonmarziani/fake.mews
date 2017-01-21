using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class OptionView : MonoBehaviour 
{

	[SerializeField]
	private Text _headline;


	[SerializeField]
	private Option _option;

	public Option option
	{
		get { return _option; }
		set {
			_option = value;
			Render ();
		}
	}

	private void Render()
	{
		_headline.text = _option.headline;
	}

}
