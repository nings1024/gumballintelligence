try {
  auto();
} catch (e) {
  console.log("请开启无障碍服务");
}
auto.waitFor();

var photo_path = "/sdcard/agum/";

var 地点 = images.read(photo_path + "d.jpg");
var 怪物 = images.read(photo_path + "g.jpg");
var 商人 = images.read(photo_path + "s.jpg");
var 派遣 = images.read(photo_path + "pq.jpg");
var 剿灭 = images.read(photo_path + "jm.jpg");
var 查看 = images.read(photo_path + "ck.jpg");
var 神秘商 = images.read(photo_path + "神秘商人.jpg");
var 舰队指令 = images.read(photo_path + "舰队指令.png");
var 撤回战队 = images.read(photo_path + "撤回战队.png");
var 地点处理函数映射 = {
  劫掠者营地: 劫掠者营地,
  移动魔法商店: 移动魔法商店,
  地下监狱: 地下监狱,
  战争要塞: 战争要塞,
  奇迹之泉: 奇迹之泉,
  受伤的王虫: 受伤的王虫,
  能量精炼厂: 能量精炼厂,
  幽暗洞穴: 幽暗洞穴,
  野兽祭坛: 野兽祭坛,
  巨兽的残骸: 巨兽的残骸,
  混沌仪: 混沌仪,
  古怪的大门: 古怪的大门,
  生物研究所: 生物研究所,
  深海漩涡: 深海漩涡,
  破损的信号杆: 破损的信号杆,
  未知的装置: 未知的装置,
  损坏的战舰: 损坏的战舰,
  隐秘的空间站: 隐秘的空间站,
  机械研究所: 机械研究所,
  梦幻码头: 梦幻码头,
  神秘商人: 神秘商人,
};
var 映射机 = {
  移功阿法商鷹: "移动魔法商店",
  意演的信号押: "破损的信号杆",
  深海流满: "深海漩涡",
  生物研究所: "生物研究所",

};
var 可能的地点 = "";

var inx = false;
var isred = false;
var isbattle = false;
function click_p(pic) {
  var cap = captureScreen();
  var p = findImage(cap, pic);
  if (p) {
    click(p.x + 20, p.y + 2);
    return p;
  } else {
  }
}

function 获取情报() {
  isbattle = false;
  click(85, 2090);
  sleep(1000);
  click(253, 397);
  sleep(1000);
  click_p(查看);
  sleep(1000);
  click(531, 1184);
  sleep(1000);
  click(576, 1638);
}
function 获取怪物() {
  sleep(1000);
  var cap = captureScreen();
  var p = findImage(cap, 怪物);
  if (p) {
    toastLog("找到怪物");
    click(p.x, p.y);
    sleep(800);
    click(567, 1582);
    sleep(800);
    click(363, 1358);
    sleep(1000);
    click(738, 1449);
    sleep(3000);
    click_p(剿灭);
    sleep(800);
    click(232, 2287);
    sleep(1300);
    click(551, 354);
    sleep(500);
    click(360, 1638);
    return true;
  } else {
    toastLog("未找到怪物");
    return false;
  }
}
function 获取地点() {
  可能的地点 = "";
  isred = false;
  var cap = captureScreen();
  var p = findImage(cap, 地点);
  if (p) {
    var a = images.pixel(cap, p.x, p.y);
    click(p.x, p.y);
    sleep(800);
    click(567, 1582);
    sleep(500);
    click(363, 1358);
    sleep(1200);
    console.log(a);
    if (a > -8000000) {
      sleep(500);
      click(243, 2282);
      sleep(800);
      click(361, 1338);
      sleep(800);
      click(879, 2284);
      sleep(800);
      click(879, 2284);
      isred = true;
      return true;
    }
    ocr地点();
    click(738, 1449);
    sleep(3000);
    // 判断是否在X星球
    inx = false;
    if (checkpoint()) {
      inx = true;
    } else {
      var p = click_p(派遣);
      sleep(1500);
      click(518, 429);
      sleep(5500);
      click(403, 405);
      sleep(800);
      click(p.x + 20, p.y + 5);
    }
    sleep(800);
    click(232, 2287);
    sleep(800);
    click(631, 822);
    sleep(2000);
    return true;
  } else {
    toastLog("未找到地点");
    return false;
  }
}

