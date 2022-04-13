function swapActiveImage() {
    let active = document.getElementsByClassName('active')[0];
    let index = parseInt(active.id.replace('image-', ''));
    let nextIndex = index === 3 ? 1 : (index + 1);
    
    $(`#image-${index}`).removeClass('active');
    $(`#image-${index}`).addClass('inactive');
    $(`#image-${nextIndex}`).addClass('active');
    $(`#image-${nextIndex}`).removeClass('inactive');
    
    // move to right of active pic
    let $inactiveImage = $(`#active-image > #image-${index}`);
    $inactiveImage.parent().after($inactiveImage);

    // move into active span
    $(`#image-${nextIndex}`).prependTo('#active-image');

    // move to left of active pic
    let thirdIndex = index + nextIndex === 3 ? 3 : Math.abs(nextIndex - index);
    $(`#image-${thirdIndex}`).insertBefore($('#active-image'));
}

window.setInterval(swapActiveImage, 5000);