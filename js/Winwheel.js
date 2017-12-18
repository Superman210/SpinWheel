var theWheel; //spinwheel
var modal;    //popup window
var wheelPower    = 2; //speed
var wheelSpinning = false;  //current status
var canvas_width = screen.width;

function body_onload() {
    theWheel = new Winwheel({
        'numSegments'       : 16,  
        'drawMode'          : 'image',  
        'segments'     :                
        [
           {'text' : '1'},
           {'text' : '2'},
           {'text' : '3'},
           {'text' : '4'},
           {'text' : '5'},
           {'text' : '6'},
           {'text' : '7'},
           {'text' : '8'},
           {'text' : '9'},
           {'text' : '10'},
           {'text' : '11'},
           {'text' : '12'},
           {'text' : '13'},
           {'text' : '14'},
           {'text' : '15'},
           {'text' : '16'}
        ],
        'animation' :  
        {
            'type'     : 'spinToStop',
            'duration' : 4,     
            'spins'    : 3,     
            'callbackFinished' : 'popup()'
        }
    });
    
    var loadedImg = new Image();
    loadedImg.onload = function() {
        theWheel.wheelImage = loadedImg;
        theWheel.draw();                
    }
    if (canvas_width < 768)
    {
        loadedImg.src = "./img/wheel_mobile.png"
    }
    else 
    loadedImg.src = "./img/wheel.png";
}    
function startSpin() {   
    document.getElementById('spin_button').style.display = 'none';
    document.getElementById('again_button').style.display = 'block';
    document.getElementById('again_button').disabled = true;
    window.history.pushState('redirect html1', 'html1', 'index1.html');
    if (wheelSpinning == false) {
        theWheel.animation.spins = 3;
        theWheel.startAnimation();
        wheelSpinning = true;
    }
}
function resetWheel() {   
    theWheel.rotationAngle = 0;     
    theWheel.draw();                
    wheelSpinning = false;          
}
function playAgain() {
  resetWheel();
  startSpin();
}
function popup() {
    var winningSegment = theWheel.getIndicatedSegment();
    var detect_segment = parseInt(winningSegment.text);
    console.log(detect_segment);
    modal = document.getElementById('mymodal');
    
    var headline = ["Congratulations to your bonus at Ruby Fortune",
                    "Congratulations to your bonus at Spin Palace",
                    "Congratulations to your bonus at Betway",
                    "Congratulations to your bonus at Jackpot City",
                    "Congratulations to your bonus at Ruby Fortune",
                    "Congratulations to your bonus at Spin Palace",
                    "Congratulations to your bonus at Betway",
                    "Congratulations to your bonus at Jackpot City",
                    "Congratulations to your bonus at Ruby Fortune",
                    "Congratulations to your bonus at Spin Palace",
                    "Congratulations to your bonus at Betway",
                    "Congratulations to your bonus at Jackpot City",
                    "Congratulations to your bonus at Ruby Fortune",
                    "Congratulations to your bonus at Spin Palace",
                    "Congratulations to your bonus at Betway",
                    "Congratulations to your bonus at Jackpot City"
    ];
    var logo = ["./img/logo/logo-rubyfortune.png",
                "./img/logo/logo-spinpalace.png",
                "./img/logo/logo-betway.png",
                "./img/logo/logo-jackpotcity.png",
                "./img/logo/logo-rubyfortune.png",
                "./img/logo/logo-spinpalace.png",
                "./img/logo/logo-betway.png",
                "./img/logo/logo-jackpotcity.png",
                "./img/logo/logo-rubyfortune.png",
                "./img/logo/logo-spinpalace.png",
                "./img/logo/logo-betway.png",
                "./img/logo/logo-jackpotcity.png",
                "./img/logo/logo-rubyfortune.png",
                "./img/logo/logo-spinpalace.png",
                "./img/logo/logo-betway.png",
                "./img/logo/logo-jackpotcity.png"
    ];
    var offer = ["$750 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1600 free deposit bonus!",
                 "$750 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1600 free deposit bonus!",
                 "$750 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1600 free deposit bonus!",
                 "$750 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1000 free deposit bonus!",
                 "$1600 free deposit bonus!"
    ];
    var url = ["https://www.rubyfortune.com/?s=bfp38887&a=bfpadid78099",
               "https://www.spinpalace.com/?s=bfp38887&a=bfpadid78098",
               "http://betway.com/?s=bfp38887&a=bfpadid78096",
               "https://www.jackpotcitycasino.com/?s=bfp38887&a=bfpadid78097",
               "https://www.rubyfortune.com/?s=bfp38887&a=bfpadid78099",
               "https://www.spinpalace.com/?s=bfp38887&a=bfpadid78098",
               "http://betway.com/?s=bfp38887&a=bfpadid78096",
               "https://www.jackpotcitycasino.com/?s=bfp38887&a=bfpadid78097",
               "https://www.rubyfortune.com/?s=bfp38887&a=bfpadid78099",
               "https://www.spinpalace.com/?s=bfp38887&a=bfpadid78098",
               "http://betway.com/?s=bfp38887&a=bfpadid78096",
               "https://www.jackpotcitycasino.com/?s=bfp38887&a=bfpadid78097",
               "https://www.rubyfortune.com/?s=bfp38887&a=bfpadid78099",
               "https://www.spinpalace.com/?s=bfp38887&a=bfpadid78098",
               "http://betway.com/?s=bfp38887&a=bfpadid78096",
               "https://www.jackpotcitycasino.com/?s=bfp38887&a=bfpadid78097"
    ];
    document.getElementById('headline').innerHTML = headline[detect_segment-1];
    document.getElementById('offer').innerHTML = offer[detect_segment-1];
    jQuery(function($){
        $("#modal-header a").attr("href", url[detect_segment-1]);
        $("#logo img").attr("src", logo[detect_segment-1]);
        $("#logo a").attr("href", url[detect_segment-1]);
        $("#modal-body-comment a").attr("href", url[detect_segment-1]);
        $("#link_url a").attr("href", url[detect_segment-1]);
    });
    setTimeout(function() {
        modal.style.display = "block";
    }, 100);
}

