export const getEnvVariables = () => {
    
    const vite_api_url = import.meta.env.VITE_API_URL

    return {
        VITE_API_URL: vite_api_url
    }

};