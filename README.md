tracePlan
=========

Multi-destination travel plan based on google maps


=================基于google地图的旅行规划路径算法==================
1.搜索旅游城市
2.调用谷歌搜索API给出城市的suggestions
3.可以添加多个城市
4.点击搜索的时候开始添加生成这N个城市，并给每个城市进行编号
5.对所有的N个城市生成完全图，并计算这N个城市之间的距离
6.用Kruskal算法求出这N个城市的最小生成树
7.去掉度大于2的城市节点间的边，并按从大到小的距离去掉，直到度不大于2(如果有优先级的顺序的话，之后再进行改进)
8.获得度为1的叶子节点，获得这几个叶子节点的完美匹配
9.获得旅行规划路径
10.在地图上画出旅行规划路径并进行标注

https://maps.googleapis.com/maps/api/place/autocomplete/json?input="厦门"&types=(cities)&language=zh_CN&key=AIzaSyBJeZAeODWfLv4XWUmLINM35pL8ADwZ_gY&sensor=false

https://maps.googleapis.com/maps/api/place/queryautocomplete/json?&key=AIzaSyBJeZAeODWfLv4XWUmLINM35pL8ADwZ_gY&types=(cities)&sensor=false&input=xiamen&language=zh_CN


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