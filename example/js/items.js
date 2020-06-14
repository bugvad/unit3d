// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   {
      "name" : "Закрытая дверь",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "category" : "7",
      "type" : "7"
    }, 
    {
      "name" : "Открытая дверь",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "category" : "7",
      "type" : "7"
    }, 
    {
      "name" : "Окно",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "category" : "9",
      "type" : "3"
    }, 
    {
      "name" : "Стул",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "models/js/gus-churchchair-whiteoak.js",
      "category" : "3",
      "type" : "1"
    }, 
    {
      "name" : "Красное кресло",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_tn-orange.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "category" : "2",
      "type" : "1"
    },
    {
      "name" : "Синее кресло",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "models/js/ik-ekero-blue_baked.js",
      "category" : "2",
      "type" : "1"
    },
    {
      "name" : "Комод темный",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "models/js/DWR_MATERA_DRESSER2.js",
      "category" : "6",
      "type" : "1"
    }, 
    {
      "name" : "Комод белый",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_img25o.jpg",
      "model" : "models/js/we-narrow6white_baked.js",
      "category" : "6",
      "type" : "1"
    },  
    {
      "name" : "Прикроватный столик светлый",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "models/js/bd-shalebedside-smoke_baked.js",
      "category" : "4",
      "type" : "1"
    }, 
    {
      "name" : "Тумбочка светлая",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "models/js/cb-archnight-white_baked.js",
      "category" : "8",
      "type" : "1"
    }, 
    {
      "name" : "Гардероб светлый",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model" : "models/js/ik-kivine_baked.js",
      "category" : "6",
      "type" : "1"
    }, 
    {
      "name" : "Кровать",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "models/js/ik_nordli_full.js",
      "category" : "5",
      "type" : "1"
    }, 
    {
      "name" : "Книжная полка",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "models/js/cb-kendallbookcasewalnut_baked.js",
      "category" : "6",
      "type" : "1"
    }, 
        {
      "name" : "Медиаконсоль светлая",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "models/js/cb-clapboard_baked.js",
      "category" : "8",
      "type" : "1"
    }, 
        {
      "name" : "Медиаконсоль темная",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model" : "models/js/cb-moore_baked.js",
      "category" : "8",
      "type" : "1"
    }, 
    //    {
    //   "name" : "Диван оливковый",
    //   "price": 8000,
    //   "image" : "models/thumbnails/thumbnail_img21o.jpg",
    //   "model" : "models/js/we-crosby2piece-greenbaked.js",
    //   "category" : "1",
    //   "type" : "1"
    // }, 
    {
      "name" : "Диван серый",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "models/js/cb-rochelle-gray_baked.js",
      "category" : "1",
      "type" : "1"
    }, 
        {
      "name" : "Деревянный сундук",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "models/js/cb-tecs_baked.js",
      "category" : "8",
      "type" : "1"
    }, 
        {
      "name" : "Торшер",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_ore-white.png",
      "model" : "models/js/ore-3legged-white_baked.js",
      "category" : "10",
      "type" : "1"
    },
    {
      "name" : "Журнальный столик",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "models/js/ik-stockholmcoffee-brown.js",
      "category" : "4",
      "type" : "1"
    }, 
    {
      "name" : "Столик",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "models/js/GUSossingtonendtable.js",
      "category" : "4",
      "type" : "1"
    }, 
    {
      "name" : "Обеденный стол",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
      "model" : "models/js/cb-scholartable_baked.js",
      "category" : "4",
      "type" : "1"
    }, 
    {
      "name" : "Обеденный стол",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "models/js/BlakeAvenuejoshuatreecheftable.js",
      "category" : "4",
      "type" : "1"
    },
    {
      "name" : "Синий коврик",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "models/js/cb-blue-block-60x96.js",
      "category" : "11",
      "type" : "8"
    },
    {
      "name" : "Нью-Йорк постер",
      "price": 8000,
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "category" : "11",
      "type" : "2"
    }
   /*     
   {
      "name" : "",
      "price": 8000,
      "image" : "",
      "model" : "",
      "category" : "1",
      "type" : "1"
    }, 
    */
  ]

  

  //запись элементов в JSON

  var jsonText = JSON.stringify(items);


  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var item_price = (item.price) ? (item.price + ' p.') : '';

    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img src="' +
                item.image + 
                '" alt="Add Item"> '+ '<div id="wrapper"> <div id="first">' + item.name + '</div> <div id="second">' + item_price + '</div> </div>' + 
                '</a></div>';
    itemsDiv.append(html);
  }

  var categoryAmount = 11;

  for (var q = 1; q < categoryAmount + 1; q++) {

    var itemsDivDoor = $("#items-wrapper-" + q);

    for (var k = 0; k < items.length; k++) {
      var item = items[k];
      if (item.category == q.toString())
      {
        var item_price = (item.price) ? (item.price + ' p.') : '';

        var htmlDoor = '<div class="col-sm-4">' +
                  '<a class="thumbnail add-item" model-name="' + 
                  item.name + 
                  '" model-url="' +
                  item.model +
                  '" model-type="' +
                  item.type + 
                  '"><img src="' +
                  item.image + 
                  '" alt="Add Item"> '+ '<div id="wrapper"> <div id="first">' + item.name + '</div> <div id="second">' + item_price + '</div> </div>' + 
                  '</a></div>';
        itemsDivDoor.append(htmlDoor);
      }
    }
  }

  // var itemsDivSC = $("#items-wrapper-sc");
  // for (var k = 0; k < items.length; k++) {
  //   var item = items[k];
  //   if (item.type == "7")
  //   {
  //     var item_price = (item.price) ? (item.price + ' p.') : '';
      
  //     var htmlDoor = '<div class="col-sm-4">' +
  //               '<a class="thumbnail add-item" model-name="' + 
  //               item.name + 
  //               '" model-url="' +
  //               item.model +
  //               '" model-type="' +
  //               item.type + 
  //               '"><img src="' +
  //               item.image + 
  //               '" alt="Add Item"> '+ '<div id="wrapper"> <div id="first">' + item.name + '</div> <div id="second">' + item_price + '</div> </div>' + 
  //               '</a></div>';
  //     itemsDivDoor.append(htmlDoor);
  //   }
  // }

// $("#items-wrapper-7").append('Привет');

});


