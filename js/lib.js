function resize(sj,type){
		var type=type||'x';
		var cW=$(window).width();
		var cH=$(window).height();
		if(type=='x'){
			var scale=cW/sj*100;
			
		}else{
			var scale=cH/sj*100;
		}
		$('html').css('fontSize',scale);
		
	}