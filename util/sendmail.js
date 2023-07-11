import nodemailer from "nodemailer";
export const sendmail = async (verifycode, email, name) => {
  var transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    auth: {
      user: "academy@miroclesconsolidation.com",
      pass: "academy@miro001",
    },
  });

  var mailOptions = {
    from: "academy@miroclesconsolidation.com",
    to: `${email}`,
    subject: "Account Verification",
    // html:
    //   "<h4>welcome </h4>" +
    //   `<p>below is the verification code  ${verifycode} </p>`,
    html: `
    <p>To complete the email verification process, please follow the steps below:</p>
    <ol>
        <li>Open your preferred web browser and login to your email box.</li>
        <li>Copy the code in the verification mail</li>
        <li>enter the copied code in the confirmation page</li>
        <li>Click submit</li>
    </ol>
  </section>
    
  <section>
    <h1>Subject: Account Email Verification - Action Required</h1>

    <h2>Dear ${name},</h2>  <br/>

    <p>Welcome to our platform! We're excited to have you on board. Before we can activate your account and grant you full access, we need to verify your email address. </p> <br/>
    
    <p>To complete the email verification process, please enter the code below in the confirmation page: </p> <br/>

    <span>${verifycode}</span> <br/>

    <p>For security reasons, the verification link will only remain valid for the next 24 hours. Therefore, we urge you to seize this opportunity and validate your email address promptly. Should the link expire, you will need to initiate the verification process anew.</p> <br/>

    <p>Please rest assured that we take your privacy seriously, and your email address will be handled with the utmost confidentiality. We employ rigorous security measures to ensure your personal information remains protected.</p> <br/>

    <p>If you encounter any issues during the verification process or have any questions, please don't hesitate to contact our support team at <span>support@miroclesconsolidation.com</span>. We'll be happy to assist you. </p>

    <p>Thank you for choosing our platform. We look forward to providing you with an exceptional experience! </p> <br/>

    <p>Best regards, <br/>Mirocles Academy Team </p>
    `,
  };

  const sendMail = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return {
        error,
        message: "email not sent",
      };
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
};

export const emailverified = async (email) => {
  var transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    auth: {
      user: "academy@miroclesconsolidation.com",
      pass: "academy@miro001",
    },
  });

  var verifedemailopt = {
    from: "academy@miroclesconsolidation.com",
    to: `${email}`,
    subject: "Email Verified",
    html:
      "<h4>welcome </h4>" +
      `<p>Congratltions your Email have been verifed sucessfully </p>`,
  };

  const sendMail = transporter.sendMail(
    verifedemailopt,
    function (error, info) {
      if (error) {
        console.log(error);
        return {
          error,
          message: "email not sent",
        };
      } else {
        console.log("Email sent: " + info.response);
        return true;
      }
    }
  );
};
