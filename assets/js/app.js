
var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};
// var keepFooter = function(documentHasScroll){
//     if (!document.getElementById("layout-footer")){
//         return;
//     }
//
//     if(documentHasScroll){
//         document.getElementById("layout-footer").classList.remove('fixed-bottom');
//     }else{
//         document.getElementById("layout-footer").classList.add('fixed-bottom');
//     }
// }



$(document).ready(function() {
	var headerNavbar = $('#headerNavbar');
	var width100 = $('.width100');
	var innerWidth = $('body').innerWidth();
	headerNavbar.width(innerWidth);
	width100.width(innerWidth);


    /*
     * Partners accorion behaviour
    **/
    $('.full-description-toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);
        var $parentDiv = $this.closest('.member-card');
        var $shortDescription = $parentDiv.find('.member-description');
        var $fullDescription = $parentDiv.find('.institution-full');
        var $toggleText = $this.find('.toggle-text');

        var readMoreText = $this.data('read-more');
        var hideText = $this.data('hide');

        $shortDescription.toggle('slow', function() {
            //animation complete
        });
        $fullDescription.toggle('slow', function() {
            if ($fullDescription.is(':visible')) {
                $toggleText.text(hideText);
            } else {
                $toggleText.text(readMoreText);
            }
        });

        $this.toggleClass('toggled');
    });

	$('body').on('click', '.work_packages .accordion-toggle, .messages .accordion-toggle', function () {
		if ($(this).next(".accordion-content").is(':visible')) {
			$(this).next(".accordion-content").slideUp(300);
			$(this).children(".plusminus").addClass('plus');
			$(this).children(".plusminus").removeClass('minus');
		} else {
			$(this).next(".accordion-content").slideDown(300);
			$(this).children(".plusminus").removeClass('plus');
			$(this).children(".plusminus").addClass('minus');
		}
	});

	$('.nav.nav-pills').removeAttr('id');

    $('#menuToggle').on('click', function() {
        hideSearchForm();
    });

	$('.contact_info .card-body .body, .insider-info .card-body .body').each(function(){
		var countParagraphs = $(this).find('p').length;
		if(countParagraphs > 1) {
			$(this).find('p').first().append('<div class="dorsal">Read more</div>');
			$(this).find('p:not(:first)').wrapAll("<div class='toogle-contact-paragraphs'></div>")
		}
	});

    $('.category-tabs-container a').click(function() {
        $('.category-tabs-container a').removeClass('active');
        $(this).addClass('active');
    });

    // $('.news_column').attr({
    //     'data-aos' : 'fade-up',
    //     'data-aos-duration': '400',
    //     'data-aos-anchor-placement':"center-bottom"

    //     // 'data-aos-delay': '100'
    // });


    // window.innerWidth <= 1024 ? $('.search-btn-responsive').css('visibility', 'visible') : $('.search-responsive').css('visibility', 'hidden');

    var responsiveSearch = $('.search-btn-responsive');
    window.innerWidth <= 1024 ? responsiveSearch.css('display', 'unset') : responsiveSearch.css('display', 'none');

    // Handle the back to top arrow
    const backToTopButton = $('.toTheTop');
    const bottomScale = 0.9;
    
    var heigts = {
        newsHeader: $('.display-1').outerHeight(),
        headerImageBar: $('#headernavbar').outerHeight(),
        categoriesFilter: $('.category-tabs-container').outerHeight()
    }
    var topOffset = heigts.headerImageBar + heigts.newsHeader + heigts.categoriesFilter;
    var footer = $('#layout-footer');

    function adjustButtonPosition() {
        var scrollDistance = $(window).scrollTop();
        var footerPosition = footer.offset().top - $(window).height();
        if (scrollDistance > topOffset) {
            backToTopButton.fadeIn();
    
            if (scrollDistance < footerPosition) {
                backToTopButton.removeClass('sticky').css('bottom', '');
            } else {
                var bottomPosition =  footerPosition * bottomScale;
                backToTopButton.addClass('sticky').css('bottom', - bottomPosition + 'px');
            }
        } else {
            backToTopButton.fadeOut().removeClass('sticky').css('bottom', '');
        }
    }

    adjustButtonPosition();

    $(window).scroll(adjustButtonPosition);
    
    backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    
    var newsReadMore = $('.news .content').find('.dorsal');
    if(newsReadMore.length){
        newsReadMore.nextAll('p').wrapAll("<div class='toogle-contact-paragraphs'></div>")
    }


	$('.dorsal').click(function () {
		var link = $(this);
		link.parent().parent().find('.toogle-contact-paragraphs').slideToggle('slow', function() {
			if ($(this).is(':visible')) {
				link.text('Read less');
			} else {
				link.text('Read more');
			}
		});

	});


	$('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
		'<a class="folder-background" style="display:flex; background: url(https://promicon.eu/storage/app/media/pensoft/living-documents.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/living-documents" title="Living documents"></a>\n' +
		'<h3 class="card-header"><a href="/internal-repository/living-documents" title="Living documents" style="color: #fff;">Living documents</a></h3>\n' +
		'</div>').insertAfter($('.card.internal').last());

	$('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
		'<a class="folder-background" style="display:flex; background: url(https://promicon.eu/storage/app/media/pensoft/Dissemination-report-forms.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-documents/dissemination-report-forms" title="Dissemination report forms"></a>\n' +
		'<h3 class="card-header"><a href="/internal-documents/dissemination-report-forms" title="Dissemination report forms" style="color: #fff;">Dissemination report forms</a></h3>\n' +
		'</div>').insertAfter($('.card.internal').last());


    $('.home .row.newslist').before('<div class="row youtube_video_container"><div class="col-xs-12"><div class="youtube-video " data-id="7WwxjBpIcLI"><img src="/storage/app/media/video-image-promicon.jpg" data-src="/storage/app/media/video-image-promicon.jpg" alt="Video Thumbnail" class="fr-fic fr-dii" style="width: 100%; border-radius: 5px;">\n' +
        '\t\t\t<div class="play-button">\n' +
        '\t\t\t\t<br>\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<div class="iframe-container" style="display:none;">\n' +
        '\t\t\t\t<br>\n' +
        '\t\t\t</div></div></div></div></div></div>');


        var youtubeVideos = document.querySelectorAll(".youtube-video");

        youtubeVideos.forEach(function (video) {
            video.addEventListener("click", function () {
                console.log(123);
                video.style.paddingBottom = '56.25%';
                var videoId = this.getAttribute("data-id");
                var iframe = document.createElement("iframe");

                iframe.setAttribute("src",
                    (videoId.indexOf("?") !== -1 ?
                        ("https://www.youtube.com/embed/" + videoId) :
                        ("https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0"))
                );
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("width", "100%");
                iframe.setAttribute("height", "100%");

                var iframeContainer = this.querySelector(".iframe-container");
                iframeContainer.innerHTML = "";
                iframeContainer.appendChild(iframe);
                iframeContainer.style.display = "block";
                this.querySelector("img").style.display = "none";
                this.querySelector(".play-button").style.display = "none";
            });
        });

});


