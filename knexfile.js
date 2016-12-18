'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/partsinv_dev'
    },

    test: {
        client: 'pg',
        connection: 'postgres://localhost/partsinv_test'
    }
}
