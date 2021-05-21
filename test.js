function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const getRTParameter = (scripts) => {
  for (let i = 0; i < scripts.length; i++) {
    const src = scripts[i].src;
    const rt = getParameterByName('rt', src);
    if (rt) {
      return rt;
    }
  }
};

var scripts = document.getElementsByTagName('script');
var rt = getRTParameter(scripts);

// var style = `<link rel="stylesheet" href="https://testdrivenow.io/script/testdrive.css">`;
var style = `<link rel="stylesheet" href="test.css">`;
var urlMaster = `https://testdrivenow-sandy.vercel.app/?rt=${rt}`;
var fontcss = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
var floatbutton = `<button href="#"  onclick="show()" class="floatbutton" id="tdn-float-btn"></button>`;
{
  /* <a href="#" onclick="hide('popup2')"><i class="fa fa-times closebutton"></i></a> */
}
var custpopup = `
<div class="popup" id="popup2">
  <a href="#" onclick="hide()" class="close-btn-container"><i class="fa fa-times-thin fa-2x closebutton"></i></a>
  <div id="iframe_container">
  <iframe class ="myiframe" src=${urlMaster} name="ifr" scrolling="yes" frameborder="0"></iframe>
  </div>
</div>
`;

var template = style + fontcss + floatbutton + custpopup;
var render = function (template, node) {
  node.innerHTML = template;
};

var show = function () {
  let doc = document.getElementById('popup2');
  doc.style.display = 'block';
  let tdnFloatBtn = document.getElementById('tdn-float-btn');
  tdnFloatBtn.style.display = 'none';
};
var hide = function () {
  let doc = document.getElementById('popup2');
  doc.style.display = 'none';
  let tdnFloatBtn = document.getElementById('tdn-float-btn');
  tdnFloatBtn.style.display = 'block';
};

let buttonDiv = document.createElement('div');
buttonDiv.innerHTML = template;
buttonDiv.setAttribute(
  'style',
  'position:absolute;top:5px;z-index:9999999998;width:98%;height:98%'
);
document.querySelector('body').appendChild(buttonDiv);
