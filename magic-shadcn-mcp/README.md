# Magic UI & Shadcn MCP Server

An MCP (Model Context Protocol) Server that provides tools for quickly adding and managing components from [Shadcn UI](https://ui.shadcn.com) and [Magic UI](https://magicui.design).

## Provided Tools

1. `search_components`: Pass a query like `"button"` or `"marquee"` to get the matching component names and CLI installation commands.
2. `get_component`: Get the direct installation command to add a specific component from specified library (`"shadcn"` or `"magicui"`).

## How to use with Claude Desktop (or Cursor)

1. Ensure you have installed packages inside this folder:
   ```bash
   npm install
   npx tsc
   ```

2. Add this MCP server to your Claude Desktop config (usually located at `~/Library/Application Support/Claude/claude_desktop_config.json` on Mac):
   
   ```json
   {
     "mcpServers": {
       "magicui-shadcn": {
         "command": "node",
         "args": [
           "/Users/muhammedanjoom/Projects/anjoom-website/magic-shadcn-mcp/dist/index.js"
         ]
       }
     }
   }
   ```

3. Restart Claude Desktop. You can now use the model to seamlessly search for Magic UI or Shadcn components!
