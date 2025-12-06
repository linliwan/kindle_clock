var api_locParams = "q=Nantong";
var api_appId = "404f9e50d254b230661194dabb52b700";
var api_lang = "zh_cn";
var api_units = "metric";

var api_params = null;

// refresh time in miliseconds (default 30 mins)
var refreshTime = 30 * 60 * 1000;

// Browser in kindle paperwhite doesn't support rotation.
// You can override with this parameter 'll' and 'lr' for landscape left/right, 'up' for upside down.
//var rotation = "ll";

// You can set night mode,
// "auto" - by sunrise and sunset,
// "HH-HH - like: ""22-06", from 22:00 to 06:00
// "on" - night mode all the day :)
var night_mode = "off";

// Timezone offset - kindle doesnt report correct local time to the kindle (always it is GMT),
// You can set custom GMT offset, in format "+08:00".
// You may need to set it again after winter/summer time change.
// Null is default
var utcOffset = null;

var cityNameDB = {
  Beijing: "北京",
  Shanghai: "上海",
  Tianjin: "天津",
  Chongqing: "重庆",
  Guangzhou: "广州",
  Shenzhen: "深圳",
  Zhuhai: "珠海",
  Shantou: "汕头",
  Foshan: "佛山",
  Dongguan: "东莞",
  Zhongshan: "中山",
  Nanning: "南宁",
  Guilin: "桂林",
  Haikou: "海口",
  Sanya: "三亚",
  Shijiazhuang: "石家庄",
  Tangshan: "唐山",
  Qinhuangdao: "秦皇岛",
  Taiyuan: "太原",
  Datong: "大同",
  Hohhot: "呼和浩特",
  Baotou: "包头",
  Shenyang: "沈阳",
  Dalian: "大连",
  Changchun: "长春",
  Harbin: "哈尔滨",
  Nanjing: "南京",
  Wuxi: "无锡",
  Xuzhou: "徐州",
  Changzhou: "常州",
  Suzhou: "苏州",
  Nantong: "南通",
  Yangzhou: "扬州",
  Hangzhou: "杭州",
  Ningbo: "宁波",
  Wenzhou: "温州",
  Jiaxing: "嘉兴",
  Shaoxing: "绍兴",
  Jinhua: "金华",
  Hefei: "合肥",
  Fuzhou: "福州",
  Xiamen: "厦门",
  Quanzhou: "泉州",
  Nanchang: "南昌",
  Jinan: "济南",
  Qingdao: "青岛",
  Yantai: "烟台",
  Weifang: "潍坊",
  Zhengzhou: "郑州",
  Luoyang: "洛阳",
  Wuhan: "武汉",
  Yichang: "宜昌",
  Changsha: "长沙",
  Chengdu: "成都",
  Mianyang: "绵阳",
  Guiyang: "贵阳",
  Kunming: "昆明",
  Lijiang: "丽江",
  Lhasa: "拉萨",
  Xian: "西安",
  Lanzhou: "兰州",
  Xining: "西宁",
  Yinchuan: "银川",
  Urumqi: "乌鲁木齐",
  HongKong: "香港",
  Macau: "澳门",
  Taipei: "台北",
};
