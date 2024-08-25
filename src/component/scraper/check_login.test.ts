import { Page } from 'puppeteer';
import { CheckIfLoggedIn } from './check_login'; // Replace with the actual file name


describe("CheckIFloggedIn", () => {
  let mockPage: jest.Mocked<Page>;

  beforeAll(() => {
    mockPage = {
      goto: jest.fn(),
      waitForSelector: jest.fn()
    } as any
  })

  afterAll(() => {
    jest.clearAllMocks()
  })


  test('should return true when user is logged in', async () => {
    mockPage.goto.mockResolvedValue(null);
    mockPage.waitForSelector.mockResolvedValue(null);
    const result = await CheckIfLoggedIn(mockPage);
    expect(result).toBe(true);
    expect(mockPage.goto).toHaveBeenCalledWith('https://www.facebook.com/', { timeout: 0, waitUntil: "networkidle2" });
    expect(mockPage.waitForSelector).toHaveBeenCalledWith('div[role=navigation]', { timeout: 30000 });
  });


  test('should return false when user is not Logged in', async () => {
    mockPage.goto.mockResolvedValue(null)
    mockPage.waitForSelector.mockRejectedValue(new Error('Selector not found'));
    const result = await CheckIfLoggedIn(mockPage);
    expect(result).toBe(false);
  })

  test('should handle when page throws', async () => {
    mockPage.goto.mockRejectedValue('Some string error');
    const result = await CheckIfLoggedIn(mockPage);
    expect(result).toBe(false);
  });
})