function 获取商人() {
  var cap = captureScreen();
  var p = findImage(cap, 商人);
  if (p) {
    可能的地点 = "神秘商人";
    click(p.x, p.y);
    sleep(500);
    click(567, 1582);
    sleep(500);
    click(363, 1358);
    sleep(900);
    click(738, 1449);
    sleep(3000);
    // 判断是否在X星球
    inx = false;
    if (checkpoint()) {
      inx = true;
    } else {
      var p = click_p(派遣);
      sleep(1800);
      click(518, 373);
      sleep(5500);
      click(403, 422);
      sleep(800);
      click(p.x + 20, p.y + 5);
    }
    sleep(800);
    click(232, 2287);
    sleep(800);
    click(631, 822);
    sleep(2000);
    return true;
  } else {
    toastLog("未找到地点");
    return false;
  }
}

function checkpoint() {
  var cap = captureScreen();
  var p = findImage(cap, 查看);
  if (p) {
    toastLog("在X星球");
    click(p.x + 20, p.y + 5);
    sleep(1000);
    return true;
  } else {
    toastLog("不在X星球");
    return false;
  }
}

function 处理地点() {
  var cap = captureScreen();
  path=photo_path + "" + 可能的地点 + ".jpg"
  if (files.exists(path)){
    console.log("处理可能的地点: " + 可能的地点);
    地点名称=可能的地点;
    var img = images.read(photo_path + "" + 地点名称 + ".jpg");
      var p = findImage(cap, img);
      if (p) {
        img.recycle();
        toastLog("找到地点: " + 地点名称);
        click(p.x + 20, p.y + 5);
        sleep(1000);
        地点处理函数映射[地点名称](p);
        return true;
      }
      img.recycle();
  } else {
    for (var 地点名称 in 地点处理函数映射) {
      var img = images.read(photo_path + "" + 地点名称 + ".jpg");
      if (!img) {
        toastLog("未找到图片: " + 地点名称);
        continue;
      }
      var p = findImage(cap, img);
      if (p) {
        img.recycle();
        toastLog("找到地点: " + 地点名称);
        click(p.x + 20, p.y + 5);
        sleep(1000);
        地点处理函数映射[地点名称](p);
        return true;
      }
      img.recycle();
    }
  }

  return false;
}
function 离开地点() {
  if (inx) {
    while (true) {
      if (click_p(舰队指令)) {
        sleep(1000);
        click(891, 2287);
        sleep(1000);
        break;
      }
      click(891, 2287);
      sleep(1000);
    }
  } else {
    while (true) {
      if (click_p(撤回战队)) {
        sleep(1000);
        break;
      }
      if (click_p(舰队指令)) {
        sleep(2000);
        continue;
      }
      click(891, 2287);
      sleep(1000);
    }
    sleep(1000);
  }
}

function 劫掠者营地(p) {
  sleep(1000);
  click(660, 1465);
  sleep(1000);
  click(625, 1250);
  sleep(1000);
  click(237, 2268);
  sleep(1000);
  click(337, 1650);
  sleep(1300);
  click(907, 2278);
  sleep(1000);
  click(565, 1431);
  sleep(1000);
  click(565, 1431);
  sleep(1000);
  click(565, 1431);
  sleep(1000);
  click(565, 1431);
  sleep(1000);
  sleep(500);
  click(223, 2276);
  sleep(1000);
  isbattle = true;
}
function 移动魔法商店(p) {
  sleep(1000);
  click(571, 1189);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}

