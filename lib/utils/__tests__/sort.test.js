import { sort } from '../sort';

const data = [
  {
  	"field_name": "Steak",
  	"area_in_hectares": 0.3,
  	"active": false,
  	"company_name": "Potato Company",
  	"cultivation_id": 1,
  	"crop_name": "Potatoes",
  	"harvest_year": 2017
  },
  {
    "field_name": "Tomatoes",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  {
    "field_name": "Tomatoes",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2015
  },
  {
    "field_name": "Potatoes",
    "area_in_hectares": 2,
    "active": true,
    "company_name": "Potato corp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  }];

it('should sort by field name descending', () => {
  const sortedData = sort(data, 'field_name', true);
  expect(sortedData[0].field_name).toEqual('Tomatoes');
  expect(sortedData[3].field_name).toEqual('Potatoes');
});

it('should sort by field name ascending', () => {
  const sortedData = sort(data, 'field_name', false);
  expect(sortedData[0].field_name).toEqual('Potatoes');
  expect(sortedData[3].field_name).toEqual('Tomatoes');
});

it('should sort by field name when there are numbers', () => {
  const extraData = {
    "field_name": 2017,
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2015
  };
  const sortedData = sort(data.concat(extraData), 'field_name', false);
  expect(sortedData[0].field_name).toEqual(2017);
  expect(sortedData[3].field_name).toEqual('Tomatoes');
});
