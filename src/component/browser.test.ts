import { StartChromeInDebug } from './browser';
import * as childProcess from 'child_process';
import { Constants } from '../lib';


jest.mock('child_process', () => ({
  ...jest.requireActual('child_process'),
  exec: jest.fn(),
}));

describe('startChromeInDebugMode', () => {
  const mockExec = childProcess.exec as jest.MockedFunction<typeof childProcess.exec>;
  const originalPlatform = process.platform;

  beforeEach(() => {
    mockExec.mockClear();
  });

  afterEach(() => {
    Object.defineProperty(process, 'platform', {
      value: originalPlatform,
      configurable: true,
    });
  });

  it('should start Chrome in debug mode on Windows', () => {
    // Mock the 'process.platform' property
    Object.defineProperty(process, 'platform', {
      value: 'win32',
      configurable: true,
    });
    StartChromeInDebug()
    expect(mockExec).toHaveBeenCalledWith(
      Constants.BrowserCommands.win
    );
  });

  // Add similar tests for 'darwin' and 'linux' platforms

  it('should start Chrome in debug mode on Windows', () => {
    // Mock the 'process.platform' property
    Object.defineProperty(process, 'platform', {
      value: 'linux',
      configurable: true,
    });
    StartChromeInDebug()
    expect(mockExec).toHaveBeenCalledWith(
      Constants.BrowserCommands.linux
    );
  });


  it('should start Chrome in debug mode on Windows', () => {
    // Mock the 'process.platform' property
    Object.defineProperty(process, 'platform', {
      value: 'darwin',
      configurable: true,
    });
    StartChromeInDebug()
    expect(mockExec).toHaveBeenCalledWith(
      Constants.BrowserCommands.darwin
    );
  });

  it('should throw if Unsuported System', () => {
    Object.defineProperty(process, 'platform', {
      value: "Unsuported",
      configurable: true
    })
    expect(() => StartChromeInDebug()).toThrow('Unsuported Operating System')
    expect(mockExec).not.toHaveBeenCalled()

  })
});
