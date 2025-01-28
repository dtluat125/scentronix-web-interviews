import axios, { AxiosResponse } from "axios";
import { jest } from "@jest/globals";
import { findServer } from "./findServer"; // Adjust the path as needed

// Define mock server data
interface Server {
  url: string;
  priority: number;
}

describe("findServer", () => {
  const mockServers: Server[] = [
    { url: "https://does-not-work.perfume.new", priority: 1 },
    { url: "https://gitlab.com", priority: 4 },
    { url: "http://app.scnt.me", priority: 3 },
    { url: "https://offline.scentronix.com", priority: 2 },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return the online server with the lowest priority", async () => {
    jest.spyOn(axios, "get").mockImplementation((url: string) => {
      if (url === "https://does-not-work.perfume.new") {
        return Promise.reject(new Error("Network Error"));
      }
      if (url === "https://gitlab.com") {
        return Promise.resolve({ status: 200 } as AxiosResponse);
      }
      if (url === "http://app.scnt.me") {
        return Promise.resolve({ status: 200 } as AxiosResponse);
      }
      if (url === "https://offline.scentronix.com") {
        return Promise.reject(new Error("Network Error"));
      }
      return Promise.reject(new Error("Unknown URL"));
    });

    const result = await findServer(mockServers);
    expect(result).toEqual({ url: "http://app.scnt.me", priority: 3 });
  });

  it("should throw an error if no servers are online", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.reject(new Error("Network Error")));

    await expect(findServer(mockServers)).rejects.toThrow(
      "No servers are online"
    );
  });

  it("should handle servers timing out", async () => {
    jest.spyOn(axios, "get").mockImplementation((url: string) => {
      if (url === "https://gitlab.com") {
        return new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout Error")), 4000)
        );
      }
      return Promise.reject(new Error("Network Error"));
    });

    await expect(findServer(mockServers)).rejects.toThrow(
      "No servers are online"
    );
  });
});
