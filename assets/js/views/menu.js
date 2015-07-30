var gsap = require('gsap');

var _content
var _openPrompt
var _closePrompt

exports.init = function() {
    ready();
    addHandlers()
}

function ready(){
	_content = document.querySelector('.menu')
	_openPrompt = document.querySelector('.menu-prompt')
	_closePrompt = document.querySelector('.menu .close')
	_logo =  document.querySelector('.logo')

	TweenLite.set(_content, {autoAlpha:0});
}

function addHandlers(){
	var eventName = LCV.isTouch ? 'touchend' : 'click'

	_openPrompt.addEventListener(eventName, show)
	_closePrompt.addEventListener(eventName, hide)
	
	function show(){
		TweenLite.to(_content, 0.5, { autoAlpha: 1})
		TweenLite.to([_openPrompt, _logo], 0.5, { autoAlpha: 0})
	}

	function hide(e){
		e.preventDefault();
		TweenLite.to(_content, 0.5, { autoAlpha: 0})
		TweenLite.to([_openPrompt, _logo], 0.5, { autoAlpha: 1})
	}
}