function modal_close() {
    modal.style.display = "none";
    resetWheel();
    document.getElementById('again_button').disabled = false;
}
/*mobile friendly*/
function canvas_mobile() {
    canvas_mobile = document.getElementById('canvas');
    if (canvas_mobile.getContext) {
        ctx_mobile = canvas_mobile.getContext("2d");
        console.log(ctx_mobile);

        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('orientationchange', resizeCanvas, false);
        resizeCanvas();
    }
}
function resizeCanvas() {
    canvas_mobile.width = window.innerWidth;
    canvas_mobile.height = window.innerHeight;
}
/*music files upload*/
var music = new Audio("./music/music.mp3");
function Winwheel(options, drawWheel) {
    defaultOptions = {
        'canvasId'          : 'canvas',     
        'centerX'           : null,         
        'centerY'           : null,         
        'outerRadius'       : null,         
        'innerRadius'       : 0,            
        'numSegments'       : 1,            
        'drawMode'          : 'code',       
        'rotationAngle'     : 0,            
        'textFontFamily'    : 'Arial',      
        'textFontSize'      : 20,           
        'textFontWeight'    : 'bold',       
        'textOrientation'   : 'horizontal', 
        'textAlignment'     : 'center',     
        'textDirection'     : 'normal',     
        'textMargin'        : null,         
        'textFillStyle'     : 'black',      
        'textStrokeStyle'   : null,         
        'textLineWidth'     : 1,            
        'fillStyle'         : 'silver',     
        'strokeStyle'       : 'black',      
        'lineWidth'         : 1,            
        'clearTheCanvas'    : true,         
        'imageOverlay'      : false,        
        'drawText'          : true,         
        'pointerAngle'      : 0,            
        'wheelImage'        : null,         
        'imageDirection'    : 'N'           
    };
    for (var key in defaultOptions) {
        if ((options != null) && (typeof(options[key]) !== 'undefined')) {
            this[key] = options[key];
        } else {
            this[key] = defaultOptions[key];
        }
    }
    if (options != null) {
        for (var key in options) {
            if (typeof(this[key]) === 'undefined') {
                this[key] = options[key];
            }
        }
    }
    if (this.canvasId) {
        this.canvas = document.getElementById(this.canvasId);
        if (this.canvas) {
            if (this.centerX == null) {
                this.centerX = this.canvas.width / 2;
            }
            if (this.centerY == null) {
                this.centerY = this.canvas.height / 2;
            }
            if (this.outerRadius == null) {
                if (this.canvas.width < this.canvas.height) {
                    this.outerRadius = (this.canvas.width / 2) - this.lineWidth;
                } else {
                    this.outerRadius = (this.canvas.height / 2) - this.lineWidth;
                }
            }
            this.ctx = this.canvas.getContext('2d');
        } else {
            this.canvas = null;
            this.ctx = null;
        }
    } else {
        this.cavnas = null;
        this.ctx = null;
    }
    this.segments = new Array(null);
    for (x = 1; x <= this.numSegments; x++) {
        if ((options != null) && (options['segments']) && (typeof(options['segments'][x-1]) !== 'undefined')) {
            this.segments[x] = new Segment(options['segments'][x-1]);
        } else {
            this.segments[x] = new Segment();
        }
    }
    this.updateSegmentSizes();
    if (this.textMargin === null) {
        this.textMargin = (this.textFontSize / 1.7);
    }
    if ((options != null) && (options['animation']) && (typeof(options['animation']) !== 'undefined')) {
        this.animation = new Animation(options['animation']);
    } else {
        this.animation = new Animation();
    }
    if ((options != null) && (options['pins']) && (typeof(options['pins']) !== 'undefined')) {
        this.pins = new Pin(options['pins']);
    }
    if ((this.drawMode == 'image') || (this.drawMode == 'segmentImage')) {
        if (typeof(options['fillStyle']) === 'undefined') {
            this.fillStyle = null;
        }
        if (typeof(options['strokeStyle']) === 'undefined') {
            this.strokeStyle = 'red';
        }
        if (typeof(options['drawText']) === 'undefined') {
            this.drawText = false;
        }
        if (typeof(options['lineWidth']) === 'undefined') {
            this.lineWidth = 1;
        }
        if (typeof(drawWheel) === 'undefined') {
            drawWheel = false;
        }
    } else {
        if (typeof(drawWheel) === 'undefined') {
            drawWheel = true;
        }
    }
    if ((options != null) && (options['pointerGuide']) && (typeof(options['pointerGuide']) !== 'undefined')) {
        this.pointerGuide = new PointerGuide(options['pointerGuide']);
    } else {
        this.pointerGuide = new PointerGuide();
    }
    if (drawWheel == true) {
        this.draw(this.clearTheCanvas);
    } 
    else if (this.drawMode == 'segmentImage') {
        winwheelToDrawDuringAnimation = this;
        winhweelAlreadyDrawn = false;
        for (y = 1; y <= this.numSegments; y ++) {
            if (this.segments[y].image !== null) {   
                this.segments[y].imgData = new Image();
                this.segments[y].imgData.onload = winwheelLoadedImage;
                this.segments[y].imgData.src = this.segments[y].image;
            }
        }
    }
}
Winwheel.prototype.updateSegmentSizes = function() {
    if (this.segments) {
        var arcUsed = 0;
        var numSet  = 0;
        for (x = 1; x <= this.numSegments; x ++) {
            if (this.segments[x].size !== null) {
                arcUsed += this.segments[x].size;
                numSet ++;
            }
        }
        var arcLeft = (360 - arcUsed);
        var degreesEach = 0;
        if (arcLeft > 0) {
            degreesEach = (arcLeft / (this.numSegments - numSet));
        }
        var currentDegree = 0;
        for (x = 1; x <= this.numSegments; x ++) {
            this.segments[x].startAngle = currentDegree;
            if (this.segments[x].size) {
                currentDegree += this.segments[x].size;
            } else {
                currentDegree += degreesEach;
            }
            this.segments[x].endAngle = currentDegree;
        }
    }
}
Winwheel.prototype.clearCanvas = function() {
    if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
Winwheel.prototype.draw = function(clearTheCanvas) {
    if (this.ctx) {
        if (typeof(clearTheCanvas) !== 'undefined') {
            if (clearTheCanvas == true) {
                this.clearCanvas();
            }
        } else {
            this.clearCanvas();
        }
        if (this.drawMode == 'image') {
            this.drawWheelImage();
            if (this.drawText == true) {
                this.drawSegmentText();
            }
            if (this.imageOverlay == true) {
                this.drawSegments();
            }
        }
        else if (this.drawMode == 'segmentImage')
        {
            this.drawSegmentImages();
            if (this.drawText == true) {
                this.drawSegmentText();
            }
            if (this.imageOverlay == true) {
                this.drawSegments();
            }
        } else {
            this.drawSegments();
            if (this.drawText == true) {
                this.drawSegmentText();
            }
        }
        if (typeof this.pins !== 'undefined') {
            if (this.pins.visible == true)
                this.drawPins();
        }
        if (this.pointerGuide.display == true) {
            this.drawPointerGuide();
        }
    }
}
Winwheel.prototype.drawPins = function() {
    if ((this.pins) && (this.pins.number)) {
        var pinSpacing = (360 / this.pins.number);
        for(i=1; i<=this.pins.number; i ++) {
            this.ctx.save();
            this.ctx.strokeStyle = this.pins.strokeStyle;
            this.ctx.lineWidth = this.pins.lineWidth;
            this.ctx.fillStyle = this.pins.fillStyle;
            this.ctx.translate(this.centerX, this.centerY);
            this.ctx.rotate(this.degToRad(i * pinSpacing + this.rotationAngle));
            this.ctx.translate(-this.centerX, -this.centerY);
            this.ctx.beginPath();
            this.ctx.arc(this.centerX,(this.centerY - this.outerRadius) + this.pins.outerRadius + this.pins.margin,this.pins.outerRadius,0,2*Math.PI);
            if (this.pins.fillStyle)
                this.ctx.fill();
            if (this.pins.strokeStyle)
                this.ctx.stroke();
            this.ctx.restore();
        }
    }
}
Winwheel.prototype.drawPointerGuide = function() {
    if (this.ctx) {
        this.ctx.save();
        this.ctx.translate(this.centerX, this.centerY);
        this.ctx.rotate(this.degToRad(this.pointerAngle));
        this.ctx.translate(-this.centerX, -this.centerY);
        this.ctx.strokeStyle = this.pointerGuide.strokeStyle;
        this.ctx.lineWidth = this.pointerGuide.lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(this.centerX, -(this.outerRadius / 4));
        this.ctx.stroke();
        this.ctx.restore();
    }
}
Winwheel.prototype.drawWheelImage = function() {
    if (this.wheelImage != null) {
        var imageLeft = (this.centerX - (this.wheelImage.height / 2));
        var imageTop  = (this.centerY - (this.wheelImage.width / 2));
        this.ctx.save();
        this.ctx.translate(this.centerX, this.centerY);
        this.ctx.rotate(this.degToRad(this.rotationAngle));
        this.ctx.translate(-this.centerX, -this.centerY);
        this.ctx.drawImage(this.wheelImage, imageLeft, imageTop);
        this.ctx.restore();
    }
}
Winwheel.prototype.degToRad = function(d) {
    return d * 0.0174532925199432957;
}
Winwheel.prototype.setCenter = function(x, y) {
    this.centerX = x;
    this.centerY = y;
}
Winwheel.prototype.setCanvasId = function(canvasId) {
    if (canvasId) {
        this.canvasId = canvasId;
        this.canvas = document.getElementById(this.canvasId);
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
        }
    } else {
        this.canvasId = null
        this.ctx = null;
        this.canvas = null;
    }
}
Winwheel.prototype.windowToCanvas = function(x, y) {
    var bbox = this.canvas.getBoundingClientRect();
    return {
        x: Math.floor(x - bbox.left * (this.canvas.width / bbox.width)),
        y: Math.floor(y - bbox.top *  (this.canvas.height / bbox.height))
    };
}
Winwheel.prototype.getIndicatedSegment = function() {
    var prizeNumber = this.getIndicatedSegmentNumber();
    return this.segments[prizeNumber];
}
Winwheel.prototype.getIndicatedSegmentNumber = function() {
    var indicatedPrize = 0;
    var rawAngle = this.getRotationPosition();
    var relativeAngle = Math.floor(this.pointerAngle - rawAngle);
    if (relativeAngle < 0) {
        relativeAngle = 360 - Math.abs(relativeAngle);
    }
    for (x = 1; x < (this.segments.length); x ++) {
       if ((relativeAngle >= this.segments[x]['startAngle']) && (relativeAngle <= this.segments[x]['endAngle']))
        {
            indicatedPrize = x;
            break;
        }
    }
    return indicatedPrize;
}
Winwheel.prototype.getRotationPosition = function() {
    var rawAngle = this.rotationAngle;  
    if (rawAngle >= 0) {
        if (rawAngle > 360) {
            var timesPast360 = Math.floor(rawAngle / 360);
            rawAngle = (rawAngle - (360 * timesPast360));
        }
    } else {
        if (rawAngle < -360) {
            var timesPast360 = Math.ceil(rawAngle / 360); 
            rawAngle = (rawAngle - (360 * timesPast360)); 
        }
        rawAngle = (360 + rawAngle);
    }
    return rawAngle;
}
Winwheel.prototype.startAnimation = function() {
    if (this.animation) {
        music.play();
        this.computeAnimation();
        winwheelToDrawDuringAnimation = this;
        var properties = new Array(null);
        properties[this.animation.propertyName] = this.animation.propertyValue;
        properties['yoyo']       = this.animation.yoyo;     
        properties['repeat']     = this.animation.repeat;
        properties['ease']       = this.animation.easing;
        properties['onUpdate']   = winwheelAnimationLoop;   
        properties['onComplete'] = winwheelStopAnimation;   
        this.tween = TweenMax.to(this, this.animation.duration, properties);
    }
}
Winwheel.prototype.stopAnimation = function(canCallback) {
    music.pause();
    music.currentTime = 0;
    if (winwheelToDrawDuringAnimation) {
        winwheelToDrawDuringAnimation.tween.kill();
        winwheelStopAnimation(canCallback);
    }
    winwheelToDrawDuringAnimation = this;
}
Winwheel.prototype.pauseAnimation = function() {
    if (this.tween) {
        this.tween.pause();
    }
}
Winwheel.prototype.resumeAnimation = function() {
    if (this.tween) {
        this.tween.play();
    }
}
Winwheel.prototype.computeAnimation = function() {
    if (this.animation) {
        if (this.animation.type == 'spinOngoing') {
            this.animation.propertyName = 'rotationAngle';
            if (this.animation.spins == null) {
                this.animation.spins = 5;
            }
            if (this.animation.repeat == null) {
                this.animation.repeat = -1;    
            }
            if (this.animation.easing == null) {
                this.animation.easing = 'Linear.easeNone';
            }
            if (this.animation.yoyo == null) {
                this.animation.yoyo = false;
            }
            this.animation.propertyValue = (this.animation.spins * 360);
            if (this.animation.direction == 'anti-clockwise') {
                this.animation.propertyValue = (0 - this.animation.propertyValue);
            }
        }
        else if (this.animation.type == 'spinToStop') {
            this.animation.propertyName = 'rotationAngle';
            if (this.animation.spins == null) {
                this.animation.spins = 5;
            }
            if (this.animation.repeat == null) {
                this.animation.repeat = 0;
            }
            if (this.animation.easing == null) {
                this.animation.easing = 'Power4.easeOut';
            }

            if (this.animation.stopAngle == null)
            {
                // If the stop angle has not been specified then pick random between 0 and 359.
                this.animation._stopAngle = Math.floor((Math.random() * 359));
            }
            else
            {
                // We need to set the internal to 360 minus what the user entered because the wheel spins past 0 without
                // this it would indicate the prize on the opposite side of the wheel. We aslo need to take in to account
                // the pointerAngle as the stop angle needs to be relative to that.
                this.animation._stopAngle = (360 - this.animation.stopAngle + this.pointerAngle);
            }

            if (this.animation.yoyo == null)
            {
                this.animation.yoyo = false;
            }

            // The property value is the spins * 360 then plus or minus the stopAngle depending on if the rotation is clockwise or anti-clockwise.
            this.animation.propertyValue = (this.animation.spins * 360);

            if (this.animation.direction == 'anti-clockwise')
            {
                this.animation.propertyValue = (0 - this.animation.propertyValue);

                // Also if the value is anti-clockwise we need subtract the stopAngle (but to get the wheel to stop in the correct
                // place this is 360 minus the stop angle as the wheel is rotating backwards).
                this.animation.propertyValue -= (360 - this.animation._stopAngle);
            }
            else
            {
                // Add the stopAngle to the propertyValue as the wheel must rotate around to this place and stop there.
                this.animation.propertyValue += this.animation._stopAngle;
            }
        }
        else if (this.animation.type == 'spinAndBack')
        {
            // This is basically is a spin for a number of times then the animation reverses and goes back to start.
            // If a repeat is specified then this can be used to make the wheel "rock" left and right.

            // Again this is a spin so the rotationAngle the property which is animated.
            this.animation.propertyName = 'rotationAngle';

            if (this.animation.spins == null)
            {
                this.animation.spins = 5;
            }

            if (this.animation.repeat == null)
            {
                this.animation.repeat = 1;          // This needs to be set to at least 1 in order for the animation to reverse.
            }

            if (this.animation.easing == null)
            {
                this.animation.easing = 'Power2.easeInOut';     // This is slow at the start and end and fast in the middle.
            }

            if (this.animation.yoyo == null)
            {
                this.animation.yoyo = true;       // This needs to be set to true to have the animation reverse back like a yo-yo.
            }

            if (this.animation.stopAngle == null)
            {
                this.animation._stopAngle = 0;
            }
            else
            {
                // We need to set the internal to 360 minus what the user entered
                // because the wheel spins past 0 without this it would indicate the
                // prize on the opposite side of the wheel.
                this.animation._stopAngle = (360 - this.animation.stopAngle);
            }

            // The property value is the spins * 360 then plus or minus the stopAngle depending on if the rotation is clockwise or anti-clockwise.
            this.animation.propertyValue = (this.animation.spins * 360);

            if (this.animation.direction == 'anti-clockwise')
            {
                this.animation.propertyValue = (0 - this.animation.propertyValue);

                // Also if the value is anti-clockwise we need subtract the stopAngle (but to get the wheel to stop in the correct
                // place this is 360 minus the stop angle as the wheel is rotating backwards).
                this.animation.propertyValue -= (360 - this.animation._stopAngle);
            }
            else
            {
                // Add the stopAngle to the propertyValue as the wheel must rotate around to this place and stop there.
                this.animation.propertyValue += this.animation._stopAngle;
            }
        }
        else if (this.animation.type == 'custom')
        {
            // Do nothing as all values must be set by the developer in the parameters
            // especially the propertyName and propertyValue.
        }
    }
}

