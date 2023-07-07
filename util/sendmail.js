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
    // text: "you have a new request for backend task ",
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
    service: "gmail",
    auth: {
      user: "amadifaraday@gmail.com",
      pass: "foympeqrkqmkukac",
    },
  });

  var verifedemailopt = {
    from: "amadifaraday@gmail.com",
    to: `${email}`,
    subject: "Email Verified",
    // text: "you have a new request for backend task ",
    html:
      "<h4>welcome </h4>" +
      `<p>Congratltions your Email have been verifed sucessfully </p>`,
    // `<p>below is the details :</p>` +
    // `<p>Type of Project :${projectType}</p>` +
    // `<p>project Description :${projectDesc}</p>` +
    // `<p>Contact email :${email}</p>`,
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
