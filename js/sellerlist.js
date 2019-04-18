var baseUrl = 'http://127.0.0.1'
//var baseUrl = 'http://pidmee.natappfree.cc'

function Post(url, data, cb) {}

function Get(url, cb) {
  $.ajax({
    url: baseUrl + url,
    type: 'GET',
    success: cb,
    xhrFields: {
      withCredentials: true
    },
    error: function(xhr, errType, err) {
      console.error(err)
      alert(xhr.status + ":" + "!!!")
    }
  })
}

Get('/emotionClassing/fenci',function(res) {
    const data = res.extend
    alert(data);
    // const bnsCategory = data.bnsCategory

    // var str = '';
    // str = '<li class="on">' + bnsCategory[0] +'</li>';
    // $('#Category').append(str);

    // var strlist = '';
    // strlist = '<div class="content" style="display: block;"><ul id="'+ bnsCategory[0] +'"></ul></div>';
    // $('#shoplist').append(strlist);

    // for(var i=1;i<bnsCategory.length;i++) {
    //     var str = '';
    //     str = '<li>' + bnsCategory[i] +'</li>';
    //     $('#Category').append(str);

    //     var strlist = '';
    //     strlist = '<div class="content"><ul id="'+ bnsCategory[i] +'"></ul></div>';
    //     $('#shoplist').append(strlist);
    // }

    // function Getbnsid(str) {
    //     var strs = str.split("_"); 
    //     //alert(strs[1]);
    //     return strs[1];
    // }

    // Get('/emotionClassing/fenci', function(res) {
    //     const data = res.extend
    //     const businesses = data.businesses
    //     for(var i=0;i<businesses.length;i++) {
    //         var str = '';
    //         var strimg = '', strdis = '', strname = '';

    //         strimg = '<img src="'+ businesses[i].bnsHeadimg +'" class="photo">';
    //         strdis = '<p style="top: 0.06rem; right: 0.2rem; color:#ff824d;"><span style="font-size: 0.24rem;">' + businesses[i].bnsDiscount + '</span>折</p>';
    //         strname = '<h3 class="shopname">' + businesses[i].bnsName + '</h3>' + '<p style="left: 1.12rem;" class="shopaddress">地址：' + businesses[i].bnsAddress + '</p>';
    //         str = '<li class="toshopinfo_'+i+'">' + strimg + strdis + strname +'</li>';


    //         for(var k = 0;k<bnsCategory.length;k++) {
    //             if(businesses[i].bnsCategory == bnsCategory[k]) {
    //             $('#'+ bnsCategory[k] +'').append(str);}
    //         }
            

    //         //$('#'+ bnsCategory[0] +'').append(str);

    //         var urlid;
    //         urlid = businesses[i].bnsId;

    //         $('.toshopinfo_'+i).on('click',function() {
    //             var j = Getbnsid(this.className)
    //             window.location.href = ('./sellerinfo.html?bnsId='+ businesses[j].bnsId)
    //         })
    //     }

    // })

    // var tab = document.getElementById('tabs');
    // var tabli = tab.getElementsByTagName('li');
    // //alert(tabli.length);
    // var shop = document.getElementById('shoplist');
    // var shopcontent = shop.getElementsByTagName('div');
    // for(var i=0;i<tabli.length;i++) {
    //     tabli[i].index=i;

    //     tabli[i].onclick = function() {
    //         for(var j=0;j<tabli.length;j++) {
    //             tabli[j].className = '';
    //             shopcontent[j].style.display = 'none';
    //         }

    //         this.className = 'on';
    //         shopcontent[this.index].style.display = 'block';
    //     }
    // }
})