// ====================================================================================================================
// Calculates and returns a random stop angle inside the specified segment number. Value will always be 1 degree inside
// the start and end of the segment to avoid issue with the segment overlap.
// ====================================================================================================================
Winwheel.prototype.getRandomForSegment = function(segmentNumber)
{
    var stopAngle = 0;

    if (segmentNumber)
    {
        if (typeof this.segments[segmentNumber] !== 'undefined')
        {
            var startAngle = this.segments[segmentNumber].startAngle;
            var endAngle = this.segments[segmentNumber].endAngle;
            var range = (endAngle - startAngle) - 2;

            if (range > 0)
            {
                stopAngle = (startAngle + 1 + Math.floor((Math.random() * range)));
            }
            else
            {
               console.log('Segment size is too small to safely get random angle inside it');
            }
        }
        else
        {
            console.log('Segment ' + segmentNumber + ' undefined');
        }
    }
    else
    {
        console.log('Segment number not specified');
    }

    return stopAngle;
}

// ====================================================================================================================
// Class for the wheel pins.
// ====================================================================================================================
function Pin(options)
{
    defaultOptions = {
        'visible'        : true,     // In future there might be some functionality related to the pins even if they are not displayed.
        'number'         : 36,       // The number of pins. These are evenly distributed around the wheel.
        'outerRadius'    : 3,        // Radius of the pins which determines their size.
        'fillStyle'      : 'grey',   // Fill colour of the pins.
        'strokeStyle'    : 'black',  // Line colour of the pins.
        'lineWidth'      : 1,        // Line width of the pins.
        'margin'         : 3,        // The space between outside edge of the wheel and the pins.
    };

    // Now loop through the default options and create properties of this class set to the value for
    // the option passed in if a value was, or if not then set the value of the default.
    for (var key in defaultOptions)
    {
        if ((options != null) && (typeof(options[key]) !== 'undefined'))
            this[key] = options[key];
        else
            this[key] = defaultOptions[key];
    }

    // Also loop though the passed in options and add anything specified not part of the class in to it as a property.
    if (options != null)
    {
        for (var key in options)
        {
            if (typeof(this[key]) === 'undefined')
            {
                this[key] = options[key];
            }
        }
    }
}

