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
	[SerializeField]
	private Image _background;
	[SerializeField]
	private Color _color;

	public Slider Slider
	{
		get { return _slider; }
	}

	public Color Color
	{
		get { return _color; }
	}

	void Start () 
	{
		if(_icon != null && _iconSprite != null) _icon.sprite = _iconSprite;

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
