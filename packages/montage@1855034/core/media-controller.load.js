montageDefine("1855034","core/media-controller",{dependencies:["./target","./logger","./core"],factory:function(e,t){var n=e("./target").Target,i=e("./logger").logger("mediacontroller");t.MediaController=n.specialize({STOPPED:{value:0,writable:!1},PLAYING:{value:1,writable:!1},PAUSED:{value:2,writable:!1},EMPTY:{value:3,writable:!1},_TIMEUPDATE_FREQUENCY:{value:.25},_mediaElement:{value:null},mediaElement:{get:function(){return this._mediaElement},set:function(e){this._mediaElement!==e&&(this._mediaElement&&this._removeControlEventHandlers(),this._mediaElement=e,this._installControlEventHandlers())}},_status:{value:3},status:{get:function(){return this._status},set:function(e){e!==this._status&&(i.isDebug&&i.debug("MediaController:status: "+e),this._status=e)}},_position:{value:null},position:{set:function(e,t){this._position=e,t||(this._pauseTime=null,this.currentTime=e)},get:function(){return this._position}},_duration:{value:null},duration:{set:function(e){return isNaN(e)?(i.isDebug&&i.debug("MediaController:setDuration: duration is not valid"),void 0):(i.isDebug&&i.debug("MediaController:setDuration: duration="+e),this._duration=e,void 0)},get:function(){return this._duration}},autoplay:{value:!1},play:{value:function(){i.isDebug&&i.debug("MediaController:play()"),0!==this._mediaElement.currentTime&&(this._mediaElement.currentTime=0),this._mediaElement.play(),this._pauseTime=null}},_pauseTime:{value:null},pause:{value:function(){i.isDebug&&i.debug("MediaController:pause()"),this._pauseTime=this._mediaElement.currentTime,this._mediaElement.pause()}},unpause:{value:function(){i.isDebug&&i.debug("MediaController:unpause()"),null!==this._pauseTime&&(this._mediaElement.currentTime=this._pauseTime),this._mediaElement.play()}},playPause:{value:function(){i.isDebug&&i.debug("MediaController:playPause()");var e=this.status===this.PLAYING,t=this.status===this.PAUSED;return this.playbackRate=this._mediaElement.defaultPlaybackRate,e?this.pause():t?this.unpause():this.play(),!e}},_playbackRate:{value:1},playbackRate:{get:function(){return this._playbackRate},set:function(e){this._playbackRate!==e&&(this._playbackRate=e,this._mediaElement.playbackRate=this._playbackRate)}},defaultPlaybackRate:{set:function(e){return this._mediaElement.defaultPlaybackRate=e},get:function(){return this._mediaElement.defaultPlaybackRate}},currentTime:{get:function(){return this._mediaElement.currentTime},set:function(e){if(this.status!==this.EMPTY)try{if(isNaN(this._mediaElement.duration))return i.error("MediaController:set currentTime: duration is not valid"),void 0;var t=this._mediaElement.currentTime;t!==e&&(this._position!==e&&this.status!==this.STOPPED&&(this._position=e),this._mediaElement.currentTime=e)}catch(n){i.error("MediaController:Exception in set currentTime"+this._mediaElement.currentTime)}}},rewind:{value:function(){this.status===this.PLAYING&&(i.isDebug&&i.debug("MediaController:rewind()"),this.playbackRate=-4)}},fastForward:{value:function(){this.status===this.PLAYING&&(i.isDebug&&i.debug("MediaController:fastForward()"),this.playbackRate=4)}},stop:{value:function(){i.isDebug&&i.debug("MediaController:stop()"),this._mediaElement.pause(),this._pauseTime=null,this.status=this.STOPPED,this.position=0}},volume:{get:function(){return 100*this._mediaElement.volume},set:function(e){var t=e;t===void 0?t=50:t>100?t=100:0>t&&(t=0),this._mediaElement.volume=t/100}},volumeIncrease:{value:function(){this.volume+=10}},volumeDecrease:{value:function(){this.volume-=10}},toggleMute:{value:function(){this.mute=!this.mute}},mute:{get:function(){return this._mediaElement.muted},set:function(e){e!==this._mediaElement.muted&&(this._mediaElement.muted=e)}},handleLoadedmetadata:{value:function(){return i.isDebug&&i.debug("MediaController:handleLoadedmetadata: PLAYING="+(this.status===this.PLAYING)+" duration="+this.mediaController.duration),isNaN(this._mediaElement.duration)?(i.isDebug&&i.debug("MediaController:handleLoadedmetadata: duration is not valid"),void 0):(this.duration=this._mediaElement.duration,this.autoplay?(i.isDebug&&i.debug("MediaController:handleLoadedmetadata: autoplay"),this.play()):this.status=this.STOPPED,void 0)}},_lastCurrentTime:{value:0},handleTimeupdate:{value:function(){if(this.status!==this.STOPPED){var e=this._mediaElement.currentTime;Object.getPropertyDescriptor(this,"position").set.call(this,e,!0)}}},handlePlay:{value:function(){i.isDebug&&i.debug("MediaController:handlePlay"),this.status=this.PLAYING}},handlePlaying:{value:function(){i.isDebug&&i.debug("MediaController:handlePlaying: PLAYING"),this.status=this.PLAYING}},handlePause:{value:function(){this.status!==this.STOPPED?(i.isDebug&&i.debug("MediaController:handlePause: PAUSED"),this.status=this.PAUSED):i.isDebug&&i.debug("MediaController:handlePause: STOPPED")}},handleEnded:{value:function(){i.isDebug&&i.debug("MediaController:handleEnded"),this._mediaElement.pause(),this.status=this.STOPPED}},handleAbort:{value:function(){i.isDebug&&i.debug("MediaController:handleAbort: STOPPED"),this.status=this.STOPPED}},handleError:{value:function(e){i.isDebug&&i.debug("MediaController:handleError: STOPPED");var t=e.target.error;if(this.status=this.STOPPED,t)switch(t.code){case t.MEDIA_ERR_ABORTED:console.error("You aborted the video playback.");break;case t.MEDIA_ERR_NETWORK:console.error("A network error caused the video download to fail part-way.");break;case t.MEDIA_ERR_DECODE:console.error("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");break;case t.MEDIA_ERR_SRC_NOT_SUPPORTED:console.error("The selected video could not be loaded, either because the server or network failed, the format is not supported, or no video has been selected.");break;default:console.error("An unknown error occurred.")}}},handleEmptied:{value:function(){i.isDebug&&i.debug("MediaController:handleEmptied: STOPPED"),this.status=this.STOPPED}},_installControlEventHandlers:{value:function(){this._mediaElement.addEventListener("loadedmetadata",this),this._mediaElement.addEventListener("timeupdate",this),this._mediaElement.addEventListener("play",this),this._mediaElement.addEventListener("playing",this),this._mediaElement.addEventListener("pause",this),this._mediaElement.addEventListener("abort",this),this._mediaElement.addEventListener("error",this),this._mediaElement.addEventListener("emptied",this),this._mediaElement.addEventListener("ended",this)}},_removeControlEventHandlers:{value:function(){this._mediaElement.removeEventListener("loadedmetadata",this),this._mediaElement.removeEventListener("timeupdate",this),this._mediaElement.removeEventListener("play",this),this._mediaElement.removeEventListener("playing",this),this._mediaElement.removeEventListener("pause",this),this._mediaElement.removeEventListener("abort",this),this._mediaElement.removeEventListener("error",this),this._mediaElement.removeEventListener("emptied",this),this._mediaElement.removeEventListener("ended",this)}},constructor:{value:function(){this.super()}}},{blueprintModuleId:e("./core")._blueprintModuleIdDescriptor,blueprint:e("./core")._blueprintDescriptor})}});