var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

// addEventListener

function water(who){
	console.log('给 ' +who+ ' 倒水')
}

life.on('求安慰', water)

life.on('求安慰', function (who) {
	console.log('给 ' +who+ ' 揉肩')
})

life.on('求安慰', function (who) {
	console.log('给 ' +who+ ' 做饭')
})

life.on('求安慰', function (who) {
	console.log('给 ' +who+ ' 洗衣服')
})

life.on('求安慰', function (who) {
	console.log('给 ' +who+ ' ...5')
})

life.on('求溺爱', function (who) {
	console.log('给 ' +who+ ' 买衣服')
})

life.on('求溺爱', function (who) {
	console.log('给 ' +who+ ' 交工资')
})

life.removeListener('求安慰', water)
life.removeAllListeners('求安慰')

var hasConfortListener = life.emit('求安慰', '汉子')
var hasLovedListener = life.emit('求溺爱', '妹子')

console.log(life.listeners('求安慰').length)
console.log(life.listeners('求溺爱').length)
// console.log(EventEmitter.listenerCount(life, '求安慰'))

// var hasPlayedListener = life.emit('求玩坏', '汉子')

// console.log(hasConfortListener)
// console.log(hasLovedListener)
// console.log(hasPlayedListener)