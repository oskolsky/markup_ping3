$(function() {

  window.JST = {};

  window.JST['navigation'] = _.template($('#navigation').html());
  window.JST['name'] = _.template($('#name').html());

  var lang = new Lang();

  var currentLang = getCookie('lang');
  if (currentLang == null) {
    currentLang = 'RU';
  }

  $('#nav').html(JST['navigation'](lang.get(currentLang)));
  $('.name').html(JST['name'](lang.get(currentLang)));
  $('.lang_i.__current').text(currentLang);

  $('.lang').hover(function() {
    $('.lang_i').css('display', 'block');
  }, function() {
    $('.lang_i').css('display', 'none');
  });

  $('.lang_i').click(function() {
    var rel = $(this).attr('rel');
    $('.lang_i').css('display', 'none');
    $('.lang_i.__current').text(rel);
    setCookie('lang', rel, 'Mon, 01-Jan-2020 00:00:00 GMT', '/');
    $('#nav').html(JST['navigation'](lang.get(rel)));
    $('.name').html(JST['name'](lang.get(rel)));
  });

});

function setCookie (name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return(setStr);
}