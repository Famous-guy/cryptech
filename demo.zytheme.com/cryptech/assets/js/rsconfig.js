// Rs Slider In home-agency-3.html & home-corporate-5.html 
jQuery(document).ready(function() {
    "use strict";
    jQuery("#slider1").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "fullscreen",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "zeus",
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "vertical",
                h_align: "left",
                v_align: "center",
                space: 10,
                h_offset: 50,
                v_offset: 0,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: false,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [1240, 1024, 778, 320],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [700, 768, 600, 620],

    });
});
 
// Rs Slider In home-agency-3.html & home-corporate-5.html 
jQuery(document).ready(function() {
    "use strict";
    jQuery("#slider2").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "fullwidth",
		 fullScreenOffset: '30%',
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "rs-dots",
                enable: false,
                hide_onmobile: true,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "center",
                space: 10,
                h_offset: 0,
                v_offset: 310,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: false,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
		 responsiveLevels: [1240, 990, 778, 480],
		gridwidth:[1240, 990, 778, 320],
        gridheight: [700, 768, 600, 620],

    });
});
// Rs Slider In home-agency-3.html & home-corporate-5.html 
jQuery(document).ready(function() {
    "use strict";
    jQuery("#slider3").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "auto",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "rs-dots",
                enable: false,
                hide_onmobile: true,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "center",
                space: 10,
                h_offset: 0,
                v_offset: 310,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
		 responsiveLevels: [1240, 1024, 778, 480],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [700, 768, 600, 620],

    });
});
// Rs Slider In home-agency-3.html & home-corporate-5.html 
jQuery(document).ready(function() {
    "use strict";
    jQuery("#sliderApp").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "auto",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "rs-dots",
                enable: false,
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "center",
                space: 10,
                h_offset: 0,
                v_offset: 310,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: false,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
		 responsiveLevels: [1240, 1024, 778, 480],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [700, 768, 600, 620],

    });
});

 


// Rs Slider In home-advisor
jQuery(document).ready(function() {
    "use strict";
    jQuery("#slider4").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "fullwidth",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        minHeight: 500,
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "zeus",
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "vertical",
                h_align: "left",
                v_align: "center",
                space: 10,
                h_offset: 50,
                v_offset: 0,
                tmp: ''
            },
            arrows: {
                style: "ares rs-arrows",
                enable: false,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-img-over"></div> 	<div class="tp-arr-imgholder"></div></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [1240, 1024, 778, 320],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [700, 768, 600, 900],

    });
});
  

jQuery(document).ready(function () {
    "use strict";
    var revapi4,
        tpj;

    (function () {
        if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
        else onLoad();

        function onLoad() {
            if (tpj === undefined) {
                tpj = jQuery;
                if ("off" == "on") tpj.noConflict();
            }
            if (tpj("#slider11").revolution == undefined) {
                revslider_showDoubleJqueryError("#slider11");
            } else {
                revapi4 = tpj("#slider11").show().revolution({
                    sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9000,
                    minHeight: 500,

                    /* basic navigation arrows and bullets */
                    navigation: {
                        keyboardNavigation: "off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "on",
                        bullets: {
                            style: "rs-dots",
                            enable: false,
                            hide_onmobile: true,
                            hide_onleave: false,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "center",
                            space: 10,
                            h_offset: 0,
                            v_offset: 310,
                            tmp: ''
                        },
                        arrows: {
                            style: "ares rs-arrows",
                            enable: true,
                            hide_onmobile: false,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 50,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 50,
                                v_offset: 0
                            }
                        }
                    },
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [868, 768, 960, 720],
                    lazyType: "none",
                    parallax: {
                        type: "mouse",
                        origo: "enterpoint",
                        speed: 400,
                        speedbg: 0,
                        speedls: 0,
                        levels: [2, 3, 5, 10, 15, 20, 25, 30, 35, 40, 47, 48, 49, 50, 51, 55],
                    },
                    shadow: 0,
                    spinner: "spinner0",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar: "on",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        disableFocusListener: false,
                    }
                });
            }; /* END OF revapi call */
        }; /* END OF ON LOAD FUNCTION */
    }()); /* END OF WRAPPING FUNCTION */
});
 		