// ====================================================================================================================
// Class for the wheel spinning animation which like a segment becomes a property of the wheel.
// ====================================================================================================================
function Animation(options)
{
    defaultOptions = {
        'type'              : 'spinOngoing',       // For now there are only supported types are spinOngoing (continuous), spinToStop, spinAndBack, custom.
        'direction'         : 'clockwise',         // clockwise or anti-clockwise.
        'propertyName'      : null,                // The name of the winning wheel property to be affected by the animation.
        'propertyValue'     : null,                // The value the property is to be set to at the end of the animation.
        'duration'          : 10,                  // Duration of the animation.
        'yoyo'              : false,               // If the animation is to reverse back again i.e. yo-yo.
        'repeat'            : 0,                   // The number of times the animation is to repeat, -1 will cause it to repeat forever.
        'easing'            : 'power3.easeOut',    // The easing to use for the animation, default is the best for spin to stop. Use Linear.easeNone for no easing.
        'stopAngle'         : null,                // Used for spinning, the angle at which the wheel is to stop.
        'spins'             : null,                // Used for spinning, the number of complete 360 degree rotations the wheel is to do.
        'clearTheCanvas'    : null,                // If set to true the canvas will be cleared before the wheel is re-drawn, false it will not, null the animation will abide by the value of this property for the parent wheel object.
        'callbackFinished'  : null,                // Function to callback when the animation has finished.
        'callbackBefore'    : null,                // Function to callback before the wheel is drawn each animation loop.
        'callbackAfter'     : null                 // Function to callback after the wheel is drawn each animation loop.
    };

    // Now loop through the default options and create properties of this class set to the value for
    // the option passed in if a value was, or if not then set the value of the default.
    for (var key in defaultOptions)
    {
        if ((options != null) && (typeof(options[key]) !== 'undefined'))
            this[key] = options[key];
        else
            this[key] = defaultOptions[key];
    }

    // Also loop though the passed in options and add anything specified not part of the class in to it as a property.
    if (options != null)
    {
        for (var key in options)
        {
            if (typeof(this[key]) === 'undefined')
            {
                this[key] = options[key];
            }
        }
    }
}