function 地下监狱(p) {
  sleep(1000);
  click(567, 1393);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 战争要塞(p) {
  sleep(1000);
  click(567, 1393);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 奇迹之泉(p) {
  sleep(1000);
  click(574, 1475);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 受伤的王虫(p) {
  sleep(1000);
  click(574, 1475);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 能量精炼厂(p) {
  sleep(1000);
  click(574, 1178);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 幽暗洞穴(p) {
  sleep(1000);
  click(574, 1148);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 野兽祭坛(p) {
  sleep(1000);
  click(574, 1477);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 巨兽的残骸(p) {
  sleep(1000);
  click(574, 1456);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 混沌仪(p) {
  sleep(1000);
  click(574, 1477);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 古怪的大门(p) {
  sleep(1000);
  click(574, 1270);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 生物研究所(p) {
  sleep(1000);
  click(574, 1395);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 深海漩涡(p) {
  sleep(1000);
  click(574, 1161);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 破损的信号杆(p) {
  sleep(1000);
  click(574, 1283);
  sleep(1000);
  click(574, 1270);
  sleep(1000);
  click(222, 2284);
  sleep(1000);
  click(337, 1650);
  sleep(1000);
  click(863, 2278);
  sleep(1000);
  click(565, 1431);
  sleep(500);
  click(565, 1431);
  sleep(500);
  click(565, 1431);
  sleep(1000);
  click(222, 2284);
  sleep(1500);
  isbattle = true;
}
function 未知的装置(p) {
  sleep(1000);
  click(574, 1370);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 损坏的战舰(p) {
  sleep(1000);
  click(574, 1250);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 隐秘的空间站(p) {
  sleep(1000);
  click(574, 1552);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 机械研究所(p) {
  sleep(1000);
  click(574, 1288);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}
function 梦幻码头(p) {
  sleep(1000);
  click(574, 1578);
  sleep(1000);
  sleep(1000);
  click(571, 1432);
}

function 神秘商人(p) {
  sleep(1000);
  click(574, 1235);

  sleep(1000);
  click(294, 1038);
  sleep(500);
  click(574, 1429);

  sleep(1000);
  click(557, 1038);
  sleep(500);
  click(574, 1429);

  sleep(1000);
  click(820, 1038);
  sleep(500);
  click(574, 1429);

  sleep(1000);
  click(294, 1337);
  sleep(500);
  click(574, 1429);

  sleep(1000);
  click(557, 1337);
  sleep(500);
  click(574, 1429);

  sleep(1000);
  click(928, 2281);

  sleep(1000);
  click_p(神秘商);
  sleep(1000);
  click(561, 1404);
  sleep(1000);
  click(561, 1362);
  sleep(1000);
  click(223, 2276);
  sleep(1000);
  click(359, 1632);
  sleep(1000);
  click(909, 2297);
  sleep(200);
  click(909, 2297);
  sleep(200);
  click(909, 2297);
  sleep(200);
  click(909, 2297);

  sleep(500);
  click(570, 1440);
  sleep(500);
  click(570, 1440);
  sleep(500);
  click(570, 1440);
  sleep(1000);
  click(570, 1440);

  sleep(1000);
  click(223, 2276);
  sleep(1000);
  isbattle = true;
}

function ocr地点() {
  var screen = captureScreen();
  screen = images.clip(screen, 266, 840, 500, 80);
  screen=images.interval(screen, "#ef9f58", 20);
  images.save(screen, "/sdcard/Pictures/ocr地点.jpg");
  var a = ocr(screen)[0];
  console.log("识别的地点: " + a);
  可能的地点 = 映射机[a];
  console.log("可能的地点: " + 可能的地点);
  if (!可能的地点) {
    可能的地点=a
  }
}

function main() {
  0;
  while (true) {
    获取情报();
    if (获取怪物()) {
      sleep(5000);
      continue;
    }
    if (!获取地点()) {
      获取商人();
    }
    if (isred) {
      continue;
    }
    if (处理地点()) {
      离开地点();
      sleep(5000);
      continue;
    }

    break;
  }
}
// main()

function 获取地点1() {
  isred = false;
  var cap = captureScreen();
  var p = findImage(cap, 地点);
  if (p) {
    var a = images.pixel(cap, p.x, p.y);
    click(p.x, p.y);
  }
}
main();
// ocr地点();