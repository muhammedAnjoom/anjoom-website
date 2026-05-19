import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Initialize the MCP server
const server = new McpServer({
  name: "magicui-shadcn-mcp",
  version: "1.0.0"
});

// Tool: Search components (stub for now)
server.tool(
  "search_components",
  "Search for Shadcn or Magic UI components based on keywords",
  {
    query: z.string().describe("The keyword to search for, e.g., 'animation', 'button'")
  },
  async ({ query }) => {
    // Basic stub logic, real logic would query the registries
    const results = [
      { name: "Button (Shadcn)", command: "npx shadcn@latest add button" },
      { name: "Marquee (Magic UI)", command: "npx magicui-cli add marquee" },
      { name: "Meteors (Magic UI)", command: "npx magicui-cli add meteors" },
      { name: "Card (Shadcn)", command: "npx shadcn@latest add card" }
    ];
    
    const matches = results.filter(r => r.name.toLowerCase().includes(query.toLowerCase()) || r.command.toLowerCase().includes(query.toLowerCase()));
    
    return {
      content: [
        { 
          type: "text", 
          text: matches.length > 0 
            ? `Found components:\n${matches.map(m => `- ${m.name}: ${m.command}`).join('\n')}` 
            : `No components found for "${query}".` 
        }
      ]
    };
  }
);

// Tool: Get component installation command
server.tool(
  "get_component",
  "Get the installation command for a magicui or shadcn component",
  {
    library: z.enum(["shadcn", "magicui"]).describe("The library name"),
    componentName: z.string().describe("The name of the component to add")
  },
  async ({ library, componentName }) => {
    const command = library === "shadcn" 
      ? `npx shadcn@latest add ${componentName}` 
      : `npx magicui-cli add ${componentName}`;
    
    return {
      content: [{ type: "text", text: `To install "${componentName}" from ${library}, run the following command in your terminal:\n\n${command}` }]
    };
  }
);

// Start the server using stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MagicUI and Shadcn MCP server is running on stdio transport.");
}

main().catch(error => {
  console.error("Fatal error running MCP server:", error);
  process.exit(1);
});
