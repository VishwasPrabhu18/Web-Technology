function validate() {
    const name = document.getElementById("name");
    const msg = document.getElementById("msg");

    if (name.value == "") {
        msg.innerText = "Name cannot be blank";
        return false;
    }
    else
        return true;
}