// ====================================================================================================================
// Class for segments. When creating a json of options can be passed in.
// ====================================================================================================================
function Segment(options)
{
    // Define default options for segments, most are null so that the global defaults for the wheel
    // are used if the values for a particular segment are not specifically set.
    defaultOptions = {
        'size'              : null, // Leave null for automatic. Valid values are degrees 0-360. Use percentToDegrees function if needed to convert.
        'text'              : '',   // Default is blank.
        'fillStyle'         : null, // If null for the rest the global default will be used.
        'strokeStyle'       : null,
        'lineWidth'         : null,
        'textFontFamily'    : null,
        'textFontSize'      : null,
        'textFontWeight'    : null,
        'textOrientation'   : null,
        'textAlignment'     : null,
        'textDirection'     : null,
        'textMargin'        : null,
        'textFillStyle'     : null,
        'textStrokeStyle'   : null,
        'textLineWidth'     : null,
        'image'             : null, // Name/path to the image
        'imageDirection'    : null, // Direction of the image, can be set globally for the whole wheel.
        'imgData'           : null  // Image object created here and loaded with image data.
    };

    // Now loop through the default options and create properties of this class set to the value for
    // the option passed in if a value was, or if not then set the value of the default.
    for (var key in defaultOptions)
    {
        if ((options != null) && (typeof(options[key]) !== 'undefined'))
            this[key] = options[key];
        else
            this[key] = defaultOptions[key];
    }

    // Also loop though the passed in options and add anything specified not part of the class in to it as a property.
    // This allows the developer to easily add properties to segments at construction time.
    if (options != null)
    {
        for (var key in options)
        {
            if (typeof(this[key]) === 'undefined')
            {
                this[key] = options[key];
            }
        }
    }
    // There are 2 additional properties which are set by the code, so need to define them here.
    // They are not in the default options because they are not something that should be set by the user,
    // the values are updated every time the updateSegmentSizes() function is called.
    this.startAngle = 0;
    this.endAngle   = 0;
}

