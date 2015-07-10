### Version 2.0.3 - July 8, 2015

- **Modal** - Modal that is larger than page height will now correctly reset body height on remove [#2576](https://github.com/Semantic-Org/Semantic-UI/issues/2576)

### Version 2.0.1 - July 6, 2015

- **Form** - `reset` will no longer clear values if no default value is found [#2504](https://github.com/Semantic-Org/Semantic-UI/issues/2504)
- **Form** - Clarified usage for `reset` in form docs [#2504](https://github.com/Semantic-Org/Semantic-UI/issues/2504)

### Version 2.0.0 - June 30, 2015

- **Transition** - Adjusting `style` or `class` during a transition, will no longer reset the change after transition completes.
- **Form Validation** - Fixed `clear` and `reset` causing validation error to appear on checkbox if empty rule was set on checkbox.

### Version 1.8.0 - January 23, 2015

- **Form** - Form now has new methods `reset`, `clear`, `set value(s)`, and `read value(s)` for modifying and reading form data. Check docs for details on implementation. **Thanks @mktm**
- **Dropdown** - Dropdown now stores `placeholder text` (prompt text) as separate from `default text` (text set on page load). You can now reset placeholder conditions using `$('.ui.dropdown').dropdown('clear');``

### Version 1.5.0 - December 30, 2014

- **Reset** - Reset now inherits ``box-sizing`` [from html tag](http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

### Version 0.15.0 - Mar 14, 2014

- **Modal** - Modal onShow and onHide occurs before transition starts, allowing for class name changes not to be reset

### Version 0.1.0 - Sep 25, 2013