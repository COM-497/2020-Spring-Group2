const nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'espycorp923@gmail.com',
    pass:'corpespy9231'
}
});

const sendMail = (email, subject, text, name, cb) => {
    const mailOptions = {
        from: email,
        to: 'espycorp923@gmail.com',
        subject: subject,
        text: "Name: " + name + "Email: " + email + "Message: " + text
    
    };

transporter.sendMail(mailOptions, function(err,data){
    if(err){
        cb(err,null);
    }
    else{
       cb(null, data);
    }

});
}

module.exports = sendMail;


