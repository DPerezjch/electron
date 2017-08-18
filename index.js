'use strict'

const {app,BrowserWindow} = require('electron')


app.on('ready', () =>{
	let win = new BrowserWindow({
		width: 800,
		height:600,
		title: 'Hola Mundo!',
		center:true,
		maximizable:false,
		show: false

	})

win.once('ready-to-show',() =>{
	win.show()

})

win.on('move',() =>{

	const position = win.getPosition()
	console.log(`la posicion de la ventana es ${position}`)
})

win.loadURL(`file://${__dirname}/index.html`)
	win.on('closed',() =>{
		win = null
		app.quit()
	})
})

