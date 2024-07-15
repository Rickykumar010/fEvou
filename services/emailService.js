const nodemailer=require('nodemailer')


    const transporter=nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const sendEmail=async (to, subject, text)=>{
        const mailOptions={
            from: process.env.EMAIL,
            to,
            subject,
            text
        };
        try{
            await transporter.sendMail(mailOptions);

        }catch(err){
            console.log(err);
        }
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'jeanette.williamson@ethereal.email',
    //         pass: '32Ncp6Uzc1EnPhvVMu'
    //     }
    // });
    module.exports={sendEmail}
