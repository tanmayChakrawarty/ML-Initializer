"use strict";!function(e,o){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?o(e,!0):function(e){if(!e.document)throw new Error("A window with a document is required");return o(e)}:o(e)}("undefined"!=typeof window?window:this,function(e,o){function t(o){function t(){d.loadDelay?setTimeout(n,loadDelay):n()}function n(){if(!document.querySelector(d.templateSelector)){var e=document.createElement("div");e.innerHTML=r();var o=e.querySelector("style"),t=e.querySelector(d.templateSelector);document.body.appendChild(o),document.body.appendChild(t)}for(var n=document.querySelector(d.templateSelector).innerHTML,a=document.querySelectorAll("pre>code.hljs"),l=0;l<a.length;l++){var i=a[l];if(!i.querySelector(".code-badge")){for(var s="",p=0;p<i.classList.length;p++){var u=i.classList[p];if("language-"===u.substr(0,9)){s=i.classList[p].replace("language-","");break}if("lang-"===u.substr(0,5)){s=i.classList[p].replace("lang-","");break}if(!s)for(var g=0;g<i.classList.length;g++)if("hljs"!=i.classList[g]){s=i.classList[g];break}}"ps"==(s=s?s.toLowerCase():"text")?s="powershell":"cs"==s?s="csharp":"js"==s?s="javascript":"ts"==s?s="typescript":"fox"==s&&(s="foxpro");var m=n.replace("{{language}}",s).replace("{{copyIconClass}}",d.copyIconClass).trim(),y=document.createElement("div");y.innerHTML=m,y=y.querySelector(".code-badge");var f=i.parentElement;f.classList.add("code-badge-pre"),d.copyIconContent&&(y.querySelector(".code-badge-copy-icon").innerText=d.copyIconContent),f.insertBefore(y,i)}}document.querySelector(d.contentSelector).addEventListener("click",function(e){return e.srcElement.classList.contains("code-badge-copy-icon")&&(e.preventDefault(),e.cancelBubble=!0,c(e)),!1})}function c(o){var t=o.srcElement.parentElement.parentElement.parentElement,n=t.querySelector("pre>code"),c=n.innerText;d.onBeforeCodeCopied&&(c=d.onBeforeCodeCopied(c,n));var r=document.createElement("textarea");r.value=c.trim(),document.body.appendChild(r),r.style.display="block",e.document.documentMode?r.setSelectionRange(0,r.value.length):r.select(),document.execCommand("copy"),document.body.removeChild(r),a(t)}function a(e){var o=d.copyIconClass.split(" "),t=d.checkIconClass.split(" "),n=e.querySelector(".code-badge-copy-icon");n.innerText=d.checkIconContent;for(c=0;c<o.length;c++)n.classList.remove(o[c]);for(var c=0;c<t.length;c++)n.classList.add(t[c]);setTimeout(function(){n.innerText=d.copyIconContent;for(e=0;e<t.length;e++)n.classList.remove(t[e]);for(var e=0;e<o.length;e++)n.classList.add(o[e])},2e3)}function r(){for(var e=["<style>","@media print {","   .code-badge { display: none; }","}","    .code-badge-pre {","        position: relative;","    }","    .code-badge {","        display: flex;","        flex-direction: row;","        white-space: normal;","        background: transparent;","        background: #4b8bbe;","        color: white;","        font-size: 0.875em;","        opacity: 0.8;","        transition: opacity linear 0.1s;","        border-radius: 0 0 0 7px;","        padding: 5px 8px 5px 8px;","        position: absolute;","        right: 0;","        top: 0;","    }","    .code-badge.active {","        opacity: 0.8;","    }","","    .code-badge:hover {","        opacity: 1.0;","    }","","    .code-badge a,","    .code-badge a:hover {","        text-decoration: none;","    }","","    .code-badge-language {","        margin-right: 10px;","        font-weight: 600;","        color: white;","    }","    .code-badge-copy-icon {","        font-size: 1.2em;","        cursor: pointer;","        padding: 0 7px;","        margin-top:2;","    }","    .fa.text-success:{ color: limegreen !important }","</style>",'<div id="CodeBadgeTemplate" style="display:none">','    <div class="code-badge">','        <div class="code-badge-language" >{{language}}</div>','        <div  title="Copy to clipboard">','            <i class="{{copyIconClass}} code-badge-copy-icon"></i></i></a>',"        </div>","     </div>","</div>"],o="",t=0;t<e.length;t++)o+=e[t]+"\n";return o}var d={templateSelector:"#CodeBadgeTemplate",contentSelector:"body",loadDelay:0,copyIconClass:"fa fa-copy",copyIconContent:"",checkIconClass:"fa fa-check text-success",checkIconContent:"",onBeforeCodeCopied:null};!function(e){Object.assign(d,e),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()}(o)}if("boolean"!=typeof n)var n=!1;e.highlightJsBadge=t,e.module&&e.module.exports&&(e.module.exports.highlightJsBadge=t),n&&t()});
