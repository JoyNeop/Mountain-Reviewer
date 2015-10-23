(function () {
	var processText = function (inputText) {
		var tmp = inputText;

		// Correct typos
		var typoDict = [
			// Electronic devices
			[ /Mac/ig, 'Mac' ],
			[ /Mac\s?Book/ig, 'MacBook' ],
			[ /Mac\s?Book\s?Pro/ig , 'MacBook Pro' ],
			[ /Mac\s?Book\s?Air/ig , 'MacBook Air' ],
			[ /Mac\s?Pro/ig , 'Mac Pro' ],
			[ /iMac/ig , 'iMac' ],
			[ /iPod/ig , 'iPod' ],
			[ /iPod\s?touch/ig , 'iPod $1' ],
			[ /iPod\s?nano/ig , 'iPod $1' ],
			[ /iPod\s?shuffle/ig , 'iPod $1' ],
			[ /iPod\s?classic/ig , 'iPod $1' ],
			[ /iPad/ig , 'iPad' ],
			[ /iPhone/ig , 'iPhone' ],
			[ /iPhone\s?(\d*)/ig , 'iPhone $1' ],
			[ /iPhone\s?(\d*)\s?s/ig , 'iPhone $1s' ],
			[ /iPhone\s?(\d*)\s?Plus/ig , 'iPhone $1 Plus' ],
			[ /iPhone\s?(\d*)\s?s\s?Plus/ig , 'iPhone $1s Plus' ],
			[ /Surface\s?Book/ig , 'Surface Book' ],
			[ /Surface\s?Pro/ig , 'Surface Pro' ],
			[ /Surface\s?Pro\s?(\d)/ig , 'Surface Pro $1' ],
			// Softwares
			[ /OS\s?X/ig , 'OS X' ],
			[ /Windows/ig , 'Windows' ],
			[ /Android/ig , 'Android' ],
			[ /Linux/ig , 'Linux' ],
			[ /Photo\s?shop/ig , 'Photoshop' ],
			[ /Piexlmator/ig , 'Piexlmator' ],
			[ /Win\s?(\d*?)/ig , 'Windows $1' ],
			[ /Windows\s?(\d*?)/ig , 'Windows $1' ],
			[ /Safari/ig , 'Safari' ],
			[ /Chrome/ig , 'Chrome' ],
			[ /Firefox/ig , 'Firefox' ],
			[ /Opera/ig , 'Opera' ],
			[ /iTunes/ig , 'iTunes' ],
			[ /App\s?Store/ig , 'App Store' ],
			[ /Shadow\s?socks/ig , 'Shadowsocks' ],
			[ /GoAgent(X|)/ig , 'GoAgent$1' ],
			// Websites and Services
			[ /Twitter/ig, 'Twitter'],
			[ /Facebook/ig, 'Facebook'],
			[ /Quora/ig, 'Quora'],
			[ /Instagram/ig, 'Instagram'],
			[ /Google/ig, 'Google'],
			[ /You\s?Tube/ig, 'YouTube'],
			[ /Wikipedia/ig, 'Wikipedia'],
			// Programming Languages
			[ /JavaScript/ig, 'JavaScript' ],
			[ /Python/ig, 'Python' ],
			[ /Perl/ig, 'Perl' ],
			[ /Ruby/ig, 'Ruby' ],
			[ /Lisp/ig, 'Lisp' ],
			[ /Prolog/ig, 'Prolog' ],
			[ /Haskell/ig, 'Haskell' ],
			// Misc
			[ /CPU/ig, 'CPU' ],
			[ /PDF/ig, 'PDF' ]
		];
		typoDict.forEach(function (v) {
			tmp = tmp.replace(v[0], v[1]);
		});

		// Add spaces between CJK and Latin
		tmp = tmp.replace(/([^\w\s])(\w)/ig, '$1 $2').replace(/(\w)([^\w\s\.\;\/\@])/ig, '$1 $2').replace(/  /g, ' ').replace(/(（|）|，|、|。|；|：)\s(\w)/, '$1 $2').replace(/(\w)\s(（|）|，|、|。|；|：)/, '$1 $2').replace(/\s*？$/, '？').replace(/\?$/, '？');

		// All done
		return tmp;
	};

	document.querySelectorAll('.zu-edit-button')[1].click();
	document.querySelectorAll('.zm-editable-editor-input')[0].value = processText(document.querySelectorAll('.zm-editable-editor-input')[0].value);
	document.getElementsByTagName("select")[0].options[0].value = "共创没有 typo 的知乎";
	document.querySelectorAll('.zg-r3px.zg-btn-blue')[0].click();

	// Add comment
	document.querySelectorAll('.toggle-comment.meta-item')[0].click();
	setTimeout(function(){
		document.querySelectorAll('.zm-comment-editable.editable')[0].innerHTML = '已修正问题标题中的拼写错误并在 CJK 与西文之间加了空格。使用 https://github.com/joyneop/mountain-reviewer 自动调整。（beta）<br>（自动评论）';
		document.querySelectorAll('.zm-comment-form.zm-comment-box-ft .zg-right.zg-btn-blue')[0].click()
	}, 1200);
})();
