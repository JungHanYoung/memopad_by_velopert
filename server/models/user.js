var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define(
		'user',
		{
			username: {
				type: DataTypes.STRING,
				unique: true,
				validate: {
					isAlphanumeric: {
						args: true,
						msg: 'The username can only contain letters and numbers'
					},
					len: {
						args: [ 3, 25 ],
						msg: 'The username needs to be between 3 to 25 characters long'
					}
				}
			},
			password: {
				type: DataTypes.STRING,
				validate: {
					len: {
						args: [ 5, 100 ],
						msg: 'The password needs to be between 5 to 100 characters long'
					}
				}
			}
		},
		{
			hooks: {
				afterValidate: function(user, options) {
					const hashedPassword = bcrypt.hashSync(user.password, 12);
					user.password = hashedPassword;
				}
			}
		}
	);

	User.associate = function(models) {};

	return User;
};
