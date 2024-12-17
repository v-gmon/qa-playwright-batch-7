const { test, expect, request } = require('@playwright/test');

test.describe('Reqres API GET', () => {
  test('get single user', async ({request}) => {
    let response = await request.get('/api/users/2');
      let body = await response.json();
      expect(response.status()).toBe(200);
      expect(body.data.id).toBe(2);   
  });
});

test.describe('Reqres API POST', () => {
  test('create user', async ({request}) => {
    let body = {
      name: 'morpheus',
      job: 'leader'
    };
    let headers = {
      'Content-Type': 'application/json'
    };
    let response = await request.post('/api/users', {
      headers: headers,
      body: body
    });
    expect(response.status()).toBe(201);
    expect(body.name).toBe('morpheus');
    expect(body.job).toBe('leader');
  });
});

test.describe('Reqres API PUT', () => {
  test('update user', async ({request}) => {
    let body = {
      name: 'morpheus',
      job: 'zion resident'
    };
    let headers = {
      'Content-Type': 'application/json'
    };
    let response = await request.put('/api/users/2', {
      headers: headers,
      body: body
    });
    expect(response.status()).toBe(200);
    expect(body.name).toBe('morpheus');
    expect(body.job).toBe('zion resident');
  });
});

test.describe('Reqres API DELETE', () => {
  test('delete user', async ({request}) => {
    let response = await request.delete('/api/users/2');
    expect(response.status()).toBe(204);
  });
});