import github from "../assets/icons/github.svg?raw";
import youtube from "../assets/icons/youtube.svg?raw";
import gmail from "../assets/icons/gmail.svg?raw";
import chatgpt from "../assets/icons/chatgpt.svg?raw";
import claude from "../assets/icons/claude.svg?raw";
import notion from "../assets/icons/notion.svg?raw";

// color: màu logo (để trống = theo màu chữ của theme)
// tint: màu nền ô ở theme tối
export const SHORTCUTS = [
  { id: "github", name: "GitHub", url: "https://github.com", icon: github, color: "", tint: "#090909", order: 1 },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com", icon: youtube, color: "#ff0000", tint: "#1a0c0c", order: 2 },
  { id: "gmail", name: "Gmail", url: "https://mail.google.com", icon: gmail, color: "#ea4335", tint: "#1a1210", order: 3 },
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com", icon: chatgpt, color: "#10a37f", tint: "#0a1512", order: 4 },
  { id: "claude", name: "Claude", url: "https://claude.ai", icon: claude, color: "#d97757", tint: "#1a120e", order: 5 },
  { id: "notion", name: "Notion", url: "https://www.notion.so", icon: notion, color: "", tint: "#090909", order: 6 },
];
