using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class RevenueView : MonoBehaviour 
{
	[SerializeField]
	private Text _text;

	public void Render(string revenue)
	{
		_text.text = "$" + revenue.ToString();
	}
}
