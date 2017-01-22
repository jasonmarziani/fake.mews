using UnityEngine;
using System;
using System.Collections;

[RequireComponent(typeof(RectTransform))]
public class MoveRectTransform : MonoBehaviour
{
	public Action<MoveRectTransform> OnMoveComplete;

	private const float EPSILON = 0.1f;
	private const float LERP_SPEED = 0.3f;

	private RectTransform _rectTrans;
	[SerializeField]
	private Vector2 _targetPosition;

	void Start()
	{
		_rectTrans = GetComponent<RectTransform>();
	}
		
	void Update()
	{
		Vector2 delta = _targetPosition - _rectTrans.anchoredPosition;
		if (delta.sqrMagnitude < EPSILON)
		{
			_rectTrans.anchoredPosition = _targetPosition;
			enabled = false; 
			if (OnMoveComplete != null) OnMoveComplete(this);
		}
		else
		{
			_rectTrans.anchoredPosition = Vector2.Lerp(_rectTrans.anchoredPosition, _targetPosition, LERP_SPEED);
		}
	}

	public void MoveTo(Vector2 newPosition)
	{
		_targetPosition = newPosition;
		enabled = true;
	}
}