
/**
 * =================基于google地图的旅行规划路径算法==================
 * 1.搜索旅游城市
 * 2.调用谷歌搜索API给出城市的suggestions
 * 3.可以添加多个城市
 * 4.点击搜索的时候开始添加生成这N个城市，并给每个城市进行编号
 * 5.对所有的N个城市生成完全图，并计算这N个城市之间的距离
 * 6.用Kruskal算法求出这N个城市的最小生成树
 * 7.去掉度大于2的城市节点间的边，并按从大到小的距离去掉，直到度不大于2(如果有优先级的顺序的话，之后再进行改进)
 * 8.获得度为1的叶子节点，获得这几个叶子节点的完美匹配
 * 9.获得旅行规划路径
 * 10.在地图上画出旅行规划路径并进行标注
 */

Array.prototype.in_array = function(e)
{
    for(var i=0;i<this.length && this[i]!=e;i++);
    return !(i==this.length);
}

// 城市对象
var CityNode = {};

CityNode.prototype = {
    // 城市集数组
    citySets: [],
    // 城市关系集数组
    cityRelationSets: [],
    // 最小生成树城市集
    mstCity: [],
    // 最小生成树城市关系集
    mstCityRelationSets: [],
    // 添加城市节点
    addNode: function(node){
        this.citySets.push(node);
    },
    // 添加城市之间的边
    addEdge: function(start, end, distance){
        this.cityRelationSets.push({start: start, end: end, distance: distance});
    },
    // 移除城市与城市之间的边
    removeEdge: function(start, end){
        var self = this;
        for(var i in self.cityRelationSets){
            if(self.cityRelationSets[i].start == start && self.cityRelationSets[i].end == end){
                self.cityRelationSets.splice(i, 1);
            }
        }
    },
    // 输出城市
    outputCity: function(){
        console.log("输出城市：");
        console.log(this.citySets);
    },
    // 输出城市之间的关系
    outputCityRelations: function(){
        console.log("输出城市之间的关系：");
        console.log(this.cityRelationSets);
    },
    // 按距离排序
    sortByDistance: function(){
       var self = this;
       // 根据距离的大小进行升序
       var arrObj = this.cityRelationSets.sort(function(a,b){
           return a.distance - b.distance;
       });
        console.log("排序后：");
        console.log(arrObj);
        return arrObj;
    },
    // 生成最小生成树
//    createTree: function(){
//        var self = this;
////        var mstCity = [];
////        var mstCityRelationSets = [];
//        for(var i in self.cityRelationSets){
//            //如果有城市节点没有在mstCity数组中，则添加路径，并将没有的城市添加到mstCity中去
//             /*if(!(mstCity.in_array(self.cityRelationSets[i].start)
//                 && mstCity.in_array(self.cityRelationSets[i].end))){
//                 mstCityRelationSets.push(self.cityRelationSets[i]);
//                 if(!mstCity.in_array(self.cityRelationSets[i].start)){
//                     mstCity.push(self.cityRelationSets[i].start);
//                 }
//                 if(!mstCity.in_array(self.cityRelationSets[i].end)){
//                     mstCity.push(self.cityRelationSets[i].end);
//                 }
//             }*/
//             // 如果城市节点不在mstCity中，或者没有形成闭环
//        }
//        console.log("mstCityRelationSets:");
//        console.log(mstCityRelationSets);
//        return mstCityRelationSets;
//    }
    // 构造最小生成树
    createMstTree: function(){
        var self = this;
        var start = -1,
            end = -1;
        for(var i in self.cityRelationSets){
           if(!self.mstCity){
               for(var forest in self.mstCity){
                   for(var node in self.mstCity[forest]){
                         if(self.mstCity.in_array(self.cityRelationSets[i].start)){
                             start = forest;
                         }
                         if(self.mstCity.in_array(self.cityRelationSets[i].start)){
                             end = forest;
                         }
                   }
               }
               // 此时证明start和end均在一个森林中，无须添加他们之间的边
               if(start==end && start!=-1){

               }
               // 此时证明可以在已有的森林进行添加start或end，并且添加他们之间的边
               if(start!=end && (start==-1 || end==-1)){
                  if(start!=-1){
                      self.mstCity[start].push()
                  }
               }
               // 此时证明两个节点可以组成一个森林
               if(start==end && start==-1){

               }
           }
        }
    },
    // 是否形成了闭环,判断之前的是否已经形成了一片森林
    isClosedLoop: function(){
       var self = this;

    },
    // 获取叶子节点
    getLeaveNode: function(){
       var self = this;

    },
    // 连接权最小叶子节点, 起点和终点不进行连接
    connectLeaveNode: function(){
        var self = this;

    }
}

/**

=================旅行商算法================
1.对原来的对象数组按照权值的大小按照从小到大的顺序进行排序
2.根据贪心算法进行添加边值
    1)两个节点都在同一个森林中:放弃添加边值
    2)两个节点分别在两个森林中:添加边值，合并两个森林
    3)两个节点只有一个在森林中，另外一个不在森林中:添加这个节点和边值到这个森林中去
    4)两个节点都不在森林中:为这两个节点添加一个森林
3.计算各个节点的度。先将各个节点的边值按权值从小到大的顺序进行排序，然后计算各个节点的度，
    删除度大于2的从大到小的排序之间的联系，将其置为-1
4.获取各个节点小于2的节点，并重新取得这些度为0或1之间的完全图，所对应的权值
5.当所有的节点度均为2的情况时，算法结束。否则跳转到步骤1

=================旅行商算法->路径规划算法============
1.定义一个函数，起到设定起点，设定终点的意思
2.定义一个函数，起到设定优先级的意思

*/



var city = CityNode.prototype;
/* 测试数据 */
city.addNode("北京");
city.addNode("长沙");
city.addNode("上海");
city.addNode("广东");
city.addEdge("北京", "长沙", 10);
city.addEdge("北京", "上海", 5);
city.addEdge("北京", "广东", 7);
city.addEdge("长沙", "上海", 6);
city.addEdge("长沙", "广东", 4);
city.addEdge("上海", "广东", 8);

city.outputCity();
city.outputCityRelations();

city.sortByDistance();















































// 