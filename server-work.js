var MNrep = function (x) {
var re = x;
// A
re = re.replace(/AJAX/ig,'AJAX');
re = re.replace(/Aperture/ig,'Aperture');
re = re.replace(/App Store/ig,'App Store');
re = re.replace(/Android/ig,'Android');
// B
// C
re = re.replace(/Chrome/ig,'Chrome');
// D
// E
re = re.replace(/Evernote/ig,'Evernote');
// F
re = re.replace(/Facebook/ig,'Facebook');
re = re.replace(/Final Cut Pro/ig,'Final Cut Pro');
re = re.replace(/Final Cut/ig,'Final Cut');
re = re.replace(/Firefox/ig,'Firefox');
// G
re = re.replace(/GNU/ig,'GNU');
re = re.replace(/Google/ig,'Google');
re = re.replace(/GarageBand/ig,'GarageBand');
re = re.replace(/GitHub/ig,'GitHub');
re = re.replace(/GoAgentX/ig,'GoAgentX');
re = re.replace(/GoAgent/ig,'GoAgent');
// H
// I
re = re.replace(/Instagram/ig,'Instagram');
re = re.replace(/IFTTT/ig,'IFTTT');
re = re.replace(/iTunes Store/ig,'iTunes Store');
re = re.replace(/iTunes/ig,'iTunes');
re = re.replace(/iCloud/ig,'iCloud');
re = re.replace(/iMac/ig,'iMac');
re = re.replace(/iPhoto/ig,'iPhoto');
re = re.replace(/iMovie/ig,'iMovie');
re = re.replace(/iOS/ig,'iOS');
re = re.replace(/iPad/ig,'iPad');
re = re.replace(/iPhone/ig,'iPhone');
re = re.replace(/iPhone4/ig,'iPhone 4');
re = re.replace(/iPhone 4s/ig,'iPhone 4s');
re = re.replace(/iPhone4s/ig,'iPhone 4s');
re = re.replace(/iPhone5/ig,'iPhone 5');
re = re.replace(/iPhone 5s/ig,'iPhone 5s');
re = re.replace(/iPhone5s/ig,'iPhone 5s');
re = re.replace(/iPod/ig,'iPod');
re = re.replace(/itouch/ig,'iPod touch');
re = re.replace(/iPod touch/ig,'iPod touch');
re = re.replace(/iPod nano/ig,'iPod nano');
re = re.replace(/iPod classic/ig,'iPod classic');
re = re.replace(/iPod shuffle/ig,'iPod shuffle');
re = re.replace(/iPod/ig,'iPod');
// J
re = re.replace(/JavaScript/ig,'JavaScript');
re = re.replace(/Java/ig,'Java');
re = re.replace(/jQuery/ig,'jQuery');
// K
// L
re = re.replace(/Linux/ig,'Linux');
re = re.replace(/Logic Pro/ig,'Logic Pro');
re = re.replace(/Logic Pro X/ig,'Logic Pro X');
// M
re = re.replace(/MacBook Air/ig,'MacBook Air');
re = re.replace(/MacBookAir/ig,'MacBook Air');
re = re.replace(/MacBook Pro/ig,'MacBook Pro');
re = re.replace(/MacBookPro/ig,'MacBook Pro');
re = re.replace(/MacBook/ig,'MacBook');
re = re.replace(/Mac Pro/ig,'Mac Pro');
re = re.replace(/MacPro/ig,'Mac Pro');
re = re.replace(/Mac mini/ig,'Mac mini');
re = re.replace(/Macmini/ig,'Mac mini');
re = re.replace(/Mac App Store/ig,'Mac App Store');
re = re.replace(/Mac/ig,'Mac');
re = re.replace(/Mac Book/ig,'MacBook');
re = re.replace(/Mac Air/ig,'MacBook Air');
// N
// O
re = re.replace(/OS X/ig,'OS X');
re = re.replace(/OSX/ig,'OS X');
re = re.replace(/OmniFocus/ig,'OmniFocus');
re = re.replace(/Opera/ig,'Opera');
// P
re = re.replace(/Python/ig,'Python');
re = re.replace(/Perl/ig,'Perl');
re = re.replace(/PDF/ig,'PDF');
re = re.replace(/Photoshop/ig,'Photoshop');
re = re.replace(/Pixelmator/ig,'Pixelmator');
// Q
re = re.replace(/Quora/ig,'Quora');
// R
re = re.replace(/Retina display/ig,'Retina display');
re = re.replace(/Ruby/ig,'Ruby');
// S
re = re.replace(/Safari/ig,'Safari');
// T
re = re.replace(/ThinkPad/ig,'ThinkPad');
re = re.replace(/Twitter/ig,'Twitter');
// U
// V
// W
re = re.replace(/WordPress/ig,'WordPress');
re = re.replace(/Wi-Fi/ig,'Wi-Fi');
re = re.replace(/WiFi/ig,'Wi-Fi');
re = re.replace(/WLAN/ig,'WLAN');
// X
// Y
re = re.replace(/YouTube/ig,'YouTube');
// Z

// CJK
re = re.replace(/国内/ig,'中国');
return re;
};

var http = require('http');
http.createServer(function(req, res){
	var title = decodeURI(require('url').parse(req.url, true).pathname.slice(1));
	title = MNrep(title);
	if (title.split("")[title.length-1] != "？") {
		title = title + "？";
	};
	res.writeHead(200, {'Content-type' : 'text/plain', 'Access-Control-Allow-Origin' : '*'});
	res.end(title);
}).listen(8012, 'mountain-reviewer.joyneop.com');