using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ChartView : MonoBehaviour 
{
	[SerializeField]
	private Image _icon;
	[SerializeField]
	private Sprite _iconSprite;
	[SerializeField]
	private Slider _slider;

	void Start () 
	{
		_icon.sprite = _iconSprite;
	}


}
