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
    subject: "Account Email Verification - Action Required",
    html: `
   
        
      <section>

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

export const emailverified = async (email, name) => {
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
    subject:
      "Enrollment Confirmation - Successful Admission to Mirocles Academy",
    html: `
    <p>Dear ${name},</p> <br/>

    <p>It is with great pleasure that we extend our sincerest congratulations on the successful acceptance and processing of your enrollment application at Mirocles Academy for the upcoming cohort 1. Your commitment to academic excellence and exemplary qualifications have impressed our admissions committee, and we are honored to welcome you as a distinguished member of our esteemed institution.</p>

    <p>Your discerning choice to join our academic community reflects your dedication to intellectual growth and pursuit of knowledge. Throughout your tenure at Mirocles Academy, you will have the privilege of immersing yourself in a rich and rigorous educational environment, guided by esteemed faculty members and supported by comprehensive resources.</p>

    <a href="https://join.slack.com/t/miroclesacademy/shared_invite/zt-1ybtyk5tx-w6RPFKR9rF1nlN2VINEGMQ" rel='noreferrer' target='_blank'>Click here to join our student platform on slack</a>

    <p>We would like to provide you with important details regarding your enrollment:</p>

    <ul>
      <li>Program/Course: Frontend Development</li>
      <li>Start Date: 7th of August</li>
      <li>Duration: 5 months</li>
      <li>Campus/Location: Online</li>
      <li>Class Schedule: Wednesday, Friday, Saturday and Sunday</li>
    </ul>
        
    <p>We understand that commencing an academic journey of this magnitude can evoke a mixture of excitement and apprehension. Therefore, we encourage you to avail yourself of our dedicated support services, which are designed to address any questions or concerns you may have. Our committed team is eager to assist you in navigating the intricacies of your chosen program, ensuring a seamless transition and facilitating your intellectual and personal development.</p>

    <p>In the near future, please anticipate further correspondence from our admissions office. These communications will provide vital information pertaining to orientation programs, documentation requirements, and other pertinent details that will facilitate your successful integration into the program.</p>

    <p> Once again, we congratulate you on your successful enrollment, and we eagerly await the opportunity to witness your scholarly pursuits and remarkable achievements during your time at Mirocles Academy. Your presence enriches our academic community, and we look forward to fostering an environment that fosters intellectual growth and nurtures your potential.</p>

    <p>Should you have any immediate inquiries, kindly do not hesitate to contact our admissions office via email at academy@miroclesconsolidation.com . Our dedicated staff is readily available to address any concerns or provide further assistance.</p>

    <p>With warmest regards, </p> <br/>

    <p>Obiora Emmanuel <br/>Director<br/>Mirocles Academy</p>

    <a href="https://join.slack.com/t/miroclesacademy/shared_invite/zt-1ybtyk5tx-w6RPFKR9rF1nlN2VINEGMQ" rel='noreferrer' target='_blank'>Click here to join our student platform on slack</a>

    `,
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
