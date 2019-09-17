"use strict"
/* global Mousetrap, window, document, MouseEvent */

Mousetrap.bind(
    "c",
    function() {
        let button = document.querySelector(".compose-button")
        button.click()
        return false
    }
)

Mousetrap.bind(
    "r",
    function() {
        let button = document.querySelector(".action.reply")
        button.click()
        return false
    }
)

Mousetrap.bind(
    "a",
    function() {
        let button = document.querySelector(".action.reply-all")
        button.click()
        return false
    }
)

Mousetrap.bind(
    "F",
    function() {
        let button = document.querySelector(".action.forward")
        button.click()
        return false
    }
)

Mousetrap.bind(
    "#",
    function() {
        let buttons = document.querySelectorAll(
            ".action.pim-delete[data-is-inactive='false'], " +
            ".action.delete-all[data-is-inactive='false']"
        )
        for (let button of buttons) {
            if (button.clientWidth == 0) {
                continue
            }
            button.click()
        }
        return false
    }
)

Mousetrap.bind(
    "v",
    function() {
        let button = document.querySelector(
            ".action.pim-move-to-folder[data-is-inactive='false'], " +
            ".action.move-to-folder[data-is-inactive='false']"
        )
        button.click()
        return false
    }
)

Mousetrap.bind(
    "u",
    function() {
        let button = document.querySelector(".refresh-button")
        button.click()
        return false
    }
)

Mousetrap.bind(
    "/",
    function() {
        let search = document.querySelector(".seq-search-bar .shadow-input")
        search.focus()
        return false
    }
)

let VerseKeys = {
    findContent: function() {
        let content = document.querySelector(
            ".preview-container .read-view.body-open .content:not(.collapsed-content)")
        return content

    },

    toggleMessageListContent: function() {
        // Return true if element focused. Otherwise false.
        let content = this.findContent()
        if (content == document.activeElement) {
            let messageList = document.querySelector(".messageList")
            if (messageList) {
                messageList.focus()
                return true
            }
        } else if (content) {
            content.focus()
            return true
        }

        return false
    },

    scrollContent: function(step) {
        let content = this.findContent()
        let cssHeight = window.getComputedStyle(content).
            getPropertyValue("line-height")
        let pixels = parseInt(cssHeight.substr(0, cssHeight.length - 2), 10)
        content.scrollTop += step * pixels
    }
}

Mousetrap.bind(
    "m",
    function() {
        if (VerseKeys.toggleMessageListContent()) {
            return false
        }
        return true
    }
)

Mousetrap.bind(
    "s",
    function() {
        let event = new MouseEvent("click", {ctrlKey: true, bubbles: true})
        let msg = document.querySelector(".seq-msg-row[tabindex='0']")
        if (msg) {
            msg.dispatchEvent(event)
            return false
        }
        return true
    }
)

Mousetrap.bind(
    "j",
    function() {
        let fired = false
        let content = VerseKeys.findContent()
        if (content == document.activeElement) {
            VerseKeys.scrollContent(3)
            fired = true
        } else {
            let msg = document.querySelector(".seq-msg-row[tabindex='0']")
            if (msg && msg.nextSibling) {
                msg.nextSibling.click()
                fired = true
            }
        }
        return !fired
    }
)

Mousetrap.bind(
    "k",
    function() {
        let fired = false
        let content = VerseKeys.findContent()
        if (content == document.activeElement) {
            VerseKeys.scrollContent(-3)
            fired = true
        } else {
            let msg = document.querySelector(".seq-msg-row[tabindex='0']")
            if (msg && msg.previousSibling) {
                msg.previousSibling.click()
                fired = true
            }
        }

        return !fired
    }
)

Mousetrap.bind(
    "J",
    function() {
        let event = new MouseEvent("click", {shiftKey: true, bubbles: true})
        let msg = document.querySelector(".seq-msg-row[tabindex='0']")
        if (msg && msg.nextSibling) {
            msg.nextSibling.dispatchEvent(event)
            return false
        }
        return true
    }
)

Mousetrap.bind(
    "K",
    function() {
        let event = new MouseEvent("click", {shiftKey: true, bubbles: true})
        let msg = document.querySelector(".seq-msg-row[tabindex='0']")
        if (msg && msg.previousSibling) {
            msg.previousSibling.dispatchEvent(event)
            return false
        }
        return true
    }
)

Mousetrap.bind(
    "ctrl+j",
    function() {
        let msg = document.querySelector(".seq-msg-row[tabindex='0']")
        if (msg && msg.nextElementSibling) {
            msg.nextSibling.focus()
            msg.setAttribute("tabindex", "-1")
            msg.nextSibling.setAttribute("tabindex", "0")
            return false
        }
        return true
    }
)

Mousetrap.bind(
    "ctrl+k",
    function() {
        let msg = document.querySelector(".seq-msg-row[tabindex='0']")
        if (msg && msg.previousSibling) {
            msg.previousSibling.focus()
            msg.setAttribute("tabindex", "-1")
            msg.previousSibling.setAttribute("tabindex", "0")
            return false
        }
        return true
    }
)