Segment.prototype.changeImage = function(image, imageDirection)
{
    // Change image name, blank image data.
    this.image = image;
    this.imgData = null;

    // Set direction.
    if (imageDirection)
    {
        this.imageDirection = imageDirection;
    }

    // Set imgData to a new image object, change set callback and change src (just like in wheel constructor).
    winhweelAlreadyDrawn = false;
    this.imgData = new Image();
    this.imgData.onload = winwheelLoadedImage;
    this.imgData.src = this.image;
}

// ====================================================================================================================
// Class that is created as property of the wheel. Draws line from center of the wheel out to edge of canvas to
// indicate where the code thinks the pointer location is. Helpful to get alignment correct esp when using images.
// ====================================================================================================================
function PointerGuide(options)
{
    defaultOptions = {
        'display'     : false,
        'strokeStyle' : 'red',
        'lineWidth'   : 3
    };

    // Now loop through the default options and create properties of this class set to the value for
    // the option passed in if a value was, or if not then set the value of the default.
    for (var key in defaultOptions)
    {
        if ((options != null) && (typeof(options[key]) !== 'undefined'))
        {
            this[key] = options[key];
        }
        else
        {
            this[key] = defaultOptions[key];
        }
    }
}

// ====================================================================================================================
// This function takes the percent 0-100 and returns the number of degrees 0-360 this equates to.
// ====================================================================================================================
function winwheelPercentToDegrees(percentValue)
{
    var degrees = 0;

    if ((percentValue > 0) && (percentValue <= 100))
    {
        var divider = (percentValue / 100);
        degrees = (360 * divider);
    }

    return degrees;
}

