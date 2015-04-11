/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    size_li = $("#myList > li").size();
    x=1;
    $('#myList > li:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+1 <= size_li) ? x+1 : size_li;
        $('#myList > li:lt('+x+')').show();
    });
    $('#showLess').click(function () {
        x=(x-2<0) ? 1 : x-2;
        $('#myList > li').not(':lt('+x+')').hide();
    });
});


