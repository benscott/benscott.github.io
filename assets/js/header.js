/**
 * Created by bens3 on 24/05/15.
 */

$(function() {

    var $header = $('header')
    var height = ($header.hasClass('large-header') ? 300 : 100);
    var pattern = Trianglify({
        width: window.innerWidth,
        height: height,
        x_colors: $header.data('palette')
    });
    $header.append(pattern.canvas())
});