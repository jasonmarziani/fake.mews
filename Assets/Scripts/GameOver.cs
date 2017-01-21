using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

public class GameOver : MonoBehaviour 
{
	[SerializeField]
	private Text _reasonText;
	[SerializeField]
	private Text _revenueText;

	[SerializeField]
	private List<GameObject> _children;

	void Start () 
	{
		SetActive(false);
	}

	public void Activate(string reason, string revenue)
	{
		SetActive(true);
		_reasonText.text = reason;
		_revenueText.text = revenue;
	}

	private void SetActive(bool value)
	{
		_children.ForEach(c => c.SetActive(value));
	}

	public void Reset()
	{
		_reasonText.text = "";
		_revenueText.text = "";
		SetActive (false);
	}
}
