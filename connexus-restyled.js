// ==UserScript==
// @name         Connexus Restyled
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Restyle the Connexus home page
// @author       Ocawesome101
// @match        https://www.connexus.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=connexus.com
// @grant        none
// ==/UserScript==

function findRule(sheet, name) {
    for (var r=0; r < sheet.cssRules.length; r++) {
        if (sheet.cssRules[r].selectorText === name) {
            return sheet.cssRules[r].style
        }
    }
}

let Gray1 = "rgb(200, 200, 200)"
let Gray2 = "rgb(150, 150, 150)"
let Gray3 = "rgb(100, 100, 100)"
let Gray4 = "rgb(50, 50, 50)";

(function() {
    'use strict';

    var host = document.getElementsByTagName("pvs-header")[0]
    if (host) {
        var sheet = host.shadowRoot.adoptedStyleSheets[0]
        findRule(sheet, ".pvs-header-wrapper").borderBottomColor = Gray1
        findRule(sheet, ".pvs-header-account-menu-wrapper").backgroundColor = Gray4
        findRule(sheet, ".pvs-header-major-content-wrapper").backgroundColor = Gray3
        findRule(sheet, ".pvs-header-main-menu-container").backgroundColor = Gray3
        findRule(sheet, ".pvs-header-update-menu-container").backgroundColor = Gray3

        var menus = document.getElementsByTagName("pvs-header-menu")
        for (var m=0; m < menus.length; m++) {
            let rules = menus[m].shadowRoot.adoptedStyleSheets[0]
            findRule(rules, ".main-menu.main").backgroundColor = Gray3
            findRule(rules, ".main-menu.account").backgroundColor = Gray4
        }
//*
        var items = document.getElementsByClassName("header-menu-item main")
        for (var i=0; i < items.length; i++) {
            let rules = items[i].shadowRoot.adoptedStyleSheets[0]
            findRule(rules, ".main.header-menu-item::before").background = Gray1
            findRule(rules, ".main.header-menu-item:hover .header-menu-item-link").backgroundColor = Gray2
            findRule(rules, ".main.is-active.header-menu-item .header-menu-item-link").backgroundColor = Gray2
            findRule(rules, ".main.header-menu-item .header-menu-item-notification").backgroundColor = "rgb(200, 0, 0)"
        }//*/

        let aside = document.getElementsByTagName("aside")
        if (aside.length > 0) {
            let h3s = aside[0].getElementsByTagName("h3")
            h3s[0].style.backgroundColor = "rgb(255, 100, 100)"
            h3s[1].style.backgroundColor = "rgb(255, 100, 100)"
        }
    }
})();
