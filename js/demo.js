/*
 * ## 算法概述
 * 1. 用Kruskal或者Prim算法获得最小生成树
 * 2. 拆毁度大于2的
 * 3. 获得度为1的叶子节点
 * 4. 连接叶子节点
 *
 */

// 生成最小生成树

/***************************************************************************/
/* 城市间的距离信息：                                                      */
/*           北京  天津  武汉  深圳  长沙  成都  杭州  西安  拉萨  南昌    */
/*           (0)   (1)   (2)   (3)   (4)   (5)   (6)   (7)   (8)   (9)     */
/*  北京(0)   0    118   1272  2567  1653  2097  1425  1177  3947  1574    */
/*  天津(1)  118    0    1253  2511  1633  2077  1369  1157  3961  1518    */
/*  武汉(2)  1272  1253   0    1462  380   1490  821   856   3660  385     */
/*  深圳(3)  2567  2511  1462   0    922   2335  1562  2165  3995  933     */
/*  长沙(4)  1653  1633  380   922    0    1700  1041  1135  3870  456     */
/*  成都(5)  2097  2077  1490  2335  1700   0    2311  920   2170  1920    */
/*  杭州(6)  1425  1369  821   1562  1041  2311   0    1420  4290  626     */
/*  西安(7)  1177  1157  856   2165  1135  920   1420   0    2870  1290    */
/*  拉萨(8)  3947  3961  3660  3995  3870  2170  4290  2870   0    4090    */
/*  南昌(9)  1574  1518  385   993   456   1920  626   1290  4090   0      */
/***************************************************************************/

// 城市间距离的二维表
/*
 var distanceArr = [
 [0,118,1272,2567,1653,2097,1425,1177,3947,1574],
 [118,0,1253,2511,1633,2077,1369,1157,3961,1518],
 [1272,1253,0,1462,380,1490,821,856,3660,385],
 [2567,2511,1462,0,922,2335,1562,2165,3995,933],
 [1653,1633,380,922,0,1700,1041,1135,3870,456],
 [2097,2077,1490,2335,1700,0,2311,920,2170,1920],
 [1425,1369,821,1562,1041,2311,0,1420,4290,626],
 [1177,1157,856,2165,1135,920,1420,0,2870,1290],
 [3947,3961,3660,3995,3870,2170,4290,2870,0,4090],
 [1574,1518,385,993,456,1920,626,1290,4090,0]
 ];

 function sortArr(arr){

 }

 // Kruskal算法找出最小生成树
 function kruskalCal(){

 }

 // 寻找度为1的节点
 function greedyRoute(arr){
 // 将二维数组里面以对角线为分隔线的右边的值
 var oneArr = [];
 for(var i in arr){
 for(var j in arr[i]){
 if(j > i){
 oneArr.push(arr[i][j]);
 }
 }
 }
 console.log(oneArr);
 }

 // 解析一维数组中对应二维数组的位置
 function oneToTwoArr(arr, i, cnt){

 }

 // 生成城市编号
 var cityCnt = 0;
 function City(){
 return cityCnt++;
 }

 var city = new City();

 function cityNode(start, end, distance){
 this.start = start;
 this.end = end;
 this.distance = distance;
 }

 var node = new cityNode(1,2,3);
 console.log(node);
 */

/**
 * 谷歌搜索api调用
 * https://maps.googleapis.com/maps/api/place/autocomplete/json?input="厦门"&sensor=false&key=AIzaSyBJeZAeODWfLv4XWUmLINM35pL8ADwZ_gY&language=zh_cn
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */