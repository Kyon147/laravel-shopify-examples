import React, { useState } from "react";
import { Provider }        from "@shopify/app-bridge-react";
import enTranslations      from "@shopify/polaris/locales/en.json";
import { AppProvider }     from "@shopify/polaris";
import App                 from "./App";

const AppWrapper = () => {
    const [appBridgeConfig] = useState(() => {
        const host = new URLSearchParams(location.search).get("host") || window.__SHOPIFY_DEV_HOST;

        window.__SHOPIFY_DEV_HOST = host;

        return {
            host,
            apiKey: SHOPIFY_API_KEY,
            forceRedirect: true,
        };
    });

    return (
        <AppProvider i18n={ enTranslations }>
            <Provider config={ appBridgeConfig }>
                <App />
            </Provider>
        </AppProvider>
    )
}

export default AppWrapper
