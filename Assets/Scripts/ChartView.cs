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

	public Slider Slider
	{
		get { return _slider; }
	}

	void Start () 
	{
		_icon.sprite = _iconSprite;
	}

	public void UpdateSlider(int value)
	{
		_slider.value += value;
	}

	public void Reset()
	{
		_slider.value = 0;
	}
}
