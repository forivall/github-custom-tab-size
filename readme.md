# GitHub Default Tab Size

> Chrome extension - Set custom tab size for code view on GitHub.com

GitHub's default tab size is a whopping 8 spaces! This extension lets you set your own preference. The tab size setting is synced across all Chrome browsers you're logged into.

![Demo](https://i.imgur.com/Y3Rf9SF.gif)

## TODO

* Only set the query parameter if there are elements matching `[data-tab-size]` on the page
* Move the option to the extension's preference page instead of in a tool bar popup
* Submit this mechanism of setting the tab size to [refined-github](https://github.com/sindresorhus/refined-github) as a PR, and make this play
nice with it, even if they don't accept the PR
* use `MutationObserver` (and maybe `onpopstate`) to set the tab size when the location
  changes using pjax

## Related

- [`gifgen`](https://github.com/lukechilds/gifgen) - Simple high quality GIF encoding

## License

MIT © Luke Childs + Emily Klassen
