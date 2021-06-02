window.onload=function(){
	/* JS highlights by https://github.com/kyleplo/minilight */!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):"undefined"!=typeof exports?t(exports):t(e.microlight={})}(this,function(e){var t,n,i,o=window,r=document,a="appendChild",l="test",s=["#222","#f50","#000","#356","#e80","#599","#930","#4af","#888","#6f6","#6f6"],c=function(e){for(n=r.getElementsByClassName(e||"minilight"),t=0;i=n[t++];)for(var o,c,d,u,f,h=i.textContent,m=0,g=h[0],p=1,y=i.innerHTML="",b=0;c=o,o=b<7&&"\\"==o?1:p;){if(p=g,g=h[++m],u=y.length>1,!p||b>8&&"\n"==p||[/\S/[l](p),1,1,!/[$\w]/[l](p),("/"==o||"\n"==o)&&u,'"'==o&&u,"'"==o&&u,h[m-4]+c+o=="--\x3e",c+o=="*/"][b])for(y&&(i[a](f=r.createElement("span")).setAttribute("style","color:"+s[/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/[l](y)?2:b]),f[a](r.createTextNode(y))),d=b&&b<7?b:d,y="",b=11;![1,/[\/{}[(\-+*=<>:;|\\.,?!&@~]/[l](p),/[\])]/[l](p),/[a-zA-Z0-9\ \.\:\;\,\?\!\-\_\t\r\náàâãÁÀÂÃéèêẽÉÈÊẼíìîĨóòôõÓÒÔÕúùûũÚÙÛŨüçÇ\°\ª\º\#\$\@\%\¢\&\*\=\§\/\+\(\)\[\]\{\}]/[l](p),"/"==p&&d<2&&"<"!=o,'"'==p,"'"==p,p+g+h[m+1]+h[m+2]=="\x3c!--",p+g=="/*",p+g=="//","#"==p][--b];);y+=p}};e.reset=c,"complete"==r.readyState?c():o.addEventListener("load",function(){c()},0)});



	document.getElementById('oflinks').innerHTML=
			'<select id="sellinks">'+
				'<option value="-1" selected>Canais oficiais</option>'+

				'<optgroup label="Oficial">'+
				'	<option value="https://www.htmly.com/">HTMLy site oficial</option>'+
				'	<option value="https://www.htmly.com/blog/">HTMLy Blog</option>'+
				'	<option value="https://docs.htmly.com/">HTMLy Documentação</option>'+
				'	<option value="https://github.com/danpros/htmly">HTMLy Github</option>'+
			    '</optgroup>'+

				'<optgroup label="Social">'+
				'	<option value="https://twitter.com/gohtmly">@goHTMLy Twitter</option>'+
				'	<option value="https://www.facebook.com/gohtmly">@goHTMLy Facebook</option>'+
			    '</optgroup>'+
				
				'<optgroup label="Dev">'+				
				'	<option value="http://www.danpros.com/">Blog DanPros (en)</option>'+
				'	<option value="https://twitter.com/danpros">DanPros Twitter</option>'+
				'	<option value="https://github.com/danpros">DanPros Github</option>'+				
				'	<option value="https://www.danlogs.com/">Blog Danlogs (ind)</option>'+
			    '</optgroup>'+
			'</select>';


	document.getElementById('contractdev').innerHTML=
		'<small>Quer me contratar? Estou no <a href="https://www.workana.com/freelancer/d27c4eee9b3e51201ccc812ee1e9b026">Workana</a> ou se preferir no <a href="https://www.instagram.com/fabianosantosnet/">Instagram</a>. Caso tenha interesse em ajudar <a href="https://git.fabianosantos.net/doar">aceito doações</a>.</small>';
	
	document.getElementById('sellinks').onchange = function()
	{
		if(this.value != -1)
	   		window.open(this.value,'_blank');
	}

}
