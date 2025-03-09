// cms/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: './data.db', // Store directly in the cms folder instead of .tmp
    },
    useNullAsDefault: true,
  },
});