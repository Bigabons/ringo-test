const axios = require('axios');

const RINGOSTAT_CONFIG = {
    BASE_URL: 'https://api.ringostat.net/a/v2',
    AUTH_KEY: 'GNbxz4lanqmxfmbZ45zokWuN46Gh7Rva',
    PROJECT_ID: '137460'
};

module.exports = async (req, res) => {
    try {
        const response = await axios.get(RINGOSTAT_CONFIG.BASE_URL, {
            params: {
                projectId: RINGOSTAT_CONFIG.PROJECT_ID,
                fields: 'additional_number,scheme_name,caller',
                export_type: 'json'
            },
            headers: {
                'Auth-Key': RINGOSTAT_CONFIG.AUTH_KEY
            }
        });

        res.status(200).json({
            success: true,
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.response ? error.response.data : error.message
        });
    }
};
