import { Page } from "puppeteer";
import { GetCategories } from "./loadcategories";


describe("Navigate To Market Place and Scrape Categoies", () => {
  let mockPage: jest.Mocked<Page>
  beforeAll(() => {
    mockPage = {
      goto: jest.fn(),
      evaluate: jest.fn(),
      waitForSelector: jest.fn(),
    } as any
  })


  // test('should return an array of categories when successful', async () => {
  //   const mockCategories = ['Electronics', 'Clothing', 'Home', 'Vehicles'];
  //   mockPage.goto.mockResolvedValue(null);
  //   mockPage.evaluate.mockResolvedValue(mockCategories);

  //   const result = await GetCategories(mockPage);

  //   expect(result).toEqual(mockCategories);
  //   expect(mockPage.goto).toHaveBeenCalledWith('https://www.facebook.com/marketplace');
  //   expect(mockPage.evaluate).toHaveBeenCalled();
  // });

  test('should return an empty array when no categories are found', async () => {
    mockPage.goto.mockResolvedValue(null);
    mockPage.evaluate.mockResolvedValue([]);

    const result = await GetCategories(mockPage);

    expect(result).toEqual([]);
  });

  test('should return an empty array when navigation fails', async () => {
    mockPage.goto.mockRejectedValue(new Error('Navigation failed'));

    const result = await GetCategories(mockPage);

    expect(result).toEqual([]);
  });

  test('should return an empty array when evaluation fails', async () => {
    mockPage.goto.mockResolvedValue(null);
    mockPage.evaluate.mockRejectedValue(new Error('Evaluation failed'));

    const result = await GetCategories(mockPage);

    expect(result).toEqual([]);
  });

})
