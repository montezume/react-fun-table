# react-fun-table
A a reusable react data grid component made with styled-components. By default, the table header and the first column is sticky (using css). You must install styled-components in order to use this package! Instructions are below.g

##### Check out the [example](https://montezume.github.io/react-fun-table-example/).

```js
<Table
    columns={columns}
    data={data}
    sortBy={columns[0].attribute
/>
```

<p align="center">
<img src="https://i.imgur.com/GOJlrgC.png">
</p>

## Sorting

By default sorting is done by the first column, ascending. You can click on a column header to sort by that column. Right now, sorting is only by string and doesn't work with numbers properly. TODO: // add integer / double sorting.


## Installation

__npm__

```bash
npm i react-fun-table styled-components --save
```

__yarn__

```bash
yarn add react-fun-table styled-components
```

## Usage

Use react-fun-table as below.

```js
import React from 'react'
import { Table } from 'react-fun-table'

const data = [
	{
		"field_name": "Potatoes",
		"area_in_hectares": 0.3,
		"active": false,
		"company_name": "Potato Company",
		"cultivation_id": 1,
		"crop_name": "Potatoes",
		"harvest_year": 2017
	},
  {
    "field_name": "Shrimp",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  // ...
];

const columns = [
 {
   "attribute": "field_name",
   "label": "Name",
 },
 {
   "attribute": "cultivation_id",
   "label": "Nummer",
 },
 {
   "attribute": "company_name",
   "label": "Betrieb"
 },
 {
   "attribute": "area_in_hectares",
   "label": "Fläche"
 },
 {
   "attribute": "active",
   "label": "Aktiv"
 },
 {
   "attribute": "crop_name",
   "label": "Kultur"
 },
 {
   "attribute": "harvest_year",
   "label": "Ernte"
 }
];

const App = () => (
    <div className="App">
        <Table
	        accessor="attribute" // default
          columns={columns}
          data={data}
          numStickyColumns={1} // default
          sortDescending={false} // default
          sortBy={columns[0].attribute}
          stickyHeader // default
        />
);


```
