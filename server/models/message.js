module.exports = function(sequelize, DataTypes) {
	const Message = sequelize.define('message', {
		text: {
			type: DataTypes.STRING
		}
	});

	Message.associate = function(models) {
		Message.belongsTo(models.User, {
			foreignKey: 'from'
		});
		Message.belongsTo(models.User, {
			foreignKey: 'to'
		});
	};

	return Message;
};
