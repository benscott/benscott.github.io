/**
 * Created by bens3 on 24/05/15.
 */

// PuBuGn
// YlOrRd
// YlGnBu
// YlOrRd


$(function() {
    var $header = $('header')
    var height = ($header.hasClass('large-header') ? 300 : 100);
    var pattern = Trianglify({
        width: window.innerWidth,
        height: height,
        x_colors: $header.data('color') || 'YlGnBu'
    });
    $header.append(pattern.canvas())
});