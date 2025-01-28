const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config()
// Hàm gửi email
const sendEmailCreateOrder = async (email, orderItems) => {
  try {
    // Tạo transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true cho cổng 465, false cho cổng khác
      auth: {
        user: process.env.MAIL_ACCOUNT, // lấy từ biến môi trường
        pass: process.env.MAIL_PASSWORD, // lấy từ biến môi trường
      },
    });

    let listItems = ''
    const attachImage = []
    orderItems.forEach((order) =>{
      listItems += `<div>
      <div>Bạn đã đặt sản phẩm ${order.name} với số lượng ${order.amount}</div>
      <div>với giá là ${order.price}</div>
      <div><img src=${order.price}alt='sản phẩm'/></img></div>
      </div>`
      attachImage.push({patch: order.image})
    })

    // Gửi email
    const info = await transporter.sendMail({
      from: 'nguyenvannam16122002@gmail.com', // địa chỉ gửi
      to: "nambndpx7@gmail.com", // danh sách người nhận
      subject: "Bạn đã đặt hàng thành công tại shop nvam", // Chủ đề
      text: "Hello world?", // Nội dung dạng text
      html: `<div><b>Bạn đã đặt hàng thành công tại shop nvam</b></div>${listItems}`, // Nội dung dạng HTML
      attachments: attachImage,
    });

    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {
    sendEmailCreateOrder
}
