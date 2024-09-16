import createTransporter from './transporter.email.js'

async function sendEmail(receiver, message) {
  try {
    if (!receiver || !message) {
      throw new Error('Receiver and message are required')
      return
    }
    console.log("RECEIVER : ", receiver)
    console.log("MESSAGE : ", JSON.stringify(message))
    const { transporter, email } = await createTransporter()

    const mailData = {
      from: `PrepNITH Team <${email}>`,
      to: receiver,
      subject: message.subject,
      template: message.template,
      context: message.context,
    }
    console.log('MAILDATA : ', JSON.stringify(mailData));
    await transporter.sendMail(mailData)
  } catch (error) {
    throw new Error(`Error recieved while sending mail : ${error}`)
  }
}

export default sendEmail
