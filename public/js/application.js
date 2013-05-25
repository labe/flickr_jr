$(document).ready(function() {
  $('#upload button[name="add_file"]').on('click', function(e) {
    e.preventDefault();
    var uploadTotal = $('#upload input[type="file"]').length;
    $('#upload input[type="file"]').last().after(newPhoto(uploadTotal));
  });

  $('#upload input[type="submit"]').on('click', function(e) {
    e.preventDefault();
    $(this).css("background-color", "green");
    $(this).html("BURNINATE THE QUARTER MILE");
    $(this).animate({
      width: '300px'
    },500);
    $(this).on('click', function() {
      $('#upload').submit();
      // alert('tofu bacon!!');
    });
  });

  var totalPhotos = $('li').length;
  var position = 0;
  var width = parseInt($('.container').css('width'));
  $('.frames').css('width', '' + totalPhotos * 100 + '%');
  $('.frames > li').css('width', '' + 100 / totalPhotos + '%');
    $(document).on('keyup', function(e) {
      if (e.which ==  37) {
      position = position + width;
      if (position == width) {
        position = -(($('li').length - 1) * width);
      }
      $('li').animate({left:position},500);
    }
      if (e.which == 39) {
      position = position - width;
      if (position == -(width * ($('li').length))) {
        position = 0;
      }
      $('li').animate({left:position},500);
    }
  });
});

function newPhoto(x) {
  string = '<input type="file" name="image'+(x+1)+'"><br />';
  return string;
}
