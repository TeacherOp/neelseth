"use client";

import Script from "next/script";

declare global {
  interface Window {
    chatwootSettings?: Record<string, unknown>;
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const CHATWOOT_BASE_URL = "https://chat.neelseth.com";
const CHATWOOT_WEBSITE_TOKEN = "7Zdj731fMSBmr7GP7dRvw7e1";

export default function Chatwoot() {
  return (
    <>
      <Script id="chatwoot-settings" strategy="lazyOnload">
        {`window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":""};`}
      </Script>
      <Script
        id="chatwoot-sdk"
        strategy="lazyOnload"
        src={`${CHATWOOT_BASE_URL}/packs/js/sdk.js`}
        onLoad={() => {
          window.chatwootSDK?.run({
            websiteToken: CHATWOOT_WEBSITE_TOKEN,
            baseUrl: CHATWOOT_BASE_URL,
          });
        }}
      />
    </>
  );
}
