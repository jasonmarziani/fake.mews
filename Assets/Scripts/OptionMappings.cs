using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class OptionMappings : MonoBehaviour 
{

	[SerializeField]
	private List<Option> _optionPool;

	public List<Option> Options
	{
		get { return _optionPool; }
	}

}
