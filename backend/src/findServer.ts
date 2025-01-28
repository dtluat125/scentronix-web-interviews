// Import necessary modules
import axios, { AxiosResponse } from "axios";

// Define the server type
interface Server {
  url: string;
  priority: number;
}

// Function to find the server with the lowest priority
export const findServer = async (servers: Server[]): Promise<Server> => {
  const timeout = 5000; // 5 seconds timeout

  // Create promises to check server availability
  const serverChecks = servers.map(
    (server) =>
      axios
        .get(server.url, { timeout })
        .then((response: AxiosResponse) => {
          if (response.status >= 200 && response.status < 300) {
            return server; // Return server if online
          } else {
            throw new Error(`${server.url} is offline`);
          }
        })
        .catch(() => null) // Treat offline servers as null
  );

  // Wait for all server checks to complete
  const results = await Promise.all(serverChecks);

  // Filter out null values and sort by priority
  const onlineServers = results.filter(
    (server): server is Server => server !== null
  );
  if (onlineServers.length === 0) {
    throw new Error("No servers are online");
  }

  // Return the server with the lowest priority
  return onlineServers.sort((a, b) => a.priority - b.priority)[0];
};
