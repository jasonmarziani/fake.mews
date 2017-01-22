using UnityEngine;
using UnityEngine.UI;
using System;
using System.Collections;
using System.Collections.Generic;

public class SliderHandle : MonoBehaviour 
{
		
	public Sprite[] _icons;

	[SerializeField]
	private Type _type;
	[SerializeField]
	private Image _image;

	public void OnValueChanged(int value)
	{
		var sprite = _icons[value+5];
		_image.sprite = sprite;
	}

}

