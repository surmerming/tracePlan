var Journey = {};

Journey = {
	
	initialize: function(){
		// 起点
		this.startMarker = new google.maps.Marker({
			map: this.ud_map, draggable: true, title: '起点', zIndex: 1000000});
		this.startMarker.setPosition(new google.maps.LatLng(0,0));
		this.startMarker.setIcon("img/start_marker.png");
		
		google.maps.event.addListener(this.startMarker, 'dragend', function(){this.onStartMarkerDragend()});
		
		// 终点
		this.endMarker = new google.maps.Marker({
			map: this.ud_map, draggable: true, title: '终点', zIndex: 1000000});
		this.endMarker.setPosition(new google.maps.LatLng(0,0));
		this.endMarker.setIcon("img/end_marker.png");
		
		google.maps.event.addListener(this.endMarker, 'dragend', function(){this.onEndMarkerDragend()});
		
	},
	
	calcRoute: function(){
		
	},
	
	onStartMarkerDragend: function(){
		this.startMarker.ud_position = this.startMarker.getPosition();
		this.onMapMoveEnd();
	},
	
	onEndMarkerDragend: function(){
		this.endMarker.ud_position = this.startMarker.getPosition();
		this.onMapMoveEnd();
	},
	
	onMapMoveEnd: function(){
		this.calcMarkersDockingPosition();
		this.refreshMarker(this.startMarker);
		this.refreshMarker(this.endMarker);
	},
	
	refreshMarker: function(){
		var map = this.ud_map;

		var docking;
		var fading;
	
		if (marker.ud_position == null)
		{
			docking = true;
			fading = false;
		}
		else
		{
			if (map.getBounds().contains(marker.ud_position) == true)
			{
				docking = false;
				fading = false;
			}
			else
			{
				docking = true;
				fading = true;
			}
		}
	
		if (docking == true)
		{
			marker.ud_docking = true;
	
			if (fading == true && marker.ud_fading != true)
			{
				marker.ud_fading = true;
				marker.setIcon(marker.ud_FADING_IMAGE);
			}
	
			if (fading != true && marker.ud_fading == true)
			{
				marker.ud_fading = false;
				marker.setIcon(marker.ud_NORMAL_IMAGE);
			}
	
			marker.setPosition(marker.ud_docking_position);
		}
	
		if (docking != true && marker.ud_docking == true)
		{
			marker.ud_docking == false;
	
			if (fading == true && marker.ud_fading != true)
			{
				marker.ud_fading = true;
				marker.setIcon(marker.ud_FADING_IMAGE);
			}
	
			if (fading != true && marker.ud_fading == true)
			{
				marker.ud_fading = false;
				marker.setIcon(marker.ud_NORMAL_IMAGE);
			}
	
			marker.setPosition(marker.ud_position);
		}
	},
	
	calcMarkersDockingPosition: function(){
		var x;
		var y;
		var start_point;
		var end_point;
	
		switch (this.CONTROL_ANCHOR)
		{
			case google.maps.ControlPosition.TOP_LEFT:
				break;
			case google.maps.ControlPosition.RIGHT_TOP:
				x = this.ud_container.offsetLeft - this.MARKER_OFFSET_TO_CONTROL - this.MARKER_WIDTH + this.MARKER_HOTPOINT_OFFSET_X;
				y = this.ud_container.offsetTop + this.ud_container.offsetHeight;
				end_point = new google.maps.Point(x, y);
				x -= this.MARKER_SPACE + this.MARKER_WIDTH;
				start_point = new google.maps.Point(x, y);
				break;
			case google.maps.ControlPosition.BOTTOM_RIGHT:
				break;
			case google.maps.ControlPosition.BOTTOM_LEFT:
				break;
		}
	
		this.start_marker.ud_docking_position = this.getProjection().fromContainerPixelToLatLng(start_point);
		this.end_marker.ud_docking_position = this.getProjection().fromContainerPixelToLatLng(end_point);
			
	}
};

Journey.initialize();


