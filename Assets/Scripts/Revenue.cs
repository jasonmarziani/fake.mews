using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Revenue : MonoBehaviour 
{
	[SerializeField]
	private Text _text;
	[SerializeField]
	private int _revenue;

	public void AddRevenue(int value)
	{
		_revenue += value;
		Render ();
	}

	private void Render()
	{
		_text.text = "$" + _revenue.ToString ();
	}
}
