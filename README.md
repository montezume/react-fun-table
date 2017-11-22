# react-fun-table
A a reusable react data grid component made with styled-components. By default, the table header and the first column is sticky.

```js
<Table
    columns={columns}
    data={data}
    sortBy={columns[0].attribute
/>
```

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
            columns={columns}
            data={data}
            numStickyColumns={1} // default
            sortDescending={false} // default
            sortBy={columns[0].attribute}
            stickyHeader // default
        />
);


```
