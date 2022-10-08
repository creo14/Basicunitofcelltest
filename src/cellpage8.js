(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cellpage8_atlas_1", frames: [[678,1050,676,350],[1356,1050,676,350],[1026,0,676,523],[678,1402,676,350],[1356,1402,676,350],[1026,525,676,523],[0,1439,676,408],[0,971,676,466],[0,0,1024,641],[0,643,1024,326]]},
		{name:"cellpage8_atlas_2", frames: [[1026,469,206,137],[1704,0,186,186],[1650,469,88,167],[1234,469,206,137],[1740,469,88,167],[1442,469,206,137],[1892,0,108,137],[678,232,676,235],[1356,232,676,235],[0,0,676,350],[0,469,1024,149],[678,0,1024,230],[0,620,1024,94]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_18 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.SamplePageweb_01 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.SamplePageweb_02 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.SamplePageweb_03 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.SamplePageweb_04 = function() {
	this.initialize(ss["cellpage8_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.SamplePageweb_05 = function() {
	this.initialize(ss["cellpage8_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Plane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#78F9E2").ss(5,0,1).p("Egi1gcCMBFrAAAQBkAAAABkMAAAA09QAABkhkAAMhFrAAAQhkAAAAhkMAAAg09QAAhkBkAAg");
	this.shape.setTransform(232.975,179.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egi1AcDQhkAAAAhkMAAAg09QAAhkBkAAMBFrAAAQBkAAAABkMAAAA09QAABkhkAAg");
	this.shape_1.setTransform(232.975,179.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Plane, new cjs.Rectangle(-2.5,-2.5,471,364), null);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzggZMAnBAAAIAAAzMgnBAAAg");
	this.shape.setTransform(125,97.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzgAaIAAgzMAnBAAAIAAAzg");
	this.shape_1.setTransform(125,97.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#78F9E2").ss(1,0,1).p("AzSnzMAmlAAAQBkAAAABkIAAMfQAABkhkAAMgmlAAAQhkAAAAhkIAAsfQAAhkBkAAg");
	this.shape_2.setTransform(133.5,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#79B1A4").s().p("AzSH0QhkAAAAhkIAAsfQAAhkBkAAMAmlAAAQBkAAAABkIAAMfQAABkhkAAg");
	this.shape_3.setTransform(131.5272,50.0496,1.1268,1.2574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,x:133.5,y:50}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2,p:{scaleX:1.1268,scaleY:1.2574,x:131.5272,y:50.0496}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-13.8,302.9,127.7);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.2767,0.2767);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-0.3,-7.8,0.2767,0.2767);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(0,0,0.2767,0.2767);

	this.instance_3 = new lib.CachedBmp_16();
	this.instance_3.setTransform(-0.3,-7.8,0.2767,0.2767);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(0,0,0.2767,0.2767);

	this.instance_5 = new lib.CachedBmp_18();
	this.instance_5.setTransform(0,0,0.2767,0.2767);

	this.instance_6 = new lib.CachedBmp_17();
	this.instance_6.setTransform(-13.75,-8.6,0.2767,0.2767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-8.6,70.7,51.5);


// stage content:
(lib.page8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,13,23,33,43,53,63,73,83,93,103,113];
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.plasma_membrane.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(5);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nucleus.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(15);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nucleolus.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(25);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.cytoplasm.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(35);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.mithocondria.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(45);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.sm_endosplasmic.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(55);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.ribosome.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(65);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.golgi_apparatus.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(75);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.lysosome.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(85);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.ro_endoplasmic.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay(95);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.centrioles.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay(105);
		}
	}
	this.frame_1 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_13 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.plasma_membrane_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.nucleus_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_33 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.nucleolus_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_43 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.cytoplasm_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_53 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.mitochondria_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_63 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.ser_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_73 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.ribosome_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_83 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.gaparatus_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_93 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.lysosome_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_103 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.rer_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_113 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.centrioles_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(10).call(this.frame_23).wait(10).call(this.frame_33).wait(10).call(this.frame_43).wait(10).call(this.frame_53).wait(10).call(this.frame_63).wait(10).call(this.frame_73).wait(10).call(this.frame_83).wait(10).call(this.frame_93).wait(10).call(this.frame_103).wait(10).call(this.frame_113).wait(3));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance = new lib.Plane();
	this.instance.setTransform(650.65,446.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance._off = true;

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(298.65,537.75,0.5,0.5);

	this.centrioles_back = new lib.back();
	this.centrioles_back.name = "centrioles_back";
	this.centrioles_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.centrioles_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},104).to({state:[{t:this.instance},{t:this.centrioles_back},{t:this.instance_1}]},9).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(2));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_2 = new lib.Plane();
	this.instance_2.setTransform(748.65,562.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(298.65,540.25,0.5,0.5);

	this.rer_back = new lib.back();
	this.rer_back.name = "rer_back";
	this.rer_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.rer_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},94).to({state:[{t:this.instance_2},{t:this.rer_back},{t:this.instance_3}]},9).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(12));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_4 = new lib.Plane();
	this.instance_4.setTransform(774.65,698.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(296.65,537.95,0.5,0.5);

	this.lysosome_back = new lib.back();
	this.lysosome_back.name = "lysosome_back";
	this.lysosome_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.lysosome_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},84).to({state:[{t:this.instance_4},{t:this.lysosome_back},{t:this.instance_5}]},9).to({state:[]},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(22));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy
	this.instance_6 = new lib.Plane();
	this.instance_6.setTransform(764.65,792.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(298.65,540.25,0.5,0.5);

	this.gaparatus_back = new lib.back();
	this.gaparatus_back.name = "gaparatus_back";
	this.gaparatus_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.gaparatus_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},74).to({state:[{t:this.instance_6},{t:this.gaparatus_back},{t:this.instance_7}]},9).to({state:[]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(32));

	// Layer_2_copy_copy_copy_copy_copy_copy
	this.instance_8 = new lib.Plane();
	this.instance_8.setTransform(720.65,860.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.CachedBmp_5();
	this.instance_9.setTransform(298.65,540.25,0.5,0.5);

	this.ribosome_back = new lib.back();
	this.ribosome_back.name = "ribosome_back";
	this.ribosome_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.ribosome_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},64).to({state:[{t:this.instance_8},{t:this.ribosome_back},{t:this.instance_9}]},9).to({state:[]},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(42));

	// Layer_2_copy_copy_copy_copy_copy
	this.instance_10 = new lib.Plane();
	this.instance_10.setTransform(594.65,966.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.CachedBmp_6();
	this.instance_11.setTransform(299.1,538.25,0.5,0.5);

	this.ser_back = new lib.back();
	this.ser_back.name = "ser_back";
	this.ser_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.ser_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},54).to({state:[{t:this.instance_10},{t:this.ser_back},{t:this.instance_11}]},9).to({state:[]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(52));

	// Layer_2_copy_copy_copy_copy
	this.instance_12 = new lib.Plane();
	this.instance_12.setTransform(294.65,916.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.CachedBmp_7();
	this.instance_13.setTransform(298.2,540.25,0.5,0.5);

	this.mitochondria_back = new lib.back();
	this.mitochondria_back.name = "mitochondria_back";
	this.mitochondria_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.mitochondria_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},44).to({state:[{t:this.instance_12},{t:this.mitochondria_back},{t:this.instance_13}]},9).to({state:[]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(62));

	// Layer_2_copy_copy_copy
	this.instance_14 = new lib.Plane();
	this.instance_14.setTransform(234.65,806.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.CachedBmp_8();
	this.instance_15.setTransform(297.1,539.15,0.5,0.5);

	this.cytoplasm_back = new lib.back();
	this.cytoplasm_back.name = "cytoplasm_back";
	this.cytoplasm_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.cytoplasm_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},34).to({state:[{t:this.instance_14},{t:this.cytoplasm_back},{t:this.instance_15}]},9).to({state:[]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(72));

	// Layer_2_copy_copy
	this.instance_16 = new lib.Plane();
	this.instance_16.setTransform(204.65,640.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.CachedBmp_9();
	this.instance_17.setTransform(298.65,538.75,0.5,0.5);

	this.nucleolus_back = new lib.back();
	this.nucleolus_back.name = "nucleolus_back";
	this.nucleolus_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.nucleolus_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},24).to({state:[{t:this.instance_16},{t:this.nucleolus_back},{t:this.instance_17}]},9).to({state:[]},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(82));

	// Layer_2_copy
	this.instance_18 = new lib.Plane();
	this.instance_18.setTransform(234.65,586.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.CachedBmp_10();
	this.instance_19.setTransform(298.65,540.25,0.5,0.5);

	this.nucleus_back = new lib.back();
	this.nucleus_back.name = "nucleus_back";
	this.nucleus_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.nucleus_back, 0, 1, 2, false, new lib.back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},14).to({state:[{t:this.instance_18},{t:this.nucleus_back},{t:this.instance_19}]},9).to({state:[]},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(92));

	// Layer_2
	this.instance_20 = new lib.Plane();
	this.instance_20.setTransform(274.65,506.4,0.3397,0.0279,0,0,0,233,179.5);
	this.instance_20._off = true;

	this.plasma_membrane_back = new lib.back();
	this.plasma_membrane_back.name = "plasma_membrane_back";
	this.plasma_membrane_back.setTransform(745.5,537.7,1.807,1.7177,0,0,0,28.5,18.9);
	new cjs.ButtonHelper(this.plasma_membrane_back, 0, 1, 2, false, new lib.back(), 3);

	this.instance_21 = new lib.CachedBmp_11();
	this.instance_21.setTransform(298.65,540.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},4).to({state:[{t:this.instance_20},{t:this.instance_21},{t:this.plasma_membrane_back}]},9).to({state:[]},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:512.35,y:686},9).to({_off:true},1).wait(102));

	// Layer_1
	this.centrioles = new lib.Button();
	this.centrioles.name = "centrioles";
	this.centrioles.setTransform(653.65,429.6,0.5309,0.3594,0,0,0,134.3,51.1);
	new cjs.ButtonHelper(this.centrioles, 0, 1, 2, false, new lib.Button(), 3);

	this.ro_endoplasmic = new lib.Button();
	this.ro_endoplasmic.name = "ro_endoplasmic";
	this.ro_endoplasmic.setTransform(748.2,516.95,0.619,0.8452,0,0,0,134.2,51.1);
	new cjs.ButtonHelper(this.ro_endoplasmic, 0, 1, 2, false, new lib.Button(), 3);

	this.lysosome = new lib.Button();
	this.lysosome.name = "lysosome";
	this.lysosome.setTransform(777.55,679.8,0.5836,0.3984,0,0,0,134.1,50.7);
	new cjs.ButtonHelper(this.lysosome, 0, 1, 2, false, new lib.Button(), 3);

	this.golgi_apparatus = new lib.Button();
	this.golgi_apparatus.name = "golgi_apparatus";
	this.golgi_apparatus.setTransform(765.85,759.6,0.5825,0.6232,0,0,0,134,50.6);
	new cjs.ButtonHelper(this.golgi_apparatus, 0, 1, 2, false, new lib.Button(), 3);

	this.ribosome = new lib.Button();
	this.ribosome.name = "ribosome";
	this.ribosome.setTransform(721.8,844.5,0.558,0.3352,0,0,0,133.8,50.4);
	new cjs.ButtonHelper(this.ribosome, 0, 1, 2, false, new lib.Button(), 3);

	this.sm_endosplasmic = new lib.Button();
	this.sm_endosplasmic.name = "sm_endosplasmic";
	this.sm_endosplasmic.setTransform(591.95,924.55,0.6495,0.7608,0,0,0,133.7,50.3);
	new cjs.ButtonHelper(this.sm_endosplasmic, 0, 1, 2, false, new lib.Button(), 3);

	this.mithocondria = new lib.Button();
	this.mithocondria.name = "mithocondria";
	this.mithocondria.setTransform(291.7,894.35,0.8317,0.4596,0,0,0,133.7,50.1);
	new cjs.ButtonHelper(this.mithocondria, 0, 1, 2, false, new lib.Button(), 3);

	this.cytoplasm = new lib.Button();
	this.cytoplasm.name = "cytoplasm";
	this.cytoplasm.setTransform(231.55,786.4,0.6494,0.3793,0,0,0,133.7,50.1);
	new cjs.ButtonHelper(this.cytoplasm, 0, 1, 2, false, new lib.Button(), 3);

	this.nucleolus = new lib.Button();
	this.nucleolus.name = "nucleolus";
	this.nucleolus.setTransform(206.95,622.4,0.5536,0.381,0,0,0,133.6,50);
	new cjs.ButtonHelper(this.nucleolus, 0, 1, 2, false, new lib.Button(), 3);

	this.nucleus = new lib.Button();
	this.nucleus.name = "nucleus";
	this.nucleus.setTransform(233.5,565.1,0.5305,0.3959,0,0,0,133.6,50);
	new cjs.ButtonHelper(this.nucleus, 0, 1, 2, false, new lib.Button(), 3);

	this.plasma_membrane = new lib.Button();
	this.plasma_membrane.name = "plasma_membrane";
	this.plasma_membrane.setTransform(278.05,479.45,0.6325,0.57,0,0,0,133.5,50.1);
	new cjs.ButtonHelper(this.plasma_membrane, 0, 1, 2, false, new lib.Button(), 3);

	this.instance_22 = new lib.SamplePageweb_05();
	this.instance_22.setTransform(0,1346);

	this.instance_23 = new lib.SamplePageweb_04();
	this.instance_23.setTransform(0,1020);

	this.instance_24 = new lib.SamplePageweb_03();
	this.instance_24.setTransform(0,379);

	this.instance_25 = new lib.SamplePageweb_02();
	this.instance_25.setTransform(0,149);

	this.instance_26 = new lib.SamplePageweb_01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.plasma_membrane},{t:this.nucleus},{t:this.nucleolus},{t:this.cytoplasm},{t:this.mithocondria},{t:this.sm_endosplasmic},{t:this.ribosome},{t:this.golgi_apparatus},{t:this.lysosome},{t:this.ro_endoplasmic},{t:this.centrioles}]}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.plasma_membrane},{t:this.nucleus},{t:this.nucleolus},{t:this.cytoplasm},{t:this.mithocondria},{t:this.sm_endosplasmic},{t:this.ribosome},{t:this.golgi_apparatus},{t:this.lysosome},{t:this.ro_endoplasmic},{t:this.centrioles}]},115).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,720,512,720);
// library properties:
lib.properties = {
	id: 'E8A7B14270ABC94E9E3F8D4000A3234A',
	width: 1024,
	height: 1440,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cellpage8_atlas_1.png", id:"cellpage8_atlas_1"},
		{src:"images/cellpage8_atlas_2.png", id:"cellpage8_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E8A7B14270ABC94E9E3F8D4000A3234A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;