// ====================================================================================================================
// In order for the wheel to be re-drawn during the spin animation the function greesock calls needs to be outside
// of the class as for some reason it errors if try to call winwheel.draw() directly.
// ====================================================================================================================
function winwheelAnimationLoop()
{
    if (winwheelToDrawDuringAnimation)
    {
        // Check if the clearTheCanvas is specified for this animation, if not or it is not false then clear the canvas.
        if (winwheelToDrawDuringAnimation.animation.clearTheCanvas != false)
        {
            winwheelToDrawDuringAnimation.ctx.clearRect(0, 0, winwheelToDrawDuringAnimation.canvas.width, winwheelToDrawDuringAnimation.canvas.height);
        }

        // If there is a callback function which is supposed to be called before the wheel is drawn then do that.
        if (winwheelToDrawDuringAnimation.animation.callbackBefore != null)
        {
            eval(winwheelToDrawDuringAnimation.animation.callbackBefore);
        }

        // Call code to draw the wheel, pass in false as we never want it to clear the canvas as that would wipe anything drawn in the callbackBefore.
        winwheelToDrawDuringAnimation.draw(false);

        // If there is a callback function which is supposed to be called after the wheel has been drawn then do that.
        if (winwheelToDrawDuringAnimation.animation.callbackAfter != null)
        {
            eval(winwheelToDrawDuringAnimation.animation.callbackAfter);
        }
    }
}

