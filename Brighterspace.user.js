// ==UserScript==
// @name Brighterspace
// @description Enable autofill for University of Groningen SSO multi-factor authentication.
// @author servantOfTheMostHigh
// @version 1.0
// @license https://www.apache.org/licenses/LICENSE-2.0
// @homepage https://github.com/servantOfTheMostHigh
// @updateURL https://raw.githubusercontent.com/servantOfTheMostHigh/Brighterspace/main/Brighterspace.user.js
// @downloadURL https://raw.githubusercontent.com/servantOfTheMostHigh/Brighterspace/main/Brighterspace.user.js
// @match       *://xfactor.rug.nl/*
// ==/UserScript==

var target = document.getElementById("nffc");
target.autocomplete = "one-time-code";
