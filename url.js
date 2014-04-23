var url = require('url');
var format = require('util').format;


/*

	var searchEingines = {
		"google" :"google.com[....]",
		"baidu" :"baidu.com",
		"360" :"so.com",
		"163（有道）" :"youdao.com",
		"soso(腾讯)" :"soso.com",
		"sogou(搜狗)" :"sogou.com",
		"aliyun(阿里搜索)" : "aliyun.com",
		"bing(微软)" : "bing.com"
	};

*/

/*
用来测试搜索引擎的路径
var string = "http://www.google.com.hk/#newwindow=1&q=%E6%88%91%E4%BB%AC%E7%9A%84%E5%A4%A7%E5%A4%A9%E6%9C%9D&safe=strict";
var string2 = "http://www.baidu.com/s?wd=%E5%93%88%E5%93%88&rsv_spt=1&issp=1&rsv_bp=0&ie=utf-8&tn=baiduhome_pg";
var string3 = "http://www.so.com/s?ie=utf-8&src=360sou_home&q=%E5%A4%A7%E5%A4%A9%E6%9C%9D";
var string4 = "http://www.youdao.com/search?q=%E5%A4%A7%E5%A4%A9%E6%9C%9D&ue=utf8&keyfrom=web.index";
var string5 = "http://www.soso.com/q?utf-8=ie&pid=s.idx&cid=s.idx.se&unc=&query=%E5%A4%A7%E5%A4%A9%E6%9C%9D&w=&sut=2506&sst0=1398237937781&lkt=0%2C0%2C0";
var string6 = "http://www.google.com.hk/#q=%E6%88%91%E4%BB%AC%E7%9A%84%E5%A4%A7%E5%A4%A9%E6%9C%9D";
var string7 = "http://www.youdao.com/search?q=%E5%93%88%E5%93%88&ue=utf8&keyfrom=web.index";
var string8 = "http://www.google.com.hk/#newwindow=1&q=%E6%88%91%E5%A4%A7%E5%A4%A9%E6%9C%9D+%E4%BD%A0%E6%87%82%E5%BE%97&safe=strict";
var string9 = "http://www.baidu.com/#wd=%E6%88%91%E5%A4%A7%20%2B%20%E5%A4%A9%E6%9C%9D%20aaa&ie=utf-8&tn=baiduhome_pg&f=8&rsv_bp=1&rsv_spt=1&rsv_sug3=11&rsv_sug4=664&rsv_sug1=4&rsv_sug2=0&inputT=1780&bs=%E6%88%91%E5%A4%A7%20%E5%A4%A9%E6%9C%9D%20aaa";

var string10 = "http://www.so.com/s?psid=c9d232ab4c241151ec06530ef6166a03&q=%E6%88%91%E6%89%93%E5%A4%A9%E6%9C%9D+dsa&pq=%E6%88%91%E6%89%93%E5%A4%A9%E6%9C%9D+dsa&src=srp&fr=360sou_home";
var string11 = "http://www.youdao.com/search?q=%E6%88%91%E5%A4%A7%E5%A4%A9%E6%9C%9D+%E4%BD%A0%E6%87%82%E5%BE%97+haha&lq=%E6%88%91%E5%A4%A7%E5%A4%A9%E6%9C%9D+%E4%BD%A0%E6%87%82%E5%BE%97&ue=utf8&T1=1398243436854&keyfrom=web.top";
var string12 = "http://www.youdao.com/search?q=%E6%88%91%E5%A4%A7%E5%A4%A9%E6%9C%9D+%E4%BD%A0%E6%87%82%E5%BE%97+haha+%2B&lq=%E6%88%91%E5%A4%A7%E5%A4%A9%E6%9C%9D+%E4%BD%A0%E6%87%82%E5%BE%97+haha&ue=utf8&T1=1398243509623&keyfrom=web.top";
var string13 = "http://www.soso.com/q?ie=utf-8&sc=web&pid=-s.idx.se&cid=s.idx.se&query=%E4%BD%A0%E6%98%AF+%E5%82%BB%E9%80%BC+%2B&w=&sut=696&sst0=1398243684479&lkt=1%2C1398243684300%2C1398243684300";
var string14 = "http://www.sogou.com/web?query=%E6%89%93%E5%A4%A9%E6%9C%9D+%E5%82%BB%E9%80%BC+%2B&ie=utf8&_ast=1398243968&_asf=null&w=01029901&p=40040100&dp=1&cid=null&sut=812&sst0=1398244378295&lkt=1%2C1398244377981%2C1398244377981";
var string15 = "http://www.sogou.com/web?query=%E6%89%93%E5%A4%A9%E6%9C%9D&ie=utf8&_ast=1398243968&_asf=null&w=01029901&p=40040100&dp=1&cid=null&sut=1594&sst0=1398244534613&lkt=0%2C0%2C0";
var string16 = "http://s.aliyun.com/s?q=%E4%BD%A0%E4%B8%AA%E5%82%BB%E9%80%BC+dad+%2B&bs=%E4%BD%A0%E4%B8%AA%E5%82%BB%E9%80%BC+dad&oq=%E4%BD%A0%E4%B8%AA%E5%82%BB%E9%80%BC+dad+%2B";
var string17 = "http://s.aliyun.com/s?q=%E4%BD%A0%E4%B8%AA%E5%82%BB%E9%80%BC&bs=%E4%BD%A0%E4%B8%AA%E5%82%BB%E9%80%BC+dad+%2B&oq=%E4%BD%A0%E4%B8%AA%E5%82%BB%E9%80%BC";
var string18 = "http://cn.bing.com/search?q=%E5%82%BB%E9%80%BC++%E7%9C%9F%E7%9A%84+%E5%93%88%E5%93%88&go=%E6%8F%90%E4%BA%A4&qs=n&form=QBRE&pq=%E5%82%BB%E9%80%BC+%E7%9C%9F%E7%9A%84+%E5%93%88%E5%93%88&sc=0-0&sp=-1&sk=&cvid=669d5a8683da4341be078edc0c4407b7";
var string19 = "http://www.google.com.hk/search?newwindow=1&safe=strict&q=%E5%9C%A8%E7%BA%BF%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F++%E5%95%8A%E5%95%8A&oq=%E5%9C%A8%E7%BA%BF%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F++%E5%95%8A%E5%95%8A&gs_l=serp.3...992753.994734.0.995724.4.4.0.0.0.0.0.0..0.0....0...1c.1j4.42.serp..4.0.0.UvNG-OQXRic";
var string20 = "http://www.google.com.hk/#newwindow=1&q=regexp+split+js&safe=strict";
var string21 = "http://www.baidu.com/#wd=%E5%A4%A7%E5%8E%A6%E6%AF%94%20%20%E7%99%BE%E5%BA%A6&ie=utf-8&tn=baiduhome_pg&f=8&rsv_bp=1&rsv_spt=1&rsv_sug3=25&rsv_sug4=1995&rsv_sug2=0&inputT=363&bs=%E5%A4%A7%E5%8E%A6%E6%AF%94%20%E7%99%BE%E5%BA%A6";

var string22 = "http://wap.soso.com/sweb/search.jsp?w=1747&key=%E4%BD%A0%E8%BF%99%E4%B8%AA+%E5%82%BB%E9%80%BC";
var string23 = "http://www.baidu.com/from=844b/s?word=%2570%253e%2545%2571%251e%2529%2571%251e%2529&st=11104i&ts=8370364&sa=ib&ms=1&ss=11&ix=121%25";
var string24 = "http://wap.sogou.com/web/searchList.jsp?uID=T0YxpqV5nBdbTTGj&v=5&w=1274&t=1398255221115&s_t=1398255232312&keyword=shshks+sjjsk&pg=webSearchList&s=";
*/

