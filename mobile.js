function Mobile(name) {
    this.name = name;
    this.battery = 95;
    this.status = false;
    this.sendStatus = false;
    this.inBox = " ";
    this.outBox = " ";
    this.message = ' ';


    this.turnOn = function () {
        this.status = true;
        alert(this.name + " is on.")
    };

    this.turnOff = function () {
        this.status = false;
        alert(this.name + " is off.")
    };

    this.getBattery = function () {
        if (this.status) {
            alert(this.battery);
        }
        else alert("please turn on " + this.name)
    };

    this.charge = function () {
        if (this.status) {
            if (this.battery < 100) {
                this.battery++;
            }
            else alert("the battery is full")
        }
        else alert("please turn on " + this.name)
    };

    this.writeMess = function () {
        if (this.status) {
            this.message = prompt("write a message");
        }
        else alert("please turn on " + this.name);
        this.battery--;
        this.sendStatus = false;
    };

    this.sendMess = function (phone) {
        if (this.status) {
            this.sendStatus = true;
            alert("the message was sent");
            this.outBox = this.message;
            phone.inBox = this.outBox;
        }
        else alert("please turn on " + this.name);
        this.battery--;

    };

    this.sentMess = function () {
        if (this.status) {
            if (this.sendStatus) {
                if (this.outBox === asus.outBox) {
                    document.getElementById('screen_asus').innerHTML +=  "asus sent: " + this.outBox + ".<br>";
                }
                else if (this.outBox === xiaomi.outBox) {
                    document.getElementById('screen_xiaomi').innerHTML += "xiaomi sent: "  + this.outBox + ".<br>";
                }
            }
            else alert("message was not sent")
        }
        else alert("please turn on " + this.name);
        this.battery--;
    };

    this.receiveMess = function (phone) {
        if (this.status) {
            if (phone.sendStatus) {
                if (this.name === "asus") {
                    document.getElementById('screen_asus').innerHTML += "asus received: " + this.inBox + ".<br>";
                }
                else if (this.name === "xiaomi") {
                    document.getElementById('screen_xiaomi').innerHTML += "xiaomi received: " + this.inBox + ".<br>";
                }
            }
            else alert("you didn't receive message")
        }
        else alert("please turn on " + this.name);
        this.battery--;
    };
}

let asus = new Mobile("asus");
let xiaomi = new Mobile("xiaomi");