$(document).ajaxComplete(function() {
	$('.insider-info').after('<div class="row"><div class="col-xs-12"><a href="javascript:void(0);" onclick="scrollPartners();" class="btn btn-primary">Back to partner institutions</a></div></div>');
});


function showSearchForm(){
    $('#layout-header').toggleClass('full-width');
    $('#search').toggle();
    // $('#menu li').hide();
    // $('nav a:not(.navbar-brand)').hide();
}

function hideSearchForm(){
    $('#layout-header').toggleClass('full-width');
    $('#search').hide();
    // $('#menu li').show();
    // $('nav a').show();
}

function appendSearchAndSocialMedia(){
	var liSearch = '<li class="nav-item search_field"><a class="pr p-search middle search-btn" href=\"javascript: void(0);\" onclick=\"showSearchForm();\"></a></li>';
    
    var headerNavbarLogin = $('#headerNavbarNav');
    headerNavbarLogin.find('>ul').append(liSearch);
    var menu = $('#menu');
    menu.find('>ul').append(liSearch);

}

function scrollPartners(){
	$('html, body').animate({
		scrollTop: $("#mycomponentpartners").offset().top - 100
	}, 1000);
}

function encodeURIObject(data){
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

    function appendProfile() {
        $(document).on('profile', function (e) {
            var headerNavbarNav = $('#headerNavbarNav');
            var li = '<li class="nav-item"><a href="/profile" target = "_self">Profile</a></li >';
            headerNavbarNav.find('>ul').append(li);
        });
    }
    function appendSignIn(){
        $(document).on('signin', function (e) {
            var headerNavbarLogin = $('#headerNavbarNav');
            var li = '<li class="nav-item sign-in"><a href="/login" target = "_self">Login</a></li >';
            headerNavbarLogin.find('>ul').append(li);
            var menu = $('#menuToggle');
            menu.find('>ul').append(li);
        });
    }

function appendSignOut() {
    $(document).on('signout', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item  sign-in"><a data-request="onLogout" data-request-data="redirect: \'/\'">Logout</a></li >';
        headerNavbarNav.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

// function initAccordeon(pElem) {
// 	$('body').on('click', '.accordion-toggle', function () {
// 		if ($(this).next(".accordion-content").is(':visible')) {
// 			$(this).next(".accordion-content").slideUp(300);
// 			$(this).children(".plusminus").html('<span class="plus"></span>');
// 		} else {
// 			$(this).next(".accordion-content").slideDown(300);
// 			$(this).children(".plusminus").html('<span class="minus"></span>');
// 		}
// 	});
// }

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}

function handleCustomSVGMapMouseMove(event) {
    var countryCode = $(event.target).attr('country_code');
    if (!countryCode) {
        console.log($(event.target).parents('.fill_GB').length);
    }
    var tooltip = document.getElementById("tooltip");

    if (!countryCode) {
        countryCode = $(event.target).parent().attr('country_code');
    }





    switch (countryCode) {
        case "AF":
        case "AX":
        case "AL":
        case "DZ":
        case "AS":
        case "AD":
        case "AD":
        case "AO":
        case "AI":
        case "AQ":
        case "AG":
        case "AR":
        case "AM":
        case "AW":
        case "AT":
        case "AZ":
        case "BS":
        case "BH":
        case "BD":
        case "BB":
        case "BY":
        case "BE":
        case "BZ":
        case "BJ":
        case "BM":
        case "BT":
        case "BO":
        case "BQ":
        case "BA":
        case "BW":
        case "BV":
        case "BR":
        case "IO":
        case "BN":
        case "BG":
        case "BF":
        case "BI":
        case "KH":
        case "CM":
        case "CV":
        case "KY":
        case "CF":
        case "TD":
        case "CL":
        case "CN":
        case "CX":
        case "CC":
        case "CO":
        case "KM":
        case "CG":
        case "CD":
        case "CK":
        case "CR":
        case "CI":
        case "HR":
        case "CU":
        case "CW":
        case "CY":
        case "CZ":
        case "DK":
        case "DJ":
        case "DM":
        case "DO":
        case "EC":
        case "EG":
        case "SV":
        case "GQ":
        case "ER":
        case "EE":
        case "ET":
        case "FK":
        case "FO":
        case "FI":
        case "FJ":
        case "GF":
        case "PF":
        case "TF":
        case "GA":
        case "GM":
        case "GE":
        case "GH":
        case "GI":
        case "GR":
        case "GL":
        case "GD":
        case "GP":
        case "GU":
        case "GT":
        case "GG":
        case "GN":
        case "GW":
        case "GY":
        case "HT":
        case "HM":
        case "VA":
        case "HN":
        case "HK":
        case "IS":
        case "ID":
        case "IR":
        case "IQ":
        case "IM":
        case "IL":
        case "IT":
        case "JM":
        case "JP":
        case "JE":
        case "JO":
        case "KZ":
        case "KE":
        case "KI":
        case "KP":
        case "KR":
        case "KW":
        case "KG":
        case "LA":
        case "LV":
        case "LB":
        case "LS":
        case "LR":
        case "LY":
        case "LI":
        case "LT":
        case "LU":
        case "MO":
        case "MK":
        case "MG":
        case "MW":
        case "MY":
        case "MV":
        case "ML":
        case "MT":
        case "MH":
        case "MQ":
        case "MR":
        case "MU":
        case "YT":
        case "MX":
        case "FM":
        case "MD":
        case "MC":
        case "MN":
        case "ME":
        case "MS":
        case "MA":
        case "MZ":
        case "MM":
        case "NA":
        case "NR":
        case "NP":
        case "NC":
        case "FR":
        case "IN":
        case "NL":
        case "HU":
        case "IE":
        case "CA":
        case "NZ":
        case "DE":
        case "NI":
        case "NE":
        case "NG":
        case "NU":
        case "NF":
        case "MP":
        case "NO":
        case "OM":
        case "PK":
        case "PW":
        case "PS":
        case "PA":
        case "PG":
        case "PY":
        case "PE":
        case "PH":
        case "PN":
        case "PT":
        case "PR":
        case "QA":
        case "RE":
        case "RU":
        case "RW":
        case "BL":
        case "SH":
        case "KN":
        case "LC":
        case "MF":
        case "PM":
        case "VC":
        case "WS":
        case "SM":
        case "ST":
        case "SA":
        case "SN":
        case "RS":
        case "SC":
        case "SL":
        case "SG":
        case "SX":
        case "SK":
        case "SI":
        case "SB":
        case "SO":
        case "ZA":
        case "GS":
        case "LK":
        case "SD":
        case "SR":
        case "SJ":
        case "SZ":
        case "SE":
        case "SY":
        case "TW":
        case "TJ":
        case "TZ":
        case "TH":
        case "TL":
        case "TG":
        case "TK":
        case "TO":
        case "TT":
        case "TN":
        case "TR":
        case "TM":
        case "TC":
        case "TV":
        case "UG":
        case "UA":
        case "AE":
        case "UM":
        case "UY":
        case "UZ":
        case "VU":
        case "VE":
        case "VN":
        case "VG":
        case "VI":
        case "WF":
        case "EH":
        case "YE":
        case "ZM":
        case "ZW":
        case "US":
        case "GB":
        case "ES":
        case "AU":
        case "RO":
        case "CH":
        case "PL":
            break;
        default:
            return tooltip.classList.remove("active");
    }

    var x = event.clientX;
    var y = event.clientY;

    tooltip.style.left = (x + 20) + "px";
    tooltip.style.top = (y - 20) + "px";

    tooltip.innerHTML = $(event.target).attr('title');
    tooltip.classList.add("active");

}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
            }
        }
        // keepFooter(documentHasScroll());
        
        appendSearchAndSocialMedia()
    });
    // appendProfile()
    appendSignIn()
    appendSignOut()

}