SearchEngineAndKey(string24);

function SearchEngineAndKey(str_url){
	//先获得搜索引擎的名称
	var urlObject = url.parse(str_url);

	var hostname = urlObject['hostname'];
	
	var key = new Key();	

	if(hostname.match(/google\.com/)){
	//如果是Google
		console.log('google');

		var query_re = /q\=([a-zA-Z0-9\%\+]+)/;
		//如果获取到了#
		if(urlObject['hash']){
		
			key.googleEngine(urlObject,query_re);
		}else{
			key.ownQueryMethod(urlObject,query_re);
		}
	}else if(hostname.match(/baidu.com/)){
	//如果是度娘
	//因为比较的丧心病狂，晚点处理!!!!
		console.log('baidu');

		//度娘对于+的处理，也会将其处理成%20
	
		//word对于度娘的抓机版会显示
		var query_re = /(?:wd|word)\=([a-zA-Z0-9\%]+)/;

		if(urlObject['hash']){
			key.googleEngine(urlObject,query_re,true);
		}else{
			key.ownQueryMethod(urlObject,query_re,true);
		}

	}else if(hostname.match(/youdao.com/)){
		console.log('163 有道');
		
		var query_re = /q\=([a-zA-Z0-9\%\+]+)/;
		key.ownQueryMethod(urlObject,query_re);
	}else if(hostname.match(/soso.com/)){
	//腾讯soso
		
		console.log('soso');
		
		//下面的正则表达式key是用在抓机版的soso里面的
		var query_re = /(?:query|key)\=([a-zA-Z0-9\%\+]+)/;
		key.ownQueryMethod(urlObject,query_re);
	}else if(hostname.match(/[^so]so\.com/)){
	//360
		console.log('360');
		var query_re = /q\=([a-zA-Z0-9\%\+]+)/;
		key.ownQueryMethod(urlObject,query_re);
	}else if(hostname.match(/sogou\.com/)){
	//搜狗

		console.log('搜狗');
		//搜狗也是，正则表达式的keyword用于抓机版
		var query_re = /(?:query|keyword)\=([a-zA-Z0-9\%\+]+)/;
		key.ownQueryMethod(urlObject,query_re);
	}else if(hostname.match(/aliyun.com/)){
	//阿里云
		console.log('阿里云');
		var query_re = /q\=([a-zA-Z0-9\%\+]+)/;
		key.ownQueryMethod(urlObject,query_re);	

	}else if(hostname.match(/bing.com/)){
	//巨硬
		console.log('巨硬');
		var query_re = /q\=([a-zA-Z0-9\%\+]+)/;
		key.ownQueryMethod(urlObject,query_re);
	}
}