// ====================================================================================================================
// This function is called-back when the greensock animation has finished.
// ====================================================================================================================
var winwheelToDrawDuringAnimation = null;  // This global is set by the winwheel class to the wheel object to be re-drawn.

function winwheelStopAnimation(canCallback)
{
    // When the animation is stopped if canCallback is not false then try to call the callback.
    // false can be passed in to stop the after happening if the animation has been stopped before it ended normally.
    if (canCallback != false)
    {
        if (winwheelToDrawDuringAnimation.animation.callbackFinished != null)
        {
            eval(winwheelToDrawDuringAnimation.animation.callbackFinished);
        }
    }
}
var winhweelAlreadyDrawn = false;

function winwheelLoadedImage() {
    if (winhweelAlreadyDrawn == false)     {
        var winwheelImageLoadCount = 0;
        for (i = 1; i <= winwheelToDrawDuringAnimation.numSegments; i ++) {
            if ((winwheelToDrawDuringAnimation.segments[i].imgData != null) && (winwheelToDrawDuringAnimation.segments[i].imgData.height))
            {
                winwheelImageLoadCount ++;
            }
        }
        if (winwheelImageLoadCount == winwheelToDrawDuringAnimation.numSegments) {
            winhweelAlreadyDrawn = true;
            winwheelToDrawDuringAnimation.draw();
        }
    }
}