function initMailingTooltip(){
    var searchStr = '';
    $('.group-holder').eq(0).find('.inputWithTooltip span').each(function(i, obj) {
        $('<img src="/storage/app/media/CMS_icons_groups.svg" style="max-width: 16px; margin-right: 5px;" class="icon mailing_list_tooltip_'+i+'" />').insertBefore(this);
        searchStr = $.trim($(obj).text());
        //groups
        $.request('onFetchMailingList', {
            update: { 'mailing_list': '#mailing_list_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('<script>createTippy(\'.row:nth-of-type(3) .row:nth-of-type(2) .mailing_list_tooltip_' + i + '\', {' +
                'placement: \'left\',\n' +
                'content: \'' + response.mailing_list + '\'})</script>').insertAfter(this);
        });
    });
    $('.group-holder').eq(1).find('.inputWithTooltip span').each(function(i, obj) {
        $('<img src="/storage/app/media/CMS_icons_individuals.svg" style="max-width: 16px; margin-right: 5px;" class="icon mailing_list_tooltip_individuals_'+i+'" />').insertBefore(this);
        searchStr = $.trim($(obj).text());
        //individuals
        $.request('onFetchSingleMail', {
            update: { 'individual_email': '#individual_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('<script>createTippy(\'.row:nth-of-type(4) .row:nth-of-type(2) .mailing_list_tooltip_individuals_' + i + '\', {' +
                'placement: \'left\',\n' +
                'content: \'' + response.individual_email + '\'})</script>').insertAfter(this);
        });
    });
}

function createTippy(element, options) {
    return new Promise(resolve => {
        tippy(element, Object.assign({}, {
            allowHTML: true,
            interactive: true,
            animation: 'scale',
            theme: 'light',
        }, options));
        resolve();
    });
}

init()

// Append the footer to content wrapper for small devices
$(document).ready(function() {
    if ($('#layout-footer').length && $('.content-wrapper').length) {
        if (window.matchMedia("(max-width: 960px)").matches) {
            $('#layout-footer').appendTo('.content-wrapper');
        }
    }
});
