import { getSortBy, validateColumns } from '../validators';

const columns = [
  {
    "attribute": "field_name",
    "label": "Name",
  },
  {
    "attribute": "cultivation_id",
    "label": "Nummer",
  }];

const validAccessor = 'attribute';

const invalidAccessor = 'data';

it('validate works with valid columns and accessor', () => {
  validateColumns(columns, validAccessor);
});

it('throws an error with invalid accessor', () => {
  try {
    validateColumns(columns, invalidAccessor);

  } catch (e) {
    expect(e.message).toEqual('Column missing accessor data property');
  }
});

it('it gets the sort by attribute', () => {
  const sortBy = getSortBy('field_name', columns, 'attribute');
  expect(sortBy).toEqual('field_name');
});

it('it gets default sort by', () => {
  const sortBy = getSortBy(null, columns, 'attribute');
  expect(sortBy).toEqual('field_name');
});

it('it reports error if no sort by and no first column with accessor', () => {
  try {
    getSortBy(null, columns, 'something_missing');

  } catch (e) {
    expect(e.message).toEqual('Nothing to sort by!, please check that your accessor exists in your columns');
  }
});
