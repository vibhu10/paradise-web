
const nodemailer =require('nodemailer')
async function sendOpt(){
const transporter=nodemailer.createTransport({
service:"gmail",
auth:"kumar.vibhu.id@gmail.com",
pass:'0123456789'

});

//configure email content

const mailoptions={
    from:"kumar.vibhu.id@gmail.com",
    to:"",
    sub:"opt for email confirmation"
    
}
}