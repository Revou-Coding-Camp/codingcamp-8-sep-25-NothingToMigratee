function button () {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phones").value;
    let comment = document.getElementById("comment").value;

    if (firstName === "" || lastName === "" || email === "" || phone === "") {
        alert("Please fill in all fields.");
        return;
    }
    else {
        alert("Thank you for your submission!");
        let url = 'Page-two.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&comment=${encodeURIComponent(comment)}';
        window.location.href = url;
    }


    document.getElementById("fno").innerHTML = firstName;
    document.getElementById("lno").innerHTML = lastName;
    document.getElementById("emailo").innerHTML = email;
    document.getElementById("phoneo").innerHTML = phone;
    document.getElementById("commentto").innerHTML = comment;

    
}