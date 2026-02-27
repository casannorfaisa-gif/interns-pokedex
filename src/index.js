import { config } from './config/index.js';

console.log(`Server running on port ${config.port}`);
console.log(`API URL: ${config.pokeapi.baseUrl}`);
console.log(`Items per page: ${config.pagination.defaultLimit}`);