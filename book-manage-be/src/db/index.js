const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age: Number
})

const UserModel = mongoose.model('User', UserSchema)

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/book-manage')

    mongoose.connection.on('open', () => {
        console.log('连接成功')

        const user = new UserModel({
            nickname: 'luhao',
            password: '123123',
            age: 12
        })
        user.save()
    })
}

connect()