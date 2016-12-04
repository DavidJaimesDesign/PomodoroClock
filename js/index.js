$(document).ready(function(){
	//buttons
	var quantity_timer = 0;
	var quantity_break = 0;
	
   $('.quantity-right-plus_timer').click(function(e){      
    e.preventDefault();
   	var quantity_timer = parseInt($('#quantity_timer').val());
    $('#quantity_timer').val(quantity_timer + 1);
   });

   $('.quantity-left-minus_timer').click(function(e){
   	e.preventDefault();
    var quantity_timer = parseInt($('#quantity_timer').val());
    if(quantity_timer>0){
    	$('#quantity_timer').val(quantity_timer - 1);
    }
   }); 
	
	 $('.quantity-right-plus_break').click(function(e){      
    e.preventDefault();
   	var quantity_break = parseInt($('#quantity_break').val());
    $('#quantity_break').val(quantity_break + 1);
   });

   $('.quantity-left-minus_break').click(function(e){
   	e.preventDefault();
    var quantity_break = parseInt($('#quantity_break').val());
    if(quantity_break > 0){
    	$('#quantity_break').val(quantity_break - 1);
    }
   }); 
	//timer
	//get the break and the timer amounts
	var break_t = $("#quantity_break");
	var timer_t = $("#quantity_timer");
	var break_t = parseInt(break_t.val());
	var timer_t = parseInt(timer_t.val());

	//set the default timer to 25 mins
	var set_endTime = new Date();
	set_endTime.setMinutes(set_endTime.getMinutes() + timer_t);
	//functions for remaiming time and for clock div
	function getTimeRemaining(endtime) {
  	var t = Date.parse(endtime) - Date.parse(new Date());
  	var seconds = Math.floor((t / 1000) % 60);
  	var minutes = Math.floor((t / 1000 / 60) % 60);
		
 		 return {
			'total': t,
    	'minutes': minutes,
    	'seconds': seconds
  		};
	}
	
	//I am appaled that I am making this monster...
	//It works but not OOP will come back to refactor
	function initializeClock(id, endtime){
  	var clock = document.getElementById(id);
  	var timeinterval = setInterval(function(){
    	var t = getTimeRemaining(endtime);
    	clock.innerHTML = ('0' + t.minutes).slice(-2) + ':' +  ('0' + t.seconds).slice(-2);
    	if(t.total <= 0){
				console.log("The if statement works the function is broken")
      	clearInterval(timeinterval);
    	}
  	},1000);
		
		$('#start_timer').on('click', function(e){
			e.preventDefault();
			var reset_timer = new Date();
			var timer_t = $("#quantity_timer");
			var timer_t = parseInt(timer_t.val());
			reset_timer.setMinutes(reset_timer.getMinutes() + timer_t);
			
			clearInterval(timeinterval);
			
			timeinterval = setInterval(function(){
    		var t = getTimeRemaining(reset_timer);
    		clock.innerHTML = ('0' + t.minutes).slice(-2) + ':' +  ('0' + t.seconds).slice(-2);
    		if(t.total <= 0){
      		clearInterval(timeinterval);
    		}
  		},1000);
		});
		
		$('#start_break').on('click', function(e){
			e.preventDefault();
			var break_t = $("#quantity_break");
			var set_break = new Date();
			var break_t = parseInt(break_t.val());
			set_break.setMinutes(set_break.getMinutes() + break_t);
			
			clearInterval(timeinterval);
			
			timeinterval = setInterval(function(){
    		var t = getTimeRemaining(set_break);
    		clock.innerHTML =  ('0' + t.minutes).slice(-2) + ':' +  ('0' + t.seconds).slice(-2);
    		if(t.total<=0){
      		clearInterval(timeinterval);
    		}
  		},1000);
		});
	}
	
	initializeClock('clockdiv', set_endTime);
	
});