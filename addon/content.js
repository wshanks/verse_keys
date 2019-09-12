'use strict'
/* global Mousetrap, document */

Mousetrap.bind(
    'c',
    function() {
        let buttons = document.getElementsByClassName("compose-button")
        let button = buttons[0]
        button.click()
        return false
    }
)

Mousetrap.bind(
    'r',
    function() {
        let buttons = document.getElementsByClassName("action reply")
        let button = buttons[0]
        button.click()
        return false
    }
)

Mousetrap.bind(
    'a',
    function() {
        let buttons = document.getElementsByClassName("action reply-all")
        let button = buttons[0]
        button.click()
        return false
    }
)

Mousetrap.bind(
    'F',
    function() {
        let buttons = document.getElementsByClassName("action forward")
        let button = buttons[0]
        button.click()
        return false
    }
)

Mousetrap.bind(
    '#',
    function() {
        let buttons = document.getElementsByClassName("action pim-delete")
        let button = buttons[0]
        button.click()
        return false
    }
)

Mousetrap.bind(
    'v',
    function() {
        let buttons = document.getElementsByClassName("action pim-move-to-folder")
        for (let button of buttons) {
            if (button.getAttribute("data-is-inactive") == "true") {
                continue
            }
            button.click()
            break
        }
        return false
    }
)

Mousetrap.bind(
    'u',
    function() {
        let buttons = document.getElementsByClassName("refresh-button")
        let button = buttons[0]
        button.click()
        return false
    }
)

Mousetrap.bind(
    '/',
    function() {
        let bar = document.getElementsByClassName("seq-search-bar")[0]
        let search = bar.getElementsByClassName("shadow-input")[0]
        search.focus()
        return false
    }
)
