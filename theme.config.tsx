import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: "bold", fontSize: 22 }}>
      Litevim<span>⚡</span>
    </span>
  ),
  project: {
    link: "https://github.com/Srinath10X/Litevim",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/Srinath10X/Litevim.github.io",
  footer: {
    component: React.FC,
  },
  darkMode: true,
  gitTimestamp: false,
};

export default config;
