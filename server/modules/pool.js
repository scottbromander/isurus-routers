const pg = require('pg');

// CREATING POOL
const Pool = pg.Pool;
const pool = new Pool({
    database: 'songs',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log('Pool is connected');
})

pool.on('error', (error) => {
    console.log('Oh NO ERROR: ', error);
});

module.exports = pool;