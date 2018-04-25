samplerApp.controller('samplerCtrl', function($scope, $window) {
    $scope.count = 0;
    $scope.showModal = false;
    $scope.sections = {
        "All Ages": {
            color: '546474',
            bgcolor: 'f6f7f8'
        },
        "Toddler": {
            color: '10c0d7',
            bgcolor: 'f7fdfd'
        },
        "Kids 4+": {
            color: '91c45a',
            bgcolor: 'fbfdf6'
        },
        "Newborn": {
            color: 'a335b5',
            bgcolor: 'faf7fc'
        }
    };
    $scope.products = [{
            "id": 1,
            "name": "Toothpaste Strawberry Mint",
            "description": "Our Kids Toothpaste delivers delightful, fruity freshness that kids love! Our fluoride-free formula helps brighten teeth, promote healthy teeth and gums, and fight tartar buildup.",
            "image": "assets/img_toothpaste.jpg",
            "tag": "All Ages",
            "brand": "The Honest Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 6,
            "name": "Baby Lotion",
            "description": "Then we'll go with that data file! Can we have Bender Burgers again? Soothe us with sweet lies. What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.",
            "image": "assets/img_lotion.jpg",
            "tag": "Toddler",
            "brand": "The Fry Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 12,
            "name": "Lavender Hand Sanitizer Gel",
            "description": "We'll go deliver this crate like professionals, and then we'll go home. I've got to find a way to escape the horrible ravages of youth. ",
            "image": "assets/img_gel.jpg",
            "tag": "Kids 4+",
            "brand": "The Bender Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 23,
            "name": "Pear Kiwi & Apple Smoothie",
            "description": "I videotape every customer that comes in here, so that I may blackmail them later. Who are you, my warranty?! So I really am important?",
            "image": "assets/img_smoothie.jpg",
            "tag": "Newborn",
            "brand": "The Leela Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 49,
            "name": "Disposable Nursing Bra Pads",
            "description": "Are you crazy? I can't swallow that. Have you ever tried just turning off the TV, sitting down with your children, and hitting them? Belligerent and numerous. Hey, whatcha watching?",
            "image": "assets/img_pads.jpg",
            "tag": "All Ages",
            "brand": "The Zoidberg Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 66,
            "name": "Baby Powder",
            "description": "Our love isn't any different from yours, except it's hotter, because I'm involved. Please, Don-Bot… look into your hard drive, and open your mercy file!",
            "image": "assets/img_powder.jpg",
            "tag": "Toddler",
            "brand": "The Amy Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 71,
            "name": "Pacifier Bracelet",
            "description": "Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding up? …To shreds, you say. ",
            "image": "assets/img_bracelet.jpg",
            "tag": "Kids 4+",
            "brand": "The Professor Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 80,
            "name": "Diaper Ointment",
            "description": "I love you, buddy! I could if you hadn't turned on the light and shut off my stereo. Too much work. Let's burn it and say we dumped it in the sewer.",
            "image": "assets/img_spray.jpg",
            "tag": "Newborn",
            "brand": "The Hermes Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 164,
            "name": "Baby Googles",
            "description": "It must be wonderful. What are their names? Oh sure! Blame the wizards! Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor",
            "image": "assets/img_goggles.jpg",
            "tag": "Toddler",
            "brand": "The Hubert Company",
            "logo": "assets/img_logo.png"
        },
        {
            "id": 734,
            "name": "Aloe Vera Baby Wipes",
            "description": "Bender, you risked your life to save me! And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!",
            "image": "assets/img_wipes.jpg",
            "tag": "Kids 4+",
            "brand": "The Nibbler Company",
            "logo": "assets/img_logo.png"
        }
    ];

    $scope.toggleCount = function(event, fromModal) {
        var elem = angular.element(event.currentTarget);
        if(fromModal){
            elem =  angular.element(elem.parent().parent().parent().parent()[0].previousElementSibling); //last-min fix, there's a better way
        }
        if (elem.hasClass('selected')) {
            if(!fromModal){
                elem.removeClass('selected');
                $scope.count--;
            }
        } else if ($scope.count < 5) {
            elem.addClass('selected');
            $scope.count++;
        }
    }; 
    
    $scope.submit = function() {
        if ($scope.count == 5) {
            $window.location.href = 'http://www.sampler.io';
        }
    }
});