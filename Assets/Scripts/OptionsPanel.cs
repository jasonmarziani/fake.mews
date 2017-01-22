using UnityEngine;
using System;
using System.Collections;

public class OptionsPanel : MonoBehaviour 
{
	public Action<Vector2> OnSelection;

	[SerializeField]
	private OptionMappings _optionMappings;
	[SerializeField]
	private Revenue _revenue;
	[SerializeField]
	private Vector2 _startPosition;
	[SerializeField]
	private Vector2 _endPosition;
	[SerializeField]
	private GameObject _optionsPrefab;
	[SerializeField]
	private GameObject _active;
	[SerializeField]
	private GameObject _next;

	public void Start()
	{
		var options = _optionMappings.Options;
		options.ForEach(opt => opt.staleness = 0);
	}
	
	public void Animate() 
	{
		if (_active != null) 
		{
			var outMover = _active.GetComponent<MoveRectTransform> ();
			outMover.OnMoveComplete += Destroy;
			outMover.MoveTo(_endPosition);
		}

		_next = (GameObject) Instantiate(_optionsPrefab, transform);
		var rt = _next.GetComponent<RectTransform>();
		rt.anchoredPosition = _startPosition;

		var options = rt.GetComponent<Options>();
		options.optionMappings = _optionMappings;
		options.revenue = _revenue.Value.ToString();
		options.OnCommit += OnCommit;
		options.MakeTurn();

		var inMover = _next.GetComponent<MoveRectTransform> ();
		inMover.MoveTo(Vector2.zero);
		_active = _next;

	}

	public void OnCommit(Vector2 scoring)
	{
		StartCoroutine (OnCommitRoutine(scoring));
	}

	private IEnumerator OnCommitRoutine(Vector2 scoring)
	{
		yield return new WaitForSeconds (0.1f);
		if (OnSelection != null) OnSelection(scoring);
		Animate();
	}

	public void ClearAll()
	{
		if (_active != null)
			Destroy (_active);
		if (_next != null)
			Destroy (_next);
	}
		
	private void Destroy(MoveRectTransform target)
	{
		target.OnMoveComplete -= Destroy;
		Destroy (target.gameObject);
	}
		
}
