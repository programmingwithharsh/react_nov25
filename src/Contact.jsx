function Contact() {
    return (<div>
        <h1>Send an email. All fields with an * are required.</h1>
        <form action="">
            Name: <input type="text" name="name" />
            Email: <input type="email" name="email" />
            Subject: <input type="text" name="subject" />
            Message: <textarea name="message" id=""></textarea>
            <input type="submit" value="Send Email" />
        </form>
    </div>);
}

export default Contact;