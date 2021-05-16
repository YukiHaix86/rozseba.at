
function scrollToDest (name, offset = 0) {
    var scrollOffset = $(name).offset()
    $('body,html').animate({
      scrollTop: scrollOffset.top - offset
    })
  };

$('#scroll_down').on('click', function () {
    scrollToDest('#content-inner')
  })

$('#scroll_about').on('click', function () {
    scrollToDest('#content-inner')
})

$('#scroll_projects').on('click', function () {
  scrollToDest('#content-inner')
})