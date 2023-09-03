# Datepicker

The DatePicker project consists of three components: DatePicker, RangePicker, and TodoCalendar.

The DatePicker component allows users to select a specific date from a calendar. It provides an intuitive interface that displays the current month with highlighted dates for easy selection. Users can navigate between months and years to find the desired date. The selected date can be used for various purposes such as scheduling appointments, setting reminders, or tracking events.

The RangePicker component is an extension of the DatePicker, enabling users to select a range of dates. It provides a user-friendly way to choose a start and end date for specific time periods. This feature is particularly useful for tasks that require a duration, like booking accommodations or planning vacations. The RangePicker offers a seamless experience by highlighting the selected range and allowing users to easily modify it if needed.

The TodoCalendar component of the DatePicker project includes the feature of saving tasks to local storage. This feature allows users to store their to-do items directly on their device, ensuring that their tasks are securely saved and easily accessible even when offline.

## Installation

```sh
yarn add datepicker-pl1fert
# or
npm install --save datepicker-pl1fert
```

## Import

```js
import { DatePicker, TodoCalendar, RangePicker } from "datepicker-pl1fert";
```

## Dependency

-   [Styled-components](https://www.styled-components.com)

## Props

### highlightHolidays: boolean

The highlightHolidays prop is a boolean that determines whether holidays should be highlighted in the TodoCalendar component. When set to true, holidays will be visually distinguished from other days in the calendar.

```jsx
<DatePicker highlightHolidays />
```

#### default: false

### highlightWeekends: boolean

The highlightWeekends prop is also a boolean that controls whether weekends should be highlighted in the TodoCalendar. When set to true, weekends will be visually differentiated from weekdays.

```jsx
<DatePicker highlightWeekends />
```

#### default: false

### color: string

The color prop is a string that specifies the color to be used for highlighting days in components. This prop allows users to customize the appearance of highlighted days according to their preferences.

```jsx
<DatePicker color="#8a0000" />
```

#### default: blue color

### maxDate and minDate: objects

The maxDate and minDate props are objects that define the upper and lower limits for date selection in components. The maxDate object represents the latest date that can be selected, while the minDate object represents the earliest selectable date. These props provide users with the ability to restrict date selection within a specific range, ensuring that tasks are scheduled within desired timeframes.

```jsx
<DatePicker maxDate={{ year: 2025, month: 5 }} minDate={{ year: 2020, month: 5 }} />
```

#### default: null

### startDay: string

The startDay prop is a string that determines the starting day of the week in the TodoCalendar component. It can be set to either "sunday" or "monday". When set to "sunday", the calendar will display Sunday as the first day of the week. When set to "monday", Monday will be the first day of the week. This prop allows users to customize the calendar layout based on their preferred starting day.

```jsx
<DatePicker startDay="Sunday" />
```

#### default: Monday

### onChange: (value: string) => void

The onChange prop is a function that allows you to get value from Datepicker/Rangepicker inputs.

```jsx
<DatePicker onChange={onChange} />
```

#### default: Monday

## Available scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook in development mode.
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build-lib`

Builds the app with rollup for production to the `dist` folder.

### `yarn lint`

Launches lint to check for errors.

### `yarn lint:fix`

Launches lint to check for errors and fix them.

### `yarn test`

Launches jest testing.

## Built with:

[React](https://react.dev/)

[Rollup](https://rollupjs.org)

[Storybook](https://storybook.js.org)

[Typescript](https://www.typescriptlang.org/)

[Eslint](https://eslint.org/)

[Babel](https://babeljs.io/)

[Jest](https://jestjs.io/)

[Styled-components](https://www.styled-components.com)
