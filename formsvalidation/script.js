function validate()
 {
    alert("hai")
    const name =
        document.forms.RegForm.Name.value;
    const email =
        document.forms.RegForm.EMail.value;
    const Subject =
        document.forms.RegForm.Subject.value;
    const password =
        document.forms.RegForm.Password.value;
    const address =
        document.forms.RegForm.Address.value;
        const comments =
        document.forms.RegForm.comment.value;
    console.log(name, email, Subject, password, address,comments);

    if (name === ""
        || name.includes('0') || name.includes('1')
        || name.includes('2') || name.includes('3')
        || name.includes('4') || name.includes('5')
        || name.includes('6') || name.includes('7')
        || name.includes('8') || name.includes('9')) {
        window.alert
            ("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (address === "") {
        window.alert
            ("Please enter your address.");
        address.focus();
        return false;
    }

    if (email === "" || !email.includes('@')) {
        window.alert
            ("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (password === "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if (password.length < 6) {
        alert
            ("Password should be atleast 6 character long");
        password.focus();
        return false;

    }

    if (Subject=="SelectCourse") {
        alert("Please enter your course.");
        Subject.focus();
        return false;
    }
    if (comments === "") {
        alert("Please enter your comments");
        comments.focus();
        return false;
    }
    return true;
}
