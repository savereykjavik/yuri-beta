// (C) 2007-2015 Qualtrics, Inc.

window.QualtricsEmbeddedPopup=function(options)
{this.options={id:'',imagePath:'distribute.qualtrics.com/WRQualtricsShared/Graphics/',surveyBase:'survey.qualtrics.com/SE/',protocol:'http',hideDropShadow:false,backgroundImage:'',background:true,width:400,height:300,animate:true,surveyPopupWidth:600,surveyPopupHeight:800,closeX:null,closeY:null,textX:null,textY:null,linkX:null,linkY:null,linkText:'Click Here',popupText:'Please take a moment to participate in a survey.',startPos:'TL',targetX:null,targetY:null,speed:3000,delay:500,closeDelay:0,viewRate:100,globalCookieID:null,globalCookieTime:null,preventDisplay:0,cookieDomain:'',preview:false,embeddedData:{}};options=options||{};for(var id in options)
this.options[id]=options[id];this.initialize=function()
{try
{if(!this.options.id)
throw('Missing Survey ID');if(!this.options.imagePath)
throw('Missing Image Path');if(!this.options.surveyBase)
throw('Missing Survey Base');if(!this.shouldShow())
return;if(this.options.imagePath.indexOf('http')==-1)
this.options.imagePath=this.options.protocol+'://'+this.options.imagePath;if(this.options.surveyBase.indexOf('http')==-1)
this.options.surveyBase=this.options.protocol+'://'+this.options.surveyBase;this.options.surveyLink=this.options.surveyBase+'?SID='+this.options.id+'&Q_LOC='+escape(window.location.href);for(var id in this.options.embeddedData)
this.options.surveyLink+='&'+id+'='+this.options.embeddedData[id];var that=this;window.setTimeout(function(){that.popup();var closeDelay=that.options.closeDelay;if(that.options.anmiate)
closeDelay+=that.options.speed;if(closeDelay>0)
window.setTimeout(function(){that.close();},closeDelay);},this.options.delay);}
catch(e)
{throw('Qualtrics Popup is configured incorrectly: '+e+'. Please contact your website administrator.');}};this.shouldShow=function()
{if(this.options.preview)
return true;if(this.options.preventDisplay>0)
{var cookieName='QualtricsPopup_'+this.options.id;if(this.getCookie(cookieName))
return false;}
if(this.options.globalCookieID&&this.options.globalCookieTime)
{cookieName='QualtricsPopup_global_'+this.options.globalCookieID;if(this.getCookie(cookieName))
return false;else
this.setCookie(cookieName,'1',this.options.globalCookieTime,this.options.cookieDomain);}
return Math.random()<this.options.viewRate/100;};this.pageMode=function(){return(document.compatMode=='CSS1Compat')?'Standards':'Quirks';};this.popup=function()
{var cookieName='QualtricsPopup_'+this.options.id;if(!this.getCookie(cookieName)&&this.options.preventDisplay>0)
this.setCookie(cookieName,'1',this.options.preventDisplay,this.options.cookieDomain);var that=this;var hideDropShadow=this.options.hideDropShadow;var docSize=this.getWindowSize();var docWidth=docSize[0];var docHeight=docSize[1];var width=this.options.width;var height=this.options.height;if(width>docWidth)width=docWidth;if(height>docHeight)height=docHeight;var surveyPopupWidth=this.options.surveyPopupWidth;var surveyPopupHeight=this.options.surveyPopupHeight;if(surveyPopupWidth>docWidth)surveyPopupWidth=docWidth;if(surveyPopupHeight>docHeight)surveyPopupHeight=docHeight;var pbpadding=hideDropShadow?0:20;var position=this.pageMode()=='Standards'?'fixed':'absolute';var xfactor=0.091837;var yfactor=0.115384;var xmultiple=1.225;var ymultiple=1.3;var mhoff=((xmultiple-1)*width)/2;var mvoff=((ymultiple-1)*height)/2;var horizontal_offset=width*xfactor;var vertical_offset=height*yfactor;var closeX=this.options.closeX===null?(hideDropShadow?-15:horizontal_offset-15):this.options.closeX;var closeY=this.options.closeY===null?(hideDropShadow?-15:vertical_offset-15):this.options.closeY;var scrollOffsets=this.getScrollOffsets();var targetX=this.options.targetX===null?((docWidth/2)-(width/2))+(position=='fixed'?0:scrollOffsets[0]):this.options.targetX;var targetY=this.options.targetY===null?((docHeight/2)-(height/2))+(position=='fixed'?0:scrollOffsets[1]):this.options.targetY;var popup_frame=document.createElement('div');this.popupFrame=popup_frame;this.setStyle(popup_frame,{position:position,zIndex:20000,width:width+'px',height:height+'px'});var popupText=document.createElement('div');popupText.innerHTML=this.options.popupText;this.setStyle(popupText,{padding:'20px 0px',zIndex:'20002'});if(this.options.textX!==null&&this.options.textY!==null)
{this.setStyle(popupText,{position:'absolute',left:this.options.textX+'px',top:this.options.textY+'px'});}
var surveyLink=document.createElement('a');surveyLink.innerHTML=this.options.linkText;surveyLink.href='javascript:void(0);';surveyLink.onclick=function(){that.surveyPopup(surveyPopupWidth,surveyPopupHeight,that.options.surveyLink)};this.setStyle(surveyLink,{padding:'20px 0px',zIndex:200003});if(this.options.linkX!==null&&this.options.linkY!==null)
{this.setStyle(surveyLink,{position:'absolute',left:this.options.linkX+'px',top:this.options.linkY+'px'});}
if(!hideDropShadow)
{var drop_shadow=document.createElement('img');this.setStyle(drop_shadow,{width:'100%',height:'100%',position:'relative',zIndex:'20000'});drop_shadow.src=this.options.imagePath+"/popup_shadow.png";drop_shadow=this.fixPNG(drop_shadow,width,height);popup_frame.appendChild(drop_shadow);this.setStyle(popup_frame,{width:(hideDropShadow?(width*xmultiple):width)+'px',height:(hideDropShadow?(height*ymultiple):height)+'px'});}
var popup_x=document.createElement('img');this.setStyle(popup_x,{width:'30px',height:'30px',position:'absolute',top:closeY+'px',right:closeX+'px',cursor:'pointer',zIndex:'20001'});popup_x.src=this.options.imagePath+"/black_popup_x.png";popup_x=this.fixPNG(popup_x,30,30);popup_x.onclick=function(){that.close();};var popup_body=document.createElement('div');this.setStyle(popup_body,{position:'absolute',textAlign:'center',fontFamily:'Arial',fontSize:'10pt',zIndex:'20001'});popup_body.appendChild(popupText);popup_body.appendChild(surveyLink);if(!hideDropShadow)
{popup_body.style.top=(hideDropShadow?mvoff:vertical_offset)+'px';popup_body.style.left=(hideDropShadow?mhoff:horizontal_offset)+'px';popup_body.style.width=(width-2*horizontal_offset-2*pbpadding)+'px';popup_body.style.height=(height-2*vertical_offset-2*pbpadding)+'px';popup_body.style.margin=pbpadding+'px';}
else
{popup_body.style.top=0+'px';popup_body.style.left=0+'px';popup_body.style.width=(width)+'px';popup_body.style.height=(height)+'px';popup_body.style.padding=0+'px';}
popup_frame.appendChild(popup_body);popup_frame.appendChild(popup_x);if(this.isIE6())
{var cover=this.buildIframeCover(width,height,horizontal_offset,vertical_offset);popup_frame.appendChild(cover);}
if(this.options.animate)
{start=this.options.startPos;switch(start)
{default:case'ML':var startX=-width;var startY=((docHeight/2)-(height/2));break;case'TL':var startX=-width;var startY=-height;break;case'BL':var startX=-width;var startY=docHeight;break;case'TC':var startX=((docWidth/2)-(width/2));var startY=-height;break;case'TR':var startX=docWidth;var startY=-height;break;case'MR':var startX=docWidth;var startY=((docHeight/2)-(height/2));break;case'BR':var startX=docWidth;var startY=docHeight;break;case'BC':var startX=((docWidth/2)-(width/2));var startY=docHeight;break;}
startX+=position=='fixed'?0:scrollOffsets[0];startY+=position=='fixed'?0:scrollOffsets[1];var duration=this.options.speed;this.animatePopup(duration,{x:startX,y:startY},{x:targetX,y:targetY});}
else
{popup_frame.style.zoom=1;popup_frame.style.left=targetX+'px';popup_frame.style.top=targetY+'px';document.body.appendChild(popup_frame);}};this.setStyle=function(el,style)
{for(var id in style)
el.style[id]=style[id];};this.close=function()
{if(this.popupFrame.parentNode)
this.popupFrame.parentNode.removeChild(this.popupFrame);};this.getWindowSize=function()
{var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number')
{myWidth=window.innerWidth;myHeight=window.innerHeight;}
else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))
{myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}
else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight;}
return[myWidth,myHeight];};this.getScrollOffsets=function(){var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=='number')
{scrOfY=window.pageYOffset;scrOfX=window.pageXOffset;}
else if(document.body&&(document.body.scrollLeft||document.body.scrollTop))
{scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft;}
else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop))
{scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft;}
return[scrOfX,scrOfY];};this.animatePopup=function(duration,start,target)
{this.popupFrame.style.left=start['x']+'px';this.popupFrame.style.top=start['y']+'px';document.body.appendChild(this.popupFrame);this.popupFrame.style.zoom=1;var currentTime=new Date();var fps=30;this.slide(currentTime,duration,target,(1000/fps));};this.slide=function(startTime,duration,target,fps)
{var element=this.popupFrame;var currentTime=new Date();var timeelapsed=currentTime-startTime;var timeleft=(duration-timeelapsed);var factorX=this.inquad(timeelapsed/duration);var factorY=factorX;var left=element.style.left;var top=element.style.top;var curX=left.substring(0,left.indexOf('p'));var curY=top.substring(0,top.indexOf('p'));var diffX=curX-target['x'];var diffY=curY-target['y'];var tempX=diffX*factorX;var tempY=diffY*factorY;element.style.left=(curX-tempX)+'px';element.style.top=(curY-tempY)+'px';if(timeleft>0)
{var that=this;setTimeout(function(){that.slide(startTime,duration,target,fps);},fps);}
else
{element.style.left=target['x'];element.style.top=target['y'];element.style.zIndex=50000;}};this.inquad=function(x){return x*x};this.surveyPopup=function(width,height,link)
{options="menubar=no,width="+width+",height="+height+",toolbar=no,location=no,status=no,scrollbars=yes";window.open(link,'Title',options);this.close();};this.buildIframeCover=function(width,height,yoff,xoff)
{var iframe=document.createElement('iframe');iframe.style.border='none';iframe.width=width+'px';iframe.height=height+'px';iframe.style.position='absolute';iframe.style.top=yoff+'px';iframe.style.left=xoff+'px';iframe.frameBorder='0';iframe.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";iframe.src=this.options.imagePath+'/blank.html';return iframe;};this.isIE6=function()
{var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);return((version>=5.5)&&(version<7)&&(document.body.filters));};this.fixPNG=function(img,width,height)
{if(this.isIE6())
{var node=document.createElement('span');node.id=img.id;node.className=img.className;node.title=img.title;node.style.cssText=img.style.cssText;node.style.fontSize=0;node.onclick=img.onclick;node.style.setAttribute('filter',"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+img.src+"', sizingMethod='scale')");setTimeout(function()
{node.style.width=(width||img.width)+'px';node.style.height=(height||img.height)+'px';node.style.display='inline-block';node.style.setAttribute('filter',"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+img.src+"', sizingMethod='scale')");},100);return node;}
else
{return img;}};this.setCookie=function(n,v,d,dm){var e="";if(d){var f=new Date();f.setTime(f.getTime()+(d*86400000));var e="; expires="+f.toGMTString();}
var dmn='';if(dm&&(dm!=''))
dmn="domain="+dm;document.cookie=n+"="+v+e+"; path=/; "+dmn;};this.getCookie=function(n){var e=n+"=";var ca=document.cookie.split(';');for(var i=0,ilen=ca.length;i<ilen;i++)
{var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(e)==0)return c.substring(e.length,c.length);}
return null;};this.eraseCookie=function(n){this.setCookie(n,"",-1);};this.initialize();};