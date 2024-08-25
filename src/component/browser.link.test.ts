import axios from "axios";
import { GetBrowserLink } from "./browserLink";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Getting WebSocket Url And Also Checking If Browser Is Open', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should return the webSocketDebuggerUrl when the request is successful', async () => {
    const mockResponse = {
      data: {
        webSocketDebuggerUrl: 'ws://localhost:9222/devtools/browser/1234-5678'
      }
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await GetBrowserLink();

    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:9222/json/version');
    expect(result).toBe('ws://localhost:9222/devtools/browser/1234-5678');
  });

  it('should throw an error when the request fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Request failed'));

    await expect(GetBrowserLink()).rejects.toThrow('Could not establish connection with browser');

    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:9222/json/version');
  });
  it('should throw an error when the response does not contain webSocketDebuggerUrl', async () => {
    const mockResponse = {
      data: {}
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    await expect(GetBrowserLink()).rejects.toThrow('Could not establish connection with browser');

    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:9222/json/version');
  });
})
