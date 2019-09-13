Verse Keys
=========
Custom keybindings for the [Verse](https://mail.notes.na.collabserv.com/verse) email web app.

## Current keybindings

| Key | Function |
| --- | -------- |
|  c  | Compose new message  |
|  r  | Reply |
|  a  | Reply all |
|  F  | Forward |
|  #  | Delete |
|  v  | Move to folder |
|  u  | Refresh mail |
|  /  | Focus search box |
|  m  | Toggle focus between message list and message content |
|  s  | Select/unselect currently focused message |
|  j  | Focus and open next message when message list focused |
|  j  | Scroll down when message content focused |
|  k  | Focus and open previous message |
|  k  | Scroll up when message content focused |
|  J  | Select/unselect next message, keeping current selections |
|  K  | Select/unselect previous message, keeping current selections |
|  ctrl+j  | Focus next message without selecting it |
|  ctrl+k  | Focus previous message without selecting it |

## Notes

Changing focus with `ctrl+j/k` does not keep in sync with the web app's
internal selection state. So mixing `ctrl+j/k` with arrow key navigation does
not work well. The other nagivation bindings simulate mouse clicks, so they
re-synchronize with the web app's selection state.

Acknowledgements
================
Keyboard shortcuts are created using the [Mousetrap](https://craig.is/killing/mice) library.
The keyboard icon was taken from the [Google Design Material Icons set](https://design.google.com/icons/).