function Key(){

	//分割多个条件
	function __splitKey(keyString){
		return keyString.split('+');
	}


	//转换成中文字符
	function __decodeForEach(arrays){
		
		
		for(var i=0;i<arrays.length;i++){
			arrays[i] = decodeURIComponent(arrays[i]);
		}
	}	

	//度娘异类
	function __splitForBaidu(keyString){
		//通过%20 空白来查找
		return keyString.split("%20");
	}

	//Google 异类使用HASH	
	function _googleEngine(urlObject,reg,useBase64){

		var hash = urlObject['hash'];		
		
		//google 搜索引擎是存放在hash当中的
		var match_arrays = reg.exec(hash);

		if(match_arrays){
		
			//因为会存在多个条件的，所以在decode之前，先将+提取出来，因为Google用+来连接多个条件	

			if(!useBase64){
				var query_arrays = __splitKey(match_arrays[1]);	
			}else{
				var query_arrays = __splitForBaidu(match_arrays[1]);
			}
			__decodeForEach(query_arrays);	
	
			console.log(format(query_arrays));
		
		}

	}

	//用来使用query的
	
	function _ownQueryMethod(urlObject,reg,useBase64){
		var query = urlObject['query'];
	
		var match_arrays = reg.exec(query);

		//因为可能会存在多个条件，所以在decode之前，先将+提取出来

		console.log(format(match_arrays));

		if(match_arrays){
		
			if(!useBase64){
				var query_arrays = __splitKey(match_arrays[1]);
			}else{
				var query_arrays = __splitForBaidu(match_arrays[1]);
			}
			__decodeForEach(query_arrays);
		
			console.log(format(query_arrays));
		}
	}
	
	return {
		googleEngine : _googleEngine,
		ownQueryMethod : _ownQueryMethod
	}
}
