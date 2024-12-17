const { test, expect, request } = require('@playwright/test');
const { Ajv } = require('ajv');
let ajv = new Ajv();

test.describe('Reqres API GET', () => {
  test('get single user', async ({ request }) => {
    let response = await request.get('/api/users/2');
    let body = await response.json();
    let valid = ajv.validate(require('../json-schema/get-user.schema.json'), body);
    if (!valid) console.log(ajv.errors);
    expect(valid).toBe(true);
    expect(response.status()).toBe(200);
    expect(body.data.id).toBe(2);
  });
});

test.describe('Reqres API POST', () => {
  test('create user', async ({ request }) => {
    let body = {
      name: 'morpheus',
      job: 'leader'
    };
    let headers = {
      'Content-Type': 'application/json'
    };
    let response = await request.post('/api/users', {
      headers: headers,
      data: body
    });
    let bodyResponse = await response.json();
    expect(response.status()).toBe(201);
    expect(bodyResponse.job).toBe('leader');
    expect(bodyResponse.name).toBe('morpheus');
    let valid = ajv.validate(require('../json-schema/create-user.schema.json'), bodyResponse);
    if (!valid) console.log(ajv.errors);
    expect(valid).toBe(true);
  });
});

test.describe('Reqres API PUT', () => {
  test('update user', async ({ request }) => {
    let body = {
      name: 'morpheus',
      job: 'zion resident'
    };
    let headers = {
      'Content-Type': 'application/json'
    };
    let response = await request.put('/api/users/2', {
      headers: headers,
      data: body
    });
    let bodyResponse = await response.json();
    expect(response.status()).toBe(200);
    expect(bodyResponse.job).toBe('zion resident');
    expect(bodyResponse.name).toBe('morpheus');
    let valid = ajv.validate(require('../json-schema/update-user.schema.json'), bodyResponse);
    if (!valid) console.log(ajv.errors);
    expect(valid).toBe(true);
  });
});

test.describe('Reqres API DELETE', () => {
  test('delete user', async ({ request }) => {
    let response = await request.delete('/api/users/2');
    let body = await response.body();
    expect(body).toHaveLength(0);
    expect(response.status()).toBe(204);
    let valid = ajv.validate(require('../json-schema/delete-user.schema.json'), body);
    if (!valid) console.log(ajv.errors);
    expect(valid).toBe(true);

  });
});