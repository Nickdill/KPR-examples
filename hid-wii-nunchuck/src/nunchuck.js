//@module
/*
exports.pins = {
	power: { type: "Power", voltage: 3.3 },
	ground: { type: "Ground"},
	nunchuck: { type: "I2C", address: 0x52}
}

exports.configure = function() {
	this.nunchuck.init();
	this.nunchuck.writeByteDataSMB(0xF0,0x55);
	this.nunchuck.writeByteDataSMB(0xFB,0x00);
	this.buffer;
}

exports.read = function(){
	this.nunchuck.writeByteDataSMB(0x00,0x00);
	sensorUtils.mdelay(1);
	this.buffer = this.nunchuck.readBlock(6,"Array");
	
	// x,y: joystick position, c,z: buttons, ax,ay,az: accelerometer values
	return { x: this.buffer[0], y: this.buffer[1], z: (this.buffer[5] & 1), c: (this.buffer[5]& 2),
	ax: (this.buffer[2]<<2)+((this.buffer[5]>>(2))&3), ay: (this.buffer[3]<<2)+((this.buffer[5]>>(4))&3),
	az: (this.buffer[4]<<2)+((this.buffer[5]>>(6))&3) };

}

exports.close = function() {
	this.nunchuck.close();
}