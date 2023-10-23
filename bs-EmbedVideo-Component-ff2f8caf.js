define("@widget/LAYOUT/bs-EmbedVideo-Component-ff2f8caf.js",["exports","~/c/bs-dataAids"],(function(e,a){"use strict";const{XS_MAX:t}=(global.Core||guac["@wsb/guac-widget-core"]).constants.breakpoints,{DISPLAY:o}=(global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes,l=e=>{const{video:l,videoStyle:r,videoEmbed:c,videoHeight:g,videoWidth:d,showMobileVideo:i,renderMode:s}=e,{vimeoId:n,hashcode:u}=c,p=u&&`h=${u}&`||"",b=c.thumbnail.replace(/ *_[^.]* */g,""),m=l?.alt,[E,w]=(global.React||guac.react).useState({}),[y]=(global.React||guac.react).useState((global._||guac.lodash).uniqueId("embed-iframe-")),h={posterImage:{position:"relative",margin:"0 auto",...r,height:"100%",display:"none",padding:0,borderWidth:0,"@xs-only":{display:i?"none":"block"}},embedBackground:{background:`url(${b}) center/cover`,width:"100%",height:"100%",filter:"blur(90px)"},embedBgWrapper:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},embedWrapper:{height:"100%",pointerEvents:"none","@xs-only":{display:i?"block":"none"}}},f=g>d,R=(d/g).toFixed(3),v=(global.React||guac.react).useCallback((()=>{if(s===o)return;const e=document.getElementById(y),a=e&&e.closest('[data-ux="Wrapper"]'),{width:l=0,height:r=0}=a?a.getBoundingClientRect():{};if(0===l||0===r)return setTimeout((()=>v()),1e3);const c=a&&!!a.closest('[data-aid="DESKTOP_RENDER_CONTAINER"]'),g=l/r,d=g>R?(g/R).toFixed(3):(R/g).toFixed(3);w({transform:`scale(${f&&(l>t||c)?1:d})`})}),[y,f,R,s]);return(global.React||guac.react).useEffect((()=>{v()}),[v]),(global.React||guac.react).useEffect((()=>{const e=document.getElementById(y),a=e.closest('[data-ux="Wrapper"]');if(window.ResizeObserver&&a&&e){new ResizeObserver((()=>{window.requestAnimationFrame(v)})).observe(a)}}),[y,v]),(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,b&&(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,f&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:h.embedBgWrapper},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:h.embedBackground,"data-aid":a.D.HEADER_VIDEO_BACKGROUND})),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Image,{src:b,style:h.posterImage,alt:m,"data-aid":a.D.HEADER_VIDEO_EMBED_FILL_POSTER})),n&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:h.embedWrapper},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Embed,{id:y,src:`https://player.vimeo.com/video/${n}?${p}autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0`,frameBorder:"0",allow:"autoplay; fullscreen",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowFullScreen:!0,loading:"lazy",title:m,"data-aid":a.D.HEADER_VIDEO_EMBED,style:E})))};l.propTypes={video:(global.PropTypes||guac["prop-types"]).object,videoStyle:(global.PropTypes||guac["prop-types"]).object,videoEmbed:(global.PropTypes||guac["prop-types"]).object,videoHeight:(global.PropTypes||guac["prop-types"]).number,videoWidth:(global.PropTypes||guac["prop-types"]).number,showMobileVideo:(global.PropTypes||guac["prop-types"]).bool,renderMode:(global.PropTypes||guac["prop-types"]).string},e.default=l,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-EmbedVideo-Component-ff2f8caf.js.map
