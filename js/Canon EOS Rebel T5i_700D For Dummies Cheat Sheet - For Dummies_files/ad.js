var $ = function(i) {return document.getElementById(i)}, userAgent = navigator.userAgent || navigator.vendor || window.opera;


function endFrame() {
	
}

function typeIt( id, w, t, s ) {
	var toW = w;
	var w = s;
	var inc = 10;
	var del = 0;
	
	TweenLite.to( $('cursor'), 0, {opacity:1, top:t+'px', delay:0});
	
	for(var i = w; i <= toW; i+=inc) {
		TweenLite.to( $(id), 0, {width:w+'px', delay:del});
		TweenLite.to( $('cursor'), 0, {left:w+'px', delay:del});
		del+=0.04;
		w+=inc;			
	}
}
	
function init() {
	
	//FRAME	1
	TweenLite.to( $('bkg'), 1, {opacity:1, y:'50px', ease:Power3.easeOut, delay:0.2});
	TweenLite.to( $('office365'), 1, {opacity:1, y:'85px', ease:Power3.easeOut, delay: 0.4});
	TweenLite.to( $('logo'), 1, {opacity:1, delay:1});
	
	//FRAME 2
	TweenLite.to( $('office365'), 0.6, { opacity:1, x:'15px', y:'50px', ease:Power3.easeOut , delay:1.5});
	TweenLite.to( $('bkg'), 0.6, { x:'0px', y:'0px', ease:Power3.easeOut, delay:1.5});
	
	//FRAME 3
	TweenLite.to( $('cursor'), 0, {opacity:1, top:'0px', delay:2.1});
	
	setTimeout(function(){ typeIt('t1-1', 150, 3, 0)}, 2900);
	
	setTimeout(function(){ typeIt('t1-2', 150, 40, 0)}, 3800);
	
	setTimeout(function(){ typeIt('t1-3', 100, 75, 0)}, 4800);
	
	// setTimeout(function(){ typeIt('t1-4', 100, 110)}, 5800);
	
	//FRAME 4
	// TweenLite.to( $('cursor'), 0.2, {left:'10px', ease:Power0.easeNone, delay:8.3});
	// TweenLite.to( $('t1-4h-img'), 0.2, {opacity:1, delay: 8.5});
	
	TweenLite.to( $('cursor'), 0.2, {top:'75px', left:'10px', ease:Power0.easeNone, delay:8.3});
	TweenLite.to( $('t1-3h-img'), 0.2, {opacity:1, delay: 8.5});
	
	TweenLite.to( $('cursor'), 0.2, {top:'35px', left:'10px', ease:Power0.easeNone, delay:8.7});
	TweenLite.to( $('t1-2h-img'), 0.2, {opacity:1, delay: 8.9});
	
	TweenLite.to( $('cursor'), 0.2, {top:'0px', left:'10px', ease:Power0.easeNone, delay:9.1});
	TweenLite.to( $('t1-1h-img'), 0.2, {opacity:1, delay: 9.3});
	
	//FRAME 5
	TweenLite.to( $('t1-1'), 0, {opacity:0, delay:10});
	TweenLite.to( $('t1-1h'), 0, {opacity:0, delay:10});
	TweenLite.to( $('t1-2'), 0, {opacity:0, delay:10});
	TweenLite.to( $('t1-2h'), 0, {opacity:0, delay:10});
	TweenLite.to( $('t1-3'), 0, {opacity:0, delay:10});
	TweenLite.to( $('t1-3h'), 0, {opacity:0, delay:10});
	// TweenLite.to( $('t1-4'), 0, {opacity:0, delay:10});
	// TweenLite.to( $('t1-4h'), 0, {opacity:0, delay:10});
	
	//FRAME 6
	setTimeout(function(){ typeIt('t2-1', 120, 2, 0)}, 10200);
	
	//setTimeout(function(){ typeIt('t2-2', 120, 2, 100)}, 11100);
	
	setTimeout(function(){ typeIt('t2-3', 140, 38, 0)}, 12300);
	
	setTimeout(function(){ typeIt('t2-4', 120, 73, 0)}, 13600);
	
	TweenLite.to( $('cursor'), 0.4, {opacity:0, delay:15});
			
	//ENDFRAME
	TweenLite.to( $('cta'), 0.4, {left:'15px', opacity:1, delay:15});
	
	TweenLite.to( $('cta'), 0.2, {scale:1.05, delay:15.4});
	TweenLite.to( $('cta'), 0.1, {scale:1, delay:15.6});
	
	TweenLite.to( $('cta'), 0.2, {scale:1.05, delay:16.4});
	TweenLite.to( $('cta'), 0.1, {scale:1, delay:16.6});
	
}
init();