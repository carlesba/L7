---
title: Marker
order: 3
---

Marker 地图标注 目前只支持2D dom标注


## 构造函数
Marker

`const Marker = new L7.Marker(option)`




#### option

- color        `string ` ![L7 Marker](https://gw.alipayobjects.com/zos/basement_prod/b10e0efd-8379-4b04-bcbb-5cfefaa0327f.svg)设置默认marker的颜色
- element    `Dom|string`    自定义marker Dom节点，可以是dom实例，也可以是dom id
- anchor     `string`  锚点位置  支持 center, top, top-left, top-right, bottom, bottom-left,bottom-                        right,left, right
- offset    `Array`  偏移量 [ 0, 0 ] 分别表示 X, Y 的偏移量


### 添加到Scene
```javascript
scene.addMarker(marker);
```

## 方法

#### setLnglat
设置marker经纬度位置

#### addTo
将marker添加到地图Scene

#### remove
移除marker

#### getElement
获取marker dom Element

#### getLngLat
获取marker经纬度坐标

#### togglePopup
开启或者关闭marker弹出框

#### setPopup
为marker设置popup

#### getPopup
获取marker弹出框


## 示例代码

#### 默认Marker
**<br />` const marker = new L7.Marker({color:'blue'})`


#### 自定义Marker

```javascript
var el = document.createElement('label');
       el.className = 'lableclass';
       el.textContent = data[i].v;
       el.style.background = getColor(data[i].v);
       new L7.Marker({
         element: el
       })
       .setLnglat([data[i].x * 1, data[i].y])
        .addTo(scene);
```


#### 设置 popup

```javascript
  var popup = new L7.Popup({
          anchor: 'left'
        }).setText(item.name);

new L7.Marker({
  element: el
}).setLnglat(item.coordinates)
  .setPopup(popup)
```

