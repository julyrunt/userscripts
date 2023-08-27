// ==UserScript==
// @name         Hide Twitter Promotion Tweets
// @namespace    https://gist.github.com/julyrunt/78cc0cd83406349710aa7d7f9cfbf150
// @version      1.0.0
// @description  Hide Twitter Promotion Tweets
// @author       julyrunt
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function hidePromotionTweets() {
        let count = 0;
        const articles = document.querySelectorAll('article');

        articles.forEach(article => {
            if (article.style.display == 'none') {
                return;
            }

            const paths = article.querySelectorAll('path');
            let containsPromotion = false;

            paths.forEach(path => {
                if (path.getAttribute('d') == 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z') {
                    containsPromotion = true;
                }
            });

            if (containsPromotion) {
                article.style.display = 'none';
                count += 1;
            }
        });

        if (count > 0) {
            console.log(`hide ${count} promotion tweets`);
        };
    }

    const interval = 500; // 0.5 seconds
    setInterval(hidePromotionTweets, interval);
})();
