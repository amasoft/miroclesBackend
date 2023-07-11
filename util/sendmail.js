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
    <section>
        {/* MESSAGE FROM OUR SITE VERIFICATION PAGE UPON SUCCESSFUL SUBMITION OF THE ENROLLMENT FORM */}
        <p>To complete the email verification process, please follow the steps below:</p>
        <ol>
            <li>Open your preferred web browser and login to your email box.</li>
            <li>Copy the code in the verification mail</li>
            <li>enter the copied code in the confirmation page</li>
            <li>Click Verify</li>
        </ol>
      </section>
        
      <section>
        {/* MESSAGE SENT TO THE USER'S EMAIL BOX FOR VERIFICATION*/}
        <h1>Subject: Account Email Verification - Action Required</h1>

        <h2>Dear ${name},</h2>

        <p>Welcome to our platform! We're excited to have you on board. Before we can activate your account and grant you full access, we need to verify your email address. </p>
        
        <p>To complete the email verification process, please enter the code below in the confirmation page: </p>

        <span>${verifycode}</span>

        <p>For security reasons, the verification link will only remain valid for the next 24 hours. Therefore, we urge you to seize this opportunity and validate your email address promptly. Should the link expire, you will need to initiate the verification process anew.</p>

        <p>Please rest assured that we take your privacy seriously, and your email address will be handled with the utmost confidentiality. We employ rigorous security measures to ensure your personal information remains protected.</p>

        <p>If you encounter any issues during the verification process or have any questions, please don't hesitate to contact our support team at <span>support@miroclesconsolidation.com</span>. We'll be happy to assist you. </p>

        <p>Thank you for choosing our platform. We look forward to providing you with an exceptional experience! </p><br/>

        <p>Best regards, <br/>Mirocles Academy Team </p>
      </section>
        

        {/* MESSAGE ON THE CONFIRMATION PAGE */}

        {/* when successful */}
        <p>Congratulations! Your account is now active, and you can start exploring our platforms.</p>
        <a href='https://join.slack.com/t/miroclesacademy/shared_invite/zt-1ybtyk5tx-w6RPFKR9rF1nlN2VINEGMQ' rel='noreferrer' target='_blank' >Click here to join our student platform on slack</a>

        {/* when a wrong code is entered */}
        <p>You have entered an invalid code.</p>
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
