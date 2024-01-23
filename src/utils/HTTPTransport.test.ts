import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import HTTPTransport from './HTTPTransport.ts';
import { expect } from 'chai';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];
  const endpoint = '/user';
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-expect-error: Should XMLHttpRequest
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport(endpoint);
  });

  afterEach(() => {
    requests = [];
  });

  it('.get() should send GET request', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('GET');
  });
  it('.get() should send GET request with params', () => {
    instance.get('', { data: { a: 1, b: 2 } });

    const [request] = requests;
    expect(request.method).to.eq('GET');
    expect(request.url).to.eq(`${HTTPTransport.API_URL}${endpoint}?a=1&b=2`);
  });

  it('.post() should send POST request', () => {
    instance.post('/user/search');

    const [request] = requests;

    expect(request.method).to.eq('POST');
  });

  it('.put() should send PUT request', () => {
    instance.put('/user/profile');

    const [request] = requests;

    expect(request.method).to.eq('PUT');
  });

  it('.delete() should send DELETE request', () => {
    instance.delete('/chats');

    const [request] = requests;

    expect(request.method).to.eq('DELETE');
  });

  it('.patch() should send PATCH request', () => {
    instance.patch('/chats');

    const [request] = requests;

    expect(request.method).to.eq('PATCH');
  });
});
