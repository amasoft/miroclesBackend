import nodemailer from "nodemailer";
export const sendmail = async (verifycode, email) => {
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
    html:
      "<h4>welcome </h4>" +
      `<p>below is the verification code  ${verifycode} </p>`,
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
