var Sequelize = require('sequelize');
var path = require('path');

const sequelize = new Sequelize('chat_db1', 'root', '1234', {
	dialect: 'mysql',
	host: 'localhost',
	define: {
		underscored: true
	},
	operatorsAliases: Sequelize.Op
});

const models = {
	User: sequelize.import(path.join(__dirname, '/user')),
	Message: sequelize.import(path.join(__dirname, '/message'))
};

console.log(models);

Object.keys(models).forEach((modelName) => {
	if ('associate' in models[modelName]) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
