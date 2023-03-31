const prevIcon = '<div class="prev-slide rounded-circle"><i class="bi bi-chevron-left"></i></div>';
const nextIcon = '<div class="next-slide rounded-circle"><i class="bi bi-chevron-right"></i></div>';

$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 15,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2.3
            // items: 1.75 /* Optional */
        }
    }
})