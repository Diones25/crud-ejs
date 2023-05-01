import { DataTypes } from 'sequelize';
import db from '../db/conn.js';

const Product = db.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    timestamps: true
}
);

export default Product;