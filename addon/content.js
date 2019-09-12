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

let VerseKeys = {
    findContent: function() {
        let container = document.getElementsByClassName("preview-container")[0]
        let view = container.getElementsByClassName("read-view body-open")[0]
        let contents = view.getElementsByClassName("content")
        for (let content of contents) {
            if (!content.classList.contains("collapsed-content")) {
                return content
            }
        }

        return undefined

    },

    toggleMessageListContent: function() {
        // Return true if element focused. Otherwise false.
        let content = this.findContent()
        if (content && content == document.activeElement) {
            let messageList = document.getElementsByClassName("messageList")[0]
            if (messageList) {
                messageList.focus()
                return true
            }
        } else if (content) {
            content.focus()
            return true
        }

        return false
    }
}

Mousetrap.bind(
    'm',
    function() {
        if (VerseKeys.toggleMessageListContent()) {
            return false
        }
        return true
    }
)
