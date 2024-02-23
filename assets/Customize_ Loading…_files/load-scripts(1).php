/*! This file is auto-generated */
!function(w,g){g.wp=g.wp||{},g.wp.heartbeat=new function(){var e,t,n,a,i=w(document),r={suspend:!1,suspendEnabled:!0,screenId:"",url:"",lastTick:0,queue:{},mainInterval:60,tempInterval:0,originalInterval:0,minimalInterval:0,countdown:0,connecting:!1,connectionError:!1,errorcount:0,hasConnected:!1,hasFocus:!0,userActivity:0,userActivityEvents:!1,checkFocusTimer:0,beatTimer:0};function o(){return(new Date).getTime()}function c(e){var t,n=e.src;if(!n||!/^https?:\/\//.test(n)||(t=g.location.origin||g.location.protocol+"//"+g.location.host,0===n.indexOf(t)))try{if(e.contentWindow.document)return 1}catch(e){}}function s(){r.hasFocus&&!document.hasFocus()?v():!r.hasFocus&&document.hasFocus()&&d()}function u(e,t){var n;if(e){switch(e){case"abort":break;case"timeout":n=!0;break;case"error":if(503===t&&r.hasConnected){n=!0;break}case"parsererror":case"empty":case"unknown":r.errorcount++,2<r.errorcount&&r.hasConnected&&(n=!0)}n&&!I()&&(r.connectionError=!0,i.trigger("heartbeat-connection-lost",[e,t]),wp.hooks.doAction("heartbeat.connection-lost",e,t))}}function l(){var e;r.connecting||r.suspend||(r.lastTick=o(),e=w.extend({},r.queue),r.queue={},i.trigger("heartbeat-send",[e]),wp.hooks.doAction("heartbeat.send",e),e={data:e,interval:r.tempInterval?r.tempInterval/1e3:r.mainInterval/1e3,_nonce:"object"==typeof g.heartbeatSettings?g.heartbeatSettings.nonce:"",action:"heartbeat",screen_id:r.screenId,has_focus:r.hasFocus},"customize"===r.screenId&&(e.wp_customize="on"),r.connecting=!0,r.xhr=w.ajax({url:r.url,type:"post",timeout:3e4,data:e,dataType:"json"}).always(function(){r.connecting=!1,m()}).done(function(e,t,n){var a;e?(r.hasConnected=!0,I()&&(r.errorcount=0,r.connectionError=!1,i.trigger("heartbeat-connection-restored"),wp.hooks.doAction("heartbeat.connection-restored")),e.nonces_expired&&(i.trigger("heartbeat-nonces-expired"),wp.hooks.doAction("heartbeat.nonces-expired")),e.heartbeat_interval&&(a=e.heartbeat_interval,delete e.heartbeat_interval),e.heartbeat_nonce&&"object"==typeof g.heartbeatSettings&&(g.heartbeatSettings.nonce=e.heartbeat_nonce,delete e.heartbeat_nonce),e.rest_nonce&&"object"==typeof g.wpApiSettings&&(g.wpApiSettings.nonce=e.rest_nonce),i.trigger("heartbeat-tick",[e,t,n]),wp.hooks.doAction("heartbeat.tick",e,t,n),a&&f(a)):u("empty")}).fail(function(e,t,n){u(t||"unknown",e.status),i.trigger("heartbeat-error",[e,t,n]),wp.hooks.doAction("heartbeat.error",e,t,n)}))}function m(){var e=o()-r.lastTick,t=r.mainInterval;r.suspend||(r.hasFocus?0<r.countdown&&r.tempInterval&&(t=r.tempInterval,r.countdown--,r.countdown<1)&&(r.tempInterval=0):t=12e4,r.minimalInterval&&t<r.minimalInterval&&(t=r.minimalInterval),g.clearTimeout(r.beatTimer),e<t?r.beatTimer=g.setTimeout(function(){l()},t-e):l())}function v(){r.hasFocus=!1}function d(){r.userActivity=o(),r.suspend=!1,r.hasFocus||(r.hasFocus=!0,m())}function h(){r.suspend=!0}function p(){r.userActivityEvents=!1,i.off(".wp-heartbeat-active"),w("iframe").each(function(e,t){c(t)&&w(t.contentWindow).off(".wp-heartbeat-active")}),d()}function b(){var e=r.userActivity?o()-r.userActivity:0;3e5<e&&r.hasFocus&&v(),(r.suspendEnabled&&6e5<e||36e5<e)&&h(),r.userActivityEvents||(i.on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){p()}),w("iframe").each(function(e,t){c(t)&&w(t.contentWindow).on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){p()})}),r.userActivityEvents=!0)}function I(){return r.connectionError}function f(e,t){var n,a=r.tempInterval||r.mainInterval;if(e){switch(e){case"fast":case 5:n=5e3;break;case 15:n=15e3;break;case 30:n=3e4;break;case 60:n=6e4;break;case 120:n=12e4;break;case"long-polling":return r.mainInterval=0;default:n=r.originalInterval}5e3===(n=r.minimalInterval&&n<r.minimalInterval?r.minimalInterval:n)?(t=parseInt(t,10)||30,r.countdown=t=t<1||30<t?30:t,r.tempInterval=n):(r.countdown=0,r.tempInterval=0,r.mainInterval=n),n!==a&&m()}return r.tempInterval?r.tempInterval/1e3:r.mainInterval/1e3}return"string"==typeof g.pagenow&&(r.screenId=g.pagenow),"string"==typeof g.ajaxurl&&(r.url=g.ajaxurl),"object"==typeof g.heartbeatSettings&&(e=g.heartbeatSettings,!r.url&&e.ajaxurl&&(r.url=e.ajaxurl),e.interval&&(r.mainInterval=e.interval,r.mainInterval<15?r.mainInterval=15:120<r.mainInterval&&(r.mainInterval=120)),e.minimalInterval&&(e.minimalInterval=parseInt(e.minimalInterval,10),r.minimalInterval=0<e.minimalInterval&&e.minimalInterval<=600?e.minimalInterval:0),r.minimalInterval&&r.mainInterval<r.minimalInterval&&(r.mainInterval=r.minimalInterval),r.screenId||(r.screenId=e.screenId||"front"),"disable"===e.suspension)&&(r.suspendEnabled=!1),r.mainInterval=1e3*r.mainInterval,r.originalInterval=r.mainInterval,r.minimalInterval&&(r.minimalInterval=1e3*r.minimalInterval),void 0!==document.hidden?(t="hidden",a="visibilitychange",n="visibilityState"):void 0!==document.msHidden?(t="msHidden",a="msvisibilitychange",n="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",a="webkitvisibilitychange",n="webkitVisibilityState"),t&&(document[t]&&(r.hasFocus=!1),i.on(a+".wp-heartbeat",function(){"hidden"===document[n]?(v(),g.clearInterval(r.checkFocusTimer)):(d(),document.hasFocus&&(r.checkFocusTimer=g.setInterval(s,1e4)))})),document.hasFocus&&(r.checkFocusTimer=g.setInterval(s,1e4)),w(g).on("pagehide.wp-heartbeat",function(){h(),r.xhr&&4!==r.xhr.readyState&&r.xhr.abort()}),w(g).on("pageshow.wp-heartbeat",function(e){e.originalEvent.persisted&&d()}),g.setInterval(b,3e4),w(function(){r.lastTick=o(),m()}),{hasFocus:function(){return r.hasFocus},connectNow:function(){r.lastTick=0,m()},disableSuspend:function(){r.suspendEnabled=!1},interval:f,hasConnectionError:I,enqueue:function(e,t,n){return!!e&&!(n&&this.isQueued(e)||(r.queue[e]=t,0))},dequeue:function(e){e&&delete r.queue[e]},isQueued:function(e){if(e)return r.queue.hasOwnProperty(e)},getQueuedItem:function(e){return e&&this.isQueued(e)?r.queue[e]:void 0}}}}(jQuery,window);
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
});

/*
 * Add thickbox to href & area elements that have a class of .thickbox.
 * Remove the loading indicator when content in an iframe has loaded.
 */
function tb_init(domChunk){
	jQuery( 'body' )
		.on( 'click', domChunk, tb_click )
		.on( 'thickbox:iframe:loaded', function() {
			jQuery( '#TB_window' ).removeClass( 'thickbox-loading' );
		});
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	var $closeBtn;

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window' class='thickbox-loading'></div>");
				jQuery("#TB_overlay").on( 'click', tb_remove );
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window' class='thickbox-loading'></div>");
				jQuery("#TB_overlay").on( 'click', tb_remove );
				jQuery( 'body' ).addClass( 'modal-open' );
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");//add loader to the page
		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$|\.webp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' ||
			urlType == '.jpeg' ||
			urlType == '.png' ||
			urlType == '.gif' ||
			urlType == '.bmp' ||
			urlType == '.webp'
		){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - original by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div>");

			jQuery("#TB_closeWindowButton").on( 'click', tb_remove );

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).off("click",goPrev)){jQuery(document).off("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").on( 'click', goPrev );
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").on( 'click', goNext );

			}

			jQuery(document).on('keydown.thickbox', function(e){
				if ( e.which == 27 ){ // close
					tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).off('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).off('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").on( 'click', tb_remove );
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no parameters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no parameters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div></div><iframe frameborder='0' hspace='0' allowtransparency='true' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").off();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' allowtransparency='true' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").off();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").on( 'click', tb_remove );

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").on('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					var load_url = url;
					load_url += -1 === url.indexOf('?') ? '?' : '&';
					jQuery("#TB_ajaxContent").load(load_url += "random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).on('keydown.thickbox', function(e){
				if ( e.which == 27 ){ // close
					tb_remove();
					return false;
				}
			});
		}

		$closeBtn = jQuery( '#TB_closeWindowButton' );
		/*
		 * If the native Close button icon is visible, move focus on the button
		 * (e.g. in the Network Admin Themes screen).
		 * In other admin screens is hidden and replaced by a different icon.
		 */
		if ( $closeBtn.find( '.tb-close-icon' ).is( ':visible' ) ) {
			$closeBtn.trigger( 'focus' );
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'}).trigger( 'thickbox:iframe:loaded' );
}

function tb_remove() {
 	jQuery("#TB_imageOff").off("click");
	jQuery("#TB_closeWindowButton").off("click");
	jQuery( '#TB_window' ).fadeOut( 'fast', function() {
		jQuery( '#TB_window, #TB_overlay, #TB_HideSelect' ).trigger( 'tb_unload' ).off().remove();
		jQuery( 'body' ).trigger( 'thickbox:removed' );
	});
	jQuery( 'body' ).removeClass( 'modal-open' );
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).off('.thickbox');
	return false;
}

function tb_position() {
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}

