using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ChartView : MonoBehaviour 
{
	[SerializeField]
	private Slider _slider;
	[SerializeField]
	private SliderHandle _sliderHandle;

	public Slider Slider
	{
		get { return _slider; }
	}

	public void UpdateSlider(int value)
	{
		_slider.value += value;
		_sliderHandle.OnValueChanged((int)_slider.value);
	}

	public void Reset()
	{
		_slider.value = 0;
		_sliderHandle.OnValueChanged((int)_slider.value);
	}
}
