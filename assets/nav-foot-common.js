var current = document.getElementById("current").innerHTML;

document.getElementById("current").innerHTML =
'<style>'+'#'+ current +'{background-color: #16a5b5; color:white;}'+'</style>';



document.getElementById("nav").innerHTML =
'<input type="checkbox" id="check">'
+'<label for="check" class="checkbtn noselect">'
+  '&#x2630;'
+'</label>'
+'<label class="logo">'
+  '<a href="/"><img src="/assets/logo/qtrino.ico" alt="icon"></a>'
+  '<span> Qtrino</span>'
+'</label>'
+'<ul id="">'
+  '<li><a id="home" href="/">Home</a></li>'
+  '<li><a id="product" href="/product.html">Products</a></li>'
+  '<li><a id="blog" href="/blog.html">Blogs</a></li>'
+  '<li><a class="social" href="https://www.facebook.com/qtrino"><img src="/assets/logo/fb.png" alt="fb"></a></li>'
+  '<li><a class="social" href="https://www.instagram.com/_qtrino"><img src="/assets/logo/instra.png" alt="instra"></a></li>'
+  '<li><a class="social" href="https://twitter.com/qtrino1"><img src="/assets/logo/twit.png" alt="twitter"></a></li>'
+  '<li><a style="padding-right:0;" class="social" href="https://www.youtube.com/channel/UCSSmITU7-0-qr6D9xqlQMVA?sub_confirmation=1"><img src="/assets/logo/qtube.png" alt="youtube"></a></li>'
+'</ul>';

document.getElementById("foot").innerHTML =
'<div class="help">'
+  '<h3>Help</h3>'
+  '<a class="contact" href="/help/contact.html">Contact</a>'
+  '<a href="/help/privacy.html">Privacy Policy</a>'
+  '<a href="/help/sitemap.html">Sitemap</a>'
+'</div>'
+'<div class="services">'
+  '<h3>Services</h3>'
+  '<a href="/product.html">Products</a>'
+  '<a href="/blog.html">Blogs</a>'
+'</div>'
+'<div class="web-links">'
+  '<h3>Web Links</h3>'
+  '<a href="https://www.qtrino.com">qtrino.com</a>'
+'</div>'
+'<div class="about">'
+  '<h3>About Us</h3>'
+ '<p>'
+ 'Qtrino brings you amazing contents on science and technology'
+ '. Read more <a href="/help/about-us.html">about us..</a>'
+ '</p>'
+'</div>';



var d = new Date();
var year = d.getFullYear();
var m = d.toDateString();
var month = m;
document.title
document.getElementById("copyright").innerHTML =
'© Copyright Brand - All Rights Reserved '
+'['+year+']';

var x= document.title;
document.title = x + ' ['+month+ ']';

document.getElementById("gotop").innerHTML =
'<a href="#top">'
+'Back to top'
+' &#8679;'
+"</a>";
