jQuery-Fader
============

Simple plugin to fade, in sequence, the list items of the selected (un)ordered list

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.fader.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage

```javascript
$('ul').fader();
```

### Options

This plugin comes with two options; Speed and Delay

#### Speed

Controls how fast the fade animation takes in milliseconds

```javascript
$('ul').fader({speed:1000});
```

#### Delay

Controls when to start fadeing the next list item

```javascript
$('ul').fader({delay:1000});
```
